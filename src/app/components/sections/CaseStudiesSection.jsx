import React from "react";
import { StaggerContainer, StaggerItem } from "../AnimatedReveal";
import AnimatedReveal from "../AnimatedReveal";

const cases = [
  {
    title: "AED 6K to AED 80K in 90 Days",
    category: "Paid Media · E-Commerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    tag: "13× ROI",
  },
  {
    title: "Local SEO for a Dental Clinic",
    category: "Local SEO · Healthcare",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    tag: "4× Patient Leads",
  },
  {
    title: "Social Growth for Travel Brand",
    category: "Social Media · Travel",
    year: "2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    tag: "200K+ Followers",
  },
  {
    title: "Car Rental Lead Generation",
    category: "PPC · Automotive",
    year: "2023",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80",
    tag: "5× Booking Rate",
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="bg-black"
      style={{ padding: "9rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div className="mb-20">
          <AnimatedReveal>
            <span
              className="inline-block font-black text-[#EDF406] border border-[#EDF406]/35 uppercase mb-7"
              style={{ fontSize: "11px", letterSpacing: "0.22em", padding: "0.45rem 1.2rem", borderRadius: "9999px" }}
            >
              Case Studies
            </span>
          </AnimatedReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <AnimatedReveal delay={0.1}>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(52px, 8vw, 110px)",
                  letterSpacing: "-0.05em",
                  lineHeight: 0.9,
                  fontWeight: 600
                }}
              >
                Selected <br />
                <span style={{ color: "#EDF406", fontWeight: 600, fontSize: "40px" }}>
                  Works.
                </span>
              </h2>
            </AnimatedReveal>
            <AnimatedReveal delay={0.2}>
              <p
                className="text-[#a3a3a3] max-w-xs font-medium"
                style={{ fontSize: "17px", lineHeight: 1.65 }}
              >
                Real campaigns. Real numbers. A proven track record of exponential growth.
              </p>
            </AnimatedReveal>
          </div>
        </div>

        {/* 2×2 image grid */}
        <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item) => (
            <StaggerItem key={item.title}>
              <div
                className="group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: "24px", aspectRatio: "16/10", background: "#0a0a0a" }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                {/* ROI Tag */}
                <div
                  className="absolute top-6 left-6 font-black text-black bg-[#EDF406]"
                  style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.9rem", borderRadius: "9999px" }}
                >
                  {item.tag}
                </div>

                {/* Arrow */}
                <div
                  className="absolute top-6 right-6 flex items-center justify-center text-black bg-[#EDF406] font-black opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-400"
                  style={{ width: "48px", height: "48px", borderRadius: "50%", fontSize: "20px" }}
                >
                  <span style={{ transform: "rotate(-45deg)", display: "inline-block" }}>→</span>
                </div>

                {/* Text */}
                <div className="absolute bottom-8 left-8 right-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <div
                    className="font-black text-[#EDF406] uppercase mb-3"
                    style={{ fontSize: "10px", letterSpacing: "0.2em", opacity: 0.8 }}
                  >
                    {item.category} · {item.year}
                  </div>
                  <h4
                    className="font-black text-white"
                    style={{ fontSize: "clamp(20px, 2.5vw, 30px)", letterSpacing: "-0.04em", lineHeight: 1.15 }}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedReveal delay={0.3}>
          <div className="text-center mt-14">
            <button
              className="font-black text-white border border-white/20 hover:border-[#EDF406] hover:text-[#EDF406] transition-all duration-300"
              style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", padding: "1rem 2.4rem", borderRadius: "9999px" }}
            >
              View All Case Studies
            </button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
