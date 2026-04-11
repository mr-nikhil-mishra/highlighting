import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, Share2, Globe, TrendingUp, Film, Mail, BarChart3, Smartphone } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const serviceIcons = [Search, TrendingUp, Share2, Globe, Film, BarChart3, Mail, Smartphone];
const serviceColors = ["var(--brand-neon)", "var(--brand-sec)", "var(--brand-neon)", "var(--brand-sec)", "var(--brand-neon)", "var(--brand-sec)", "var(--brand-neon)", "var(--brand-sec)"];

function ServiceCard({ item, icon: Icon, color, index, colors }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: "easeOut" }}
      className="group relative p-7 rounded-3xl cursor-default overflow-hidden"
      style={{ background: colors.card, border: `1px solid ${colors.border}` }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${color}08, transparent 60%)`, border: `1px solid ${color}30` }} />

      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
        style={{ background: `${color}10`, border: `1px solid ${color}25` }}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon size={24} style={{ color }} />
      </motion.div>

      <h3 className="mb-3 relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.1rem", fontWeight: 600, letterSpacing: "-0.01em", transition: "color 0.3s ease" }}>
        {item.title}
      </h3>
      <p className="relative z-10" style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.875rem", lineHeight: 1.65, transition: "color 0.3s ease" }}>
        {item.desc}
      </p>

      <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 relative z-10"
        style={{ color }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: 600 }}>
          {t.learnMore}
        </span>
        <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const { colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="py-24 relative" style={{ background: colors.bgAlt, transition: "background-color 0.4s ease" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)` }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, var(--brand-neon), transparent)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                {t.badge}
              </span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", lineHeight: 1.1, transition: "color 0.3s ease" }}>
              {t.titleMain}{" "}
              <span style={{ color: "var(--brand-neon)", textShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.4)" }}>{t.titleAccent}</span>
              <br />{t.titleEnd}
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1rem", maxWidth: "320px", lineHeight: 1.7, transition: "color 0.3s ease" }}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.items.map((item, index) => (
            <ServiceCard
              key={index}
              item={item}
              icon={serviceIcons[index]}
              color={serviceColors[index]}
              index={index}
              colors={colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

