import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const avatars = [
  "https://images.unsplash.com/photo-1739298061757-7a3339cee982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NTU4MjgzN3ww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1610721193651-e6aca85b45aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1NTgyODM3fDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1739298061757-7a3339cee982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NTU4MjgzN3ww&ixlib=rb-4.1.0&q=80&w=400",
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const { isDark, colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const go = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + t.items.length) % t.items.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % t.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.items.length]);

  const testimonial = t.items[current];

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: colors.bg, transition: "background-color 0.4s ease" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(var(--brand-neon-rgb),0.04), transparent)", filter: "blur(60px)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
              {t.badge}
            </span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", transition: "color 0.3s ease" }}>
            {t.titleMain}{" "}
            <span style={{ color: "var(--brand-neon)", textShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.4)" }}>{t.titleAccent}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative p-10 md:p-14 rounded-3xl overflow-hidden"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${colors.border}`,
                boxShadow: isDark ? "0 30px 80px rgba(0,0,0,0.4)" : "0 30px 60px rgba(0,0,0,0.08)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(var(--brand-neon-rgb),0.4), transparent)" }} />

              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden"
                    style={{ border: "2px solid rgba(var(--brand-neon-rgb),0.3)", boxShadow: "0 0 20px rgba(var(--brand-neon-rgb),0.15)" }}>
                    <ImageWithFallback
                      src={avatars[current]}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--brand-neon)" style={{ color: "var(--brand-neon)" }} />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                    style={{ background: "rgba(var(--brand-neon-rgb),0.1)", border: "1px solid rgba(var(--brand-neon-rgb),0.25)" }}>
                    <span style={{ color: "var(--brand-neon)", fontSize: "0.7rem" }}>★</span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.75rem", fontWeight: 600 }}>
                      {testimonial.highlight}
                    </span>
                  </div>

                  <p className="mb-8" style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", transition: "color 0.3s ease" }}>
                    "{testimonial.text}"
                  </p>

                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1rem", fontWeight: 600, transition: "color 0.3s ease" }}>
                      {testimonial.name}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textDim, fontSize: "0.875rem", marginTop: "2px", transition: "color 0.3s ease" }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-10 pointer-events-none select-none"
                style={{ fontFamily: "serif", fontSize: "8rem", color: "rgba(var(--brand-neon-rgb),0.06)", lineHeight: 1, fontWeight: 600 }}>
                "
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button onClick={() => go(-1)} className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: colors.card, border: `1px solid ${colors.border}`, color: colors.text, cursor: "pointer" }}
              whileHover={{ scale: 1.1, borderColor: "rgba(var(--brand-neon-rgb),0.4)", color: "var(--brand-neon)" }}
              whileTap={{ scale: 0.95 }}>
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {t.items.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "var(--brand-neon)" : colors.textDim,
                    boxShadow: i === current ? "0 0 10px var(--brand-neon)" : "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>

            <motion.button onClick={() => go(1)} className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: colors.card, border: `1px solid ${colors.border}`, color: colors.text, cursor: "pointer" }}
              whileHover={{ scale: 1.1, borderColor: "rgba(var(--brand-neon-rgb),0.4)", color: "var(--brand-neon)" }}
              whileTap={{ scale: 0.95 }}>
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

