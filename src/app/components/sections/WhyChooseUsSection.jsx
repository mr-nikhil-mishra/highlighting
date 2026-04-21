import React from "react";
import AnimatedReveal from "../AnimatedReveal";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Full-Service Expertise",
    desc: "From organic SEO and content marketing to aggressive paid acquisition and web design — we cover every digital growth vector under one roof.",
  },
  {
    title: "Bespoke Strategy",
    desc: "No templates. No one-size-fits-all. Every strategy is architected from scratch around your specific business goals and target market.",
  },
  {
    title: "ROI-Obsessed Execution",
    desc: "Rigorous analytics and performance tracking govern every decision. We optimize relentlessly until every pound of your budget is working at peak efficiency.",
  },
  {
    title: "Radical Transparency",
    desc: "Clear, honest reporting. No agency jargon. You always know exactly where your budget is going and what results it's generating.",
  },
  {
    title: "Conversion-First Creative",
    desc: "We blend aesthetic brilliance with conversion psychology — designs and copy engineered to turn visitors into paying customers.",
  },
  {
    title: "Elite, Certified Team",
    desc: "Your campaigns are managed by certified senior strategists, not junior executives — professionals with proven track records across industries.",
  },
  {
    title: "Proven Track Record",
    desc: "Trusted across e-commerce, healthcare, real estate, automotive, travel, and finance industries with documented, verifiable results.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      style={{ background: "#050505", padding: "clamp(4rem, 5vw, 6.5rem) 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div className="mb-20">
          <AnimatedReveal>
            <span
              className="inline-block font-black text-[#EDF406] border border-[#EDF406]/35 uppercase mb-7"
              style={{ fontSize: "11px", letterSpacing: "0.22em", padding: "0.45rem 1.2rem", borderRadius: "9999px" }}
            >
              Why Choose Us
            </span>
          </AnimatedReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <AnimatedReveal delay={0.1}>
              <h2
                className="font-black text-white"
                style={{ fontSize: "clamp(48px, 7vw, 95px)", letterSpacing: "-0.05em", lineHeight: 0.9, fontWeight: 600 }}
              >
                What Makes Us <br />
                <span style={{ color: "#EDF406", fontWeight: 600, fontSize: "40px" }}>
                  Different?
                </span>
              </h2>
            </AnimatedReveal>
            <AnimatedReveal delay={0.2}>
              <p className="text-[#a3a3a3] max-w-xs font-medium" style={{ fontSize: "17px", lineHeight: 1.65 }}>
                Seven reasons why ambitious brands choose HIGHLIGHT Marketing Management.
              </p>
            </AnimatedReveal>
          </div>
        </div>

        {/* Reasons — border-left design matching digitalbyzia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {reasons.map((r, i) => (
            <AnimatedReveal key={r.title} delay={i * 0.09}>
              <div
                className="group flex flex-col gap-4 pl-7 transition-all duration-300"
                style={{ borderLeft: "2px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = "#EDF406"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = "rgba(255,255,255,0.08)"; }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="font-black text-[#EDF406] opacity-40 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                    style={{ fontSize: "11px", letterSpacing: "0.2em", paddingTop: "4px" }}
                  >
                    0{i + 1}
                  </span>
                  <h4
                    className="font-black text-white"
                    style={{ fontSize: "22px", letterSpacing: "-0.03em", lineHeight: 1.2 }}
                  >
                    {r.title}
                  </h4>
                </div>
                <p
                  className="text-[#666] group-hover:text-[#a3a3a3] transition-colors duration-300"
                  style={{ fontSize: "15px", lineHeight: 1.7 }}
                >
                  {r.desc}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
