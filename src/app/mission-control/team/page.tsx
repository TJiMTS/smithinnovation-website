import MissionControlShell from "@/components/mission-control/mission-control-shell";

const hierarchy = {
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
          focus: "Website implementation, scorecard refinement, feature delivery, and Codex agent coordination",
          children: [
            {
              name: "Codex Agent — Homepage Reposition",
              role: "Implementation subagent",
              status: "Running",
              focus: "Homepage reposition implementation",
              children: [],
            },
            {
              name: "Codex Agent — AI Workflow Audit Page",
              role: "Implementation subagent",
              status: "Running",
              focus: "AI Workflow Audit landing page",
              children: [],
            },
            {
              name: "Codex Agent — Client Email Intelligence Page",
              role: "Implementation subagent",
              status: "Running",
              focus: "Client Email Intelligence landing page",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

type TeamNode = typeof hierarchy;

function NodeCard({ node, depth = 0 }: { node: TeamNode; depth?: number }) {
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
    <MissionControlShell title="Team" subtitle="People and agents building SIS">
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
