import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const storedTheme = window.localStorage.getItem('emi-playground-theme')
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const resolvedTheme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : systemPrefersDark ? 'dark' : 'light'
document.documentElement.dataset.theme = resolvedTheme

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
