import React from "react";
import { StaggerContainer, StaggerItem } from "../AnimatedReveal";
import AnimatedReveal from "../AnimatedReveal";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "CEO, TechStart Dubai",
    initial: "A",
    stars: 5,
    quote:
      "HIGHLIGHT Marketing Management completely transformed our digital presence. Our organic traffic tripled in 4 months and our paid campaigns are delivering a consistent 8× ROAS. Outstanding work.",
  },
  {
    name: "Sarah Williams",
    role: "Founder, Bloom Retail",
    initial: "S",
    stars: 5,
    quote:
      "The email marketing strategy they built for us generated more revenue in a single month than we'd seen in the prior quarter. Exceptional insight and flawless execution.",
  },
  {
    name: "Raj Patel",
    role: "Marketing Director, Nexus Media",
    initial: "R",
    stars: 5,
    quote:
      "From seamless onboarding to weekly performance reviews, working with the HIGHLIGHT Marketing Management team is a genuinely world-class experience. The results speak for themselves.",
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="bg-black"
      style={{ padding: "clamp(4rem, 5vw, 6.5rem) 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div className="mb-20">
          <AnimatedReveal>
            <span
              className="inline-block font-black text-[#EDF406] border border-[#EDF406]/35 uppercase mb-7"
              style={{ fontSize: "11px", letterSpacing: "0.22em", padding: "0.45rem 1.2rem", borderRadius: "9999px" }}
            >
              Testimonials
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(52px, 8vw, 110px)", letterSpacing: "-0.05em", lineHeight: 0.9,fontWeight: 600 }}
            >
              What Clients <br />
              <span style={{ color: "#EDF406", fontWeight: 600, fontSize: "40px" }}>Say.</span>
            </h2>
          </AnimatedReveal>
        </div>

        {/* Cards */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div
                className="group flex flex-col gap-6 h-full transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "2.5rem 2.25rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(237,244,6,0.3)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="text-[#EDF406]" style={{ fontSize: "18px" }}>★</span>
                  ))}
                </div>

                <p
                  className="text-[#c5c5c5] flex-1"
                  style={{ fontSize: "16px", lineHeight: 1.75 }}
                >
                  "{t.quote}"
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-4 pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center font-black text-black bg-[#EDF406]"
                    style={{ width: "48px", height: "48px", borderRadius: "50%", fontSize: "18px" }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div
                      className="font-black text-white"
                      style={{ fontSize: "15px", letterSpacing: "-0.02em" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-[#555]" style={{ fontSize: "13px", marginTop: "2px" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
