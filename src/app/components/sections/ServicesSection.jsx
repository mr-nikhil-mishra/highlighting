import React from 'react';
import AnimatedReveal from '../AnimatedReveal';
import { Monitor, TrendingUp, MapPin, Share2, PenTool, Navigation, Mail, Layers } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    { title: "Website Designing", description: "Bespoke, high-performance web experiences engineered for absolute conversion.", icon: <Monitor size={32} /> },
    { title: "Technical SEO", description: "Dominate search rankings through data-backed, foundational search engine optimization.", icon: <TrendingUp size={32} /> },
    { title: "Local SEO", description: "Capture your immediate geographical market with hyper-local search strategies.", icon: <MapPin size={32} /> },
    { title: "Social Media", description: "Cultivate a loyal community through culturally relevant, engaging social campaigns.", icon: <Share2 size={32} /> },
    { title: "Content Marketing", description: "Command authority in your niche with premium, value-driven inbound content.", icon: <PenTool size={32} /> },
    { title: "Paid Media Ads", description: "Aggressive, high-yield ad placements across Google and Meta to scale massive revenue.", icon: <Navigation size={32} /> },
    { title: "Email Marketing", description: "Automated, personalized retention loops that maximize customer lifetime value.", icon: <Mail size={32} /> },
    { title: "Programmatic Ads", description: "Data-led media buying to reach your exact demographic across premium networks.", icon: <Layers size={32} /> }
  ];

  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <AnimatedReveal>
            <div className="inline-block px-6 py-2 rounded-full border border-[#dfff00] text-[#dfff00] text-xs font-bold tracking-widest uppercase mb-6">
              Our Expertise
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
             <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none mt-4">
               Comprehensive <br/> Digital Solutions.
             </h2>
          </AnimatedReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedReveal key={index} delay={index * 0.1}>
              <div className="group bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#dfff00] p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden h-full flex flex-col justify-start gap-4 min-h-[300px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfff00]/5 rounded-bl-full group-hover:bg-[#dfff00]/10 transition-colors duration-300"></div>
                <div className="text-[#dfff00] bg-black/50 w-14 h-14 rounded-xl flex items-center justify-center border border-[#1a1a1a] mb-2">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-white relative z-10 tracking-tight">{service.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="w-8 h-8 rounded-full border border-[#dfff00] text-[#dfff00] flex items-center justify-center group-hover:bg-[#dfff00] group-hover:text-black transition-colors duration-300 absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                  <span className="text-lg rotate-[-45deg]">→</span>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
