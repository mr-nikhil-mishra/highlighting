import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const socials = [
  { icon: Instagram, label: "Instagram", color: "#E1306C" },
  { icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
  { icon: Twitter, label: "Twitter", color: "#1DA1F2" },
  { icon: Youtube, label: "YouTube", color: "#FF0000" },
];

export function Footer() {
  const navigate = useNavigate();
  const { isDark, colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].footer;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer
      ref={ref}
      className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: colors.bgDeep,
        borderTop: `1px solid ${colors.border}`,
        transition: "background-color 0.4s ease",
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(var(--brand-neon-rgb),0.3), transparent)" }}
      />

      <motion.div 
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Col 1 - Brand */}
          <motion.div variants={itemVariants}>
            <div
              className="flex items-center mb-6 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/logo.png"
                alt="HIGHLIGHT Marketing Management"
                style={{
                  height: "60px",
                  width: "auto",
                  filter: "brightness(0) invert(1)",
                  transition: "opacity 0.3s ease",
                  marginLeft: "-16px",
                }}
                className="hover:opacity-80"
              />
            </div>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: colors.textDim,
                fontSize: "0.9rem",
                lineHeight: 1.75,
                maxWidth: "280px",
                transition: "color 0.3s ease",
              }}
            >
              {t.tagline}
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.button
                    key={social.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: colors.card,
                      border: `1px solid ${colors.border}`,
                      cursor: "pointer",
                    }}
                    whileHover={{
                      scale: 1.15,
                      background: `${social.color}20`,
                      borderColor: `${social.color}40`,
                      boxShadow: `0 0 15px ${social.color}30`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} style={{ color: colors.textMuted, transition: "color 0.3s" }} />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Col 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <h4
              className="mb-6"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: colors.text,
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                transition: "color 0.3s ease",
              }}
            >
              {t.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {t.links.map((link) => (
                <motion.button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="text-left group flex items-center gap-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: colors.textDim,
                    fontSize: "0.875rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 0.3s ease",
                  }}
                  whileHover={{ color: "var(--brand-neon)", x: 4 }}
                >
                  <span
                    className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "var(--brand-neon)", flexShrink: 0 }}
                  />
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Col 3 - Contact */}
          <motion.div variants={itemVariants}>
            <h4
              className="mb-6"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: colors.text,
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                transition: "color 0.3s ease",
              }}
            >
              {t.getInTouch}
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(var(--brand-neon-rgb),0.08)" }}>
                  <MapPin size={14} style={{ color: "var(--brand-neon)" }} />
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textDim, fontSize: "0.875rem", lineHeight: 1.6, whiteSpace: "pre-line", transition: "color 0.3s ease" }}>
                  {t.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(var(--brand-neon-rgb),0.08)" }}>
                  <Phone size={14} style={{ color: "var(--brand-neon)" }} />
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textDim, fontSize: "0.875rem", transition: "color 0.3s ease" }}>
                  {t.phone}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(var(--brand-neon-rgb),0.08)" }}>
                  <Mail size={14} style={{ color: "var(--brand-neon)" }} />
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textDim, fontSize: "0.875rem", transition: "color 0.3s ease" }}>
                  {t.email}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textDim, fontSize: "0.8rem", transition: "color 0.3s ease" }}>
            {t.copyright}
          </p>
          <div className="flex gap-6">
            {t.legalLinks.map((item) => (
              <motion.button
                key={item}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: colors.textDim,
                  fontSize: "0.8rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 0.3s ease",
                }}
                whileHover={{ color: "var(--brand-neon)" }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

