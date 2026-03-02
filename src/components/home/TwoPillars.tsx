import Link from "next/link";
import { Brain, Code } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const pillars = [
  {
    icon: Brain,
    title: "AI Automation",
    audience: "For professional services firms",
    body: "We map your workflows, identify what should be automated, and build an AI-native operating system that handles the repetitive work. Your team focuses on the work that actually requires their expertise.",
    emphasis:
      "This isn't a chatbot. It's not a plugin. It's an operating system.",
    cta: { label: "Learn more about AI Automation", href: "/ai-automation" },
  },
  {
    icon: Code,
    title: "App Development",
    audience: "For any business",
    body: "Whether you need an internal tool, a client-facing platform, or a product that thinks for itself, we build it. Every application ships with intelligent features designed in, not bolted on after the fact.",
    emphasis: "Custom web and mobile applications with AI built in from day one.",
    cta: { label: "See our app development work", href: "/app-development" },
  },
];

export default function TwoPillars() {
  return (
    <section id="pillars" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Our Services"
          title="Two ways we build what you need"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group border border-card-border bg-card-bg rounded-2xl p-8 sm:p-10 hover:border-card-hover-border hover:bg-card-hover-bg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>

              <p className="text-accent font-mono text-xs tracking-widest uppercase mb-2">
                {pillar.audience}
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {pillar.title}
              </h3>

              <p className="text-muted leading-relaxed mb-4">{pillar.body}</p>

              <p className="text-foreground font-medium text-sm mb-8">
                {pillar.emphasis}
              </p>

              <Link
                href={pillar.cta.href}
                className="text-accent hover:text-accent-hover font-medium text-sm transition-colors inline-flex items-center gap-1"
              >
                {pillar.cta.label}
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
