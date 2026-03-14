import MissionControlShell from "@/components/mission-control/mission-control-shell";

type ActiveProject = {
  name: string;
  status: string;
  summary: string;
};

type TeamNode = {
  name: string;
  role: string;
  status: string;
  focus: string;
  activeProjects?: ActiveProject[];
  children: TeamNode[];
};

const hierarchy: TeamNode = {
  name: "TJ Smith",
  role: "Owner / Final approver",
  status: "Directing company buildout",
  focus: "Commercial judgement, approvals, proof thresholds",
  children: [
    {
      name: "Shiloh Ward",
      role: "COO / Operator",
      status: "Active",
      focus: "Strategy, GTM system, mission control, outreach assets, and orchestration",
      children: [
        {
          name: "Zion Forge",
          role: "Developer",
          status: "Implementation lane",
          focus: "Website implementation, scorecard refinement, feature delivery, and delegated coding execution",
          activeProjects: [
            {
              name: "Homepage Reposition",
              status: "Running",
              summary: "Implement the new positioning and homepage conversion path.",
            },
            {
              name: "AI Workflow Audit Page",
              status: "Running",
              summary: "Build the focused audit landing page from the approved brief.",
            },
            {
              name: "Client Email Intelligence Page",
              status: "Running",
              summary: "Build the spearhead service page with trust-focused messaging.",
            },
          ],
          children: [],
        },
      ],
    },
  ],
};

function NodeCard({ node, depth = 0 }: { node: TeamNode; depth?: number }) {
  const projects = node.activeProjects ?? [];

  return (
    <div className="space-y-4">
      <div
        className="rounded-[24px] border border-white/8 bg-black/20 p-5"
        style={{ marginLeft: depth * 24 }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-medium text-white">{node.name}</h3>
            <p className="mt-1 text-sm text-white/50">{node.role}</p>
          </div>
          <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-100">
            {node.status}
          </span>
        </div>
        <p className="mt-4 rounded-2xl bg-white/5 px-4 py-3 text-sm leading-6 text-white/75">
          <strong className="font-medium text-white">Focus:</strong> {node.focus}
        </p>

        {projects.length > 0 && (
          <div className="mt-4 rounded-2xl border border-white/8 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">Active projects</p>
            <div className="mt-3 space-y-3">
              {projects.map((project) => (
                <div key={project.name} className="rounded-2xl bg-black/20 px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-white">{project.name}</p>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-100">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/60">{project.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {node.children.length > 0 && (
        <div className="relative ml-4 border-l border-white/10 pl-4">
          {node.children.map((child) => (
            <NodeCard key={child.name} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MissionControlTeamPage() {
  return (
    <MissionControlShell title="Team" subtitle="People and delegated work building SIS">
      <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Hierarchy</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Current operating structure</h2>
        </div>
        <NodeCard node={hierarchy} />
      </section>
    </MissionControlShell>
  );
}
