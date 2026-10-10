# Booking App

Small-business booking system (six-week training program). Setup starts here.

## Prerequisites

- [Bun](https://bun.sh) 1.2+ (`curl -fsSL https://bun.sh/install | bash`)

## Setup

```bash
git clone https://github.com/tamil-code/booking-app.git
cd booking-app
bun install
```

## Scripts

| Command                | Purpose               |
| ---------------------- | --------------------- |
| `bun run lint`         | ESLint                |
| `bun run lint:fix`     | ESLint with auto-fix  |
| `bun run format`       | Prettier (write)      |
| `bun run format:check` | Prettier (check only) |
| `bun test`             | Bun test runner       |
| `bun run dev`          | Start Express app     |

```bash
bun run dev
```

## Tooling

This repo uses **Bun** for installs and script runners. Lockfile: `bun.lock` (text format in Bun 1.2+).
