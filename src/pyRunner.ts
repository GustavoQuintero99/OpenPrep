import type { Problem } from './data'

export type RunResult = {
  passedCount: number
  total: number
  results: Array<{
    index: number
    passed: boolean
    input: unknown
    expected: unknown
    actual: unknown
  }>
}

type BrowserLoadPyodide = (options: { indexURL: string }) => Promise<{
  globals: {
    set: (name: string, value: unknown) => void
    get: (name: string) => unknown
    delete: (name: string) => void
  }
  runPythonAsync: (code: string) => Promise<unknown>
}>

declare global {
  interface Window {
    loadPyodide?: BrowserLoadPyodide
  }
}

const PYODIDE_SCRIPT_URL = 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/pyodide.js'
const PYODIDE_INDEX_URL = 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/'

let pyodidePromise: ReturnType<BrowserLoadPyodide> | null = null
let pyodideScriptPromise: Promise<void> | null = null

const ensurePyodideScript = async () => {
  if (typeof window === 'undefined') {
    throw new Error('Pyodide can only be loaded in the browser.')
  }

  if (typeof window.loadPyodide === 'function') {
    return
  }

  if (!pyodideScriptPromise) {
    pyodideScriptPromise = new Promise<void>((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>('script[data-pyodide="true"]')

      if (existing) {
        existing.addEventListener('load', () => resolve(), { once: true })
        existing.addEventListener('error', () => reject(new Error('Failed to load the Pyodide script.')), {
          once: true,
        })
        return
      }

      const script = document.createElement('script')
      script.src = PYODIDE_SCRIPT_URL
      script.async = true
      script.dataset.pyodide = 'true'
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load the Pyodide script.'))
      document.head.appendChild(script)
    })
  }

  await pyodideScriptPromise

  if (typeof window.loadPyodide !== 'function') {
    throw new Error('Pyodide loaded, but loadPyodide was not attached to window.')
  }
}

const getPyodide = async () => {
  if (!pyodidePromise) {
    pyodidePromise = ensurePyodideScript().then(() => {
      if (typeof window.loadPyodide !== 'function') {
        throw new Error('Could not find loadPyodide after loading the browser script.')
      }

      return window.loadPyodide({
        indexURL: PYODIDE_INDEX_URL,
      })
    })
  }

  return pyodidePromise
}

const toPythonLiteral = (value: unknown): string => JSON.stringify(value)

const getInvocationSnippet = (problem: Problem, testInput: unknown) => {
  if (problem.slug === 'two-sum') {
    const input = testInput as { nums: number[]; target: number }
    return `${problem.solutionName}(${toPythonLiteral(input.nums)}, ${input.target})`
  }

  if (problem.slug === 'valid-palindrome') {
    return `${problem.solutionName}(${JSON.stringify(testInput)})`
  }

  return `${problem.solutionName}(${toPythonLiteral(testInput)})`
}

const serializeForPython = (problem: Problem, source: string) => {
  const payload = {
    source,
    tests: problem.tests.map((test) => ({
      input: test.input,
      expected: test.expected,
      call: getInvocationSnippet(problem, test.input),
    })),
  }

  return JSON.stringify(payload)
}

const PYTHON_HARNESS = String.raw`
import json

payload = json.loads(__emi_payload)
namespace = {}
exec(payload["source"], namespace)

results = []

for index, test in enumerate(payload["tests"]):
    try:
        actual = eval(test["call"], namespace)
        passed = actual == test["expected"]
        results.append({
            "index": index,
            "passed": passed,
            "input": test["input"],
            "expected": test["expected"],
            "actual": actual,
        })
    except Exception as error:
        results.append({
            "index": index,
            "passed": False,
            "input": test["input"],
            "expected": test["expected"],
            "actual": f"{type(error).__name__}: {error}",
        })

__emi_results_json = json.dumps({
    "passedCount": sum(1 for result in results if result["passed"]),
    "total": len(results),
    "results": results,
})
`

export const warmPyodide = async () => {
  await getPyodide()
}

export const runPythonTests = async (problem: Problem, source: string): Promise<RunResult> => {
  const pyodide = await getPyodide()

  try {
    pyodide.globals.set('__emi_payload', serializeForPython(problem, source))
    await pyodide.runPythonAsync(PYTHON_HARNESS)
    const resultsJson = pyodide.globals.get('__emi_results_json')
    return JSON.parse(String(resultsJson)) as RunResult
  } finally {
    pyodide.globals.delete('__emi_payload')
    pyodide.globals.delete('__emi_results_json')
  }
}
