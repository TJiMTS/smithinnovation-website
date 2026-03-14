import MissionControlShell from "@/components/mission-control/mission-control-shell";
import { getMissionControlData } from "@/lib/mission-control";

export default async function MissionControlTaskBoardPage() {
  const data = await getMissionControlData();

  return (
    <MissionControlShell title="Task Board" subtitle="Live board from SIS_KANBAN.md">
      <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 xl:grid-cols-5">
          {data.board.map((column) => (
            <div key={column.key} className="rounded-[24px] border border-white/8 bg-black/20 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-medium">{column.title}</h3>
                <span className="rounded-full bg-white/8 px-2 py-1 text-xs text-white/60">{column.tasks.length}</span>
              </div>
              <div className="space-y-3">
                {column.tasks.map((task) => (
                  <div key={task.title} className="rounded-2xl border border-white/8 bg-white/5 p-3 text-sm text-white/80">
                    <div className="flex items-start gap-3">
                      <span className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs ${task.done ? "bg-emerald-500/20 text-emerald-200" : "bg-white/8 text-white/50"}`}>
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
    </MissionControlShell>
  );
}
