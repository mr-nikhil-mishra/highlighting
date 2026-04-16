/**
 * @file HomePage.jsx
 * @description The primary landing page for the application. 
 * Rather than containing monolithic code, it strictly acts as a compositional shell,
 * stacking modular UI sections sequentially.
 * 
 * @module Pages/HomePage
 */

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

/**
 * HomePage functional component.
 * 
 * @returns {JSX.Element} The fully assembled sequence of landing page marketing blocks.
 */
export function HomePage() {
  return (
    <>
      <HeroSection />          {/* 1. Introductory hook and main Call to Action */}
      <AboutMeSection />       {/* 2. Brand history and founder summary */}
      <ServicesSection />      {/* 3. Core offerings linking to dynamic detail pages */}
      <CaseStudiesSection />   {/* 4. Portfolio displays (Scroll horizontals) */}
      <WhyChooseUsSection />   {/* 5. Value proposition data points */}
      <TestimonialSection />   {/* 6. Social proof and client reviews */}
      <FAQSection />           {/* 7. Collapsible accordion queries */}
      <ContactSection />       {/* 8. Raw contact forms and mapping context */}
      
      {/* 9. Baseline Site Footer closures */}
      <FooterMarquee />
      <SiteFooter />
    </>
  );
}
