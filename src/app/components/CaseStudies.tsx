import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const chartData = [
  { month: "Jan", before: 12, after: 18 },
  { month: "Feb", before: 15, after: 28 },
  { month: "Mar", before: 13, after: 42 },
  { month: "Apr", before: 17, after: 58 },
  { month: "May", before: 19, after: 75 },
  { month: "Jun", before: 22, after: 95 },
  { month: "Jul", before: 20, after: 118 },
  { month: "Aug", before: 25, after: 145 },
];

const metricValues = [847, 12400, 150, 320];
const metricSuffixes = ["%", "+", "+", "M+"];
const caseColors = ["#d4ff00", "#00ff88", "#d4ff00"];

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function CaseStudies() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const chartRef = useRef(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-80px" });
  const { isDark, colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].caseStudies;

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: colors.bgAlt, transition: "background-color 0.4s ease" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,255,0,0.2), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#d4ff00", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
              {t.badge}
            </span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", marginBottom: "16px", transition: "color 0.3s ease" }}>
            {t.titleMain}{" "}
            <span style={{ color: "#d4ff00", textShadow: "0 0 30px rgba(212,255,0,0.4)" }}>{t.titleAccent}</span>
          </h2>
        </motion.div>

        {/* Animated metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {t.metrics.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl text-center group"
              style={{ background: colors.card, border: `1px solid ${colors.border}` }}
              whileHover={{ scale: 1.04, borderColor: `${i % 2 === 0 ? "#d4ff00" : "#00ff88"}40` }}
            >
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: i % 2 === 0 ? "#d4ff00" : "#00ff88", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1, textShadow: `0 0 20px ${i % 2 === 0 ? "#d4ff00" : "#00ff88"}50`, marginBottom: "8px" }}>
                <AnimatedCounter target={metricValues[i]} suffix={metricSuffixes[i]} />
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.85rem", transition: "color 0.3s ease" }}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          ref={chartRef}
          initial={{ opacity: 0, y: 30 }}
          animate={chartInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-3xl mb-16"
          style={{ background: colors.card, border: `1px solid ${colors.border}` }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.2rem", fontWeight: 600, marginBottom: "6px", transition: "color 0.3s ease" }}>
                {t.chartTitle}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.875rem", transition: "color 0.3s ease" }}>
                {t.chartSub}
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: colors.textDim }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.8rem" }}>{t.chartBefore}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: "#d4ff00" }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.8rem" }}>{t.chartAfter}</span>
              </div>
            </div>
          </div>

          <div style={{ height: "240px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="afterGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d4ff00" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#d4ff00" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="beforeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fill: colors.textMuted, fontSize: 12, fontFamily: "Space Grotesk" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: colors.textMuted, fontSize: 12, fontFamily: "Space Grotesk" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: isDark ? "rgba(5,5,5,0.9)" : "rgba(245,245,240,0.95)", border: "1px solid rgba(212,255,0,0.3)", borderRadius: "12px", color: colors.text, fontFamily: "Space Grotesk" }} />
                <Area type="monotone" dataKey="before" stroke={colors.textDim} fill="url(#beforeGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="after" stroke="#d4ff00" fill="url(#afterGrad)" strokeWidth={2.5}
                  style={{ filter: "drop-shadow(0 0 6px rgba(212,255,0,0.6))" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.cases.map((cs, i) => (
            <motion.div
              key={cs.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="group p-7 rounded-3xl relative overflow-hidden cursor-default"
              style={{ background: colors.card, border: `1px solid ${colors.border}` }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: `1px solid ${caseColors[i]}30`, background: `linear-gradient(135deg, ${caseColors[i]}06, transparent)` }} />

              <span className="inline-block px-3 py-1 rounded-full mb-4 text-xs font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", background: `${caseColors[i]}15`, color: caseColors[i], border: `1px solid ${caseColors[i]}30` }}>
                {cs.tag}
              </span>

              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textDim, fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "6px", transition: "color 0.3s ease" }}>
                {cs.label}
              </p>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.1rem", fontWeight: 600, marginBottom: "12px", transition: "color 0.3s ease" }}>
                {cs.company}
              </h3>

              <div className="mb-4">
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: caseColors[i], fontSize: "1.6rem", fontWeight: 700, lineHeight: 1, textShadow: `0 0 20px ${caseColors[i]}40` }}>
                  {cs.result}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textDim, fontSize: "0.8rem", marginTop: "2px", transition: "color 0.3s ease" }}>
                  {cs.period}
                </p>
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.875rem", lineHeight: 1.6, transition: "color 0.3s ease" }}>
                {cs.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
