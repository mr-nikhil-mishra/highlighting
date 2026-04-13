import React from 'react';
import AnimatedReveal from '../AnimatedReveal';

export default function ExpertiseSection() {
  const tools = [
    { name: "WordPress", logo: "W" },
    { name: "Canva", logo: "C" },
    { name: "Figma", logo: "F" },
    { name: "Google Ads", logo: "G" },
    { name: "Meta Ads", logo: "M" },
    { name: "SEO", logo: "S" },
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <AnimatedReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.02em]">
              My Expertise
            </h2>
          </AnimatedReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <AnimatedReveal key={index} delay={index * 0.1}>
              <div className="group bg-[#080808] border border-[#1a1a1a] hover:border-[#dfff00] rounded-xl p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(223,255,0,0.1)] hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-[#111] flex items-center justify-center border border-[#222] group-hover:border-[#dfff00] transition-colors duration-300">
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-[#dfff00] transition-colors">{tool.logo}</span>
                </div>
                <h4 className="text-white font-bold tracking-wide group-hover:text-[#dfff00] transition-colors">{tool.name}</h4>
              </div>
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
