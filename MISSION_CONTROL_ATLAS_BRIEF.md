# Mission Control — ATLAS Brief

_Last updated: 2026-03-14_

## Architect
- **Problem:** SIS needs a local dashboard that turns project files and execution state into one visible control panel instead of scattering information across markdown files and chat.
- **User:** TJ Smith and Shiloh operating SIS locally.
- **Success:** TJ can open one local page and see the task board, docs, planning view, team context, and current project state without hunting through files.
- **Constraints:** local-only, no auth, no paid APIs, must use existing SIS files as source material where possible.

## Trace
### Source of truth
- `SIS_KANBAN.md` for task board
- `SIS_*.md` files for docs
- `SIS_OPERATING_PLAN.md` for mission context
- local accessible memory files if present

### Integrations
- Next.js local app runtime
- local filesystem reads only
- no external APIs required

### Stack
- Next.js app router
- TypeScript
- local API routes for safe file reads
- existing website project styling layer

### Edge cases
- missing source docs
- missing memory files
- unreadable local paths
- long markdown documents
- no real cron/scheduler data available

## Link
- local SIS folder readable: yes
- website project runnable locally: yes
- mission-control API routes build successfully: yes
- paid API dependency required: no

## Assemble
- local file reader utility added
- mission control API routes added
- `/mission-control` overview page added
- dedicated pages added: Task Board, Calendar, Projects, Docs, Memory
- Team and Office removed from the current version

## Stress-test
- `npm run build` passed successfully
- local dev server started successfully
- route available at `/mission-control`

## Validate
- file access restricted to allowed SIS docs for preview route
- missing memory handled with explicit placeholder
- no fake scheduler integrations added

## Monitor
- confirm routes load locally under `http://localhost:3000/mission-control`
- confirm board reflects updates to `SIS_KANBAN.md`
- confirm docs preview loads SIS markdown files correctly
- confirm calendar shows verified heartbeat data and does not fake cron jobs
