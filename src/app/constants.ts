import type { Problem, SupportedLanguage } from '../data'

export type ViewMode = 'grouped' | 'flat'
export type SolvedFilter = 'all' | 'solved' | 'unsolved'
export type ThemeMode = 'system' | 'dark' | 'light'
export type WorkspaceTab = 'workspace' | 'solution'

export type DraftMap = Record<string, Partial<Record<SupportedLanguage, string>>>

export const STORAGE_KEYS = {
  solved: 'emi-playground-solved',
  language: 'emi-playground-language',
  viewMode: 'emi-playground-view-mode',
  solvedFilter: 'emi-playground-filter',
  selectedProblem: 'emi-playground-problem',
  drafts: 'emi-playground-drafts',
  theme: 'emi-playground-theme',
  search: 'emi-playground-search',
  difficultyFilter: 'emi-playground-difficulty-filter',
  tagFilter: 'emi-playground-tag-filter',
  panelVisibility: 'emi-playground-panel-visibility',
  workspaceTab: 'emi-playground-workspace-tab',
  hintsVisibility: 'emi-playground-hints-visibility',
} as const

export const difficultyClassName = (difficulty: Problem['difficulty']) => {
  if (difficulty === 'Easy') return 'easy'
  if (difficulty === 'Medium') return 'medium'
  return 'hard'
}

export const normalizeResult = (value: unknown) => {
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}
