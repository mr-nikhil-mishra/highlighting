import HeroSection from "../components/sections/HeroSection";
import AboutMeSection from "../components/sections/AboutMeSection";
import ServicesSection from "../components/sections/ServicesSection";
import CTASection from "../components/sections/CTASection";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <CTASection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
