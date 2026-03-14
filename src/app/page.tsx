import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ProofBar from "@/components/home/ProofBar";
import ProblemSection from "@/components/home/ProblemSection";
import WorkflowOffers from "@/components/home/WorkflowOffers";
import HowItWorks from "@/components/home/HowItWorks";
import WhySIS from "@/components/home/WhySIS";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "We Built Our Firm on AI. Now We Build Yours.",
  description:
    "Smith Innovation Studio builds AI operating systems for UK accountancy and bookkeeping firms, starting with client email intelligence, admin and compliance workflows, and AI-assisted bookkeeping operations.",
  openGraph: {
    title: "We built our firm on AI. Now we build yours.",
    description:
      "AI operating systems for UK accountancy and bookkeeping firms. Start with one workflow, prove the value, and expand from there.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <ProblemSection />
      <WorkflowOffers />
      <WhySIS />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
