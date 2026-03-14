"use client";

import { useEffect, useMemo, useState } from "react";

type TaskCard = { title: string; done: boolean };
type BoardColumn = {
  key: "backlog" | "todo" | "inProgress" | "blocked" | "done";
  title: string;
  tasks: TaskCard[];
};
type DocumentEntry = {
  name: string;
  path: string;
  modifiedAt: string;
  size: number;
};
type MissionControlData = {
  mission: string;
  board: BoardColumn[];
  docs: DocumentEntry[];
  projects: Array<{
    name: string;
    summary: string;
    evidence: string[];
    status: string;
  }>;
  team: Array<{
    name: string;
    role: string;
    status: string;
    focus: string;
  }>;
  planning: Array<{
    title: string;
    lane: string;
    note: string;
  }>;
  office: Array<{
    name: string;
    zone: string;
    detail: string;
  }>;
  memory: {
    available: boolean;
    checkedPaths: string[];
    snippets: Array<{ path: string; snippet: string }>;
    note: string;
  };
};

const sections = [
  { id: "overview", label: "Mission" },
  { id: "task-board", label: "Task Board" },
  { id: "calendar", label: "Calendar" },
  { id: "projects", label: "Projects" },
  { id: "docs", label: "Docs" },
  { id: "memory", label: "Memory" },
  { id: "team", label: "Team" },
  { id: "office", label: "Office" },
] as const;

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

export default function MissionControlClient() {
  const [data, setData] = useState<MissionControlData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [docQuery, setDocQuery] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [docContent, setDocContent] = useState<string>("");
  const [docLoading, setDocLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add("mission-control-mode");
    return () => document.body.classList.remove("mission-control-mode");
  }, []);

  useEffect(() => {
    fetch("/api/mission-control")
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load mission control data.");
        const payload = (await response.json()) as MissionControlData;
        setData(payload);
        if (payload.docs[0]) setSelectedDoc(payload.docs[0].name);
      })
      .catch((err: Error) => setError(err.message));
  }, []);

  useEffect(() => {
    if (!selectedDoc) return;
    setDocLoading(true);
    fetch(`/api/mission-control/doc?name=${encodeURIComponent(selectedDoc)}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load document preview.");
        const payload = (await response.json()) as { content: string };
        setDocContent(payload.content);
      })
      .catch((err: Error) => setDocContent(`Failed to load document: ${err.message}`))
      .finally(() => setDocLoading(false));
  }, [selectedDoc]);

  const filteredDocs = useMemo(() => {
    if (!data) return [];
    const query = docQuery.trim().toLowerCase();
    if (!query) return data.docs;
    return data.docs.filter((doc) => doc.name.toLowerCase().includes(query));
  }, [data, docQuery]);

  const doneCount = data?.board.find((column) => column.key === "done")?.tasks.length ?? 0;
  const todoCount = data?.board.find((column) => column.key === "todo")?.tasks.length ?? 0;
  const blockedCount = data?.board.find((column) => column.key === "blocked")?.tasks.length ?? 0;

  return (
    <div className="min-h-screen bg-[#070b11] text-white">
      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 py-6 lg:px-6">
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-64 shrink-0 rounded-3xl border border-white/10 bg-white/5 p-5 lg:block">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Mission Control</p>
            <h1 className="mt-3 text-2xl font-semibold">SIS Ops Deck</h1>
            <p className="mt-2 text-sm text-white/60">
              Local dashboard for task flow, proof, docs, and execution state.
            </p>
          </div>

          <nav className="space-y-2 text-sm">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block rounded-2xl px-3 py-2 text-white/70 transition hover:bg-white/8 hover:text-white"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-100">
            <p className="font-medium">Live pulse</p>
            <div className="mt-3 space-y-2 text-amber-50/80">
              <p>{doneCount} tasks completed</p>
              <p>{todoCount} queued next</p>
              <p>{blockedCount} blockers visible</p>
            </div>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          {error && (
            <section className="rounded-3xl border border-red-400/30 bg-red-500/10 p-6 text-red-100">
              {error}
            </section>
          )}

          {!data && !error && (
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70">
              Loading mission control...
            </section>
          )}

          {data && (
            <>
              <section id="overview" className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(140deg,rgba(217,119,6,0.18),rgba(255,255,255,0.03))] p-6 shadow-2xl shadow-black/20">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Mission</p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight">
                    {data.mission}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
                    This deck turns the SIS board, proof files, planning docs, and execution assets into one local working view.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                  {[
                    { label: "Done", value: doneCount, tone: "from-emerald-500/30 to-emerald-400/5" },
                    { label: "Queued", value: todoCount, tone: "from-sky-500/30 to-sky-400/5" },
                    { label: "Blocked", value: blockedCount, tone: "from-rose-500/30 to-rose-400/5" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${stat.tone} p-5`}
                    >
                      <p className="text-sm text-white/60">{stat.label}</p>
                      <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="task-board" className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Task Board</p>
                    <h2 className="mt-2 text-2xl font-semibold">Live board from SIS_KANBAN.md</h2>
                  </div>
                  <p className="text-sm text-white/50">Read-only local view</p>
                </div>

                <div className="grid gap-4 xl:grid-cols-5">
                  {data.board.map((column) => (
                    <div key={column.key} className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-medium">{column.title}</h3>
                        <span className="rounded-full bg-white/8 px-2 py-1 text-xs text-white/60">
                          {column.tasks.length}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {column.tasks.length === 0 && (
                          <div className="rounded-2xl border border-dashed border-white/10 p-3 text-sm text-white/35">
                            Nothing here.
                          </div>
                        )}
                        {column.tasks.map((task) => (
                          <div key={task.title} className="rounded-2xl border border-white/8 bg-white/5 p-3 text-sm text-white/80">
                            <div className="flex items-start gap-3">
                              <span
                                className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                                  task.done ? "bg-emerald-500/20 text-emerald-200" : "bg-white/8 text-white/50"
                                }`}
                              >
                                {task.done ? "✓" : "•"}
                              </span>
                              <p>{task.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="calendar" className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Calendar</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-semibold">Planned work, not fake cron data</h2>
                  <p className="max-w-xl text-right text-sm text-white/50">
                    This view is derived from the board and planning docs. It shows what should happen next, without pretending to have real scheduler integrations.
                  </p>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {data.planning.map((item) => (
                    <div key={`${item.lane}-${item.title}`} className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">{item.lane}</p>
                      <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/60">{item.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="projects" className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Projects</p>
                <h2 className="mt-2 text-2xl font-semibold">Major SIS tracks</h2>
                <div className="mt-6 grid gap-4 xl:grid-cols-2">
                  {data.projects.map((project) => (
                    <article key={project.name} className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-medium">{project.name}</h3>
                        <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-100">
                          {project.status}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/65">{project.summary}</p>
                      <ul className="mt-4 space-y-2 text-sm text-white/80">
                        {project.evidence.map((line) => (
                          <li key={line} className="rounded-2xl bg-white/5 px-3 py-2">
                            {line}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section id="docs" className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Docs</p>
                    <h2 className="mt-2 text-2xl font-semibold">SIS source documents</h2>
                  </div>
                  <input
                    value={docQuery}
                    onChange={(event) => setDocQuery(event.target.value)}
                    placeholder="Search docs..."
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 lg:max-w-xs"
                  />
                </div>
                <div className="mt-6 grid gap-4 xl:grid-cols-[380px_1fr]">
                  <div className="max-h-[680px] space-y-3 overflow-auto pr-1">
                    {filteredDocs.map((doc) => (
                      <button
                        key={doc.name}
                        onClick={() => setSelectedDoc(doc.name)}
                        className={`w-full rounded-[22px] border p-4 text-left transition ${
                          selectedDoc === doc.name
                            ? "border-amber-400/40 bg-amber-400/10"
                            : "border-white/8 bg-black/20 hover:border-white/20"
                        }`}
                      >
                        <p className="font-medium">{doc.name}</p>
                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-white/45">
                          <span>{formatDate(doc.modifiedAt)}</span>
                          <span>{formatBytes(doc.size)}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="min-h-[680px] rounded-[24px] border border-white/8 bg-black/20 p-5">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="text-lg font-medium">{selectedDoc ?? "Select a document"}</h3>
                      {docLoading && <span className="text-sm text-white/40">Loading…</span>}
                    </div>
                    <pre className="max-h-[610px] overflow-auto whitespace-pre-wrap rounded-[18px] bg-[#05070b] p-4 font-mono text-xs leading-6 text-white/80">
                      {selectedDoc ? docContent : "Pick a document from the left to preview it."}
                    </pre>
                  </div>
                </div>
              </section>

              <section id="memory" className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Memory</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-semibold">Accessible local memory</h2>
                  <p className="text-sm text-white/50">{data.memory.note}</p>
                </div>
                <div className="mt-6 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4">
                    {data.memory.snippets.length > 0 ? (
                      data.memory.snippets.map((snippet) => (
                        <article key={snippet.path} className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                          <p className="text-xs uppercase tracking-[0.25em] text-white/40">{snippet.path}</p>
                          <pre className="mt-4 whitespace-pre-wrap rounded-[18px] bg-[#05070b] p-4 font-mono text-xs leading-6 text-white/80">
                            {snippet.snippet}
                          </pre>
                        </article>
                      ))
                    ) : (
                      <div className="rounded-[24px] border border-dashed border-white/12 bg-black/20 p-5 text-sm leading-7 text-white/60">
                        No real memory snippets are available yet from the expected local files. Once the files exist in the accessible workspace paths, they will show here.
                      </div>
                    )}
                  </div>
                  <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                    <p className="text-sm font-medium text-white/80">Checked locations</p>
                    <ul className="mt-4 space-y-3 text-sm text-white/55">
                      {data.memory.checkedPaths.map((candidate) => (
                        <li key={candidate} className="rounded-2xl bg-white/5 px-3 py-2">
                          {candidate}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section id="team" className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Team</p>
                <h2 className="mt-2 text-2xl font-semibold">Who is doing what</h2>
                <div className="mt-6 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4">
                    {data.team.map((person) => (
                      <article key={person.name} className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="text-lg font-medium">{person.name}</h3>
                          <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/65">
                            {person.role}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-white/55">{person.status}</p>
                        <p className="mt-4 rounded-2xl bg-white/5 px-4 py-3 text-sm leading-6 text-white/75">
                          <strong className="font-medium text-white">Focus:</strong> {person.focus}
                        </p>
                      </article>
                    ))}
                  </div>
                  <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">Mission statement</p>
                    <p className="mt-4 text-lg leading-8 text-white/85">{data.mission}</p>
                  </div>
                </div>
              </section>

              <section id="office" className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Office</p>
                <h2 className="mt-2 text-2xl font-semibold">Simple local activity view</h2>
                <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
                  <div className="rounded-[28px] border border-white/8 bg-[#0b1018] p-6">
                    <div className="grid min-h-[360px] grid-cols-2 gap-6 md:grid-cols-3">
                      {data.office.map((station, index) => (
                        <div
                          key={station.name}
                          className={`relative rounded-[24px] border border-white/8 p-4 ${
                            index === 0 ? "bg-amber-400/10" : index === 1 ? "bg-sky-400/10" : "bg-emerald-400/10"
                          }`}
                        >
                          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-black/20 text-lg font-semibold">
                            {station.name.slice(0, 1)}
                          </div>
                          <p className="text-sm uppercase tracking-[0.25em] text-white/40">{station.zone}</p>
                          <h3 className="mt-3 text-xl font-medium">{station.name}</h3>
                          <p className="mt-3 text-sm leading-6 text-white/70">{station.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                    <p className="text-sm font-medium text-white/85">Why this screen exists</p>
                    <p className="mt-4 text-sm leading-7 text-white/60">
                      This is deliberately a lightweight local status view. It is meant to feel alive and useful without pretending to monitor hidden processes that are not actually wired up.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
