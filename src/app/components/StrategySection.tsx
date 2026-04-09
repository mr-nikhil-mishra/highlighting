import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function StrategySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const { colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].strategy;

  return (
    <section
      id="strategy"
      ref={containerRef}
      className="py-24 relative overflow-hidden"
      style={{ background: colors.bg, transition: "background-color 0.4s ease" }}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1726003354242-4ff17c3515e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGJ1c2luZXNzJTIwc3RyYXRlZ3klMjBtZWV0aW5nJTIwbHV4dXJ5JTIwb2ZmaWNlfGVufDF8fHx8MTc3NTU4MjgzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Strategy meeting"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.75) contrast(1.1)" }}
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(212,255,0,0.08) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)" }} />
              <div className="absolute inset-0 rounded-3xl" style={{ border: "1px solid rgba(212,255,0,0.15)" }} />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl"
              style={{ background: colors.mobileMenu, border: "1px solid rgba(212,255,0,0.3)", backdropFilter: "blur(20px)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            >
              <div className="text-center">
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#d4ff00", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1 }}>10+</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.8rem", marginTop: "4px" }}>
                  {t.yearsLabel}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -left-6 p-4 rounded-2xl"
              style={{ background: colors.mobileMenu, border: "1px solid rgba(0,255,136,0.3)", backdropFilter: "blur(20px)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,255,136,0.12)" }}>
                  <span style={{ fontSize: "1.2rem" }}>🎯</span>
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00ff88", fontSize: "1rem", fontWeight: 700 }}>{t.partnerLabel}</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.7rem" }}>{t.partnerSub}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#d4ff00", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                {t.badge}
              </span>
            </div>

            <h2 className="mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", lineHeight: 1.2, transition: "color 0.3s ease" }}>
              {t.title}{" "}
              <span className="relative inline-block" style={{ color: "#d4ff00" }}>
                {t.titleAccent}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 w-full"
                  style={{ background: "linear-gradient(90deg, #d4ff00, transparent)", boxShadow: "0 0 10px #d4ff00" }}
                  initial={{ scaleX: 0, originX: "left" }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </h2>

            <p className="mb-8" style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1.05rem", lineHeight: 1.75, transition: "color 0.3s ease" }}>
              {t.subtitle}
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {t.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={20} style={{ color: "#d4ff00", flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.95rem", lineHeight: 1.5, transition: "color 0.3s ease" }}>
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="px-8 py-4 rounded-full"
              style={{
                background: "linear-gradient(135deg, #d4ff00, #a3c900)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#050505",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(212,255,0,0.3)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(212,255,0,0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              {t.cta}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
