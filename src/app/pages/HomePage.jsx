import HeroSection from "../components/sections/HeroSection";
import AboutMeSection from "../components/sections/AboutMeSection";
import ServicesSection from "../components/sections/ServicesSection";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";
import FooterMarquee from "../components/FooterMarquee";
import SiteFooter from "../components/sections/SiteFooter";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <FooterMarquee />
      <SiteFooter />
    </>
  );
}
