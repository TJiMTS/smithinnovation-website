import { ClipboardCheck, Search, Wrench, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Score",
    price: "Free",
    description:
      "Take the AI Readiness Scorecard. 25 questions. 10 minutes. You'll know exactly where your firm stands and where the biggest opportunities are.",
  },
  {
    icon: Search,
    title: "Audit",
    price: "£3,500",
    description:
      "We spend two weeks inside your operations. We map every process, identify the top 5 automation opportunities, and show you the ROI for each.",
  },
  {
    icon: Wrench,
    title: "Build",
    price: "From £10,000",
    description:
      "We build the highest-impact automation from the audit. One workflow. Working within 8 weeks. Connected to your existing systems.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    price: "From £50,000",
    description:
      "When you're ready, we build the complete AI OS. 10-20 integrated workflows. Your firm operates differently.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="The Process"
          title="Start small. Scale when you're ready."
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
