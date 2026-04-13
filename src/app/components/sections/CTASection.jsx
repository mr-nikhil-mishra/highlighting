import React from 'react';
import AnimatedReveal from '../AnimatedReveal';

export default function CTASection() {
  return (
    <section className="py-32 bg-[#050505] relative border-y border-[#1a1a1a] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[#dfff00]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <AnimatedReveal>
           <h2 className="text-[#dfff00] text-xs font-bold tracking-widest uppercase mb-8 border border-[#dfff00] inline-block px-6 py-2 rounded-full">
             Ready for Hyper-Growth?
           </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <h3 className="text-5xl md:text-7xl lg:text-[80px] font-black text-white leading-[0.9] tracking-tighter mb-12">
            We Execute the Heavy Lifting. You Focus on <span className="text-transparent" style={{ WebkitTextStroke: "1px #dfff00" }}>Scaling Operations.</span>
          </h3>
        </AnimatedReveal>

        <AnimatedReveal delay={0.4}>
          <button 
            className="px-10 py-5 bg-[#dfff00] text-black font-black text-sm uppercase tracking-widest transition-all duration-300 rounded-none shadow-[0_0_30px_rgba(223,255,0,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:bg-white inset-ring"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk Strategy
          </button>
        </AnimatedReveal>
      </div>
    </section>
  );
}
