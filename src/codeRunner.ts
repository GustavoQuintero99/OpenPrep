import { getLanguageLabel, getProblemCodeBundle, isRuntimeSupportedLanguage, type Problem, type SupportedLanguage } from './data'
import { runPythonTests, warmPyodide, type RunResult } from './pyRunner'

const normalizeArgs = (input: unknown): unknown[] => {
  if (Array.isArray(input)) {
    return input
  }

  if (input && typeof input === 'object') {
    return Object.values(input as Record<string, unknown>)
  }

  return [input]
}

const runJavaScriptTests = async (problem: Problem, source: string): Promise<RunResult> => {
  const bundle = getProblemCodeBundle(problem, 'javascript')
  const results = problem.tests.map((test, index) => {
    try {
      const executable = new Function(`${source}\nreturn typeof ${bundle.functionName} !== 'undefined' ? ${bundle.functionName} : null`)()

      if (typeof executable !== 'function') {
        throw new Error(`Could not find function ${bundle.functionName}`)
      }

      const actual = executable(...normalizeArgs(test.input))
      return {
        index,
        passed: JSON.stringify(actual) === JSON.stringify(test.expected),
        input: test.input,
        expected: test.expected,
        actual,
      }
    } catch (error) {
      return {
        index,
        passed: false,
        input: test.input,
        expected: test.expected,
        actual: error instanceof Error ? `${error.name}: ${error.message}` : String(error),
      }
    }
  })

  return {
    passedCount: results.filter((result) => result.passed).length,
    total: results.length,
    results,
  }
}

export const warmLanguageRuntime = async (language: SupportedLanguage) => {
  if (!isRuntimeSupportedLanguage(language)) {
    throw new Error(`${getLanguageLabel(language)} runtime is not available right now.`)
  }

  if (language === 'python') {
    await warmPyodide()
  }
}

export const runCodeForLanguage = async (
  problem: Problem,
  language: SupportedLanguage,
  source: string,
): Promise<RunResult> => {
  if (!isRuntimeSupportedLanguage(language)) {
    throw new Error(`${getLanguageLabel(language)} runtime is not available right now.`)
  }

  if (language === 'javascript') {
    return runJavaScriptTests(problem, source)
  }

  return runPythonTests(problem, source)
}
