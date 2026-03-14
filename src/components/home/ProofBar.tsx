const proofPoints = [
  {
    value: "Around 80%",
    title: "Routine admin handled through AI and automation",
    body: "Directional internal figure from the live practice that shaped how SIS builds workflow systems.",
  },
  {
    value: "Around 35 hrs/week",
    title: "Admin workload removed across repeatable processes",
    body: "Recovered from recurring operational work rather than one-off project effort.",
  },
  {
    value: "Admin-role capacity",
    title: "Systems absorb work that once needed dedicated admin time",
    body: "We phrase this carefully until every supporting figure is formally documented.",
  },
  {
    value: "Human-approved drafts",
    title: "Client replies stay under staff oversight",
    body: "Context is gathered and a response is drafted before your team reviews and approves it.",
  },
];

export default function ProofBar() {
  return (
    <section className="bg-surface-contrast py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.55fr] gap-12 lg:gap-8 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
              Directional Proof From Live Operations
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-contrast-text">
              The proof is operational, not theoretical.
            </h2>
            <p className="mt-4 text-surface-contrast-text/70 text-lg leading-relaxed">
              These proof points come from the live practice behind SIS. They
              are phrased cautiously on purpose so the homepage stays credible
              while the evidence base is formalised.
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
