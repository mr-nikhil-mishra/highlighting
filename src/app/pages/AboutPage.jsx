import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { CTASection } from "../components/CTASection";

const teamColors = ["var(--brand-neon)", "var(--brand-sec)", "var(--brand-neon)", "var(--brand-sec)"];

export function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });
  const awardsRef = useRef(null);
  const awardsInView = useInView(awardsRef, { once: true, margin: "-80px" });
  const { isDark, colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].pages.about;

  const stats = [
    { value: "10+", label: t.statsLabel[0] },
    { value: "45+", label: t.statsLabel[1] },
    { value: "150+", label: t.statsLabel[2] },
    { value: "AED 2B+", label: t.statsLabel[3] },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: colors.bg, transition: "background-color 0.4s ease" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(var(--brand-neon-rgb),0.07) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-neon)" }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                {t.badge}
              </span>
            </div>

            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "24px", transition: "color 0.3s ease" }}>
              {t.hero}{" "}
              <br />
              <span style={{ color: "var(--brand-neon)", textShadow: isDark ? "0 0 40px rgba(var(--brand-neon-rgb),0.5)" : "none" }}>
                {t.heroAccent}
              </span>
            </h1>

            <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1.15rem", lineHeight: 1.7, maxWidth: "580px", margin: "0 auto", transition: "color 0.3s ease" }}>
              {t.heroSub}
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center p-6 rounded-2xl"
                style={{ background: colors.card, border: `1px solid ${colors.border}` }}
              >
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "2rem", fontWeight: 700, textShadow: "0 0 20px rgba(var(--brand-neon-rgb),0.4)" }}>
                  {stat.value}
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.85rem", marginTop: "4px", transition: "color 0.3s ease" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative" style={{ background: colors.bgAlt, transition: "background-color 0.4s ease" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1690191863988-f685cddde463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNyZWF0aXZlJTIwYWdlbmN5JTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NzU3MTI4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our team"
                  className="w-full h-full object-cover"
                  style={{ filter: isDark ? "brightness(0.8)" : "brightness(0.95)" }}
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(var(--brand-neon-rgb),0.06) 0%, transparent 50%)", border: "1px solid rgba(var(--brand-neon-rgb),0.12)", borderRadius: "1.5rem" }} />
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 p-5 rounded-2xl"
                style={{ background: colors.mobileMenu, border: "1px solid rgba(var(--brand-neon-rgb),0.3)", backdropFilter: "blur(20px)", boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}
              >
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "1.8rem", fontWeight: 700 }}>2015</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.75rem" }}>Founded in Dubai</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                  OUR STORY
                </span>
              </div>

              <h2 className="mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", lineHeight: 1.2, transition: "color 0.3s ease" }}>
                {t.storyTitle}{" "}
                <span style={{ color: "var(--brand-neon)" }}>{t.storyAccent}</span>
              </h2>

              <p className="mb-5" style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1.05rem", lineHeight: 1.75, transition: "color 0.3s ease" }}>
                {t.storyText1}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1.05rem", lineHeight: 1.75, transition: "color 0.3s ease" }}>
                {t.storyText2}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative" style={{ background: colors.bg, transition: "background-color 0.4s ease" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                WHAT DRIVES US
              </span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", transition: "color 0.3s ease" }}>
              {t.valuesTitle}{" "}
              <span style={{ color: "var(--brand-neon)", textShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.4)" }}>{t.valuesAccent}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="group p-7 rounded-3xl relative overflow-hidden"
                style={{ background: colors.card, border: `1px solid ${colors.border}` }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: "linear-gradient(135deg, rgba(var(--brand-neon-rgb),0.06), transparent)" }} />

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl"
                  style={{ background: "rgba(var(--brand-neon-rgb),0.08)", border: "1px solid rgba(var(--brand-neon-rgb),0.2)" }}>
                  {val.icon}
                </div>
                <h3 className="mb-3 relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.05rem", fontWeight: 600, transition: "color 0.3s ease" }}>
                  {val.title}
                </h3>
                <p className="relative z-10" style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.875rem", lineHeight: 1.65, transition: "color 0.3s ease" }}>
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative" style={{ background: colors.bgAlt, transition: "background-color 0.4s ease" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                THE TEAM
              </span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", transition: "color 0.3s ease" }}>
              {t.teamTitle}{" "}
              <span style={{ color: "var(--brand-neon)", textShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.4)" }}>{t.teamAccent}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="group text-center p-6 rounded-3xl relative overflow-hidden"
                style={{ background: colors.card, border: `1px solid ${colors.border}` }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: `linear-gradient(135deg, ${teamColors[i]}06, transparent)` }} />

                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl relative z-10"
                  style={{ background: `${teamColors[i]}15`, border: `1px solid ${teamColors[i]}30` }}
                >
                  {["ðŸ‘¨â€💼", "ðŸ‘©â€💼", "ðŸ‘¨â€ðŸŽ¨", "ðŸ‘©â€ðŸ’»"][i]}
                </div>

                <h3 className="relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1rem", fontWeight: 600, marginBottom: "4px", transition: "color 0.3s ease" }}>
                  {member.name}
                </h3>
                <p className="relative z-10 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: teamColors[i], fontSize: "0.8rem", fontWeight: 500 }}>
                  {member.role}
                </p>
                <p className="relative z-10" style={{ fontFamily: "'Inter', sans-serif", color: colors.textDim, fontSize: "0.75rem", transition: "color 0.3s ease" }}>
                  {member.exp}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 relative" style={{ background: colors.bg, transition: "background-color 0.4s ease" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            ref={awardsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={awardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand-neon)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                RECOGNITION
              </span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", transition: "color 0.3s ease" }}>
              {t.awardsTitle}{" "}
              <span style={{ color: "var(--brand-neon)", textShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.4)" }}>{t.awardsAccent}</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {t.awards.map((award, i) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, x: -30 }}
                animate={awardsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl group"
                style={{ background: colors.card, border: `1px solid ${colors.border}` }}
                whileHover={{ borderColor: "rgba(var(--brand-neon-rgb),0.3)", x: 4 }}
              >
                <Award size={20} style={{ color: "var(--brand-neon)", flexShrink: 0 }} />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1rem", fontWeight: 500, transition: "color 0.3s ease" }}>
                  {award}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

