import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

function FloatingOrb({
  x, y, size, color, delay,
}: {
  x: string; y: string; size: number; color: string; delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color, filter: "blur(60px)", opacity: 0.12 }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function AnimatedGraph({ colors }: { colors: import("../contexts/ThemeContext").ThemeColors }) {
  const dataPoints = [10, 35, 25, 55, 45, 75, 65, 90];
  const pathD = dataPoints
    .map((p, i) => {
      const x = (i / (dataPoints.length - 1)) * 280;
      const y = 100 - p;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const fillD =
    "M 0,100 " +
    dataPoints
      .map((p, i) => `L ${((i / (dataPoints.length - 1)) * 280).toFixed(1)},${(100 - p).toFixed(1)}`)
      .join(" ") +
    " L 280,100 Z";

  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative rounded-3xl p-8 overflow-hidden"
        style={{
          background: colors.card,
          border: `1px solid rgba(212,255,0,0.2)`,
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.75rem", marginBottom: "4px" }}>
              {t.revenue}
            </p>
            <motion.p
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.6rem", fontWeight: 700 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              AED 2.4M
            </motion.p>
          </div>
          <motion.div
            className="px-3 py-1.5 rounded-full flex items-center gap-1.5"
            style={{ background: "rgba(212,255,0,0.15)", border: "1px solid rgba(212,255,0,0.3)" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1L9 8H1L5 1Z" fill="#d4ff00" />
            </svg>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#d4ff00", fontSize: "0.8rem", fontWeight: 600 }}>
              +147%
            </span>
          </motion.div>
        </div>

        <div className="relative h-28 mb-6">
          <svg viewBox="0 0 280 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#d4ff00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path d={fillD} fill="url(#chartGrad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} />
            <motion.path
              d={pathD}
              fill="none"
              stroke="#d4ff00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 6px #d4ff00)" }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            />
          </svg>
          <motion.div
            className="absolute bottom-2 right-2 w-3 h-3 rounded-full"
            style={{ background: "#d4ff00", boxShadow: "0 0 15px #d4ff00, 0 0 30px #d4ff00" }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: t.stat1, value: "320+" },
            { label: t.stat2, value: "8.2x" },
            { label: t.stat3, value: "150+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="text-center"
            >
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#d4ff00", fontSize: "1.1rem", fontWeight: 700 }}>{stat.value}</p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.7rem" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,255,0,0.08), transparent)", filter: "blur(30px)" }} />
      </motion.div>

      <motion.div
        className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl"
        style={{ background: colors.mobileMenu, border: "1px solid rgba(212,255,0,0.4)", backdropFilter: "blur(10px)", boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, type: "spring" }}
      >
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#d4ff00", fontSize: "0.75rem", fontWeight: 600 }}>{t.badge1}</p>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl"
        style={{ background: colors.mobileMenu, border: "1px solid rgba(0,255,136,0.3)", backdropFilter: "blur(10px)", boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00ff88", fontSize: "0.75rem", fontWeight: 600 }}>{t.badge2}</p>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const navigate = useNavigate();
  const { isDark, colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: colors.bg, transition: "background-color 0.4s ease" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(212,255,0,0.07) 0%, transparent 60%)" }}
      />

      <FloatingOrb x="5%" y="20%" size={400} color="radial-gradient(circle, #d4ff00, transparent)" delay={0} />
      <FloatingOrb x="70%" y="60%" size={300} color="radial-gradient(circle, #00ff88, transparent)" delay={2} />
      <FloatingOrb x="40%" y="80%" size={200} color="radial-gradient(circle, #d4ff00, transparent)" delay={4} />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(212,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,255,0,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#d4ff00" }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#d4ff00", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em" }}>
                {t.badge}
              </span>
            </motion.div>

            <div className="mb-8">
              {t.prefixes.map((prefix, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                  className="flex flex-wrap items-baseline gap-x-3"
                  style={{ marginBottom: i < 2 ? "4px" : "0" }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: colors.text,
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      fontWeight: 700,
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {prefix}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#d4ff00",
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      fontWeight: 700,
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                      textShadow: isDark ? "0 0 40px rgba(212,255,0,0.5)" : "0 0 20px rgba(180,215,0,0.3)",
                    }}
                  >
                    {t.words[i]}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-10 max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1.05rem", lineHeight: 1.7, transition: "color 0.3s ease" }}
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                onClick={() => navigate("/services")}
                className="px-8 py-4 rounded-full flex items-center gap-2 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #d4ff00, #a3c900)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#050505",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 0 30px rgba(212,255,0,0.4)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(212,255,0,0.6)" }}
                whileTap={{ scale: 0.97 }}
              >
                {t.cta1}
                <ArrowRight size={18} />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(255,255,255,0.15)" }} />
              </motion.button>

              <motion.button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 rounded-full flex items-center gap-2"
                style={{
                  background: colors.card,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                  transition: "color 0.3s ease, background 0.3s ease",
                }}
                whileHover={{ background: colors.cardHover, borderColor: "rgba(212,255,0,0.4)", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {t.cta2}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {["🏢", "🏗️", "💼", "🏬"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
                    style={{
                      background: isDark ? `hsl(${60 + i * 30}, 30%, 15%)` : `hsl(${60 + i * 30}, 40%, 88%)`,
                      border: "2px solid rgba(212,255,0,0.3)",
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#d4ff00", fontSize: "0.8rem" }}>★</span>
                  ))}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.8rem", transition: "color 0.3s ease" }}>
                  {t.trustText}{" "}
                  <span style={{ color: "#d4ff00", fontWeight: 600 }}>{t.trustHighlight}</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10"
          >
            <AnimatedGraph colors={colors} />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textDim, fontSize: "0.7rem", letterSpacing: "0.2em" }}>
          {t.scroll}
        </p>
        <motion.div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(212,255,0,0.6), transparent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
