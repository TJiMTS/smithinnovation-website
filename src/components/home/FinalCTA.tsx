import CTASection from "@/components/shared/CTASection";

export default function FinalCTA() {
  return (
    <CTASection
      headline="Find out what AI could do for your firm."
      body="The AI Readiness Scorecard takes 10 minutes. You'll get a personalised score, a breakdown of your firm's strengths and gaps, and specific recommendations. No sales call required."
      primaryCTA={{ label: "Take the Scorecard", href: "/scorecard" }}
      secondaryCTA={{ label: "Or talk to us directly", href: "/contact" }}
    />
  );
}
