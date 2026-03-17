import MissionControlShell from "@/components/mission-control/mission-control-shell";

const goals = [
  {
    name: "Generate qualified pipeline",
    done: "At least one repeatable channel is producing qualified conversations.",
    projects: [
      {
        name: "Wave 1 prospect enrichment",
        tasks: [
          "Add named contacts and direct emails for the best first 5 Wave 1 targets",
          "Add LinkedIn profile URLs for the best first 5 Wave 1 targets",
          "Add software/stack clues where visible on-site",
        ],
      },
      {
        name: "Wave 1 personalised outreach pack",
        tasks: [
          "Prepare the next 5 personalised outreach messages",
          "Keep the first 3 send-ready",
        ],
      },
    ],
  },
  {
    name: "Build trust surfaces that convert",
    done: "Website, LinkedIn, and proof assets make SIS feel specific, credible, and ready.",
    projects: [
      {
        name: "LinkedIn readiness",
        tasks: ["Publish at least 5 LinkedIn posts before active outreach/traffic push"],
      },
      {
        name: "Proof block site integration",
        tasks: [
          "Convert Admin & Compliance one-pager into website proof block or downloadable PDF asset",
          "Convert Bookkeeping Operations one-pager into website proof block or downloadable PDF asset",
        ],
      },
    ],
  },
  {
    name: "Package the offer clearly",
    done: "The spearhead and secondary offers are clear, specific, and easy to buy into.",
    projects: [
      {
        name: "Homepage / offer packaging",
        tasks: ["Completed locally and committed in website repo"],
      },
      {
        name: "Workflow offer pages",
        tasks: ["AI Workflow Audit page live locally", "Client Email Intelligence page live locally"],
      },
    ],
  },
  {
    name: "Build proof-backed sales readiness",
    done: "Key claims and workflows have evidence, caveats, and usable public-safe wording.",
    projects: [
      {
        name: "Initial 5 evidence packs",
        tasks: ["Strengthen the initial 5 evidence packs with source references and sign-off details"],
      },
      {
        name: "Initial 3 workflow measurement records",
        tasks: ["Strengthen the first 3 workflow measurement records with source references and sign-off details"],
      },
    ],
  },
];

export default function MissionControlProjectsPage() {
  return (
    <MissionControlShell title="Goals & Projects" subtitle="Visual hierarchy for how SIS work fits together">
      <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <div className="mb-6 grid gap-4 lg:grid-cols-4">
          <div className="rounded-[24px] border border-amber-500/25 bg-amber-500/10 p-4 lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Mission</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Build Smith Innovation Studio into a real, growing company.</h2>
          </div>
        </div>

        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={goal.name} className="rounded-[26px] border border-white/10 bg-[#0f141b] p-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Goal {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{goal.name}</h3>
                </div>
                <div className="max-w-xl rounded-2xl bg-white/5 px-4 py-3 text-sm leading-6 text-white/70">
                  <strong className="text-white">Definition of done:</strong> {goal.done}
                </div>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-2">
                {goal.projects.map((project) => (
                  <div key={project.name} className="rounded-[22px] border border-white/8 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-300/80">Project</p>
                    <h4 className="mt-2 text-lg font-medium text-white">{project.name}</h4>
                    <div className="mt-4 space-y-2">
                      {project.tasks.map((task) => (
                        <div key={task} className="rounded-2xl bg-white/5 px-3 py-3 text-sm leading-6 text-white/80">
                          {task}
                        </div>
                      ))}
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
