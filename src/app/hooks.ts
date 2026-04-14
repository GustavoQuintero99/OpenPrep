import { useEffect, useState } from 'react'
import { STORAGE_KEYS, type ThemeMode } from './constants'

export const useSystemPrefersDark = () => {
  const [systemPrefersDark, setSystemPrefersDark] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : true,
  )

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const syncPreference = (event?: MediaQueryListEvent) => {
      setSystemPrefersDark(event ? event.matches : mediaQuery.matches)
    }

    syncPreference()
    mediaQuery.addEventListener('change', syncPreference)
    return () => mediaQuery.removeEventListener('change', syncPreference)
  }, [])

  return systemPrefersDark
}

export const useDocumentTheme = (themeMode: ThemeMode, resolvedThemeMode: Exclude<ThemeMode, 'system'>) => {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.theme, themeMode)
    document.documentElement.dataset.theme = resolvedThemeMode
  }, [resolvedThemeMode, themeMode])
}
