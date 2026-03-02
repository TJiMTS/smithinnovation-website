const stats = [
  {
    value: "80%",
    label: "of routine workflows automated in a live professional services firm",
  },
  {
    value: "12 min",
    label: "to complete a process that used to take 4 hours",
  },
  {
    value: "5",
    label: "production applications shipped and running",
  },
];

export default function ProofBar() {
  return (
    <section className="bg-surface-contrast py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                {stat.value}
              </div>
              <p className="text-surface-contrast-text/60 text-sm leading-relaxed max-w-[240px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
