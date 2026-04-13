import React, { useState } from 'react';
import AnimatedReveal from '../AnimatedReveal';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "Very good WordPress designer. The website looks much more professional now compared to our old one.",
      author: "Adnan Bin Ali",
      role: "Client"
    },
    {
      quote: "He transformed our outdated website into a modern and user-friendly masterpiece.",
      author: "Hashmath",
      role: "Client"
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#dfff00]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <AnimatedReveal>
           <h2 className="text-[#dfff00] text-sm font-bold tracking-widest uppercase mb-12 border border-[#dfff00] inline-block px-6 py-2 rounded-full">
             Client Satisfaction
           </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <div className="relative pt-12 pb-8">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] leading-none font-serif text-[#1a1a1a] select-none">"</span>
            <p className="text-2xl md:text-4xl text-white font-bold leading-relaxed tracking-wide relative z-10">
              {testimonials[active].quote}
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.4}>
          <div className="flex flex-col items-center">
            <div className="w-1 h-12 bg-[#dfff00] mb-6"></div>
            <h4 className="text-2xl font-black text-white">{testimonials[active].author}</h4>
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mt-2">{testimonials[active].role}</p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.6}>
          <div className="flex justify-center gap-4 mt-12">
            {testimonials.map((_, i) => (
               <button 
                 key={i}
                 onClick={() => setActive(i)}
                 className={`w-3 h-3 rounded-full transition-all duration-300 ${active === i ? 'bg-[#dfff00] scale-150' : 'bg-[#333] hover:bg-[#555]'}`}
               />
            ))}
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
}
