# OpenPrep

OpenPrep is a browser-based practice workspace for data structures and algorithms.

It is designed to feel calm, local-first, and focused:
- a searchable problem set on the left
- the full problem statement in the middle
- an editor and test runner on the right

The app runs entirely in the browser for normal usage. Progress, drafts, filters, theme settings, and other workspace preferences are stored locally in the browser.

## What OpenPrep is

OpenPrep is a lightweight interview-practice surface built around a few principles:
- no paywall for the core experience
- fast local iteration
- minimal friction
- clear problem metadata
- a focused three-panel workflow
- persistent in-browser state

Right now, Python is the primary supported runtime in the shipped UI. The editor uses Monaco, Python execution runs in-browser via Pyodide, and test results are shown directly in the workspace.

## Core experience

The app is organized into 3 main panels:

1. **Problem set**
   - search
   - grouped or flat browsing
   - difficulty and tag filters
   - completed/not completed filters
   - local completed-state persistence

2. **Problem details**
   - description
   - examples
   - constraints
   - progressively revealed hints
   - optional solution approach / complexity guidance

3. **Workspace**
   - Monaco editor
   - code/reference tabs
   - in-browser runtime warmup
   - test execution
   - detailed per-test output

## Project structure

### Root

- `package.json`
  - project scripts and dependencies
- `vite.config.ts`
  - Vite configuration
- `server.cjs`
  - guarded local serving flow
- `index.html`
  - HTML entry document
- `README.md`
  - project documentation

### `src/`

- `main.tsx`
  - app bootstrap and early theme initialization
- `App.tsx`
  - main app composition, state wiring, persistence, filtering, selection, and runtime orchestration
- `App.css`
  - app-level visual system and layout styling
- `index.css`
  - global base styles
- `data.ts`
  - problem definitions, metadata, starter code, solution code, tests, and language bundles
- `codeRunner.ts`
  - language-aware runtime entry point
- `pyRunner.ts`
  - Python execution harness via Pyodide

### `src/app/`

This folder holds app-level utilities and state helpers.

- `constants.ts`
  - shared app types and storage keys
  - utility helpers like result normalization and difficulty class mapping
- `hooks.ts`
  - theme and system-preference hooks
- `storage.ts`
  - localStorage parsing and sanitization helpers

### `src/components/`

This folder contains the UI panels and shared app surfaces.

- `AppHeader.tsx`
  - top header, theme switcher, runtime badge, progress counters
- `ProblemListPanel.tsx`
  - searchable/filterable problem list
- `ProblemDetailsPanel.tsx`
  - statement, examples, constraints, hints, solution approach
- `WorkspacePanel.tsx`
  - editor, tabs, run action, test output

### `public/`

Static assets served directly by Vite.

## How OpenPrep works

## 1. Problem data

All core problems currently live in `src/data.ts`.

Each problem includes data like:
- `id`
- `title`
- `slug`
- `difficulty`
- `category`
- `tags`
- `description`
- `examples`
- `constraints`
- `hints`
- `starterCode`
- `solutionCode`
- `functionSignature`
- `optimalSolution`
- `tests`

OpenPrep builds the UI and runtime behavior directly from this structured data.

## 2. Workspace persistence

OpenPrep stores workspace state in `localStorage`.

That includes things like:
- completed problems
- selected problem
- code drafts
- theme mode
- search/filter state
- panel visibility
- revealed hint state
- workspace tab selection

Sanitization for restored state lives in `src/app/storage.ts`.

## 3. Runtime flow

The editor panel calls `runCodeForLanguage(...)` from `src/codeRunner.ts`.

Current shipped path:
- Python code is executed through `src/pyRunner.ts`
- Pyodide is loaded in the browser from the CDN
- tests are serialized and executed inside the Python harness
- structured results come back into the React UI

## 4. UI composition

`App.tsx` is the coordinator:
- loads and restores persisted state
- computes filtered problems
- selects the active problem
- derives the active code bundle
- manages hint reveal counts and solution visibility
- delegates rendering to the panel components

The component files in `src/components/` render the surface itself.

## How to add more questions

The main place to add new problems is:

- `src/data.ts`

### Add a new problem entry

At minimum, define:
- metadata
- description paragraphs
- examples
- constraints
- hints
- starter code
- solution code
- function signature
- tests

### Required shape

Use the existing `Problem` type as the template.

A new problem should include:

- `id`: stable internal identifier
- `title`: display title
- `slug`: stable slug
- `difficulty`: `Easy`, `Medium`, or `Hard`
- `category`: topic bucket used in grouped view
- `tags`: used in search and filtering
- `companies`: optional metadata for future use
- `description`: array of paragraphs
- `examples`: array of example blocks
- `constraints`: array of strings
- `hints`: array of strings
- `starterCode`: scaffold the user starts from
- `solutionCode`: reference implementation
- `solutionName`: callable name expected by the runtime harness
- `functionSignature`: display signature shown in the workspace
- `optimalSolution`: complexity + summary metadata
- `tests`: runtime test cases

## Important note about tests

Tests are what drive execution in the workspace.

Keep them:
- serializable
- clear
- representative
- aligned with the callable/function shape expected by the runner

The current Python runner is browser-based and straightforward. If you add more complex structures later, you may also need to extend the runtime harness in `pyRunner.ts` or `codeRunner.ts`.

## Recommended workflow for adding a new problem

1. Add starter code and solution code
2. Add examples and constraints
3. Add hints and solution approach metadata
4. Add tests
5. Run the app locally
6. Run the problem in the workspace
7. Verify results in the UI

## How to run the project

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run the guarded local server:

```bash
npm run serve:guarded
```

## Notes on themes and persistence

OpenPrep supports:
- Light
- Dark
- System

Theme selection is stored locally and applied early during boot so the app restores cleanly on reload.

Other workspace choices are also persisted, including editor drafts and panel/filter state.

## Design direction

OpenPrep is intentionally not trying to feel like a noisy dashboard. The design direction is:
- focused
- local-first
- calm
- slightly polished
- readable over flashy

That applies to layout, hints, solution reveal flow, and motion.

## If you want to extend the app later

Good next directions include:
- more problem coverage
- stronger runtime harnesses for richer problem types
- better test-case tooling
- import/export of local progress
- account sync later, if desired
- public hosting and deployment flows

## Summary

OpenPrep is a structured browser-based practice workspace built from:
- typed problem data
- browser persistence
- a componentized three-panel UI
- an in-browser Python runtime

If you want to extend it, the main places to start are:
- `src/data.ts` for content
- `src/components/` for UI behavior
- `src/app/storage.ts` for persisted state
- `src/codeRunner.ts` and `src/pyRunner.ts` for runtime behavior
