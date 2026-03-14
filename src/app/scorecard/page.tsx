import type { Metadata } from "next";
import ScorecardFlow from "@/components/scorecard/ScorecardFlow";
import {
  scorecardMetaDescription,
  scorecardMetaTitle,
} from "@/lib/scorecard-copy";

export const metadata: Metadata = {
  title: scorecardMetaTitle,
  description: scorecardMetaDescription,
  openGraph: {
    title: scorecardMetaTitle,
    description: scorecardMetaDescription,
  },
};

export default function ScorecardPage() {
  return <ScorecardFlow />;
}
