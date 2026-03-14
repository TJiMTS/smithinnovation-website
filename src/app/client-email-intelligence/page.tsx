import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenText,
  Mail,
  ShieldCheck,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Client Email Intelligence for UK Accountancy & Bookkeeping Firms",
  description:
    "Client Email Intelligence gathers context, checks tone and urgency, and prepares draft replies before your team approves the final response.",
  openGraph: {
    title:
      "Client Email Intelligence for UK Accountancy & Bookkeeping Firms",
    description:
      "Client Email Intelligence gathers context, checks tone and urgency, and prepares draft replies before your team approves the final response.",
  },
};

const hiddenCosts = [
  {
    title: "Fragmented context",
    body: "The information needed to answer well usually sits across emails, notes, meetings, tasks, and records.",
  },
  {
    title: "Inconsistent replies",
    body: "The quality of the response changes depending on who picks up the email and what they happen to remember.",
  },
  {
    title: "Slow preparation time",
    body: "Skilled staff spend too long retrieving context before they can even begin to draft a reply.",
  },
  {
    title: "Dependence on staff memory",
    body: "Continuity suffers when firm knowledge lives in people rather than being surfaced at the right moment.",
  },
];

const contextSources = [
  "CRM notes",
  "Prior emails",
  "Recent meetings",
  "Unresolved actions",
  "Financial records",
  "Internal notes",
  "Current tone or urgency",
];

const workflowSteps = [
  {
    title: "Email arrives",
    body: "A new client email triggers the workflow instead of landing as another blank-slate task.",
  },
  {
    title: "Context is gathered",
    body: "Relevant history is pulled together from the systems your team already uses.",
  },
  {
    title: "Sentiment and urgency are checked",
    body: "The workflow highlights tone, pressure, and anything that may need faster or more careful handling.",
  },
  {
    title: "A draft is prepared",
    body: "Your team receives a response draft shaped around the available context and your preferred tone.",
  },
  {
    title: "A human approves",
    body: "Final review, edits, advice, and send approval stay with your staff.",
  },
];

const systemWork = [
  "Identify the client behind the incoming email",
  "Gather recent history from connected systems",
  "Surface relevant meetings, actions, and prior communication",
  "Prepare a draft reply in firm tone",
];

const humanWork = [
  "Final review",
  "Final advice",
  "Sensitive conversations",
  "Unusual cases and exceptions",
  "Send approval",
];

const startReasons = [
  "Easy to understand across the firm",
  "Operationally painful in almost every practice",
  "Low-risk when approval stays human",
  "Visible enough to prove value quickly",
  "Expandable into wider workflow automation later",
];

const outcomes = [
  "Reduce time spent gathering context manually",
  "Improve consistency in client communication",
  "Reduce dependence on staff memory",
  "Connect meetings, emails, and operational history more cleanly",
  "Free skilled staff to focus on judgement instead of retrieval",
];

const proofStats = [
  {
    value: "~80%",
    label: "of fully automatable admin work already handled through AI and automation inside the same live practice",
  },
  {
    value: "~98.5%",
    label: "of admin work assessed as automatable with human oversight across that operating model",
  },
  {
    value: "3 hrs -> 5 min",
    label: "time reduction achieved in one bookkeeping catch-up workflow inside the wider internal system",
  },
];

export default function ClientEmailIntelligencePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.18),transparent_62%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <p className="text-accent font-mono text-sm tracking-[0.28em] uppercase mb-6">
                Client Email Intelligence
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Your team should not start from zero every time a client emails.
              </h1>
              <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
                Client Email Intelligence helps accountancy and bookkeeping
                firms gather context, surface relevant history, and prepare
                draft responses before a human approves the final reply.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact?interest=Client%20Email%20Intelligence"
                  className="inline-flex px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200"
                >
                  Book an Audit
                </Link>
                <Link
                  href="/client-email-intelligence/case-study"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-card-border hover:border-card-hover-border hover:bg-card-hover-bg text-foreground font-semibold rounded-full transition-all duration-200"
                >
                  Read the Case Study
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                <div className="rounded-2xl border border-card-border bg-card-bg p-5">
                  <Mail className="text-accent mb-3" size={20} />
                  <p className="text-foreground font-semibold mb-1">
                    Context first
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    The work starts with retrieval, not guesswork.
                  </p>
                </div>
                <div className="rounded-2xl border border-card-border bg-card-bg p-5">
                  <BarChart3 className="text-accent mb-3" size={20} />
                  <p className="text-foreground font-semibold mb-1">
                    Better preparation
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    Drafts arrive with more of the right history attached.
                  </p>
                </div>
                <div className="rounded-2xl border border-card-border bg-card-bg p-5">
                  <ShieldCheck className="text-accent mb-3" size={20} />
                  <p className="text-foreground font-semibold mb-1">
                    Human approval
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    Final judgement and send approval stay with your team.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-card-border bg-card-bg/95 backdrop-blur-sm p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Mail className="text-accent" size={22} />
                </div>
                <div>
                  <p className="text-foreground font-semibold">
                    Workflow at a glance
                  </p>
                  <p className="text-muted text-sm">
                    The repetitive prep work happens before your team replies.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-card-border bg-background/40 p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h2 className="text-foreground font-semibold mb-1">
                          {step.title}
                        </h2>
                        <p className="text-muted text-sm leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-divider">
                <p className="text-foreground font-medium mb-1">
                  This is not blind email automation.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  It is operational intelligence for client communication, with
                  final judgement kept human.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div>
            <SectionHeader
              label="The Problem"
              title="The hidden cost sits in the context gathering."
              centered={false}
            />
            <div className="space-y-6 text-muted text-lg leading-relaxed -mt-8">
              <p>In most firms, the time is not lost writing the reply.</p>
              <p>It is lost gathering context.</p>
              <p>
                Before someone can answer properly, they often have to move
                across multiple systems, reconstruct the latest client history,
                and decide how urgent or sensitive the message really is.
              </p>
              <p className="text-foreground font-medium">
                That makes client email handling slower, less consistent, and
                more dependent on who happens to pick it up.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-card-border bg-card-bg p-8 sm:p-10">
            <p className="text-foreground font-semibold mb-6">
              Before someone can answer properly, they often need to check:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contextSources.map((source) => (
                <div
                  key={source}
                  className="rounded-2xl border border-card-border bg-background/35 px-4 py-3 text-sm text-foreground"
                >
                  {source}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-12">
          {hiddenCosts.map((cost) => (
            <div
              key={cost.title}
              className="rounded-2xl border border-card-border bg-card-bg p-6"
            >
              <h3 className="text-foreground font-semibold mb-3">
                {cost.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{cost.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="How The Workflow Works"
            title="A practical flow for handling incoming client emails"
            subtitle="The workflow removes repetitive retrieval and preparation work before your team applies judgement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-card-border bg-card-bg p-6"
              >
                <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-4">
                  Step {index + 1}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-accent/20 bg-accent/5 px-6 py-6 sm:px-8">
            <p className="text-foreground font-semibold mb-2">
              This is not blind email automation.
            </p>
            <p className="text-muted leading-relaxed">
              It is operational intelligence for client communication:
              information is surfaced, a draft is prepared, and a human decides
              what actually goes back to the client.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface-contrast">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
              What Stays Human
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-contrast-text mb-6">
              Trust is built into the workflow, not added afterwards.
            </h2>
            <div className="space-y-5 text-surface-contrast-text/70 text-lg leading-relaxed">
              <p>
                The goal is not to remove judgement. The goal is to remove
                repetitive effort before judgement.
              </p>
              <p>
                Human-in-the-loop is not a compromise here. It is the design
                principle.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="text-accent" size={20} />
                  <p className="text-surface-contrast-text font-semibold">
                    Final review and send approval stay with staff
                  </p>
                </div>
                <p className="text-surface-contrast-text/70 text-sm leading-relaxed">
                  The system prepares and surfaces. Your team still decides what
                  is right, what is sensitive, and what actually gets sent.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-4">
                The system prepares
              </p>
              <ul className="space-y-3">
                {systemWork.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                    <span className="text-surface-contrast-text/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-accent/20 bg-accent/10 p-8">
              <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-4">
                Your team decides
              </p>
              <ul className="space-y-3">
                {humanWork.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                    <span className="text-surface-contrast-text leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Why Firms Start Here"
            title="This is often the clearest first workflow to improve"
            subtitle="It is easy to understand, painful in day-to-day operations, and low-risk when approval stays human."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
            {startReasons.map((reason) => (
              <div
                key={reason}
                className="rounded-2xl border border-card-border bg-card-bg p-6"
              >
                <p className="text-foreground font-medium leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 mt-10">
            <div className="rounded-3xl border border-card-border bg-card-bg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why it matters
              </h3>
              <ul className="space-y-3">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                    <span className="text-muted leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-card-border bg-card-bg p-8">
              <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-4">
                Practical first step
              </p>
              <p className="text-foreground text-2xl font-bold leading-tight mb-4">
                Start with one workflow. Prove the value. Expand only when it
                earns the right to expand.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Client email handling is one of the clearest entry points into
                AI operations because the pain is familiar, the trust model is
                visible, and the operational win can be understood by everyone
                from leadership to delivery staff.
              </p>
              <Link
                href="/contact?interest=Client%20Email%20Intelligence"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
              >
                Book an audit for this workflow
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-10 items-start">
          <div>
            <SectionHeader
              label="Proof"
              title="Built inside a live accountancy practice before being offered externally"
              centered={false}
            />
            <div className="space-y-6 text-muted text-lg leading-relaxed -mt-8">
              <p>
                We built this kind of workflow inside a live practice before it
                became a productised service.
              </p>
              <p>
                That matters because the design comes from real operational pain
                rather than theory. The starting point was simple: when a client
                email arrives, your team should not have to rebuild the context
                from scratch.
              </p>
              <p className="text-foreground font-medium">
                The internal use case shaped the trust model as much as the
                automation itself: automate retrieval and preparation, keep
                judgement human.
              </p>
            </div>

            <Link
              href="/client-email-intelligence/case-study"
              className="inline-flex items-center gap-2 mt-8 text-accent hover:text-accent-hover font-medium transition-colors"
            >
              <BookOpenText size={18} />
              Read the case study
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {proofStats.map((stat) => (
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
        </div>
      </section>

      <CTASection
        headline="Start with one workflow."
        body="If client email handling is slower, heavier, or more fragmented than it should be, this is one of the clearest places to start."
        primaryCTA={{
          label: "Book an Audit",
          href: "/contact?interest=Client%20Email%20Intelligence",
        }}
        secondaryCTA={{
          label: "Read the Case Study",
          href: "/client-email-intelligence/case-study",
        }}
      />
    </>
  );
}
