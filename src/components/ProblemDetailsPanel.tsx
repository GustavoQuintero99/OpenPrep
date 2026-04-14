import type { Problem } from '../data'
import { difficultyClassName } from '../app/constants'

type ProblemDetailsPanelProps = {
  showProblemPanel: boolean
  canHidePanel: boolean
  selectedProblem: Problem | null
  solvedIds: string[]
  revealedHintsCount: number
  isShowingOptimalSolution: boolean
  onHide: () => void
  onToggleSolved: () => void
  onRevealNextHint: () => void
  onToggleOptimalSolution: () => void
}

export function ProblemDetailsPanel({
  showProblemPanel,
  canHidePanel,
  selectedProblem,
  solvedIds,
  revealedHintsCount,
  isShowingOptimalSolution,
  onHide,
  onToggleSolved,
  onRevealNextHint,
  onToggleOptimalSolution,
}: ProblemDetailsPanelProps) {
  if (!showProblemPanel) return null

  return (
    <section className="panel problem-panel">
      {selectedProblem ? (
        <>
          <div className="problem-header">
            <div className="panel-title-row">
              <div>
                <p className="eyebrow">{selectedProblem.category}</p>
                <h2>{selectedProblem.title}</h2>
              </div>
              <button className="ghost-button" onClick={onHide} disabled={!canHidePanel}>Hide</button>
            </div>
            <button className="ghost-button" onClick={onToggleSolved}>
              {solvedIds.includes(selectedProblem.id) ? 'Mark as not completed' : 'Mark as completed'}
            </button>
          </div>

          <div className="meta-row">
            <span className={`difficulty-pill ${difficultyClassName(selectedProblem.difficulty)}`}>{selectedProblem.difficulty}</span>
            {selectedProblem.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          <div className="content-block">
            {selectedProblem.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="content-block">
            <h3>Examples</h3>
            {selectedProblem.examples.map((example, index) => (
              <div key={`${selectedProblem.id}-example-${index}`} className="example-card">
                <p><strong>Input:</strong> {example.input}</p>
                <p><strong>Output:</strong> {example.output}</p>
                {example.explanation ? <p><strong>Explanation:</strong> {example.explanation}</p> : null}
              </div>
            ))}
          </div>

          <div className="content-block">
            <h3>Constraints</h3>
            <ul>
              {selectedProblem.constraints.map((constraint) => (
                <li key={constraint}>{constraint}</li>
              ))}
            </ul>
          </div>

          <div className={`content-block optimal-solution-block ${revealedHintsCount > 0 ? 'is-revealed' : ''}`}>
            <div className="optimal-solution-header">
              <div>
                <h3>Hints</h3>
                <p className="subtle-text optimal-solution-note">Hidden by default so you can work the problem first. Reveal one only when you need a nudge.</p>
              </div>
            </div>

            {revealedHintsCount > 0 ? (
              <ul className="optimal-solution-list">
                {selectedProblem.hints.slice(0, revealedHintsCount).map((hint, index) => (
                  <li key={`${selectedProblem.id}-hint-${index}`}>{hint}</li>
                ))}
              </ul>
            ) : null}

            <div className="card-actions card-actions-bottom-right">
              {revealedHintsCount < selectedProblem.hints.length ? (
                <button className="ghost-button" onClick={onRevealNextHint} aria-expanded={revealedHintsCount > 0}>
                  Show hint {revealedHintsCount + 1}
                </button>
              ) : (
                <span className="subtle-text">All hints shown</span>
              )}
            </div>
          </div>

          {selectedProblem.optimalSolution ? (
            <div className={`content-block optimal-solution-block ${isShowingOptimalSolution ? 'is-revealed' : ''}`}>
              <div className="optimal-solution-header">
                <div>
                  <h3>Solution approach</h3>
                  <p className="subtle-text optimal-solution-note">Hidden by default. Reveal it when you want the target complexity and core approach.</p>
                </div>
              </div>

              {isShowingOptimalSolution ? (
                <ul className="optimal-solution-list">
                  <li><strong>Time:</strong> {selectedProblem.optimalSolution.timeComplexity}</li>
                  <li><strong>Space:</strong> {selectedProblem.optimalSolution.spaceComplexity}</li>
                  <li><strong>Approach:</strong> {selectedProblem.optimalSolution.summary}</li>
                </ul>
              ) : null}

              <div className="card-actions card-actions-bottom-right">
                <button className="ghost-button" onClick={onToggleOptimalSolution} aria-expanded={isShowingOptimalSolution}>
                  {isShowingOptimalSolution ? 'Hide solution approach' : 'Show solution approach'}
                </button>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <p className="subtle-text">No problem selected. Adjust the filters or pick a problem.</p>
      )}
    </section>
  )
}
