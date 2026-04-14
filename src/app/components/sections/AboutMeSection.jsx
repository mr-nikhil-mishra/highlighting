import React from "react";
import AnimatedReveal from "../AnimatedReveal";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Brands Scaled" },
  { value: "ROI", label: "Obsessed" },
];

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="bg-black border-t border-white/5"
      style={{ padding: "9rem 0" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <AnimatedReveal direction="right">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-24px",
                  border: "1px solid rgba(237,244,6,0.1)",
                  borderRadius: "52px",
                }}
              />
              <div
                className="absolute pointer-events-none opacity-40"
                style={{
                  inset: "-48px",
                  border: "1px solid rgba(237,244,6,0.05)",
                  borderRadius: "72px",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                alt="About HIGHLIGHT Marketing"
                className="relative z-10 w-full object-cover transition-all duration-700"
                style={{ aspectRatio: "3/4", borderRadius: "40px" }}
              />
              {/* Corner accent */}
              <div
                className="absolute -bottom-6 -right-6 pointer-events-none"
                style={{
                  width: "140px",
                  height: "140px",
                  background: "rgba(237,244,6,0.06)",
                  borderRadius: "50%",
                  filter: "blur(40px)",
                }}
              />
            </div>
          </AnimatedReveal>

          {/* Text */}
          <div className="flex flex-col gap-7">
            <AnimatedReveal delay={0.1}>
              <span
                className="inline-block font-black text-[#EDF406] border border-[#EDF406]/35 uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.22em", padding: "0.45rem 1.2rem", borderRadius: "9999px" }}
              >
                About HIGHLIGHT Marketing
              </span>
            </AnimatedReveal>

            <AnimatedReveal delay={0.18}>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(42px, 5.5vw, 76px)",
                  letterSpacing: "-0.05em",
                  lineHeight: 0.92,
                }}
              >
                Your Strategic <br />
                <span className="text-[#EDF406]">Growth Partners.</span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.26}>
              <p className="text-[#a3a3a3] font-medium" style={{ fontSize: "18px", lineHeight: 1.7 }}>
                Whether you're looking to design a stunning website, dominate search rankings,
                engage audiences on social media, or launch a high-impact ad campaign —
                our elite team of certified strategists has you covered.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.34}>
              <p className="text-[#a3a3a3]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
                We fuse data-driven precision with creative brilliance to ensure every campaign
                delivers measurable ROI and accelerates your market position.
              </p>
            </AnimatedReveal>

            {/* Stats */}
            <AnimatedReveal delay={0.42}>
              <div
                className="grid grid-cols-3 gap-6 pt-8 mt-2"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div
                      className="font-black text-white"
                      style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.05em", lineHeight: 1 }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="font-bold text-[#555] uppercase mt-1.5"
                      style={{ fontSize: "10px", letterSpacing: "0.2em" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.5}>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="self-start font-black text-black bg-[#EDF406] hover:bg-white transition-all duration-300 mt-2"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "1rem 2.2rem",
                  borderRadius: "9999px",
                  boxShadow: "0 0 22px rgba(237,244,6,0.15)",
                }}
              >
                Work With Us
              </button>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
