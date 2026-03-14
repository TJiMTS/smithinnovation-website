import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-accent font-mono text-sm tracking-[0.28em] uppercase mb-6">
          For UK accountancy and bookkeeping firms
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
          We built our firm on AI.
          <br />
          Now we build yours.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          AI operating systems for UK accountancy and bookkeeping firms. We
          automate repetitive operational work like client email handling, admin
          and compliance workflows, and bookkeeping review support using
          systems already proven inside a live practice.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/scorecard"
            className="px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200 text-base"
          >
            Take the AI Readiness Scorecard
          </Link>
          <Link
            href="/contact?interest=AI%20Workflow%20Audit"
            className="px-8 py-4 border border-card-border hover:border-card-hover-border hover:bg-card-hover-bg text-foreground font-semibold rounded-full transition-all duration-200 text-base"
          >
            Book an AI Workflow Audit
          </Link>
        </div>

        <p className="mt-6 text-sm text-muted/80">
          Human-in-the-loop systems. Built by operators. Designed for
          detail-heavy, regulated work.
        </p>
      </div>
    </section>
  );
}
