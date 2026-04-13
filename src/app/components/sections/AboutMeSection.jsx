import React from 'react';
import AnimatedReveal from '../AnimatedReveal';

export default function AboutMeSection() {
  return (
    <section id="about" className="py-32 bg-black relative border-t border-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <AnimatedReveal direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#dfff00]/10 blur-2xl rounded-[40px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                alt="About MediaPulse360" 
                className="w-full aspect-[4/5] object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
              />
            </div>
          </AnimatedReveal>

          <div className="flex flex-col items-start gap-8">
            <AnimatedReveal delay={0.1}>
              <div className="inline-block px-6 py-2 rounded-full border border-[#dfff00] text-[#dfff00] text-xs font-bold tracking-widest uppercase mb-4">
                Your Certified Growth Partners
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter mt-4">
                More Than Just an Agency. <br/>
                We Are Your <span className="text-[#dfff00]">Strategic Alliance.</span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                Whether you are looking to engineer a high-conversion web experience, dominate local search, or deploy hyper-scalable paid campaigns, our elite team of strategists executes with precision.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.4}>
              <p className="text-gray-400 text-lg leading-relaxed">
                We fuse aesthetic brilliance with rigorous data analytics to ensure every campaign drives measurable return on investment and total market dominance.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.5}>
              <div className="grid grid-cols-3 gap-6 mt-4 pt-8 border-t border-[#1a1a1a] w-full">
                <div>
                  <h4 className="text-4xl font-black text-white mb-2">ROI</h4>
                  <p className="text-gray-500 uppercase tracking-wider text-xs font-bold">Obsessed</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white mb-2">100%</h4>
                  <p className="text-gray-500 uppercase tracking-wider text-xs font-bold">Transparent</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white mb-2">24/7</h4>
                  <p className="text-gray-500 uppercase tracking-wider text-xs font-bold">Dedication</p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
