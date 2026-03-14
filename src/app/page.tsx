import HeroSection from "@/components/home/HeroSection";
import ProofBar from "@/components/home/ProofBar";
import ProblemSection from "@/components/home/ProblemSection";
import WorkflowOffers from "@/components/home/WorkflowOffers";
import HowItWorks from "@/components/home/HowItWorks";
import WhySIS from "@/components/home/WhySIS";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <ProblemSection />
      <WorkflowOffers />
      <HowItWorks />
      <WhySIS />
      <FinalCTA />
    </>
  );
}
