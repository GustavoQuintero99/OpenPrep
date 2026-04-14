import {
  allDifficulties,
  allTags,
  getProblemCodeBundle,
  isRuntimeSupportedLanguage,
  problems,
  runtimeSupportedLanguages,
  type Problem,
  type SupportedLanguage,
} from '../data'
import type { DraftMap, SolvedFilter, ThemeMode, ViewMode, WorkspaceTab } from './constants'

export const safeParseJson = (value: string | null): unknown => {
  if (!value) return null

  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

export const sanitizeSolvedIds = (value: unknown): string[] => {
  if (!Array.isArray(value)) return []

  const validProblemIds = new Set(problems.map((problem) => problem.id))
  const dedupedIds = new Set<string>()

  for (const candidate of value) {
    if (typeof candidate === 'string' && validProblemIds.has(candidate)) {
      dedupedIds.add(candidate)
    }
  }

  return [...dedupedIds]
}

export const sanitizeDrafts = (value: unknown): DraftMap => {
  if (!value || typeof value !== 'object') return {}

  const candidate = value as Record<string, unknown>

  return problems.reduce<DraftMap>((accumulator, problem) => {
    const problemDrafts = candidate[problem.id]
    if (!problemDrafts || typeof problemDrafts !== 'object') return accumulator

    const nextProblemDrafts: Partial<Record<SupportedLanguage, string>> = {}

    for (const supportedLanguage of runtimeSupportedLanguages) {
      const rawDraft = (problemDrafts as Record<string, unknown>)[supportedLanguage]
      if (typeof rawDraft !== 'string') continue

      const bundle = getProblemCodeBundle(problem, supportedLanguage)
      if (rawDraft === bundle.solutionCode) continue

      nextProblemDrafts[supportedLanguage] = rawDraft
    }

    if (Object.keys(nextProblemDrafts).length > 0) {
      accumulator[problem.id] = nextProblemDrafts
    }

    return accumulator
  }, {})
}

export const sanitizeHintsVisibility = (value: unknown): Record<string, number> => {
  if (!value || typeof value !== 'object') return {}

  return Object.entries(value as Record<string, unknown>).reduce<Record<string, number>>((accumulator, [problemId, count]) => {
    const matchingProblem = problems.find((problem) => problem.id === problemId)
    if (!matchingProblem) return accumulator
    if (typeof count !== 'number' || Number.isNaN(count)) return accumulator

    accumulator[problemId] = Math.max(0, Math.min(matchingProblem.hints.length, Math.floor(count)))
    return accumulator
  }, {})
}

export const sanitizeLanguage = (value: string | null, fallback: SupportedLanguage): SupportedLanguage => {
  return value && isRuntimeSupportedLanguage(value as SupportedLanguage) ? (value as SupportedLanguage) : fallback
}

export const sanitizeViewMode = (value: string | null, fallback: ViewMode): ViewMode => {
  return value === 'grouped' || value === 'flat' ? value : fallback
}

export const sanitizeSolvedFilter = (value: string | null, fallback: SolvedFilter): SolvedFilter => {
  return value === 'all' || value === 'solved' || value === 'unsolved' ? value : fallback
}

export const sanitizeThemeMode = (value: string | null, fallback: ThemeMode): ThemeMode => {
  return value === 'system' || value === 'dark' || value === 'light' ? value : fallback
}

export const sanitizeWorkspaceTab = (value: string | null, fallback: WorkspaceTab): WorkspaceTab => {
  return value === 'workspace' || value === 'solution' ? value : fallback
}

export const sanitizeDifficultyFilter = (value: string | null, fallback: string) => {
  return value === 'all' || allDifficulties.includes(value as Problem['difficulty']) ? (value ?? fallback) : fallback
}

export const sanitizeTagFilter = (value: string | null, fallback: string) => {
  return value === 'all' || allTags.includes(value ?? '') ? (value ?? fallback) : fallback
}

export const sanitizeSelectedProblemId = (value: string | null, fallback: string) => {
  return value && problems.some((problem) => problem.id === value) ? value : fallback
}

export const sanitizePanelVisibility = (value: unknown) => {
  const visibility = value && typeof value === 'object' ? (value as Record<string, unknown>) : {}
  const showSidebar = visibility.showSidebar === false ? false : true
  const showProblemPanel = visibility.showProblemPanel === false ? false : true
  const showWorkspacePanel = visibility.showWorkspacePanel === false ? false : true
  const visibleCount = [showSidebar, showProblemPanel, showWorkspacePanel].filter(Boolean).length

  if (visibleCount === 0) {
    return {
      showSidebar: true,
      showProblemPanel: true,
      showWorkspacePanel: true,
    }
  }

  return {
    showSidebar,
    showProblemPanel,
    showWorkspacePanel,
  }
}
