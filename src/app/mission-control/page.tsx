import type { Metadata } from "next";
import MissionControlClient from "@/components/mission-control/MissionControlClient";

export const metadata: Metadata = {
  title: "Mission Control",
  description:
    "Local mission control dashboard for Smith Innovation Studio operations.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MissionControlPage() {
  return <MissionControlClient />;
}
