const stats = [
  {
    value: "~80%",
    label: "of routine admin now handled through AI and automation inside our own firm",
  },
  {
    value: "~35 hrs",
    label: "of admin workload removed each week across repeatable internal processes",
  },
  {
    value: "Human-approved",
    label: "client replies and workflow actions stay under staff oversight where judgement matters",
  },
];

export default function ProofBar() {
  return (
    <section className="bg-surface-contrast py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            Directional Proof From Live Operations
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-contrast-text">
            The proof points to operational outcomes, not AI theatre.
          </h2>
          <p className="mt-4 text-surface-contrast-text/70 text-lg max-w-3xl mx-auto">
            These are cautious, internal figures from the practice that shaped
            our approach. We keep the claims measured until every number is
            fully documented.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-accent mb-3">
                {stat.value}
              </div>
              <p className="text-surface-contrast-text/70 text-sm leading-relaxed max-w-[260px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
