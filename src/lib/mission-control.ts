import { promises as fs } from "fs";
import path from "path";
import { MissionControlData, BoardColumn, DocumentEntry, MemorySnippet } from "@/components/mission-control/types";
const SIS_ROOT = "/Users/tjsmith/Documents/Smith Innovation Studio";
const WORKSPACE_ROOT = "/Users/tjsmith/.openclaw/workspace";
const SIS_PREFIX = /^SIS_.*\.(md|csv)$/i;
type BoardColumnKey = "backlog" | "todo" | "inProgress" | "blocked" | "done";

function normalizeLine(line: string) {
  return line.replace(/\r/g, "").trimEnd();
}

async function readText(filePath: string) {
  return fs.readFile(filePath, "utf8");
}

export async function listSisDocs(): Promise<DocumentEntry[]> {
  const entries = await fs.readdir(SIS_ROOT, { withFileTypes: true });
  const files = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && SIS_PREFIX.test(entry.name))
      .map(async (entry) => {
        const fullPath = path.join(SIS_ROOT, entry.name);
        const stats = await fs.stat(fullPath);
        return {
          name: entry.name,
          path: fullPath,
          modifiedAt: stats.mtime.toISOString(),
          size: stats.size,
        } satisfies DocumentEntry;
      })
  );

  return files.sort((a, b) => b.modifiedAt.localeCompare(a.modifiedAt));
}

export async function readAllowedDocument(name: string) {
  if (!SIS_PREFIX.test(name)) {
    throw new Error("Document not allowed");
  }

  const fullPath = path.join(SIS_ROOT, name);
  const realPath = await fs.realpath(fullPath);
  if (!realPath.startsWith(SIS_ROOT)) {
    throw new Error("Unsafe path");
  }

  return readText(realPath);
}

export async function parseKanban(): Promise<BoardColumn[]> {
  const file = await readText(path.join(SIS_ROOT, "SIS_KANBAN.md"));
  const lines = file.split("\n").map(normalizeLine);

  const columns: Record<BoardColumnKey, BoardColumn> = {
    backlog: { key: "backlog", title: "Backlog", tasks: [] },
    todo: { key: "todo", title: "Todo", tasks: [] },
    inProgress: { key: "inProgress", title: "In Progress", tasks: [] },
    blocked: { key: "blocked", title: "Blocked", tasks: [] },
    done: { key: "done", title: "Done", tasks: [] },
  };

  let current: BoardColumnKey | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line === "## Backlog") current = "backlog";
    else if (line === "## Todo") current = "todo";
    else if (line === "## In Progress") current = "inProgress";
    else if (line === "## Blocked") current = "blocked";
    else if (line === "## Done") current = "done";
    else if (line.startsWith("## ")) current = null;

    if (!current) continue;

    const match = line.match(/^- \[( |x)\] (.+)$/i);
    if (match) {
      columns[current].tasks.push({
        done: match[1].toLowerCase() === "x",
        title: match[2],
      });
    }
  }

  return [columns.backlog, columns.todo, columns.inProgress, columns.blocked, columns.done];
}

async function getMission() {
  const plan = await readText(path.join(SIS_ROOT, "SIS_OPERATING_PLAN.md"));
  const match = plan.match(/## Mission\n([\s\S]*?)\n## /);
  return match?.[1].trim().replace(/\n+/g, " ") ?? "Build SIS into a real, growing company.";
}

async function getProjects(board: BoardColumn[], docs: DocumentEntry[]) {
  const todo = board.find((column) => column.key === "todo")?.tasks ?? [];
  const docsByName = new Set(docs.map((doc) => doc.name));

  return [
    {
      name: "Positioning & Offer Clarity",
      summary: "Keep SIS tightly focused on AI operating systems for UK accountancy and bookkeeping firms.",
      evidence: [
        docsByName.has("SIS_POSITIONING_ONE_PAGER.md") ? "Positioning one-pager written" : "Positioning draft pending",
        docsByName.has("SIS_PROOF_BLOCKS_V1.md") ? "Proof blocks prepared" : "Proof packaging pending",
      ],
      status: "Active",
    },
    {
      name: "Website Conversion Path",
      summary: "Turn homepage, audit, and offer pages into a practical buyer journey.",
      evidence: [
        docsByName.has("SIS_HOMEPAGE_REWRITE.md") ? "Homepage rewrite drafted" : "Homepage rewrite missing",
        docsByName.has("SIS_DEV_BRIEF_HOMEPAGE_REPOSITION.md") ? "Homepage brief handed to developer" : "Developer brief missing",
      ],
      status: "Awaiting implementation",
    },
    {
      name: "Outbound Pipeline",
      summary: "Turn messaging into real prospecting, outreach, and tracked follow-up.",
      evidence: [
        docsByName.has("SIS_OUTREACH_SCRIPTS_V1.md") ? "Outreach scripts prepared" : "Outreach scripts missing",
        todo.some((task) => /prospect list/i.test(task.title)) ? "Prospect list still open" : "Prospect list task closed",
      ],
      status: todo.some((task) => /prospect list/i.test(task.title)) ? "Next up" : "Progressing",
    },
    {
      name: "Scorecard Engine",
      summary: "Make the scorecard a real qualifier and route into audit or conversations.",
      evidence: [
        docsByName.has("SIS_SCORECARD_DEVELOPMENT_PLAN.md") ? "Scorecard strategy mapped" : "Scorecard strategy missing",
        docsByName.has("SIS_DEV_BRIEF_SCORECARD_REFINEMENT.md") ? "Refinement brief ready" : "Refinement brief missing",
      ],
      status: "Ready for build",
    },
    {
      name: "Proof System",
      summary: "Package internal SIS/S&J proof into case studies, assets, and usable metrics.",
      evidence: [
        docsByName.has("SIS_CASE_STUDY_01_ONE_PAGER.md") ? "Client email one-pager ready" : "One-pager pending",
        docsByName.has("SIS_PROOF_THRESHOLDS_DRAFT.md") ? "Proof rules documented" : "Proof rules pending",
      ],
      status: "Strengthening",
    },
  ];
}

async function getMemory() {
  const checkedPaths = [
    path.join(WORKSPACE_ROOT, "MEMORY.md"),
    path.join(WORKSPACE_ROOT, "memory", new Date().toISOString().slice(0, 10) + ".md"),
  ];

  const snippets: MemorySnippet[] = [];

  for (const candidate of checkedPaths) {
    try {
      const content = await readText(candidate);
      const snippet = content
        .split("\n")
        .filter((line) => line.trim().startsWith("- ") || line.trim().startsWith("## "))
        .slice(0, 6)
        .join("\n");

      if (snippet) {
        snippets.push({ path: candidate, snippet });
      }
    } catch {
      // ignore
    }
  }

  return {
    available: snippets.length > 0,
    checkedPaths,
    snippets,
    note:
      snippets.length > 0
        ? "Showing accessible local memory excerpts only."
        : "No readable memory files were found in the expected local locations yet.",
  };
}

function getPlanning(board: BoardColumn[]) {
  const todo = board.find((column) => column.key === "todo")?.tasks ?? [];
  const inProgress = board.find((column) => column.key === "inProgress")?.tasks ?? [];
  const blocked = board.find((column) => column.key === "blocked")?.tasks ?? [];

  return [
    ...inProgress.slice(0, 3).map((task) => ({ title: task.title, lane: "In progress", note: "Already moving; keep visible." })),
    ...todo.slice(0, 5).map((task) => ({ title: task.title, lane: "Next up", note: "Highest-value queued work from the board." })),
    ...blocked.slice(0, 2).map((task) => ({ title: task.title, lane: "Blocked", note: "Needs input, tooling, or implementation access." })),
  ];
}

async function getHeartbeatMeta() {
  let frequency = "30m (main)";
  let summary = "Check SIS_KANBAN.md, pick the highest-leverage safe task, do the work before reporting, update the board, and prefer evidence over opinion.";

  try {
    const content = await readText(path.join(WORKSPACE_ROOT, "HEARTBEAT.md"));
    const frequencyMatch = content.match(/heartbeat/i);
    if (!frequencyMatch) {
      frequency = "Configured via OpenClaw";
    }

    const orderedLines = content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => /^\d+\./.test(line));

    if (orderedLines.length > 0) {
      summary = orderedLines
        .map((line) => line.replace(/^\d+\.\s*/, ""))
        .slice(0, 5)
        .join(" · ");
    }
  } catch {
    // keep defaults
  }

  return {
    frequency,
    lastChecked: null,
    status: "active",
    summary,
    source: path.join(WORKSPACE_ROOT, "HEARTBEAT.md"),
  };
}

function getHeartbeatActions() {
  return [
    "Check SIS_KANBAN.md",
    "Pick the highest-leverage safe task",
    "Do the task before reporting",
    "Update the board and add new tasks if discovered",
    "Prefer evidence-driven progress over opinion",
  ];
}

async function getSchedule() {
  const heartbeat = await getHeartbeatMeta();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return {
    heartbeat,
    cronJobs: [] as MissionControlData["cronJobs"],
    schedule: days.map((day) => ({
      day,
      items: [],
    })),
  };
}

export async function getMissionControlData(): Promise<MissionControlData> {
  const [board, docs, mission, memory, scheduleMeta] = await Promise.all([
    parseKanban(),
    listSisDocs(),
    getMission(),
    getMemory(),
    getSchedule(),
  ]);

  return {
    mission,
    board,
    docs,
    projects: await getProjects(board, docs),
    planning: getPlanning(board),
    memory,
    heartbeat: scheduleMeta.heartbeat,
    schedule: scheduleMeta.schedule,
    cronJobs: scheduleMeta.cronJobs,
  };
}
