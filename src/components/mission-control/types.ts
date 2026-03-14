export type TaskCard = { title: string; done: boolean };
export type BoardColumn = {
  key: "backlog" | "todo" | "inProgress" | "blocked" | "done";
  title: string;
  tasks: TaskCard[];
};
export type DocumentEntry = {
  name: string;
  path: string;
  modifiedAt: string;
  size: number;
};

export type MemorySnippet = { path: string; snippet: string };

export type MissionControlData = {
  mission: string;
  board: BoardColumn[];
  docs: DocumentEntry[];
  projects: Array<{
    name: string;
    summary: string;
    evidence: string[];
    status: string;
  }>;
  planning: Array<{
    title: string;
    lane: string;
    note: string;
  }>;
  memory: {
    available: boolean;
    checkedPaths: string[];
    snippets: Array<{ path: string; snippet: string }>;
    note: string;
  };
  heartbeat: {
    frequency: string;
    lastChecked: string | null;
    status: string;
    summary: string;
    source: string;
  };
  schedule: Array<{
    day: string;
    items: Array<{
      title: string;
      type: "heartbeat" | "cron";
      timeLabel: string;
      detail: string;
    }>;
  }>;
  cronJobs: Array<{
    title: string;
    schedule: string;
    status: string;
    detail: string;
  }>;
};
