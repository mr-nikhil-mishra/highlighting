import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function HeroSection() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(var(--brand-neon-rgb),0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 w-full z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-12"
          style={{ border: `1px solid rgba(var(--brand-neon-rgb),0.3)` }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--brand-neon)", boxShadow: "0 0 10px var(--brand-neon)" }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {t.badge}
          </span>
        </motion.div>

        {/* Massive Typography */}
        <div className="mb-10 w-full flex flex-col items-center">
          {t.prefixes.map((prefix, i) => (
            <motion.div
              key={i}
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap justify-center items-center gap-x-4"
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#ffffff",
                    fontSize: "clamp(2.5rem, 7vw, 6rem)",
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase"
                  }}
                >
                  {prefix}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "var(--brand-neon)",
                    fontSize: "clamp(2.5rem, 7vw, 6rem)",
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    textShadow: "0 0 40px rgba(var(--brand-neon-rgb),0.3)",
                  }}
                >
                  {t.words[i]}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-center mb-16"
          style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <motion.button
            onClick={() => navigate("/contact")}
            className="px-10 py-5 rounded-full flex items-center gap-3 relative overflow-hidden group"
            style={{
              background: "var(--brand-neon)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#000000",
              border: "none",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(var(--brand-neon-rgb),0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t.cta2}
            <ArrowRight size={20} />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(255,255,255,0.2)" }} />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          {t.scroll}
        </p>
        <motion.div
          className="w-px h-16"
          style={{ background: "linear-gradient(to bottom, var(--brand-neon), transparent)" }}
          animate={{ scaleY: [0, 1, 0], transformOrigin: "top" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
