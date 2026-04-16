/**
 * @file ServicesPage.jsx
 * @description Dedicated root page outlining the agency's primary offerings and workflow methodology.
 * It imports the global `ServicesSection` array and builds a custom "How We Work" procedural 
 * stagger-animated grid beneath it.
 * 
 * @module Pages/ServicesPage
 */

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useNavigate } from "react-router";
import { ServicesSection } from "../components/ServicesSection";
import { CTASection } from "../components/CTASection";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

/**
 * Localized functional component defining a single "Step" inside the How We Work grid.
 * Receives execution order via 'index' to calculate a mathematically staggered CSS entrance delay.
 * 
 * @param {object} props 
 * @param {object} props.step - Translation data containing title, desc, and num
 * @param {number} props.index - Used as a multiplier for Framer Motion animation delays
 * @param {object} props.colors - Contextual deep theme payload for styling hooks
 * @returns {JSX.Element} Extrusion-styled procedural tracking card
 */
function ProcessStep({ step, index, colors }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative group"
    >
      {/* Connector line */}
      {index < 3 && (
        <div
          className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
          style={{ background: `linear-gradient(90deg, rgba(var(--brand-neon-rgb),0.3), transparent)` }}
        />
      )}

      <div
        className="relative z-10 p-8 rounded-3xl overflow-hidden"
        style={{ background: colors.card, border: `1px solid ${colors.border}` }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
          style={{ background: "linear-gradient(135deg, rgba(var(--brand-neon-rgb),0.06), transparent)" }}
        />

        {/* Step number */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
          style={{ background: "rgba(var(--brand-neon-rgb),0.1)", border: "1px solid rgba(var(--brand-neon-rgb),0.25)" }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "var(--brand-neon)",
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            {step.num}
          </span>
        </div>

        <h3
          className="mb-3 relative z-10"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: colors.text,
            fontSize: "1.15rem",
            fontWeight: 600,
            transition: "color 0.3s ease",
          }}
        >
          {step.title}
        </h3>
        <p
          className="relative z-10"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: colors.textMuted,
            fontSize: "0.9rem",
            lineHeight: 1.65,
            transition: "color 0.3s ease",
          }}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function ServicesPage() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const navigate = useNavigate();
  const { isDark, colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].pages.services;

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: colors.bg, transition: "background-color 0.4s ease" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(var(--brand-neon-rgb),0.07) 0%, transparent 60%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-neon)" }} />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "var(--brand-neon)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                {t.badge}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                color: colors.text,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "24px",
                transition: "color 0.3s ease",
              }}
            >
              {t.hero}{" "}
              <span
                style={{
                  color: "var(--brand-neon)",
                  textShadow: isDark ? "0 0 40px rgba(var(--brand-neon-rgb),0.5)" : "none",
                }}
              >
                {t.heroAccent}
              </span>
            </h1>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: colors.textMuted,
                fontSize: "1.15rem",
                lineHeight: 1.7,
                maxWidth: "580px",
                margin: "0 auto 40px",
                transition: "color 0.3s ease",
              }}
            >
              {t.heroSub}
            </p>

            <motion.button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 rounded-full inline-flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, var(--brand-neon), var(--brand-dark))",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#050505",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.4)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(var(--brand-neon-rgb),0.6)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Free Strategy Call →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (reused component) */}
      <ServicesSection />

      {/* Process Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: colors.bg, transition: "background-color 0.4s ease" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "var(--brand-neon)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                HOW WE WORK
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: colors.text,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
                transition: "color 0.3s ease",
              }}
            >
              {t.processTitle}{" "}
              <span style={{ color: "var(--brand-neon)", textShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.4)" }}>
                {t.processAccent}
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: colors.textMuted,
                fontSize: "1.05rem",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.7,
                transition: "color 0.3s ease",
              }}
            >
              {t.processSub}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((step, index) => (
              <ProcessStep key={step.num} step={step} index={index} colors={colors} />
            ))}
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
    </>
  );
}

