import type { Metadata } from "next";
import ScorecardFlow from "@/components/scorecard/ScorecardFlow";

export const metadata: Metadata = {
  title: "AI Readiness Scorecard — How Ready Is Your Firm?",
  description:
    "25 questions. 10 minutes. Find out how ready your professional services firm is for AI automation. Free, no sales call required.",
  openGraph: {
    title: "AI Readiness Scorecard — How Ready Is Your Firm?",
    description:
      "25 questions. 10 minutes. Find out how ready your professional services firm is for AI automation. Free, instant results.",
  },
};

export default function ScorecardPage() {
  return <ScorecardFlow />;
}
