import React from 'react';
import AnimatedReveal from '../AnimatedReveal';

export default function PortfolioSection() {
  const categories = ["Social Media Designs", "Website Designing", "Google Ads", "Meta Ads", "SEO", "Content Writing"];
  
  return (
    <section id="portfolio" className="py-24 bg-[#050505] relative border-y border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <AnimatedReveal>
            <div className="inline-block px-6 py-2 rounded-full border border-[#dfff00] text-[#dfff00] text-sm font-bold tracking-widest uppercase mb-6">
              MY WORKS
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.02em] max-w-2xl mx-auto leading-tight">
              Showcasing My Craft: A Portfolio of Creative Work and Expertise
            </h2>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-16">
           {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${i === 0 ? 'bg-[#dfff00] text-black shadow-[0_0_20px_rgba(223,255,0,0.3)]' : 'bg-[#111] text-gray-400 hover:text-white border border-[#222] hover:border-[#444]'}`}
              >
                {cat}
              </button>
           ))}
        </AnimatedReveal>

        {/* Dummy Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
             <AnimatedReveal key={item} delay={i * 0.1}>
               <div className="group relative rounded-2xl overflow-hidden bg-[#111] aspect-[4/3] cursor-pointer">
                  <img 
                    src={`https://images.unsplash.com/photo-${1550000000000 + i * 1000}?auto=format&fit=crop&w=600&q=80`} 
                    alt={`Portfolio ${item}`}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     <p className="text-[#dfff00] font-bold text-sm mb-1 uppercase tracking-wider">Showcase</p>
                     <h4 className="text-white text-xl font-bold">Project Name {item}</h4>
                  </div>
               </div>
             </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
