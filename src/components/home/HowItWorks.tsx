import { ClipboardCheck, Search, Wrench, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Scorecard",
    price: "Step 1",
    description:
      "Take the AI Readiness Scorecard to see where repetitive work, poor response flow, and operational drag are costing your firm the most.",
  },
  {
    icon: Search,
    title: "Audit",
    price: "Step 2",
    description:
      "Book an AI Workflow Audit and we map the first high-value workflow worth fixing, along with the systems and handoffs around it.",
  },
  {
    icon: Wrench,
    title: "First workflow",
    price: "Step 3",
    description:
      "We implement one supervised workflow, connect it to your existing tools, and prove the value in live operations before anything expands.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    price: "Step 4",
    description:
      "If the first workflow earns its place, we extend the system into other operational bottlenecks across the firm.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="The Process"
          title="Start with one workflow. Prove the value. Expand from there."
          subtitle="The buyer journey should feel low-risk and concrete from the first click."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative border border-card-border bg-card-bg rounded-2xl p-6 sm:p-8"
            >
              {/* Step number */}
              <div className="text-accent/20 font-extrabold text-6xl absolute top-4 right-6 select-none">
                {i + 1}
              </div>

              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  {step.title}
                </h3>

                <p className="text-accent font-mono text-xs tracking-wide mb-4">
                  {step.price}
                </p>

                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
