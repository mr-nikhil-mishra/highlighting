import React from 'react';
import AnimatedReveal from '../AnimatedReveal';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-black">
      {/* Background Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,10,0.8) 100%)' }}></div>
      <div className="absolute left-[-10%] top-[20%] w-96 h-96 bg-[#dfff00]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col items-start gap-6">
            <AnimatedReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#dfff00] animate-pulse"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-[#dfff00] uppercase">Top Digital Marketing Agency</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <h1 className="text-6xl md:text-7xl lg:text-[90px] font-black leading-[0.9] tracking-tighter">
                Engineering <br/> Data-Driven <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: "2px #fff" }}>Digital Growth.</span>
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed max-w-lg mt-4">
                We partner with visionary brands to attract scalable traffic, capture high-intent leads, and drive sustainable revenue through battle-tested digital strategies.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button 
                  className="px-8 py-4 bg-[#dfff00] text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-none shadow-[0_0_20px_rgba(223,255,0,0.15)]"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                </button>
                <button 
                  onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-transparent border border-gray-600 text-white font-black text-sm uppercase tracking-widest hover:border-[#dfff00] hover:text-[#dfff00] transition-colors duration-300 rounded-none"
                >
                  View Case Studies
                </button>
              </div>
            </AnimatedReveal>
          </div>

          <AnimatedReveal delay={0.5} direction="left" className="hidden md:flex justify-end">
             <div className="relative w-full aspect-square max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#dfff00]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-4 border border-[#dfff00]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Growth" 
                  className="absolute inset-0 w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </AnimatedReveal>
        </div>

        {/* Scroll Indicator */}
        <AnimatedReveal delay={1} className="absolute bottom-[-10px] left-6 md:left-auto md:right-6 flex flex-col items-center gap-2">
           <span className="text-xs uppercase tracking-widest text-gray-500 [writing-mode:vertical-rl] rotate-180">Scroll</span>
           <motion.div 
             animate={{ y: [0, 10, 0] }} 
             transition={{ duration: 1.5, repeat: Infinity }}
             className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
           ></motion.div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
