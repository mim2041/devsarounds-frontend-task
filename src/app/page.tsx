import CaseStudies from "@/components/Home/CaseStudies";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import WorkingProcess from "@/components/Home/WorkingProcess";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Services />
      <CaseStudies />
      <WorkingProcess />
    </div>
  );
}
