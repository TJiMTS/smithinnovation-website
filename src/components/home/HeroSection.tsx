import Link from "next/link";
import { BookOpenText, Mail, ShieldCheck } from "lucide-react";

const workflowSignals = [
  {
    icon: Mail,
    title: "Client Email Intelligence",
    body: "Context assembled automatically, draft response prepared for team approval.",
    badge: "Most common first build",
  },
  {
    icon: ShieldCheck,
    title: "AI Admin & Compliance",
    body: "Document chases, reminders, routing, and follow-up work systemised.",
  },
  {
    icon: BookOpenText,
    title: "AI-Assisted Bookkeeping",
    body: "Supervised categorisation, discrepancy checks, and review support.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_24%,transparent_78%)]" />
        <div className="absolute top-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute top-24 right-[8%] h-56 w-56 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-accent font-mono text-xs tracking-[0.28em] uppercase mb-6">
            For UK accountancy and bookkeeping firms
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
            We built our firm on AI.
            <br />
            Now we build yours.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            AI operating systems for UK accountancy and bookkeeping firms. We
            help firms reduce admin, improve client response quality, and remove
            repeatable operational bottlenecks across client email handling,
            admin and compliance workflows, and bookkeeping review support
            using systems already proven inside a live practice.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/scorecard"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200 text-base"
            >
              Take the AI Readiness Scorecard
            </Link>
          <Link
            href="/ai-workflow-audit"
            className="px-8 py-4 border border-card-border hover:border-card-hover-border hover:bg-card-hover-bg text-foreground font-semibold rounded-full transition-all duration-200 text-base"
          >
            See the AI Workflow Audit
          </Link>
          </div>

          <p className="mt-6 text-sm text-muted/80">
            Built from live practice. Human-in-the-loop by design. Start with
            one workflow, not a big-bang transformation.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto">
          <p className="text-center text-accent font-mono text-xs tracking-[0.24em] uppercase mb-5">
            Common first workflows
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workflowSignals.map((workflow, index) => (
              <div
                key={workflow.title}
                className={`rounded-2xl border bg-card-bg p-6 text-left backdrop-blur-sm ${
                  index === 0
                    ? "border-accent/30 bg-accent/10"
                    : "border-card-border"
                }`}
              >
                {workflow.badge && (
                  <p className="text-accent font-mono text-[11px] tracking-[0.24em] uppercase mb-4">
                    {workflow.badge}
                  </p>
                )}
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  <workflow.icon className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  {workflow.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  {workflow.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
