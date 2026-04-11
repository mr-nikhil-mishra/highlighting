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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, path: "/" },
    { label: t.services, path: "/services" },
    { label: t.about, path: "/about" },
    { label: t.blog, path: "/blog" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled 
            ? (isDark ? "rgba(10, 10, 10, 0.85)" : "rgba(255, 255, 255, 0.85)") 
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${colors.border}` : "1px solid transparent",
          padding: scrolled ? "1rem 0" : "1.5rem 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNav("/")}
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, var(--brand-neon), var(--brand-dark))", boxShadow: "0 4px 20px rgba(var(--brand-neon-rgb), 0.3)" }}
            >
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                <path d="M4 20L14 4L24 20H4Z" fill="#050505" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
              HIGHLIGHT&nbsp;<span style={{ color: "var(--brand-neon)" }}>MARKETING</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6" style={{ background: scrolled ? "transparent" : (isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"), padding: "0.5rem 1.5rem", borderRadius: "100px", backdropFilter: "blur(10px)" }}>
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className="relative px-2 py-1 transition-colors duration-300 group"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif", 
                    fontSize: "0.9rem", 
                    fontWeight: 500,
                    color: isActive(link.path) ? (isDark ? "#fff" : "#000") : colors.textMuted,
                  }}
                >
                  {link.label}
                  <span 
                    className="absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-transform duration-300"
                    style={{ 
                      background: "var(--brand-neon)", 
                      transform: isActive(link.path) ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left"
                    }}
                  />
                  {!isActive(link.path) && (
                    <span 
                       className="absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                       style={{ background: colors.border, transformOrigin: "left" }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={toggleLanguage}
                className="h-10 px-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                style={{ background: colors.card, border: `1px solid ${colors.border}`, color: colors.text }}
                aria-label="Toggle Language"
              >
                <Globe size={18} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", fontWeight: 600 }}>
                  {language.toUpperCase()}
                </span>
              </button>
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={{ background: colors.card, border: `1px solid ${colors.border}`, color: colors.text }}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                onClick={() => handleNav("/contact")}
                className="ml-2 px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, var(--brand-neon), var(--brand-dark))",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#050505",
                  boxShadow: "0 4px 15px rgba(var(--brand-neon-rgb), 0.2)"
                }}
              >
                {translations[language].pages.contact.bookBtn}
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
             <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: colors.card, border: `1px solid ${colors.border}`, color: colors.text }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-105"
              style={{ background: colors.card, border: `1px solid ${colors.border}`, color: colors.text }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-24 px-6 pb-6"
            style={{ 
              background: isDark ? "rgba(10, 10, 10, 0.98)" : "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(20px)"
            }}
          >
            <div className="flex flex-col gap-2 mt-4 flex-1">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className="flex items-center justify-between py-4 border-b w-full text-left"
                  style={{ 
                    borderColor: colors.border,
                    color: isActive(link.path) ? "var(--brand-neon)" : colors.text,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 600
                  }}
                >
                  {link.label}
                  <span style={{ fontSize: "1rem", opacity: isActive(link.path) ? 1 : 0.3 }}>→</span>
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl"
                style={{ background: colors.card, border: `1px solid ${colors.border}`, color: colors.text, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
              >
                <Globe size={18} />
                Language: {{ en: "English", ar: "العربية", fr: "Français", es: "Español", de: "Deutsch" }[language]}
              </button>
              
              <button
                onClick={() => handleNav("/contact")}
                className="w-full py-4 rounded-xl text-center shadow-lg"
                style={{
                  background: "linear-gradient(135deg, var(--brand-neon), var(--brand-dark))",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#050505",
                }}
              >
                {translations[language].pages.contact.bookBtn}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

