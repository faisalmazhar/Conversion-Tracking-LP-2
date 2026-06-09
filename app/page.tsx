import Header from "@/components/sections/Header";
import "@/components/css/Header.css";
import Hero from "@/components/sections/Hero";
import Mirror from "@/components/sections/Mirror";
import CostOfBadTracking from "@/components/sections/CostOfBadTracking";
import HubSpotPopup from "@/components/sections/HubSpotPopup";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";  
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Mirror />
        <CostOfBadTracking />
        <Process />
        <Services />
        <Testimonials />
        <WhyUs />
        <FinalCTA />
      </main>

      <HubSpotPopup />
    </>
  );
}