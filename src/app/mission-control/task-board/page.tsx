import MissionControlShell from "@/components/mission-control/mission-control-shell";
import { getMissionControlData } from "@/lib/mission-control";

function visibleTasks(title: string, tasks: { title: string; done: boolean }[]) {
  if (title === "Done") return tasks.slice(0, 8);
  return tasks;
}

function columnTone(title: string) {
  switch (title) {
    case "Now":
      return "border-emerald-500/30 bg-emerald-500/8";
    case "Next":
      return "border-sky-500/30 bg-sky-500/8";
    case "Blocked":
      return "border-rose-500/30 bg-rose-500/8";
    case "Done":
      return "border-white/10 bg-white/5";
    default:
      return "border-white/10 bg-black/20";
  }
}

export default async function MissionControlTaskBoardPage() {
  const data = await getMissionControlData();

  return (
    <MissionControlShell title="Task Board" subtitle="Readable execution board for SIS">
      <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Task Board</p>
            <h2 className="mt-2 text-2xl font-semibold">Mission -> Goals -> Projects -> Tasks lives here at the task layer</h2>
          </div>
          <p className="max-w-md text-right text-sm text-white/50">
            Now should stay tight. Next should stay short. Done is intentionally trimmed so the board stays readable.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-7">
          {data.board.map((column) => {
            const tasks = visibleTasks(column.title, column.tasks);
            const hiddenCount = column.tasks.length - tasks.length;

            return (
              <div key={column.key} className={`rounded-[24px] border p-4 ${columnTone(column.title)}`}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{column.title}</h3>
                  <span className="rounded-full bg-black/20 px-2 py-1 text-xs text-white/65">{column.tasks.length}</span>
                </div>

                <div className="space-y-3">
                  {tasks.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-white/10 p-3 text-sm text-white/35">
                      Nothing here.
                    </div>
                  )}

                  {tasks.map((task) => (
                    <div key={task.title} className="rounded-2xl border border-white/8 bg-[#11151b] p-3 text-sm text-white/85 shadow-sm shadow-black/20">
                      <div className="flex items-start gap-3">
                        <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${task.done ? "bg-emerald-500/20 text-emerald-200" : "bg-white/8 text-white/50"}`}>
                          {task.done ? "✓" : "•"}
                        </span>
                        <p className="leading-6 break-words">{task.title}</p>
                      </div>
                    </div>
                  ))}

                  {hiddenCount > 0 && (
                    <div className="rounded-2xl border border-dashed border-white/10 p-3 text-xs text-white/45">
                      + {hiddenCount} more hidden to keep the board readable
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </MissionControlShell>
  );
}
