# Booking App

REST API for a small-business booking system (clinic, gym, or salon). This repo grows week by week through the six-week full-stack training program.

## Prerequisites

- Node.js 20+
- Git
- Docker Desktop (Week 1 Day 3 onward)

## Setup

```bash
git clone https://github.com/tamil-code/booking-app.git
cd booking-app
npm install
cp .env.example .env
npm run dev
```

## Scripts

| Command             | Purpose                       |
| ------------------- | ----------------------------- |
| `npm run dev`       | Run the app in watch mode     |
| `npm run build`     | Compile TypeScript to `dist/` |
| `npm start`         | Run compiled output           |
| `npm run lint`      | ESLint                        |
| `npm run format`    | Prettier write                |
| `npm test`          | Vitest                        |
| `npm run typecheck` | TypeScript without emit       |

## Project structure

```text
src/
  index.ts          # entry
  routes/           # HTTP layer
  services/         # business logic
  middleware/
  lib/
  types/
tests/              # Vitest
```

## Training progress

- **Week 1 Day 1:** TypeScript toolchain, contact-list exercises, Vitest, Git PR workflow, refine `AGENTS.md`.
- **Week 1 Day 2:** Express `/ping`, `/health`, in-memory `/services` CRUD, Bruno collection, optional Vite weather widget in a separate folder or branch.

## How I verified this (initial boilerplate)

- `npm install` on a clean clone
- `npm run lint` — zero errors
- `npm test` — green
- `npm run dev` — starts without crash

## License

MIT
