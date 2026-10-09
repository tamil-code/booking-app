# Agent rules (Booking App)

Human-led project: the trainee types the code. Agents explain, review, and suggest scoped diffs only when asked.

## Stack

- Node.js LTS, TypeScript (ES modules), Express (from Week 1 Day 2)
- Postgres in Docker (from Week 1 Day 3)
- Vitest for unit tests; Bruno or curl for HTTP checks

## Layout

- `src/index.ts` — app entry / server bootstrap
- `src/routes/` — HTTP handlers only; no direct DB access (Week 1 Day 4+)
- `src/services/` — business rules
- `src/lib/` — shared helpers (config, errors)
- `src/middleware/` — Express middleware
- `src/types/` — shared TypeScript types
- `tests/` — Vitest tests

## Hard rules

- Never commit secrets. Use `.env` locally; commit only `.env.example`.
- Never paste client data or API keys into chat or coding agents.
- Prefer immutable updates (spread, `map`, `filter`) over mutating arrays/objects.
- Run `npm run lint`, `npm test`, and `npm run typecheck` before calling work done.
- Keep PRs small. Every PR needs a short description and **How I verified this**.

## When helping

- One scoped task at a time. Show a diff; do not rewrite unrelated files.
- Match existing ESLint + Prettier style.
- If unsure about a business rule for bookings, ask instead of inventing.
