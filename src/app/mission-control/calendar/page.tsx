import MissionControlShell from "@/components/mission-control/mission-control-shell";
import { getMissionControlData } from "@/lib/mission-control";

const palette = [
  "border-orange-500/45 bg-orange-500/14 text-orange-100",
  "border-zinc-500/45 bg-zinc-500/14 text-zinc-100",
  "border-rose-500/45 bg-rose-500/14 text-rose-100",
  "border-emerald-500/45 bg-emerald-500/14 text-emerald-100",
  "border-amber-500/45 bg-amber-500/14 text-amber-100",
  "border-slate-500/45 bg-slate-500/14 text-slate-100",
  "border-indigo-500/45 bg-indigo-500/14 text-indigo-100",
  "border-violet-500/45 bg-violet-500/14 text-violet-100",
];

function colorForIndex(index: number) {
  return palette[index % palette.length];
}

export default async function MissionControlCalendarPage() {
  const data = await getMissionControlData();

  return (
    <MissionControlShell
      title="Calendar"
      subtitle="Scheduled tasks"
    >
      <section className="rounded-[28px] border border-white/10 bg-[#0d1015] p-5 shadow-2xl shadow-black/20">
        <div className="flex flex-col gap-4 border-b border-white/8 pb-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">Scheduled Tasks</h3>
            <p className="mt-2 text-sm text-white/50">SIS automated routines and verified recurring checks.</p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-2xl border border-white/8 bg-black/20 p-1 text-sm text-white/60">
            <button className="rounded-xl bg-white/10 px-4 py-2 text-white">Week</button>
            <button className="rounded-xl px-4 py-2 text-white/45">Today</button>
            <button className="rounded-xl px-3 py-2 text-white/45">↻</button>
          </div>
        </div>

        <div className="mt-5 rounded-[24px] border border-white/8 bg-[#14181f] p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-200">⚡</span>
            Always Running
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-xs text-indigo-100">
              Heartbeat · {data.heartbeat.frequency.trim()}
            </div>
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-100">
              Status · {data.heartbeat.status}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 xl:grid-cols-7">
          {data.schedule.map((day) => (
            <div key={day.day} className="rounded-[22px] border border-white/8 bg-[#14181f] p-3">
              <div className="border-b border-white/8 pb-3">
                <p className="text-sm font-medium text-white/80">{day.day.slice(0, 3)}</p>
              </div>

              <div className="mt-3 space-y-3">
                {day.items.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-white/8 bg-black/10 p-3 text-[11px] text-white/35">
                    No scheduled jobs
                  </div>
                ) : (
                  day.items.map((item, index) => (
                    <div
                      key={`${day.day}-${item.title}-${index}`}
                      className={`rounded-2xl border px-3 py-3 ${colorForIndex(index)}`}
                    >
                      <p className="truncate text-sm font-medium">{item.title}</p>
                      <p className="mt-1 text-[11px] opacity-75">{item.timeLabel}</p>
                      <p className="mt-2 line-clamp-3 text-[11px] leading-5 opacity-80">{item.detail}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[24px] border border-white/8 bg-[#11151b] p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">Heartbeat</p>
          <h3 className="mt-3 text-xl font-semibold text-white">What is being checked</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Frequency</p>
              <p className="mt-2 text-base font-medium text-white">{data.heartbeat.frequency.trim()}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Mode</p>
              <p className="mt-2 text-base font-medium text-white">Always on</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Source</p>
              <p className="mt-2 text-sm font-medium text-white/80">HEARTBEAT.md</p>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/8 bg-[#11151b] p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">Heartbeat preview</p>
          <pre className="mt-4 whitespace-pre-wrap rounded-[18px] bg-[#090c11] p-4 font-mono text-xs leading-6 text-white/80">
            {data.heartbeat.summary}
          </pre>
        </div>
      </section>

      <section className="rounded-[24px] border border-white/8 bg-[#11151b] p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">Cron jobs</h3>
          <span className="text-sm text-white/45">Verified local jobs only</span>
        </div>

        {data.cronJobs.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-white/10 p-4 text-sm text-white/60">
            No cron jobs are currently confirmed from local OpenClaw data. Heartbeat is the only verified recurring mechanism visible right now.
          </div>
        ) : (
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {data.cronJobs.map((job) => (
              <div key={`${job.title}-${job.schedule}`} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <p className="text-sm font-medium text-white">{job.title}</p>
                <p className="mt-1 text-xs text-white/45">{job.schedule}</p>
                <p className="mt-2 text-xs text-white/65">{job.detail}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </MissionControlShell>
  );
}
