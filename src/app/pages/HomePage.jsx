import { HeroSection } from "../components/HeroSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { ServicesSection } from "../components/ServicesSection";
import { StrategySection } from "../components/StrategySection";
import { CaseStudies } from "../components/CaseStudies";
import { Testimonials } from "../components/Testimonials";
import { CTASection } from "../components/CTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <StrategySection />
      <CaseStudies />
      <Testimonials />
      <CTASection />
    </>
  );
}
