import type { Metadata } from "next";
import Link from "next/link";
import {
  Map,
  Hammer,
  BarChart3,
  Layers,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";
import FAQAccordion from "@/components/shared/FAQAccordion";

export const metadata: Metadata = {
  title: "AI Automation for Professional Services Firms",
  description:
    "AI-native operating systems for accounting, law, and consulting firms. We built our firm on AI. Now we build yours. Start with a free AI Readiness Scorecard.",
  openGraph: {
    title: "AI Automation for Professional Services Firms",
    description:
      "AI-native operating systems for accounting, law, and consulting firms. We built our firm on AI. Now we build yours.",
  },
};

const approachSteps = [
  {
    icon: Map,
    word: "Map.",
    body: "Every process, documented. Every system, catalogued. Every bottleneck, identified. We don't automate broken processes. We understand how your firm actually works, then design the system around that reality.",
  },
  {
    icon: Hammer,
    word: "Build.",
    body: "Custom automations connected to your existing tools. Not a new platform you have to learn. Not a rip-and-replace. Systems that work alongside what you already have, handling the repetitive steps so your team handles the exceptions and the judgement calls.",
  },
  {
    icon: BarChart3,
    word: "Prove.",
    body: "Every automation comes with a baseline. Before and after. Hours saved. Errors prevented. Capacity freed. You'll know exactly what changed and what it's worth.",
  },
  {
    icon: Layers,
    word: "Expand.",
    body: "Once the first workflow proves value, we build the next. And the next. Over 3-6 months, your firm moves from individual automations to a complete AI-native operating system.",
  },
];

const tiers = [
  {
    name: "AI Readiness Scorecard",
    price: "Free",
    description:
      "25 questions. 10 minutes. A personalised score with specific recommendations for your firm.",
    cta: "Take the Scorecard",
    href: "/scorecard",
    featured: false,
  },
  {
    name: "AI Use Case Audit",
    price: "£3,500",
    description:
      "Two weeks. Your top 5 automation opportunities. ROI projections for each. A clear roadmap.",
    cta: "Book an audit",
    href: "/contact?interest=audit",
    featured: false,
  },
  {
    name: "Single Workflow Automation",
    price: "From £10,000",
    description:
      "One high-impact automation. Working within 8 weeks. Connected to your existing systems.",
    cta: "Talk to us",
    href: "/contact",
    featured: true,
  },
  {
    name: "AI OS Installation",
    price: "From £50,000",
    description:
      "The complete system. 10-20 integrated workflows. 3-6 months. Your firm, running on intelligence.",
    cta: "Talk to us",
    href: "/contact",
    featured: false,
  },
  {
    name: "AI Partnership Retainer",
    price: "From £5,000/mo",
    description:
      "Ongoing support, new automations, and continuous improvement. The system gets better every month.",
    cta: "Talk to us",
    href: "/contact",
    featured: false,
  },
];

const faqs = [
  {
    question:
      "How is this different from buying an AI tool like Botkeeper or Vic.ai?",
    answer:
      "Those are point solutions. They do one thing well. An AI OS is a complete operating system that connects every part of your operations. Think of it as the difference between buying a calculator and building an accounting system.",
  },
  {
    question: "What if my team resists using it?",
    answer:
      "We design systems around how your team already works, not the other way around. The best automations are invisible: they handle work that nobody wanted to do in the first place. Staff resistance usually comes from fear of replacement. This replaces tasks, not people.",
  },
  {
    question: "How long before we see results?",
    answer:
      "The audit delivers actionable insight in 2 weeks. A single workflow automation is typically live within 8 weeks. Most firms see measurable time savings within the first month of deployment.",
  },
  {
    question: "What happens if something goes wrong?",
    answer:
      "Every automation includes exception handling and escalation paths. When the system encounters something it can't handle, it flags it for a human. Nothing falls through the cracks. Nothing runs silently broken.",
  },
  {
    question: "Do we need to replace our existing software?",
    answer:
      "No. The AI OS connects to your existing tools. We build around what you already use, not instead of it.",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Your firm runs on effort.
            <br />
            <span className="text-accent">It could run on intelligence.</span>
          </h1>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We build AI-native operating systems for professional services
            firms. Not tools. Not plugins. Complete systems that handle the work
            your team shouldn&apos;t be doing manually.
          </p>
          <Link
            href="/scorecard"
            className="inline-flex px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200"
          >
            Take the AI Readiness Scorecard
          </Link>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="The Reality"
            title="The 80/20 problem"
            centered={false}
          />
          <div className="space-y-6 text-muted text-lg leading-relaxed -mt-8">
            <p>
              Your team is good at what they do. But 40-60% of their time goes
              on work that follows the same pattern every time. Client
              onboarding. Compliance checks. Report generation. Data entry.
              Follow-up communications.
            </p>
            <p>
              That work matters. It just doesn&apos;t need a qualified
              professional to do it.
            </p>
            <p className="text-foreground font-medium">
              The firms that figure this out first don&apos;t just save money.
              They take on more clients without hiring. They deliver faster. They
              keep their best people because those people spend their time on
              work worth doing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Approach */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="The Approach"
            title="How we build your AI OS"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approachSteps.map((step) => (
              <div
                key={step.word}
                className="p-8 rounded-2xl border border-card-border bg-card-bg hover:border-card-hover-border hover:bg-card-hover-bg transition-all duration-300"
              >
                <step.icon className="text-accent mb-4" size={28} />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.word}
                </h3>
                <p className="text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Proof */}
      <section className="py-24 px-6 bg-surface-contrast">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            The Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-contrast-text mb-8">
            This runs a real firm.
          </h2>
          <div className="space-y-6 text-surface-contrast-text/70 text-lg leading-relaxed">
            <p>
              We didn&apos;t start by selling AI services. We started by
              building an AI-native operating system for a chartered accountancy
              firm. Every workflow. Every process. Every decision support layer.
            </p>
            <p>
              That firm handles real clients, real deadlines, and real regulatory
              requirements. The system works. Not in a demo environment. Not in a
              case study written by marketing. In production. Every day.
            </p>
            <p className="text-surface-contrast-text font-medium">
              That system is the foundation of everything we build. When we say
              we understand professional services operations, we mean we run one.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Service Tiers */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Pricing"
            title="Start where it makes sense"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                  tier.featured
                    ? "border-accent bg-accent/5 ring-1 ring-accent/20"
                    : "border-card-border bg-card-bg hover:border-card-hover-border hover:bg-card-hover-bg"
                }`}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-2xl font-extrabold text-accent mb-4">
                  {tier.price}
                </p>
                <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
                  {tier.description}
                </p>
                <Link
                  href={tier.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    tier.featured
                      ? "text-accent hover:text-accent-hover"
                      : "text-accent hover:text-accent-hover"
                  }`}
                >
                  {tier.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="FAQ"
            title="Common questions"
            centered={false}
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Section 7: CTA */}
      <CTASection
        headline="Find out where your firm stands."
        body="The AI Readiness Scorecard takes 10 minutes and costs nothing. You'll know exactly where the opportunities are before we ever have a conversation."
        primaryCTA={{ label: "Take the Scorecard", href: "/scorecard" }}
      />
    </>
  );
}
