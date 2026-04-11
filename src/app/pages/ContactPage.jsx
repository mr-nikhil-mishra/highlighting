import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Calendar, CheckCircle2 } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const { isDark, colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].pages.contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: colors.inputBg,
    border: `1px solid ${colors.inputBorder}`,
    color: colors.text,
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "all 0.3s ease",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    width: "100%",
  };

  const labelStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    color: colors.textMuted,
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    marginBottom: "6px",
    display: "block",
    transition: "color 0.3s ease",
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{ background: colors.bg, transition: "background-color 0.4s ease" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(var(--brand-neon-rgb),0.07) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--brand-neon-rgb),0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-3xl mx-auto px-6 text-center">
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
              <span style={{ color: "var(--brand-neon)", textShadow: isDark ? "0 0 40px rgba(var(--brand-neon-rgb),0.5)" : "none" }}>
                {t.heroAccent}
              </span>
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1.15rem", lineHeight: 1.7, transition: "color 0.3s ease" }}>
              {t.heroSub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 relative" style={{ background: colors.bgAlt, transition: "background-color 0.4s ease" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form (wider) */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div
                className="p-8 md:p-10 rounded-3xl relative overflow-hidden"
                style={{ background: colors.card, border: `1px solid ${colors.border}` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(var(--brand-neon-rgb),0.4), transparent)" }} />

                <h2 className="mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.5rem", fontWeight: 700, transition: "color 0.3s ease" }}>
                  {t.formTitle}
                </h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                        style={{ background: "rgba(var(--brand-neon-rgb),0.15)", border: "2px solid rgba(var(--brand-neon-rgb),0.4)" }}
                      >
                        <CheckCircle2 size={36} style={{ color: "var(--brand-neon)" }} />
                      </motion.div>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px", transition: "color 0.3s ease" }}>
                        {t.successTitle}
                      </h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1rem", transition: "color 0.3s ease" }}>
                        {t.successText}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>{t.nameLabel}</label>
                          <input
                            type="text"
                            placeholder={t.namePlaceholder}
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = "rgba(var(--brand-neon-rgb),0.5)"; e.target.style.boxShadow = "0 0 15px rgba(var(--brand-neon-rgb),0.1)"; }}
                            onBlur={(e) => { e.target.style.borderColor = colors.inputBorder; e.target.style.boxShadow = "none"; }}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>{t.emailLabel}</label>
                          <input
                            type="email"
                            placeholder={t.emailPlaceholder}
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = "rgba(var(--brand-neon-rgb),0.5)"; e.target.style.boxShadow = "0 0 15px rgba(var(--brand-neon-rgb),0.1)"; }}
                            onBlur={(e) => { e.target.style.borderColor = colors.inputBorder; e.target.style.boxShadow = "none"; }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={labelStyle}>{t.companyLabel}</label>
                        <input
                          type="text"
                          placeholder={t.companyPlaceholder}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(var(--brand-neon-rgb),0.5)"; e.target.style.boxShadow = "0 0 15px rgba(var(--brand-neon-rgb),0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = colors.inputBorder; e.target.style.boxShadow = "none"; }}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>{t.serviceLabel}</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          style={{ ...inputStyle, appearance: "none" }}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(var(--brand-neon-rgb),0.5)"; }}
                          onBlur={(e) => { e.target.style.borderColor = colors.inputBorder; }}
                        >
                          <option value="">{t.servicePlaceholder}</option>
                          {t.services.map((s) => (
                            <option key={s} value={s} style={{ background: isDark ? "#0a0a0a" : "#f5f5f0", color: colors.text }}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label style={labelStyle}>{t.messageLabel}</label>
                        <textarea
                          placeholder={t.messagePlaceholder}
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          style={{ ...inputStyle, resize: "vertical" }}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(var(--brand-neon-rgb),0.5)"; e.target.style.boxShadow = "0 0 15px rgba(var(--brand-neon-rgb),0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = colors.inputBorder; e.target.style.boxShadow = "none"; }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full py-4 rounded-full relative overflow-hidden group"
                        style={{
                          background: "linear-gradient(135deg, var(--brand-neon), var(--brand-dark))",
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#050505",
                          border: "none",
                          cursor: "pointer",
                          boxShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.3)",
                        }}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(var(--brand-neon-rgb),0.5)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t.submitBtn}
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: "rgba(255,255,255,0.15)" }} />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Contact info */}
              <div className="p-7 rounded-3xl" style={{ background: colors.card, border: `1px solid ${colors.border}` }}>
                <h3 className="mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.1rem", fontWeight: 600, transition: "color 0.3s ease" }}>
                  {t.infoTitle}
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(var(--brand-neon-rgb),0.08)" }}>
                      <MapPin size={16} style={{ color: "var(--brand-neon)" }} />
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.875rem", lineHeight: 1.65, whiteSpace: "pre-line", transition: "color 0.3s ease" }}>
                      {translations[language].footer.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(var(--brand-neon-rgb),0.08)" }}>
                      <Phone size={16} style={{ color: "var(--brand-neon)" }} />
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.875rem", transition: "color 0.3s ease" }}>
                      {translations[language].footer.phone}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(var(--brand-neon-rgb),0.08)" }}>
                      <Mail size={16} style={{ color: "var(--brand-neon)" }} />
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.875rem", transition: "color 0.3s ease" }}>
                      {translations[language].footer.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategy call CTA */}
              <div
                className="p-7 rounded-3xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(var(--brand-neon-rgb),0.1) 0%, rgba(var(--brand-sec-rgb),0.05) 100%)",
                  border: "1px solid rgba(var(--brand-neon-rgb),0.25)",
                }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ background: ["radial-gradient(circle at 20% 50%, rgba(var(--brand-neon-rgb),0.08), transparent)", "radial-gradient(circle at 80% 50%, rgba(var(--brand-neon-rgb),0.08), transparent)", "radial-gradient(circle at 20% 50%, rgba(var(--brand-neon-rgb),0.08), transparent)"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(var(--brand-neon-rgb),0.15)", border: "1px solid rgba(var(--brand-neon-rgb),0.3)" }}>
                    <Calendar size={20} style={{ color: "var(--brand-neon)" }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.05rem", fontWeight: 600, transition: "color 0.3s ease" }}>
                    {t.consultTitle}
                  </h3>
                  <p className="mb-5" style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.875rem", lineHeight: 1.6, transition: "color 0.3s ease" }}>
                    {t.consultText}
                  </p>
                  <motion.button
                    className="w-full py-3 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, var(--brand-neon), var(--brand-dark))",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#050505",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 0 20px rgba(var(--brand-neon-rgb),0.3)",
                    }}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(var(--brand-neon-rgb),0.5)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t.bookBtn}
                  </motion.button>
                </div>
              </div>

              {/* Response time badge */}
              <div className="flex items-center gap-3 p-4 rounded-2xl"
                style={{ background: colors.card, border: `1px solid ${colors.border}` }}>
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: "var(--brand-sec)", boxShadow: "0 0 10px var(--brand-sec)", flexShrink: 0 }} />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "0.85rem", transition: "color 0.3s ease" }}>
                  We typically respond within <span style={{ color: "var(--brand-sec)", fontWeight: 600 }}>2 hours</span> during business hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

