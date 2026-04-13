import React from 'react';
import AnimatedReveal from '../AnimatedReveal';
import { Monitor, TrendingUp, Share2, Megaphone, Mail, Navigation } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    { title: "Website Designing", icon: <Monitor size={32} /> },
    { title: "SEO", icon: <TrendingUp size={32} /> },
    { title: "Social Media Marketing", icon: <Share2 size={32} /> },
    { title: "Google Ads", icon: <Navigation size={32} /> },
    { title: "Email Marketing", icon: <Mail size={32} /> },
    { title: "Video Editing", icon: <Megaphone size={32} /> }
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <AnimatedReveal>
            <div className="inline-block px-6 py-2 rounded-full border border-[#dfff00] text-[#dfff00] text-sm font-bold tracking-widest uppercase mb-6">
              Here's What I Do
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
             <h2 className="text-5xl md:text-6xl font-black text-white tracking-[-0.02em]">
               My Services
             </h2>
          </AnimatedReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedReveal key={index} delay={index * 0.1}>
              <div className="group bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#dfff00] p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden h-full min-h-[250px] flex flex-col justify-center gap-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfff00]/5 rounded-bl-full group-hover:bg-[#dfff00]/10 transition-colors duration-300"></div>
                <div className="text-[#dfff00] bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center border border-[#1a1a1a]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white relative z-10">{service.title}</h3>
                <div className="w-10 h-10 rounded-full border border-[#dfff00] text-[#dfff00] flex items-center justify-center group-hover:bg-[#dfff00] group-hover:text-black transition-colors duration-300 absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                  <span className="text-xl rotate-[-45deg]">→</span>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
