const proofPoints = [
  {
    value: "Live practice",
    title: "Built inside a real accountancy firm first",
    body: "SIS was shaped inside Smith & Johnson before it was offered externally, so the systems were tested under real operational pressure rather than in demos.",
  },
  {
    value: "Around 80%",
    title: "of fully automatable admin work now handled internally",
    body: "This applies to fully automatable admin work inside the live practice, not to all admin work without qualification.",
  },
  {
    value: "Around 98.5%",
    title: "of admin work judged automatable with human oversight",
    body: "This is explicitly a human-in-the-loop claim. Judgement-heavy exceptions such as AML risk assessments and client strategy planning stay human-led.",
  },
  {
    value: "3 hrs -> 5 min",
    title: "in one cited internal bookkeeping catch-up workflow",
    body: "In that defined example, 3 months of work dropped from roughly 3 hours to around 5 minutes. We do not generalise that to every bookkeeping task.",
  },
];

export default function ProofBar() {
  return (
    <section className="bg-surface-contrast py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.55fr] gap-12 lg:gap-8 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
              Operational Proof From Live Practice
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-contrast-text">
              Built inside a live accountancy practice first.
            </h2>
            <p className="mt-4 text-surface-contrast-text/70 text-lg leading-relaxed">
              SIS was shaped inside Smith & Johnson before it became a public
              offer. The figures below are internal and live-practice-based,
              and they are phrased with context so the claims stay specific and
              credible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {proofPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-accent font-mono text-xs tracking-[0.22em] uppercase mb-4">
                  Proof signal
                </p>
                <div className="text-2xl sm:text-3xl font-extrabold text-surface-contrast-text mb-3">
                  {point.value}
                </div>
                <h3 className="text-lg font-bold text-surface-contrast-text mb-3">
                  {point.title}
                </h3>
                <p className="text-surface-contrast-text/70 text-sm leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
