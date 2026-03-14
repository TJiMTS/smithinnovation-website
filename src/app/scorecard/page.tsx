import type { Metadata } from "next";
import ScorecardFlow from "@/components/scorecard/ScorecardFlow";

export const metadata: Metadata = {
  title: "AI Readiness Scorecard — How Ready Is Your Firm for AI?",
  description:
    "25 questions. 10 minutes. Find out how ready your UK accountancy or bookkeeping firm is for AI workflow systems. Free, no sales call required.",
  openGraph: {
    title: "AI Readiness Scorecard — How Ready Is Your Firm for AI?",
    description:
      "25 questions. 10 minutes. Find out how ready your UK accountancy or bookkeeping firm is for AI workflow systems. Free, instant results.",
  },
};

export default function ScorecardPage() {
  return <ScorecardFlow />;
}
