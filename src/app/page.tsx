import CaseStudies from "@/components/Home/CaseStudies";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";
import Testimonials from "@/components/Home/Testimonials";
import WorkingProcess from "@/components/Home/WorkingProcess";
import ContactUs from "../components/Home/ContactUs";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
