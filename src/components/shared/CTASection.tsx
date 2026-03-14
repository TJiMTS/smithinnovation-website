import Link from "next/link";

type Props = {
  headline: string;
  body: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
};

export default function CTASection({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
}: Props) {
  return (
    <section className="relative overflow-hidden py-28 px-6 bg-surface-contrast">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.18),transparent_36%)]" />
        <div className="absolute -bottom-16 left-1/2 h-48 w-[32rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-contrast-text mb-6">
          {headline}
        </h2>
        <p className="text-surface-contrast-text/70 text-lg mb-10 leading-relaxed">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="text-surface-contrast-text/70 hover:text-surface-contrast-text text-sm transition-colors"
            >
              {secondaryCTA.label} →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
