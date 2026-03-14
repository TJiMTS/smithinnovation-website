import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Client Email Intelligence Case Study",
  description:
    "How a live accountancy practice turned client email handling into a context-rich, human-approved workflow.",
  openGraph: {
    title: "Client Email Intelligence Case Study",
    description:
      "How a live accountancy practice turned client email handling into a context-rich, human-approved workflow.",
  },
};

const problemPoints = [
  "Client history",
  "Prior communications",
  "Financial position",
  "Recent meetings",
  "Unresolved actions",
  "Tone and urgency",
];

const builtSteps = [
  "Identify the client",
  "Gather relevant context from connected systems",
  "Check sentiment and urgency",
  "Prepare a draft response in firm tone",
  "Leave final review and send approval to a human",
];

const whyItMatters = [
  "Faster response preparation",
  "More consistent client communication",
  "Better continuity across meetings, emails, and firm memory",
  "Less manual retrieval work before skilled judgement begins",
];

const widerProof = [
  {
    value: "~80%",
    label: "of fully automatable admin work already handled through AI and automation inside the same live practice",
  },
  {
    value: "~98.5%",
    label: "of admin work assessed as automatable with human oversight",
  },
  {
    value: "3 hrs -> 5 min",
    label: "time reduction achieved in one bookkeeping catch-up workflow inside the wider operating model",
  },
];

export default function ClientEmailIntelligenceCaseStudyPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/client-email-intelligence"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors mb-8"
          >
            <ArrowRight className="rotate-180" size={16} />
            Back to the workflow page
          </Link>

          <p className="text-accent font-mono text-sm tracking-[0.28em] uppercase mb-6">
            Case Study
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
            How a live accountancy practice turned client email handling into a
            context-rich, human-approved workflow
          </h1>
          <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-3xl">
            This is the internal use case that shaped the public offer. The
            principle was simple: automate retrieval and preparation, then keep
            judgement human.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div>
            <SectionHeader
              label="The Problem"
              title="Client emails looked simple, but depended on hidden context"
              centered={false}
            />
            <div className="space-y-6 text-muted text-lg leading-relaxed -mt-8">
              <p>
                In a typical workflow, staff had to gather the background
                manually before they could answer properly.
              </p>
              <p>
                The delay was not usually in writing the reply itself. It was in
                reconstructing enough context to respond well and consistently.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-card-border bg-card-bg p-8 sm:p-10">
            <p className="text-foreground font-semibold mb-6">
              The hidden context usually included:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {problemPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-card-border bg-background/35 px-4 py-3 text-sm text-foreground"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="What We Built"
            title="A Client Email Intelligence workflow with human approval built in"
            subtitle="The workflow prepares the response properly, then hands final control back to staff."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
            {builtSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-card-border bg-card-bg p-6"
              >
                <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-4">
                  Step {index + 1}
                </p>
                <p className="text-foreground font-medium leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface-contrast">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
              Why It Matters
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-contrast-text mb-6">
              The improvement was operational, not cosmetic.
            </h2>
            <p className="text-surface-contrast-text/70 text-lg leading-relaxed">
              This workflow improved speed, consistency, and continuity because
              the prep work stopped depending so heavily on manual retrieval and
              staff memory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyItMatters.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-surface-contrast-text font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Wider Proof"
            title="This workflow sat inside a broader operating model already running in live practice"
            subtitle="The email workflow matters on its own, but it also sits inside a wider system that has already produced measurable operational gains."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {widerProof.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-card-border bg-card-bg p-8"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-accent mb-3">
                  {stat.value}
                </p>
                <p className="text-muted leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpenText className="text-accent" size={20} />
              <p className="text-foreground font-semibold">Core principle</p>
            </div>
            <p className="text-2xl font-bold text-foreground mb-3">
              Automate retrieval and preparation. Keep judgement human.
            </p>
            <p className="text-muted leading-relaxed">
              That principle shaped the internal workflow and it still shapes
              the public offer. It keeps trust visible while removing a large
              amount of repetitive operational effort.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Start with the workflow your team already feels every day."
        body="If client email handling is slowing the firm down, this is a practical first automation to assess."
        primaryCTA={{
          label: "Book an Audit",
          href: "/contact?interest=Client%20Email%20Intelligence",
        }}
        secondaryCTA={{
          label: "View the workflow page",
          href: "/client-email-intelligence",
        }}
      />
    </>
  );
}
