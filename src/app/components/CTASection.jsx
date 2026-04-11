import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const { colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: colors.bg, transition: "background-color 0.4s ease" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(var(--brand-neon-rgb),0.3), transparent)" }} />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden text-center p-14 md:p-20"
          style={{
            background: "linear-gradient(135deg, rgba(var(--brand-neon-rgb),0.08) 0%, rgba(var(--brand-sec-rgb),0.04) 50%, rgba(var(--brand-neon-rgb),0.06) 100%)",
            border: "1px solid rgba(var(--brand-neon-rgb),0.2)",
          }}
        >
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "radial-gradient(ellipse at 20% 50%, rgba(var(--brand-neon-rgb),0.08) 0%, transparent 60%)",
                "radial-gradient(ellipse at 80% 50%, rgba(var(--brand-neon-rgb),0.08) 0%, transparent 60%)",
                "radial-gradient(ellipse at 20% 50%, rgba(var(--brand-neon-rgb),0.08) 0%, transparent 60%)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-40"
            style={{ background: "radial-gradient(circle at top left, rgba(var(--brand-neon-rgb),0.2), transparent)" }} />
          <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none opacity-40"
            style={{ background: "radial-gradient(circle at bottom right, rgba(var(--brand-sec-rgb),0.15), transparent)" }} />

          <div className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: "linear-gradient(rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: "rgba(var(--brand-neon-rgb),0.1)", border: "1px solid rgba(var(--brand-neon-rgb),0.3)" }}
            >
              <Sparkles size={14} style={{ color: "var(--brand-neon)" }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                {t.badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 700,
                color: colors.text,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "24px",
                transition: "color 0.3s ease",
              }}
            >
              {t.titleMain}{" "}
              <span style={{ color: "var(--brand-neon)", textShadow: "0 0 40px rgba(var(--brand-neon-rgb),0.5)" }}>{t.titleAccent}</span>
              {" "}{t.titleEnd}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 48px", transition: "color 0.3s ease" }}
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={() => navigate("/services")}
                className="px-10 py-4 rounded-full flex items-center justify-center gap-2 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, var(--brand-neon), var(--brand-dark))",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#050505",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 0 40px rgba(var(--brand-neon-rgb),0.4)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(var(--brand-neon-rgb),0.6)" }}
                whileTap={{ scale: 0.97 }}
              >
                {t.btn1}
                <ArrowRight size={18} />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(255,255,255,0.15)" }} />
              </motion.button>

              <motion.button
                onClick={() => navigate("/contact")}
                className="px-10 py-4 rounded-full"
                style={{
                  background: colors.card,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                  transition: "color 0.3s ease, background 0.3s ease",
                }}
                whileHover={{ background: colors.cardHover, borderColor: "rgba(var(--brand-neon-rgb),0.4)", scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t.btn2}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {t.trust.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.875rem", transition: "color 0.3s ease" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

