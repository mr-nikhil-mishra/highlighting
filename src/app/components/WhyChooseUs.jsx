import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

function Card({ reason, index, colors }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative p-8 rounded-3xl cursor-default overflow-hidden"
      style={{ background: "#050505", border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.4s ease" }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ background: "linear-gradient(135deg, rgba(var(--brand-neon-rgb),0.06), rgba(var(--brand-sec-rgb),0.03))" }} />
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ border: "1px solid rgba(var(--brand-neon-rgb),0.35)", boxShadow: "inset 0 0 30px rgba(var(--brand-neon-rgb),0.05)" }} />

      <div className="mb-6 relative z-10">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          style={{ display: "inline-block" }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "1px rgba(var(--brand-neon-rgb),0.25)",
              lineHeight: 1,
              transition: "all 0.4s ease"
            }}
            className="group-hover:text-[var(--brand-neon)] group-hover:drop-shadow-[0_0_15px_rgba(var(--brand-neon-rgb),0.5)]"
          >
            {reason.number}
          </span>
        </motion.div>
      </div>

      <h3 className="mb-3 relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ffffff", fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
        {reason.title}
      </h3>
      <p className="relative z-10" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.65 }}>
        {reason.desc}
      </p>

      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(var(--brand-neon-rgb),0.12), transparent)" }} />
    </motion.div>
  );
}

export function WhyChooseUs() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const { language } = useLanguage();
  const t = translations[language].whyChooseUs;

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: "#000000" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(var(--brand-neon-rgb),0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(var(--brand-neon-rgb),0.1)", border: "1px solid rgba(var(--brand-neon-rgb),0.25)" }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {t.badge}
            </span>
          </div>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "16px", textTransform: "uppercase" }}>
            {t.titleMain}{" "}
            <span style={{ color: "var(--brand-neon)", textShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.3)" }}>{t.titleAccent}</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.reasons.map((reason, index) => (
            <Card key={reason.number} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

