import React from "react";
import AnimatedReveal from "../AnimatedReveal";

const portfolio = [
  {
    title: "E-commerce Store Redesign",
    category: "Website Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SaaS Landing Page",
    category: "Web Development",
    year: "2024",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Brand Awareness Campaign",
    category: "Digital Marketing",
    year: "2023",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Email Marketing Funnel",
    category: "Email Marketing",
    year: "2023",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-36 bg-black border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <AnimatedReveal>
            <div className="inline-block text-xs font-black tracking-[0.25em] text-[#EDF406] uppercase border border-[#EDF406]/30 px-5 py-2 rounded-full mb-8">
              Portfolio
            </div>
          </AnimatedReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <AnimatedReveal delay={0.1}>
              <h2
                className="font-black tracking-tighter text-white leading-[0.92]"
                style={{ fontSize: "clamp(48px, 7vw, 100px)", fontWeight: 600 }}
              >
                Selected <br />
                <span className="text-[#EDF406]" style={{ fontWeight: 600, fontSize: "40px" }}>
                  Works.
                </span>
              </h2>
            </AnimatedReveal>
            <AnimatedReveal delay={0.2}>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                A curated selection of projects that showcase the impact of strategic design and marketing.
              </p>
            </AnimatedReveal>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolio.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/3] bg-[#0a0a0a]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Arrow button */}
                <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-[#EDF406] flex items-center justify-center text-black text-xl font-black opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-400">
                  <span className="-rotate-45">→</span>
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-xs font-black tracking-[0.2em] text-[#EDF406] uppercase mb-3">
                    {item.category} · {item.year}
                  </div>
                  <h4
                    className="font-black text-white tracking-tight leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-400"
                    style={{ fontSize: "clamp(22px, 2.5vw, 34px)" }}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        {/* CTA */}
        <AnimatedReveal delay={0.4}>
          <div className="mt-16 text-center">
            <button className="px-10 py-4 border border-white/20 text-white font-black text-sm uppercase tracking-widest rounded-full hover:border-[#EDF406] hover:text-[#EDF406] transition-all duration-300">
              View All Projects
            </button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
