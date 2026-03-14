"use client";

import MissionControlShell from "@/components/mission-control/mission-control-shell";
import { ErrorCard, LoadingCard, useMissionControlData } from "@/components/mission-control/data-loader";

export default function MissionControlProjectsPage() {
  const { data, error } = useMissionControlData();

  return (
    <MissionControlShell title="Projects" subtitle="Major SIS tracks and evidence">
      {error && <ErrorCard error={error} />}
      {!data && !error && <LoadingCard />}
      {data && (
        <section className="grid gap-4 xl:grid-cols-2">
          {data.projects.map((project) => (
            <article key={project.name} className="rounded-[24px] border border-white/8 bg-black/20 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-medium">{project.name}</h3>
                <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-100">{project.status}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">{project.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {project.evidence.map((line) => (
                  <li key={line} className="rounded-2xl bg-white/5 px-3 py-2">{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      )}
    </MissionControlShell>
  );
}
