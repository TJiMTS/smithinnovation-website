import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  Map,
  ShieldCheck,
  Target,
  TrendingUp,
  TriangleAlert,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const bookingHref = "/contact?interest=AI%20Workflow%20Audit";

export const metadata: Metadata = {
  title: "AI Workflow Audit for UK Accountancy & Bookkeeping Firms",
  description:
    "A focused AI Workflow Audit for UK accountancy and bookkeeping firms. Identify the operational bottlenecks costing the most time, then choose the best first workflow to automate.",
  openGraph: {
    title: "AI Workflow Audit for UK Accountancy & Bookkeeping Firms",
    description:
      "A focused first step for firms that want a practical workflow review before committing to a larger automation project.",
  },
};

const fitCards = [
  {
    icon: Building2,
    title: "Growing firms with operational drag",
    body: "Your firm is busy, but too much skilled time is still going into repeatable admin, compliance, and follow-up work.",
  },
  {
    icon: Users,
    title: "Practice owners and operations leads",
    body: "You can see the bottlenecks, but you want evidence on where to start before committing to a larger build.",
  },
  {
    icon: Mail,
    title: "Teams working across fragmented context",
    body: "Important information is scattered across inboxes, notes, systems, and people, which slows replies and creates inconsistency.",
  },
];

const painPoints = [
  "Your team spends too much time gathering context before replying to clients.",
  "Important operational work still depends on memory and manual follow-up.",
  "Admin and compliance tasks are consuming time that should be spent elsewhere.",
  "You know there is automation potential, but do not want a vague AI strategy exercise.",
];

const includedItems = [
  {
    icon: ClipboardCheck,
    title: "Workflow review",
    body: "A structured review of the repetitive operational workflows inside your firm.",
  },
  {
    icon: TriangleAlert,
    title: "Bottleneck identification",
    body: "Clear visibility on where time, consistency, and capacity are being lost.",
  },
  {
    icon: Target,
    title: "Top automation opportunities",
    body: "A shortlist of the top three workflow opportunities worth serious attention.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and risk notes",
    body: "Practical notes on likely implementation risks, controls, and where human oversight matters.",
  },
  {
    icon: Map,
    title: "Recommended first move",
    body: "A recommendation for the best first workflow to tackle, plus a roadmap for what comes next.",
  },
  {
    icon: TrendingUp,
    title: "Directional upside",
    body: "A practical view of likely upside in time, consistency, and operational capacity.",
  },
];

const workflowExamples = [
  "Client email handling and context gathering",
  "Onboarding and admin workflows",
  "Compliance and document collection workflows",
  "Meeting follow-up and internal action routing",
  "Repetitive bookkeeping support workflows",
];

const reasonsToStartHere = [
  {
    title: "Less guesswork",
    body: "You do not have to choose the first workflow based on instinct alone.",
  },
  {
    title: "Less risk",
    body: "You assess trust, repeatability, and safety before implementation starts.",
  },
  {
    title: "A clearer first move",
    body: "The audit narrows the field to one workflow that is actually worth fixing first.",
  },
  {
    title: "Evidence before expansion",
    body: "You only move into implementation when the case is practical and credible.",
  },
];

const proofPoints = [
  {
    title: "Built inside a live practice",
    body: "We are not approaching this as outside commentators. These systems were built inside a real accountancy firm first.",
  },
  {
    title: "Grounded in regulated reality",
    body: "We understand detail-heavy workflows where trust, accuracy, and auditability matter.",
  },
  {
    title: "Human-in-the-loop by design",
    body: "Where judgement matters, the system design keeps people in control rather than pretending trust is free.",
  },
  {
    title: "Practical implementation thinking",
    body: "The audit is shaped by what it takes to make a workflow work in live operations, not by theory.",
  },
];

const nextSteps = [
  {
    step: "01",
    title: "Receive your findings",
    body: "You get a clear view of the bottlenecks, the shortlist of opportunities, and the recommended first workflow.",
  },
  {
    step: "02",
    title: "Decide whether to implement one workflow",
    body: "You can move into one focused implementation only if the case is strong enough.",
  },
  {
    step: "03",
    title: "Expand only if the value is proven",
    body: "If the first workflow earns its place, you can extend from there with evidence rather than hype.",
  },
];

const heroHighlights = [
  "Fixed-scope review of your current workflows",
  "Top three automation opportunities identified",
  "Recommendation for the best first workflow",
  "Roadmap and directional upside to guide the next move",
];

export default function AIWorkflowAuditPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent/5 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <p className="text-accent font-mono text-sm tracking-[0.28em] uppercase mb-6">
              AI Workflow Audit
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.08] tracking-tight">
              Find the first workflow
              <br />
              <span className="text-accent">worth automating.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-muted leading-relaxed">
              Our AI Workflow Audit helps UK accountancy and bookkeeping firms
              identify the operational bottlenecks costing the most time,
              consistency, and capacity, then shows where to start.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href={bookingHref}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200"
              >
                Book an Audit
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#fit"
                className="inline-flex px-8 py-4 border border-card-border hover:border-card-hover-border hover:bg-card-hover-bg text-foreground font-semibold rounded-full transition-all duration-200"
              >
                See if your firm is a fit
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted/80">
              Start with one workflow. Prove the value. Expand from there.
            </p>
          </div>

          <div className="rounded-[2rem] border border-card-border bg-card-bg p-8 sm:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <p className="text-accent font-mono text-xs tracking-[0.26em] uppercase mb-4">
              Audit Snapshot
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              A practical first step before a larger transformation project.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The audit is built to answer one question clearly: which workflow
              is painful enough, repeatable enough, and safe enough to automate
              first?
            </p>

            <div className="mt-8 space-y-4">
              {heroHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-accent"
                    size={18}
                  />
                  <p className="text-foreground text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-card-border bg-surface p-4">
                <p className="text-foreground font-semibold mb-1">
                  Built for firms like yours
                </p>
                <p className="text-sm text-muted">
                  UK accountancy and bookkeeping firms dealing with operational
                  bottlenecks.
                </p>
              </div>
              <div className="rounded-2xl border border-card-border bg-surface p-4">
                <p className="text-foreground font-semibold mb-1">
                  Routed to enquiry
                </p>
                <p className="text-sm text-muted">
                  Audit enquiries go through our contact form and we reply
                  within 1 working day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fit" className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.92fr_1.08fr] items-start">
          <div>
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
              Who It Is For
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
              For firms that want the sensible first move.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              This audit is designed for UK accountancy and bookkeeping firms
              that can already feel the operational drag from repeatable work,
              but do not want to jump straight into a vague transformation
              project.
            </p>

            <div className="mt-8 space-y-4">
              {painPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <p className="text-muted leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {fitCards.map((card, index) => (
              <div
                key={card.title}
                className={`rounded-2xl border border-card-border bg-card-bg p-8 ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <card.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="What Is Included"
            title="A structured audit, not a vague strategy exercise."
            subtitle="You leave with concrete findings, a recommended first workflow, and a practical next-step plan."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {includedItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-card-border bg-card-bg p-8 hover:border-card-hover-border hover:bg-card-hover-bg transition-all duration-300"
              >
                <item.icon className="text-accent mb-5" size={26} />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-card-border bg-surface p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
              <div>
                <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
                  Workflows We Assess
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  We look for repeatable operational drag, not abstract
                  innovation ideas.
                </h3>
                <p className="mt-4 text-muted leading-relaxed">
                  The goal is to find a workflow that is painful enough to
                  matter, repeatable enough to systemise, and safe enough to
                  improve with the right controls.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {workflowExamples.map((workflow) => (
                  <div
                    key={workflow}
                    className="rounded-2xl border border-card-border bg-card-bg px-5 py-4 text-sm text-foreground"
                  >
                    {workflow}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface-contrast">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            Why Start Here
          </p>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-contrast-text leading-tight">
                Most firms do not need to automate everything at once.
              </h2>
              <p className="mt-6 text-surface-contrast-text/70 text-lg leading-relaxed">
                They need to answer one question first.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                <p className="text-xl sm:text-2xl font-semibold text-surface-contrast-text leading-relaxed">
                  Which workflow is painful enough, repeatable enough, and safe
                  enough to automate first?
                </p>
              </div>
              <p className="mt-6 text-surface-contrast-text/70 leading-relaxed">
                The audit helps you answer that before committing to a larger
                implementation project.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {reasonsToStartHere.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold text-surface-contrast-text mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-surface-contrast-text/70 leading-relaxed">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Why SIS"
            title="Grounded in live operational reality."
            subtitle="We built these systems inside a real accountancy practice first, which changes how we assess trust, risk, and implementation."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {proofPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-card-border bg-card-bg p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
              What Happens After
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
              You decide what happens next with clearer evidence.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              After the audit, you can implement one workflow first, expand
              gradually if it proves worthwhile, or do nothing if the case is
              not strong enough yet.
            </p>
            <p className="mt-6 text-foreground font-medium leading-relaxed">
              That is the model we believe in: start with one workflow, prove
              the value, then expand only if the evidence supports it.
            </p>
          </div>

          <div className="space-y-6">
            {nextSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-card-border bg-card-bg p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] border border-card-border bg-surface-contrast p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-40 bg-accent/10 blur-[100px] pointer-events-none" />
          <div className="relative">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
              Enquiry
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-surface-contrast-text leading-tight">
              Get clear on where to start.
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-surface-contrast-text/70 leading-relaxed">
              If your firm is feeling operationally heavier than it should, the
              first step is not a giant AI transformation plan. It is
              identifying the workflow most worth fixing first.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={bookingHref}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200"
              >
                Book an Audit
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/scorecard"
                className="inline-flex px-8 py-4 border border-white/15 hover:border-white/25 hover:bg-white/5 text-surface-contrast-text font-semibold rounded-full transition-all duration-200"
              >
                Take the Scorecard
              </Link>
            </div>

            <p className="mt-6 text-sm text-surface-contrast-text/55">
              Enquiries are routed through our contact form with the audit
              pre-selected.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
