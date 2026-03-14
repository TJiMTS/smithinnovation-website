import CTASection from "@/components/shared/CTASection";

export default function FinalCTA() {
  return (
    <CTASection
      headline="Find the first workflow worth automating."
      body="Start with the AI Readiness Scorecard or book an AI Workflow Audit to identify the operational bottlenecks costing your firm the most time."
      primaryCTA={{ label: "Take the Scorecard", href: "/scorecard" }}
      secondaryCTA={{
        label: "Book an AI Workflow Audit",
        href: "/contact?interest=AI%20Workflow%20Audit",
      }}
    />
  );
}
