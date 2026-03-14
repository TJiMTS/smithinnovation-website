# Mission Control (Local SIS Dashboard)

## What it is
A local-only dashboard at:

`/mission-control`

It reads live SIS project files from:

`/Users/tjsmith/Documents/Smith Innovation Studio`

and turns them into a working dashboard with:
- Task Board
- Calendar / planning view
- Projects
- Docs browser
- Memory panel
- Team view
- Office view

## How to run locally
From the website folder:

```bash
cd "/Users/tjsmith/Documents/Smith Innovation Studio/website"
npm run dev
```

Then open:

`http://localhost:3000/mission-control`

## Important notes
- This is local only.
- It does **not** use paid APIs.
- It does **not** fake cron integrations.
- The Task Board is parsed from `SIS_KANBAN.md`.
- The Docs panel reads `SIS_*.md` files from the SIS folder.
- The Memory panel only shows readable local files from the expected workspace paths.

## Current implementation details
- API route: `/api/mission-control`
- Doc preview route: `/api/mission-control/doc?name=...`
- Local file reading is restricted to allowed SIS documents.

## If something looks empty
That usually means one of these is true:
1. the source markdown file does not exist yet
2. the file is outside the allowed local paths
3. the memory file was not found in the expected workspace location
