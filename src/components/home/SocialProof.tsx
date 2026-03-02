import { Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    quote:
      "The AI operating system transformed how our firm handles client onboarding. What took 4 hours now takes 12 minutes.",
    role: "Managing Partner",
    firmType: "Chartered Accountancy Firm",
    size: "15 staff",
  },
  {
    quote:
      "We took on 30% more clients without hiring a single additional person. The system handles what used to require manual effort.",
    role: "Operations Director",
    firmType: "Professional Services",
    size: "25 staff",
  },
  {
    quote:
      "For the first time, our compliance checks run automatically. Our qualified staff focus on advisory work, not admin.",
    role: "Senior Partner",
    firmType: "Accounting Practice",
    size: "10 staff",
  },
];

export default function SocialProof() {
  return (
    <section className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Results" title="What changed" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="border border-card-border bg-card-bg rounded-2xl p-8"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="border-t border-divider pt-4">
                <p className="text-foreground font-medium text-sm">
                  {testimonial.role}
                </p>
                <p className="text-muted text-xs mt-0.5">
                  {testimonial.firmType} · {testimonial.size}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
