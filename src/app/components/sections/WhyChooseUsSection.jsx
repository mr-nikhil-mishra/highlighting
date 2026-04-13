import React from 'react';
import AnimatedReveal from '../AnimatedReveal';

export default function WhyChooseUsSection() {
  const points = [
    { title: "Full-Stack Excellence", desc: "Comprehensive digital mastery from organic SEO to aggressive paid acquisition." },
    { title: "Bespoke Frameworks", desc: "Zero templated strategies; every blueprint is exclusively architected for your brand." },
    { title: "ROI Obsessed", desc: "Rigorous performance analytics govern every single strategic decision we make." },
    { title: "Radical Transparency", desc: "Unfiltered reporting, direct insights, and absolute clarity on your ad spend." },
    { title: "Conversion-First Creativity", desc: "Aesthetic brilliance designed mathematically to drive direct user action." },
    { title: "Elite Strategists", desc: "Your account is managed by certified industry veterans, not entry-level managers." },
    { title: "Proven Trajectory", desc: "A track record of exponential growth for agile startups and enterprise leaders alike." }
  ];

  return (
    <section className="py-32 bg-[#050505] border-y border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24 flex flex-col items-center">
          <AnimatedReveal>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter max-w-5xl leading-[0.95]">
              What Makes MediaPulse360 the <span className="text-[#dfff00]">Elite Choice?</span>
            </h2>
          </AnimatedReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {points.map((point, index) => (
            <AnimatedReveal key={index} delay={index * 0.1}>
              <div className="group border-l-2 border-[#1a1a1a] hover:border-[#dfff00] pl-8 py-2 transition-colors duration-300">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-sm font-black tracking-widest text-[#dfff00] opacity-50 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                  <h4 className="text-3xl font-black text-white tracking-tight">{point.title}</h4>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                  {point.desc}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
