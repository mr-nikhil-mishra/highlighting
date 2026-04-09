import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme, colors } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, path: "/" },
    { label: t.services, path: "/services" },
    { label: t.about, path: "/about" },
    { label: t.blog, path: "/blog" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleNav = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? colors.navBg : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${isDark ? "rgba(212,255,0,0.1)" : "rgba(150,180,0,0.15)"}`
            : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.2)" : "none",
          transition: "all 0.5s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => handleNav("/")}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #d4ff00, #a3c900)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                <path d="M4 20L14 4L24 20H4Z" fill="#050505" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: colors.text,
                fontSize: "1.2rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                transition: "color 0.3s ease",
              }}
            >
              HIGHLIGHT&nbsp;<span style={{ color: "#d4ff00" }}>Marketing</span>
            </span>
          </motion.div>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <motion.button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className="relative py-1 group"
                  whileHover={{ y: -1 }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: active ? "#d4ff00" : colors.textMuted,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.3s",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300"
                    style={{
                      background: "#d4ff00",
                      width: active ? "100%" : "0%",
                      boxShadow: active ? "0 0 8px #d4ff00" : "none",
                    }}
                  />
                  <span
                    className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: "rgba(212,255,0,0.6)" }}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl"
              style={{
                background: colors.card,
                border: `1px solid ${colors.border}`,
                color: colors.textMuted,
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                transition: "all 0.3s",
              }}
              whileHover={{
                borderColor: "rgba(212,255,0,0.4)",
                color: "#d4ff00",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Globe size={14} />
              <span>{language === "en" ? "AR" : "EN"}</span>
            </motion.button>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: colors.card,
                border: `1px solid ${colors.border}`,
                color: colors.textMuted,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              whileHover={{
                borderColor: "rgba(212,255,0,0.4)",
                color: "#d4ff00",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            {/* CTA */}
            <motion.button
              onClick={() => handleNav("/contact")}
              className="px-6 py-2.5 rounded-full relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #d4ff00, #a3c900)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#050505",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(212,255,0,0.3)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(212,255,0,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {t.contact}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(255,255,255,0.15)" }}
              />
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                color: colors.textMuted,
                background: colors.card,
                border: `1px solid ${colors.border}`,
                cursor: "pointer",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>

            <motion.button
              className="p-2 rounded-lg"
              style={{
                color: colors.text,
                background: colors.card,
                border: `1px solid ${colors.border}`,
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl overflow-hidden"
            style={{
              background: colors.mobileMenu,
              backdropFilter: "blur(20px)",
              border: `1px solid ${isDark ? "rgba(212,255,0,0.2)" : "rgba(150,180,0,0.25)"}`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div className="p-6 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNav(link.path)}
                  className="text-left py-3 px-4 rounded-xl"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: isActive(link.path) ? "#d4ff00" : colors.textMuted,
                    fontSize: "1rem",
                    fontWeight: 500,
                    background: isActive(link.path)
                      ? "rgba(212,255,0,0.08)"
                      : colors.card,
                    border: `1px solid ${isActive(link.path) ? "rgba(212,255,0,0.2)" : colors.border}`,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Language toggle in mobile */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28 }}
                onClick={toggleLanguage}
                className="text-left py-3 px-4 rounded-xl flex items-center gap-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: colors.textMuted,
                  fontSize: "1rem",
                  fontWeight: 500,
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  cursor: "pointer",
                }}
              >
                <Globe size={16} />
                <span>
                  {language === "en"
                    ? "Switch to Arabic / العربية"
                    : "Switch to English"}
                </span>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => handleNav("/contact")}
                className="py-3 px-6 rounded-full mt-1"
                style={{
                  background: "linear-gradient(135deg, #d4ff00, #a3c900)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#050505",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 0 20px rgba(212,255,0,0.25)",
                }}
              >
                {t.contact} →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
