import HeroSection from "@/components/home/HeroSection";
import ProofBar from "@/components/home/ProofBar";
import TwoPillars from "@/components/home/TwoPillars";
import HowItWorks from "@/components/home/HowItWorks";
import WhySIS from "@/components/home/WhySIS";
import SocialProof from "@/components/home/SocialProof";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <TwoPillars />
      <HowItWorks />
      <WhySIS />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
