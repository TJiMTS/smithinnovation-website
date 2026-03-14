import { Building2, Hammer, BarChart3, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: Building2,
    title: "Built inside a real practice.",
    body: "We run a live accountancy practice on the same kind of systems we build, so the proof comes from real operational pressure rather than theory.",
  },
  {
    icon: Hammer,
    title: "Builder mentality.",
    body: "We design and build systems around the workflow itself. That means fewer compromises, better fit, and less dependence on generic software workarounds.",
  },
  {
    icon: ShieldCheck,
    title: "Human in the loop.",
    body: "Judgement stays with your team where it matters. We automate the repetitive work and keep human approval visible in client-facing and risk-sensitive tasks.",
  },
  {
    icon: BarChart3,
    title: "Comfortable in regulated work.",
    body: "Accountancy and bookkeeping firms operate in detail-heavy environments where trust, consistency, and auditability matter. Our systems are designed with that reality in mind.",
  },
];

export default function WhySIS() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Why SIS"
          title="Why firms choose SIS"
          subtitle="The positioning is narrow on purpose: real operations, careful automation, and a clear first workflow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="border border-card-border bg-card-bg rounded-2xl p-8 hover:border-card-hover-border hover:bg-card-hover-bg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <reason.icon className="w-5 h-5 text-accent" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">
                {reason.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
