import { useEffect, useMemo, useState } from 'react'
import './App.css'
import {
  getLanguageLabel,
  getProblemCodeBundle,
  primaryRuntimeLanguage,
  problems,
  type Problem,
  type SupportedLanguage,
} from './data'
import { runCodeForLanguage, warmLanguageRuntime } from './codeRunner'
import type { RunResult } from './pyRunner'
import { STORAGE_KEYS, type DraftMap, type SolvedFilter, type ThemeMode, type ViewMode, type WorkspaceTab } from './app/constants'
import { useDocumentTheme, useSystemPrefersDark } from './app/hooks'
import {
  safeParseJson,
  sanitizeDifficultyFilter,
  sanitizeDrafts,
  sanitizeHintsVisibility,
  sanitizeLanguage,
  sanitizePanelVisibility,
  sanitizeSelectedProblemId,
  sanitizeSolvedFilter,
  sanitizeSolvedIds,
  sanitizeTagFilter,
  sanitizeThemeMode,
  sanitizeViewMode,
  sanitizeWorkspaceTab,
} from './app/storage'
import { AppHeader } from './components/AppHeader'
import { ProblemDetailsPanel } from './components/ProblemDetailsPanel'
import { ProblemListPanel } from './components/ProblemListPanel'
import { WorkspacePanel } from './components/WorkspacePanel'

type HiddenPanel = { key: string; label: string; show: () => void }

function App() {
  const [selectedProblemId, setSelectedProblemId] = useState(() => sanitizeSelectedProblemId(localStorage.getItem(STORAGE_KEYS.selectedProblem), problems[0]?.id ?? ''))
  const [language] = useState<SupportedLanguage>(() => sanitizeLanguage(localStorage.getItem(STORAGE_KEYS.language), primaryRuntimeLanguage))
  const [viewMode, setViewMode] = useState<ViewMode>(() => sanitizeViewMode(localStorage.getItem(STORAGE_KEYS.viewMode), 'grouped'))
  const [solvedFilter, setSolvedFilter] = useState<SolvedFilter>(() => sanitizeSolvedFilter(localStorage.getItem(STORAGE_KEYS.solvedFilter), 'all'))
  const [difficultyFilter, setDifficultyFilter] = useState(() => sanitizeDifficultyFilter(localStorage.getItem(STORAGE_KEYS.difficultyFilter), 'all'))
  const [tagFilter, setTagFilter] = useState(() => sanitizeTagFilter(localStorage.getItem(STORAGE_KEYS.tagFilter), 'all'))
  const [search, setSearch] = useState(() => localStorage.getItem(STORAGE_KEYS.search) ?? '')
  const [solvedIds, setSolvedIds] = useState<string[]>(() => sanitizeSolvedIds(safeParseJson(localStorage.getItem(STORAGE_KEYS.solved))))
  const [drafts, setDrafts] = useState<DraftMap>(() => sanitizeDrafts(safeParseJson(localStorage.getItem(STORAGE_KEYS.drafts))))
  const [revealedOptimalProblemId, setRevealedOptimalProblemId] = useState<string | null>(null)
  const [revealedHintsByProblemId, setRevealedHintsByProblemId] = useState<Record<string, number>>(() =>
    sanitizeHintsVisibility(safeParseJson(localStorage.getItem(STORAGE_KEYS.hintsVisibility))),
  )
  const [runResult, setRunResult] = useState<RunResult | null>(null)
  const [runError, setRunError] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [isWarming, setIsWarming] = useState(false)
  const initialVisibility = sanitizePanelVisibility(safeParseJson(localStorage.getItem(STORAGE_KEYS.panelVisibility)))
  const [showSidebar, setShowSidebar] = useState(initialVisibility.showSidebar)
  const [showProblemPanel, setShowProblemPanel] = useState(initialVisibility.showProblemPanel)
  const [showWorkspacePanel, setShowWorkspacePanel] = useState(initialVisibility.showWorkspacePanel)
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => sanitizeThemeMode(localStorage.getItem(STORAGE_KEYS.theme), 'system'))
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<WorkspaceTab>(() => sanitizeWorkspaceTab(localStorage.getItem(STORAGE_KEYS.workspaceTab), 'workspace'))

  const systemPrefersDark = useSystemPrefersDark()
  const resolvedThemeMode: Exclude<ThemeMode, 'system'> = themeMode === 'system' ? (systemPrefersDark ? 'dark' : 'light') : themeMode
  useDocumentTheme(themeMode, resolvedThemeMode)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.solved, JSON.stringify(solvedIds))
  }, [solvedIds])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.language, language)
  }, [language])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.viewMode, viewMode)
  }, [viewMode])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.solvedFilter, solvedFilter)
  }, [solvedFilter])

  useEffect(() => {
    if (selectedProblemId) localStorage.setItem(STORAGE_KEYS.selectedProblem, selectedProblemId)
  }, [selectedProblemId])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.drafts, JSON.stringify(drafts))
  }, [drafts])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.search, search)
  }, [search])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.difficultyFilter, difficultyFilter)
  }, [difficultyFilter])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.tagFilter, tagFilter)
  }, [tagFilter])

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.panelVisibility,
      JSON.stringify({
        showSidebar,
        showProblemPanel,
        showWorkspacePanel,
      }),
    )
  }, [showProblemPanel, showSidebar, showWorkspacePanel])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.workspaceTab, activeWorkspaceTab)
  }, [activeWorkspaceTab])

  useEffect(() => {
    if (Object.keys(revealedHintsByProblemId).length > 0) {
      localStorage.setItem(STORAGE_KEYS.hintsVisibility, JSON.stringify(revealedHintsByProblemId))
    } else {
      localStorage.removeItem(STORAGE_KEYS.hintsVisibility)
    }
  }, [revealedHintsByProblemId])

  useEffect(() => {
    let cancelled = false
    setIsWarming(true)
    warmLanguageRuntime(language)
      .catch(() => undefined)
      .finally(() => {
        if (!cancelled) setIsWarming(false)
      })

    return () => {
      cancelled = true
    }
  }, [language])

  const filteredProblems = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return problems.filter((problem) => {
      const matchesSearch =
        normalizedSearch === '' ||
        problem.title.toLowerCase().includes(normalizedSearch) ||
        problem.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch))

      const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty === difficultyFilter
      const matchesTag = tagFilter === 'all' || problem.tags.includes(tagFilter)
      const isSolved = solvedIds.includes(problem.id)
      const matchesSolved =
        solvedFilter === 'all' || (solvedFilter === 'solved' && isSolved) || (solvedFilter === 'unsolved' && !isSolved)

      return matchesSearch && matchesDifficulty && matchesTag && matchesSolved
    })
  }, [difficultyFilter, search, solvedFilter, solvedIds, tagFilter])

  useEffect(() => {
    if (!filteredProblems.some((problem) => problem.id === selectedProblemId)) {
      setSelectedProblemId(filteredProblems[0]?.id ?? '')
    }
  }, [filteredProblems, selectedProblemId])

  const selectedProblem = filteredProblems.find((problem) => problem.id === selectedProblemId) ?? filteredProblems[0] ?? null
  const bundle = selectedProblem ? getProblemCodeBundle(selectedProblem, language) : null
  const persistedDraft = selectedProblem && bundle ? drafts[selectedProblem.id]?.[language] ?? bundle.starterCode : ''
  const isShowingSolution = activeWorkspaceTab === 'solution'
  const editorValue = isShowingSolution && bundle ? bundle.solutionCode : persistedDraft
  const editorPath = selectedProblem
    ? `inmemory://${selectedProblem.id}/${language}/${isShowingSolution ? 'solution' : 'workspace'}`
    : `inmemory://workspace/${language}/${isShowingSolution ? 'solution' : 'workspace'}`
  const isShowingOptimalSolution = selectedProblem !== null && revealedOptimalProblemId === selectedProblem.id
  const revealedHintsCount = selectedProblem ? revealedHintsByProblemId[selectedProblem.id] ?? 0 : 0

  const groupedProblems = useMemo(() => {
    return filteredProblems.reduce<Record<string, Problem[]>>((accumulator, problem) => {
      if (!accumulator[problem.category]) accumulator[problem.category] = []
      accumulator[problem.category].push(problem)
      return accumulator
    }, {})
  }, [filteredProblems])

  const visiblePanelCount = [showSidebar, showProblemPanel, showWorkspacePanel].filter(Boolean).length
  const canHidePanel = visiblePanelCount > 1
  const hiddenPanels: HiddenPanel[] = [
    !showSidebar ? { key: 'sidebar', label: 'Problem set', show: () => setShowSidebar(true) } : null,
    !showProblemPanel ? { key: 'problem', label: 'Problem', show: () => setShowProblemPanel(true) } : null,
    !showWorkspacePanel ? { key: 'workspace', label: 'Workspace', show: () => setShowWorkspacePanel(true) } : null,
  ].filter((panel): panel is HiddenPanel => panel !== null)

  const layoutGridClassName = [
    'layout-grid',
    visiblePanelCount === 1 ? 'one-panel' : '',
    visiblePanelCount === 2 ? 'two-panels' : '',
    showSidebar && showProblemPanel && !showWorkspacePanel ? 'sidebar-problem-layout' : '',
    showSidebar && !showProblemPanel && showWorkspacePanel ? 'sidebar-workspace-layout' : '',
    !showSidebar && showProblemPanel && showWorkspacePanel ? 'problem-workspace-layout' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const updateDraft = (value: string) => {
    if (!selectedProblem || activeWorkspaceTab === 'solution') return

    setDrafts((current) => ({
      ...current,
      [selectedProblem.id]: {
        ...current[selectedProblem.id],
        [language]: value,
      },
    }))
  }

  const resetDraft = () => {
    if (!selectedProblem || !bundle) return

    setActiveWorkspaceTab('workspace')
    setDrafts((current) => ({
      ...current,
      [selectedProblem.id]: {
        ...current[selectedProblem.id],
        [language]: bundle.starterCode,
      },
    }))
    setRunResult(null)
    setRunError('')
  }

  const setWorkspaceTab = (nextTab: WorkspaceTab) => {
    setActiveWorkspaceTab(nextTab)
    setRunResult(null)
    setRunError('')
  }

  const toggleOptimalSolution = () => {
    if (!selectedProblem?.optimalSolution) return
    setRevealedOptimalProblemId((current) => (current === selectedProblem.id ? null : selectedProblem.id))
  }

  const revealNextHint = () => {
    if (!selectedProblem?.hints.length) return

    setRevealedHintsByProblemId((current) => {
      const currentCount = current[selectedProblem.id] ?? 0
      const nextCount = Math.min(selectedProblem.hints.length, currentCount + 1)
      return {
        ...current,
        [selectedProblem.id]: nextCount,
      }
    })
  }

  const toggleSolved = () => {
    if (!selectedProblem) return

    setSolvedIds((current) =>
      current.includes(selectedProblem.id) ? current.filter((id) => id !== selectedProblem.id) : [...current, selectedProblem.id],
    )
  }

  const runCode = async () => {
    if (!selectedProblem) return

    setIsRunning(true)
    setRunError('')

    try {
      const result = await runCodeForLanguage(selectedProblem, language, persistedDraft)
      setRunResult(result)
    } catch (error) {
      setRunResult(null)
      setRunError(error instanceof Error ? error.message : String(error))
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className="app-shell">
      <AppHeader
        languageLabel={getLanguageLabel(language)}
        solvedCount={solvedIds.length}
        themeMode={themeMode}
        onThemeChange={setThemeMode}
      />

      {hiddenPanels.length > 0 ? (
        <div className="panel-restore-bar">
          <span className="subtle-text">Hidden sections</span>
          <div className="panel-restore-actions">
            {hiddenPanels.map((panel) => (
              <button key={panel.key} className="ghost-button" onClick={panel.show}>
                Restore {panel.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <main className={layoutGridClassName}>
        <ProblemListPanel
          showSidebar={showSidebar}
          canHidePanel={canHidePanel}
          search={search}
          viewMode={viewMode}
          solvedFilter={solvedFilter}
          difficultyFilter={difficultyFilter}
          tagFilter={tagFilter}
          filteredProblems={filteredProblems}
          groupedProblems={groupedProblems}
          selectedProblemId={selectedProblem?.id ?? ''}
          solvedIds={solvedIds}
          onHide={() => setShowSidebar(false)}
          onSearchChange={setSearch}
          onViewModeChange={setViewMode}
          onSolvedFilterChange={setSolvedFilter}
          onDifficultyFilterChange={setDifficultyFilter}
          onTagFilterChange={setTagFilter}
          onProblemSelect={setSelectedProblemId}
        />

        <ProblemDetailsPanel
          showProblemPanel={showProblemPanel}
          canHidePanel={canHidePanel}
          selectedProblem={selectedProblem}
          solvedIds={solvedIds}
          revealedHintsCount={revealedHintsCount}
          isShowingOptimalSolution={isShowingOptimalSolution}
          onHide={() => setShowProblemPanel(false)}
          onToggleSolved={toggleSolved}
          onRevealNextHint={revealNextHint}
          onToggleOptimalSolution={toggleOptimalSolution}
        />

        <WorkspacePanel
          showWorkspacePanel={showWorkspacePanel}
          canHidePanel={canHidePanel}
          selectedProblem={selectedProblem}
          language={language}
          resolvedThemeMode={resolvedThemeMode}
          bundle={bundle}
          activeWorkspaceTab={activeWorkspaceTab}
          editorPath={editorPath}
          editorValue={editorValue}
          isWarming={isWarming}
          isRunning={isRunning}
          runResult={runResult}
          runError={runError}
          onHide={() => setShowWorkspacePanel(false)}
          onTabChange={setWorkspaceTab}
          onResetDraft={resetDraft}
          onRunCode={runCode}
          onEditorChange={updateDraft}
        />
      </main>

      <section className="about-footer" aria-labelledby="about-openprep-title">
        <div className="about-footer-inner">
          <div className="about-copy">
            <p className="eyebrow">Why OpenPrep</p>
            <h2 id="about-openprep-title">Open source interview prep, without the paywall</h2>
            <p className="subtle-text">
              OpenPrep is an open source interview prep platform for practicing data structures and algorithms directly in your browser. Your progress stays local, so you can move fast without accounts, lock-in, or paywalls.
            </p>
          </div>
          <div className="about-meta" aria-label="OpenPrep features">
            <span className="tag-pill">Focused coding workspace</span>
            <span className="tag-pill">Runs in your browser</span>
            <span className="tag-pill">Local progress tracking</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
