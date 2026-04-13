import HeroSection from "../components/sections/HeroSection";
import AboutMeSection from "../components/sections/AboutMeSection";
import ServicesSection from "../components/sections/ServicesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ExpertiseSection from "../components/sections/ExpertiseSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import ContactSection from "../components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <PortfolioSection />
      <ExpertiseSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
