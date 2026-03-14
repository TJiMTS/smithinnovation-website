import MissionControlShell from "@/components/mission-control/mission-control-shell";
import { getMissionControlData } from "@/lib/mission-control";

export default async function MissionControlMemoryPage() {
  const data = await getMissionControlData();

  return (
    <MissionControlShell title="Memory" subtitle="Accessible local memory and recent snippets">
      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {data.memory.snippets.length > 0 ? (
            data.memory.snippets.map((snippet) => (
              <article key={snippet.path} className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">{snippet.path}</p>
                <pre className="mt-4 whitespace-pre-wrap rounded-[18px] bg-[#05070b] p-4 font-mono text-xs leading-6 text-white/80">{snippet.snippet}</pre>
              </article>
            ))
          ) : (
            <div className="rounded-[24px] border border-dashed border-white/12 bg-black/20 p-5 text-sm leading-7 text-white/60">
              No real memory snippets are available yet from the expected local files.
            </div>
          )}
        </div>
        <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
          <p className="text-sm font-medium text-white/80">Checked locations</p>
          <ul className="mt-4 space-y-3 text-sm text-white/55">
            {data.memory.checkedPaths.map((candidate) => (
              <li key={candidate} className="rounded-2xl bg-white/5 px-3 py-2">{candidate}</li>
            ))}
          </ul>
        </div>
      </section>
    </MissionControlShell>
  );
}
