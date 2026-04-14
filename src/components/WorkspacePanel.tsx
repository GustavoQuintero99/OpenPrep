import Editor from '@monaco-editor/react'
import type { RunResult } from '../pyRunner'
import type { Problem, SupportedLanguage } from '../data'
import { getLanguageLabel } from '../data'
import { normalizeResult, type WorkspaceTab, type ThemeMode } from '../app/constants'

type WorkspacePanelProps = {
  showWorkspacePanel: boolean
  canHidePanel: boolean
  selectedProblem: Problem | null
  language: SupportedLanguage
  resolvedThemeMode: Exclude<ThemeMode, 'system'>
  bundle: {
    starterCode: string
    solutionCode: string
    functionSignature: string
  } | null
  activeWorkspaceTab: WorkspaceTab
  editorPath: string
  editorValue: string
  isWarming: boolean
  isRunning: boolean
  runResult: RunResult | null
  runError: string
  onHide: () => void
  onTabChange: (tab: WorkspaceTab) => void
  onResetDraft: () => void
  onRunCode: () => void
  onEditorChange: (value: string) => void
}

export function WorkspacePanel({
  showWorkspacePanel,
  canHidePanel,
  selectedProblem,
  language,
  resolvedThemeMode,
  bundle,
  activeWorkspaceTab,
  editorPath,
  editorValue,
  isWarming,
  isRunning,
  runResult,
  runError,
  onHide,
  onTabChange,
  onResetDraft,
  onRunCode,
  onEditorChange,
}: WorkspacePanelProps) {
  if (!showWorkspacePanel) return null

  const isShowingSolution = activeWorkspaceTab === 'solution'
  const runtimeLabel = getLanguageLabel(language)

  return (
    <section className="panel editor-panel">
      <div className="editor-header">
        <div className="panel-title-row">
          <div>
            <p className="eyebrow">Editor</p>
            <h2>{selectedProblem?.title ?? 'Code editor'}</h2>
          </div>
          <button className="ghost-button" onClick={onHide} disabled={!canHidePanel}>Hide</button>
        </div>
        <div className="editor-actions">
          <div className="workspace-tabs" role="tablist" aria-label="Editor tabs">
            <button className={`ghost-button workspace-tab ${activeWorkspaceTab === 'workspace' ? 'is-active' : ''}`} role="tab" aria-selected={activeWorkspaceTab === 'workspace'} onClick={() => onTabChange('workspace')}>
              Code
            </button>
            <button className={`ghost-button workspace-tab ${activeWorkspaceTab === 'solution' ? 'is-active' : ''}`} role="tab" aria-selected={activeWorkspaceTab === 'solution'} onClick={() => onTabChange('solution')}>
              Reference
            </button>
          </div>
          <button className="ghost-button" onClick={onResetDraft} disabled={isShowingSolution}>Reset code</button>
          <button className="primary-button" onClick={onRunCode} disabled={isRunning || !selectedProblem || isShowingSolution}>
            {isRunning ? 'Running…' : 'Run tests'}
          </button>
        </div>
      </div>

      <p className="subtle-text">
        {isWarming
          ? `Starting ${runtimeLabel} runtime...`
          : isShowingSolution
            ? `${bundle?.functionSignature ?? ''} • Reference code is read-only`
            : bundle
              ? `${bundle.functionSignature} • ${runtimeLabel}`
              : ''}
      </p>

      <div className="editor-shell">
        <Editor
          height="100%"
          defaultLanguage={language === 'python' ? 'python' : 'javascript'}
          language={language === 'python' ? 'python' : 'javascript'}
          theme={resolvedThemeMode === 'dark' ? 'vs-dark' : 'light'}
          path={editorPath}
          value={editorValue}
          onChange={(value) => onEditorChange(value ?? '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbersMinChars: 3,
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            readOnly: isShowingSolution,
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 },
          }}
        />
      </div>

      <div className="results-panel">
        <h3>Test results</h3>
        {runError ? <p className="error-text">{runError}</p> : null}
        {runResult ? (
          <>
            <p className="result-summary">{runResult.passedCount} of {runResult.total} tests passed</p>
            <div className="test-results">
              {runResult.results.map((result) => (
                <div key={result.index} className={`test-card ${result.passed ? 'passed' : 'failed'}`}>
                  <p><strong>Test {result.index + 1}</strong> {result.passed ? '✅' : '❌'}</p>
                  <p><strong>Input:</strong> {normalizeResult(result.input)}</p>
                  <p><strong>Expected:</strong> {normalizeResult(result.expected)}</p>
                  <p><strong>Actual:</strong> {normalizeResult(result.actual)}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="subtle-text">Run tests to see output here.</p>
        )}
      </div>
    </section>
  )
}
