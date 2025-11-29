# AGENTS.md

## Commands
- `pnpm dev` - Start dev server with Turbopack
- `pnpm build` - Production build
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Vitest in watch mode
- `pnpm test:run` - Run all tests once
- `pnpm test:run src/components/HelloWorld.test.tsx` - Run a single test file

## Architecture
- Next.js 16 app with React 19 and App Router (`src/app/`)
- Components in `src/components/` with co-located `.test.tsx` files
- Path alias: `@/*` maps to `src/*`

## Code Style
- TypeScript with strict mode; use interfaces for component props
- Tailwind CSS v4 for styling (utility classes)
- Named exports for components (e.g., `export function ComponentName`)
- Tests: Vitest + React Testing Library; use `describe`/`it`/`expect`
- ESLint with Next.js core-web-vitals and TypeScript rules
- Never render SVGs directly in JSX; extract it into a separate named component
- Never use inline `style`; always use Tailwind classes.

## Tailwind CSS
- Leverage gap utilities (`gap-4`) for consistent spacing in flex and grid containers.
