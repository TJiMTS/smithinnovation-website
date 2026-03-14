import CTASection from "@/components/shared/CTASection";

export default function FinalCTA() {
  return (
    <CTASection
      headline="Find the first workflow worth fixing."
      body="Start with the Workflow Readiness Scorecard or the AI Workflow Audit to identify the first operational bottleneck worth fixing inside your firm."
      primaryCTA={{ label: "Take the Workflow Scorecard", href: "/scorecard" }}
      secondaryCTA={{
        label: "See the AI Workflow Audit",
        href: "/ai-workflow-audit",
      }}
    />
  );
}
