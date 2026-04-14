import { problems } from '../data'
import type { ThemeMode } from '../app/constants'

type AppHeaderProps = {
  languageLabel: string
  solvedCount: number
  themeMode: ThemeMode
  onThemeChange: (themeMode: ThemeMode) => void
}

const themeOptions: ThemeMode[] = ['light', 'dark', 'system']

export function AppHeader({ languageLabel, solvedCount, themeMode, onThemeChange }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">OpenPrep</p>
        <h1>OpenPrep</h1>
        <p className="subtle-text">Practice data structures and algorithms in your browser with no paywall, local progress, and a focused workspace.</p>
      </div>
      <div className="header-stats header-actions">
        <span className="tag-pill runtime-pill">{languageLabel} runtime</span>
        <div className="theme-switcher" role="group" aria-label="Theme">
          {themeOptions.map((option) => (
            <button key={option} className={`ghost-button ${themeMode === option ? 'is-active' : ''}`} onClick={() => onThemeChange(option)}>
              {option[0]!.toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
        <div>
          <strong>{problems.length}</strong>
          <span>problems</span>
        </div>
        <div>
          <strong>{solvedCount}</strong>
          <span>completed</span>
        </div>
      </div>
    </header>
  )
}
