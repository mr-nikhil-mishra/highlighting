/**
 * @file Navbar.jsx
 * @description The globally persistent navigation header.
 * Handles both standard route routing (e.g., navigating to `/services`) and 
 * "hash routing" (e.g., smoothly scrolling to `<section id="contact">` on the homepage).
 * Features a dynamic responsive hamburger menu with Framer Motion transitions.
 * 
 * @module Components/Navbar
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { SITE_CONFIG } from "../../config/site.config";

// Standardized easing curve for navigation transitions
const EASE = [0.16, 1, 0.3, 1];

// Master navigation dictionary mapping to homepage section ID anchors
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

/**
 * Utility to execute native smooth scrolling to a given DOM element ID.
 * @param {string} id - The #anchor to scroll to.
 */
function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Navbar functional component.
 * 
 * @returns {JSX.Element} Fluid contextual navigation bar (desktop & mobile).
 */
export function Navbar() {
  // Tracks viewport scroll depth to trigger background-blur glassmorphism
  const [scrolled, setScrolled] = useState(false);
  
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Exposes currently loaded URL path (used to determine hash-routing strategy)
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * Smart Navigation Handler
   * If the user is ALREADY on the homepage ("/"), it fires a simple smooth scroll to the target.
   * If the user is on a sub-page (e.g., `/services/web-dev`), it forces a hard redirect to "/" FIRST, 
   * delays execution momentarily to allow DOM render, and then scrolls to the section.
   * 
   * @param {string} href - Target route or hash
   * @param {boolean} isMobile - Whether to auto-close the hamburger menu post-click
   */
  const handleNavClick = (href, isMobile = false) => {
    if (isMobile) setMobileOpen(false);
    
    if (location.pathname === "/") {
      scrollTo(href);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollTo(href);
      }, 100);
    }
  };

  /**
   * Intersection-like listener attached to Window to toggle "scrolled" style variant.
   */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * UX Safeguard: Locks the background body from scrolling independently 
   * when the mobile full-screen overlay is opened.
   */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(0, 0, 0, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          padding: scrolled ? "0.9rem 0" : "1.5rem 0",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home", mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
            aria-label="Go to top"
          >
            <img
              src="/logo.png"
              alt="HIGHLIGHT Marketing Management"
              style={{
                height: scrolled ? "34px" : "40px",
                width: "auto",
                filter: "brightness(0) invert(1)",
                transition: "height 0.4s ease",
              }}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative group text-white/75 hover:text-white transition-colors duration-200 font-semibold"
                style={{ fontSize: "14px", letterSpacing: "0.02em" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#EDF406] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}

            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 font-black text-black bg-[#EDF406] hover:bg-white transition-all duration-300"
              style={{
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.7rem 1.6rem",
                borderRadius: "9999px",
                boxShadow: "0 0 20px rgba(237,244,6,0.15)",
              }}
            >
              {SITE_CONFIG.cta.primary}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white hover:text-[#EDF406] transition-colors duration-200"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="fixed inset-0 z-40 bg-black flex flex-col px-8 pt-28 pb-12"
          >
            <nav className="flex flex-col gap-6 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.6, ease: EASE }}
                  onClick={() => handleNavClick(link.href, true)}
                  className="text-left text-white hover:text-[#EDF406] font-black transition-colors duration-200"
                  style={{ fontSize: "clamp(30px, 8vw, 44px)", letterSpacing: "-0.04em" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            >
              <button
                onClick={() => handleNavClick("#contact", true)}
                className="w-full py-5 bg-[#EDF406] text-black font-black uppercase tracking-widest hover:bg-white transition-colors duration-300"
                style={{ fontSize: "15px", borderRadius: "9999px" }}
              >
                {SITE_CONFIG.cta.primary}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
