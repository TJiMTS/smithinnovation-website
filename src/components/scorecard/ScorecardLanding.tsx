import { ClipboardCheck } from "lucide-react";

export default function ScorecardLanding({
  onStart,
}: {
  onStart: () => void;
}) {
  return (
    <section className="pt-32 pb-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
          <ClipboardCheck className="text-accent" size={32} />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
          How ready is your firm for AI?
        </h1>

        <p className="text-muted text-lg leading-relaxed mb-4">
          25 questions across 5 categories. Takes about 10 minutes. You&apos;ll
          get an instant score, a breakdown of your firm&apos;s strengths and
          gaps, and specific recommendations for where to start.
        </p>

        <p className="text-muted/70 text-base mb-10">
          No sales call. No obligation. Just a clear picture of where you stand.
        </p>

        <button
          onClick={onStart}
          className="inline-flex px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200 text-lg"
        >
          Start the Scorecard
        </button>

        <div className="mt-8 flex items-center justify-center gap-6 text-muted/50 text-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            25 questions
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            ~10 minutes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            Instant results
          </span>
        </div>
      </div>
    </section>
  );
}
