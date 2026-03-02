import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Sparkles,
  Search,
  Paintbrush,
  Code,
  Rocket,
  ExternalLink,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Custom App Development — Web, Mobile & AI-Native Apps",
  description:
    "Custom web and mobile applications with AI built in from day one. From internal tools to full products. Shipped, running, in production.",
};

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full-stack web applications for businesses that have outgrown spreadsheets and off-the-shelf tools. Internal systems, client portals, dashboards, workflow platforms.",
    price: "From £15,000",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "iOS and Android. Native or cross-platform. Built for users who need to work from anywhere.",
    price: "From £20,000",
  },
  {
    icon: Sparkles,
    title: "AI-Native Applications",
    description:
      "Applications where intelligence isn't a feature, it's the foundation. Natural language interfaces, predictive capabilities, adaptive behaviour. Software that gets better the more you use it.",
    price: "From £25,000",
  },
];

const portfolio = [
  {
    name: "First Things First",
    description:
      "A productivity and screen lock app. Discipline meets technology.",
    status: "Live on iOS and Android",
  },
  {
    name: "Financial IQ",
    description:
      "Personal finance education and management. Making financial literacy accessible.",
    status: "Live in production",
  },
  {
    name: "Church CRM",
    description:
      "Church management and community engagement. Purpose-built for organisations that need trust and simplicity.",
    status: "Live in production",
  },
];

const processSteps = [
  {
    icon: Search,
    number: "1",
    title: "Discovery",
    timeline: "Week 1-2",
    body: "We understand your problem before we write a line of code. What does the application need to do? Who uses it? What does success look like? We challenge assumptions here, not after the build.",
  },
  {
    icon: Paintbrush,
    number: "2",
    title: "Design",
    timeline: "Week 2-4",
    body: "UX and UI. Wireframes first, then visual design. You see and approve every screen before development starts. AI features are designed in at this stage, not bolted on later.",
  },
  {
    icon: Code,
    number: "3",
    title: "Build",
    timeline: "Week 4-12+",
    body: "Development in sprints. You see working software every two weeks. Feedback loops are short. Changes are cheap at this stage and expensive later, so we get it right here.",
  },
  {
    icon: Rocket,
    number: "4",
    title: "Launch",
    timeline: "Week 1-2 after build",
    body: "Testing, deployment, and handover. Staff training if needed. 30 days of post-launch support included. We don't disappear after delivery.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Custom applications.
            <br />
            <span className="text-accent">AI built in from day one.</span>
          </h1>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Web apps. Mobile apps. Applications that think. We build software
            that does exactly what you need, with intelligence designed in, not
            added later.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200"
          >
            Tell us what you need
          </Link>
        </div>
      </section>

      {/* Section 2: What We Build */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="What We Build" title="Three ways we ship" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl border border-card-border bg-card-bg hover:border-card-hover-border hover:bg-card-hover-bg transition-all duration-300"
              >
                <service.icon className="text-accent mb-5" size={28} />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <p className="text-accent font-semibold text-sm">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Portfolio */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Portfolio"
            title="Shipped. Running. In production."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((app) => (
              <div
                key={app.name}
                className="p-8 rounded-2xl border border-card-border bg-card-bg hover:border-card-hover-border hover:bg-card-hover-bg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <span className="text-accent font-bold text-lg">
                    {app.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {app.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {app.description}
                </p>
                <p className="text-accent/80 text-xs font-mono uppercase tracking-wider">
                  {app.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="The Process" title="How a project works" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-2xl border border-card-border bg-card-bg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-accent/80 text-xs font-mono">
                      {step.timeline}
                    </p>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <CTASection
        headline="Got something that needs building?"
        body="Tell us what you need. We'll come back with an honest assessment: what it would take, how long it would take, and whether we're the right team for it. No obligation."
        primaryCTA={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}
