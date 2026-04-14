import { allDifficulties, allTags, type Problem } from '../data'
import { difficultyClassName, type SolvedFilter, type ViewMode } from '../app/constants'

type ProblemListPanelProps = {
  showSidebar: boolean
  canHidePanel: boolean
  search: string
  viewMode: ViewMode
  solvedFilter: SolvedFilter
  difficultyFilter: string
  tagFilter: string
  filteredProblems: Problem[]
  groupedProblems: Record<string, Problem[]>
  selectedProblemId: string
  solvedIds: string[]
  onHide: () => void
  onSearchChange: (value: string) => void
  onViewModeChange: (value: ViewMode) => void
  onSolvedFilterChange: (value: SolvedFilter) => void
  onDifficultyFilterChange: (value: string) => void
  onTagFilterChange: (value: string) => void
  onProblemSelect: (problemId: string) => void
}

export function ProblemListPanel({
  showSidebar,
  canHidePanel,
  search,
  viewMode,
  solvedFilter,
  difficultyFilter,
  tagFilter,
  filteredProblems,
  groupedProblems,
  selectedProblemId,
  solvedIds,
  onHide,
  onSearchChange,
  onViewModeChange,
  onSolvedFilterChange,
  onDifficultyFilterChange,
  onTagFilterChange,
  onProblemSelect,
}: ProblemListPanelProps) {
  if (!showSidebar) return null

  const renderProblemRow = (problem: Problem, subtitle: string) => {
    const isSolved = solvedIds.includes(problem.id)
    const isSelected = selectedProblemId === problem.id

    return (
      <button
        key={problem.id}
        className={`question-row ${isSelected ? 'selected' : ''} ${isSolved ? 'solved' : ''}`}
        onClick={() => onProblemSelect(problem.id)}
      >
        <div>
          <strong>{problem.title}</strong>
          <p>{subtitle}</p>
        </div>
        <span className={`difficulty-pill ${difficultyClassName(problem.difficulty)}`}>{problem.difficulty}</span>
      </button>
    )
  }

  return (
    <aside className="panel sidebar-panel">
      <div className="panel-topbar">
        <div>
          <p className="eyebrow">Problem set</p>
          <p className="subtle-text">Browse, search, and filter problems.</p>
        </div>
        <button className="ghost-button" onClick={onHide} disabled={!canHidePanel}>Hide</button>
      </div>

      <div className="sidebar-controls">
        <input className="search-input" placeholder="Search problems or tags" value={search} onChange={(event) => onSearchChange(event.target.value)} />

        <div className="control-row">
          <select value={viewMode} onChange={(event) => onViewModeChange(event.target.value as ViewMode)}>
            <option value="grouped">By topic</option>
            <option value="flat">All problems</option>
          </select>
          <select value={solvedFilter} onChange={(event) => onSolvedFilterChange(event.target.value as SolvedFilter)}>
            <option value="all">All statuses</option>
            <option value="solved">Completed</option>
            <option value="unsolved">Not completed</option>
          </select>
        </div>

        <div className="control-row">
          <select value={difficultyFilter} onChange={(event) => onDifficultyFilterChange(event.target.value)}>
            <option value="all">Any difficulty</option>
            {allDifficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
          <select value={tagFilter} onChange={(event) => onTagFilterChange(event.target.value)}>
            <option value="all">Any tag</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="question-list">
        {filteredProblems.length === 0 ? (
          <p className="question-list-empty subtle-text">No problems match the current filters.</p>
        ) : viewMode === 'grouped' ? (
          Object.entries(groupedProblems).map(([category, categoryProblems]) => (
            <section key={category} className="question-group">
              <div className="question-group-header">
                <h2>{category}</h2>
                <span>{categoryProblems.length}</span>
              </div>
              {categoryProblems.map((problem) => renderProblemRow(problem, problem.tags.slice(0, 2).join(' · ')))}
            </section>
          ))
        ) : (
          filteredProblems.map((problem) => renderProblemRow(problem, problem.category))
        )}
      </div>
    </aside>
  )
}
