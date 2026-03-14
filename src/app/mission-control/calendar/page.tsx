import MissionControlShell from "@/components/mission-control/mission-control-shell";
import { getMissionControlData } from "@/lib/mission-control";

function formatLastChecked(value: string | null) {
  if (!value) return "No heartbeat result found yet";
  return new Date(value).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}

export default async function MissionControlCalendarPage() {
  const data = await getMissionControlData();

  return (
    <MissionControlShell title="Calendar" subtitle="Weekly view for heartbeat and scheduled work">
      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">Heartbeat</p>
          <h3 className="mt-3 text-2xl font-semibold">Main heartbeat status</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Frequency</p>
              <p className="mt-2 text-lg font-medium">{data.heartbeat.frequency}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Last checker</p>
              <p className="mt-2 text-lg font-medium">main session heartbeat</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Last result</p>
              <p className="mt-2 text-lg font-medium">{data.heartbeat.status}</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-white/5 p-4 text-sm text-white/70">
            <p><strong className="text-white">Last heartbeat:</strong> {formatLastChecked(data.heartbeat.lastChecked)}</p>
            <p className="mt-2"><strong className="text-white">Source:</strong> {data.heartbeat.source}</p>
          </div>
        </div>
        <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">What heartbeat does</p>
          <pre className="mt-4 whitespace-pre-wrap rounded-[18px] bg-[#05070b] p-4 font-mono text-xs leading-6 text-white/80">{data.heartbeat.summary}</pre>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-7">
        {data.schedule.map((day) => (
          <div key={day.day} className="rounded-[24px] border border-white/8 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">{day.day}</p>
            <div className="mt-4 space-y-3">
              {day.items.map((item) => (
                <div key={`${day.day}-${item.title}-${item.timeLabel}`} className="rounded-2xl bg-white/5 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <span className="rounded-full bg-amber-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-100">{item.type}</span>
                  </div>
                  <p className="mt-2 text-xs text-white/45">{item.timeLabel}</p>
                  <p className="mt-2 text-xs leading-5 text-white/65">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-[24px] border border-white/8 bg-black/20 p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">Cron jobs</h3>
          <span className="text-sm text-white/45">Real data only</span>
        </div>
        {data.cronJobs.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-white/10 p-4 text-sm text-white/60">
            No cron jobs are currently confirmed from local OpenClaw data. Heartbeat is the only verified recurring mechanism visible right now.
          </div>
        ) : null}
      </section>
    </MissionControlShell>
  );
}
