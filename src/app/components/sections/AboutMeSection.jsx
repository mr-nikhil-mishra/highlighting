import React from 'react';
import AnimatedReveal from '../AnimatedReveal';

export default function AboutMeSection() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <AnimatedReveal direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#dfff00]/10 blur-2xl rounded-[40px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80" 
                alt="About Mohammad Zia" 
                className="w-full aspect-[4/5] object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
              />
            </div>
          </AnimatedReveal>

          <div className="flex flex-col items-start gap-8">
            <AnimatedReveal delay={0.1}>
              <div className="inline-block px-6 py-2 rounded-full border border-[#dfff00] text-[#dfff00] text-sm font-bold tracking-widest uppercase mb-4">
                About Me
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.02em]">
                Focused. Flexible.<br/>
                <span className="text-[#dfff00]">Forward-thinking.</span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                I can work from everywhere. With over 5+ years of hands-on experience working with clients in both India and Dubai.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.4}>
              <p className="text-gray-400 text-lg leading-relaxed">
                Throughout my career, I've developed a deep understanding of creating user-centric websites and implementing strategic digital marketing campaigns that drive results. Whether you're launching a new venture or looking to enhance your online presence, I'm here to help you navigate the digital world with a perfect balance of design and strategy.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.5}>
              <div className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-[#1a1a1a] w-full">
                <div>
                  <h4 className="text-4xl font-black text-white mb-2">5+</h4>
                  <p className="text-gray-500 uppercase tracking-wider text-sm font-bold">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white mb-2">100%</h4>
                  <p className="text-gray-500 uppercase tracking-wider text-sm font-bold">Client Satisfaction</p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
