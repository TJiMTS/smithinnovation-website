import { Building2, Hammer, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: Building2,
    title: "Operators, not vendors.",
    body: "Most AI companies sell technology. We run a professional services firm on the systems we build. The difference shows in every decision, every edge case, every workflow.",
  },
  {
    icon: Hammer,
    title: "Builders, not integrators.",
    body: "We write the code. Custom applications, custom automations, custom systems. Not third-party tools stitched together with API wrappers.",
  },
  {
    icon: BarChart3,
    title: "Evidence, not promises.",
    body: 'No "potential ROI" projections. No "up to X% improvement" claims. Real systems running real operations. The proof exists before the sales conversation starts.',
  },
];

export default function WhySIS() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="The Difference" title="Why firms choose SIS" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
