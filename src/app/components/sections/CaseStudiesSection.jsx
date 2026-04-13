import React from 'react';
import AnimatedReveal from '../AnimatedReveal';

export default function CaseStudiesSection() {
  const cases = [
    {
      title: "Scaling from AED 6,000 to AED 80,000 in 90 Days",
      subtitle: "Hyper-optimizing paid touchpoints on a constrained budget to unlock 13x ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dominating Local Search for Healthcare Clinics",
      subtitle: "Executing technical Local SEO to flood a dental practice with high-intent patient inquiries.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="case-studies" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <AnimatedReveal>
            <div className="inline-block px-6 py-2 rounded-full border border-[#dfff00] text-[#dfff00] text-xs font-bold tracking-widest uppercase mb-6">
              Proven Execution
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
             <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter max-w-5xl mx-auto leading-[0.95] mt-4">
               A Track Record of Unprecedented Scale.
             </h2>
          </AnimatedReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {cases.map((item, i) => (
             <AnimatedReveal key={i} delay={i * 0.1}>
               <div className="group relative rounded-2xl overflow-hidden bg-[#111] aspect-[4/3] cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-8 right-8 w-14 h-14 bg-[#dfff00] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-black text-2xl font-bold -rotate-45">→</span>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10 translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <p className="text-[#dfff00] font-bold text-sm mb-4 uppercase tracking-widest opacity-80 group-hover:opacity-100">{item.subtitle}</p>
                     <h4 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">{item.title}</h4>
                  </div>
               </div>
             </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
