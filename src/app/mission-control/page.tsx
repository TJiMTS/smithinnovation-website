import MissionControlShell from "@/components/mission-control/mission-control-shell";
import { getMissionControlData } from "@/lib/mission-control";

export default async function MissionControlOverviewPage() {
  const data = await getMissionControlData();

  return (
    <MissionControlShell title="Overview" subtitle="Mission, pulse, and what matters now">
          <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Mission</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight">{data.mission}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
                This deck turns the SIS board, proof files, planning docs, and execution assets into one local working view.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {[
                { label: "Done", value: data.board.find((c) => c.key === "done")?.tasks.length ?? 0 },
                { label: "Queued", value: data.board.find((c) => c.key === "todo")?.tasks.length ?? 0 },
                { label: "Blocked", value: data.board.find((c) => c.key === "blocked")?.tasks.length ?? 0 },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <p className="text-sm text-white/60">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 xl:grid-cols-2">
            {data.projects.slice(0, 4).map((project) => (
              <article key={project.name} className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-medium">{project.name}</h3>
                  <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-100">{project.status}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">{project.summary}</p>
              </article>
            ))}
          </section>
    </MissionControlShell>
  );
}
