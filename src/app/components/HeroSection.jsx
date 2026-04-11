import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Building2, Briefcase, Landmark, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

function FloatingOrb({ x, y, size, color, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color, filter: "blur(60px)", opacity: 0.12 }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function HeroCarousel({ colors }) {
  const images = [
    "/hero_slide_1_1775877697768.png",
    "/hero_slide_2_1775877715118.png",
    "/hero_slide_3_1775877734449.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden group"
      style={{
        border: `1px solid rgba(var(--brand-neon-rgb),0.3)`,
        boxShadow: "0 20px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Agency showcase ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 50%)", pointerEvents: "none" }} />
      
      {/* Visual Accents */}
      <div className="absolute inset-0 pointer-events-none rounded-[2rem] z-20" style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)" }} />

      {/* Dynamic Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
        {images.map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full transition-all duration-500 cursor-pointer"
            onClick={() => setCurrentIndex(i)}
            style={{ 
              width: currentIndex === i ? "32px" : "12px", 
              background: currentIndex === i ? "var(--brand-neon)" : "rgba(255,255,255,0.4)",
              boxShadow: currentIndex === i ? "0 0 15px var(--brand-neon)" : "none"
            }}
          />
        ))}
      </div>
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
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(var(--brand-neon-rgb),0.07) 0%, transparent 60%)" }}
      />

      <FloatingOrb x="5%" y="20%" size={400} color="radial-gradient(circle, var(--brand-neon), transparent)" delay={0} />
      <FloatingOrb x="70%" y="60%" size={300} color="radial-gradient(circle, var(--brand-sec), transparent)" delay={2} />
      <FloatingOrb x="40%" y="80%" size={200} color="radial-gradient(circle, var(--brand-neon), transparent)" delay={4} />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px)",
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
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-neon)" }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em" }}>
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
                      color: "var(--brand-neon)",
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      fontWeight: 700,
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                      textShadow: isDark ? "0 0 40px rgba(var(--brand-neon-rgb),0.5)" : "0 0 20px rgba(180,215,0,0.3)",
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
                whileHover={{ background: colors.cardHover, borderColor: "rgba(var(--brand-neon-rgb),0.4)", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {t.cta2}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
            transition={{ delay: 1.4 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[Building2, Briefcase, Landmark, ShieldCheck].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                    style={{
                      background: isDark ? `hsl(${210 + i * 20}, 40%, 15%)` : `hsl(${210 + i * 20}, 80%, 95%)`,
                      border: "2px solid rgba(var(--brand-neon-rgb),0.4)",
                    }}
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "var(--brand-neon)", fontSize: "0.8rem", marginRight: "2px" }}>★</span>
                  ))}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.8rem", transition: "color 0.3s ease" }}>
                  {t.trustText}{" "}
                  <span style={{ color: "var(--brand-neon)", fontWeight: 600 }}>{t.trustHighlight}</span>
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
            <HeroCarousel colors={colors} />
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
          style={{ background: "linear-gradient(to bottom, rgba(var(--brand-neon-rgb),0.6), transparent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

