import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about" },
    { label: "Services", path: "#services" },
    { label: "Portfolio", path: "#portfolio" },
    { label: "Contact", path: "#contact" },
  ];

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const element = document.querySelector(id);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0, 0, 0, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? `1px solid rgba(255,255,255,0.05)` : "1px solid transparent",
          padding: scrolled ? "1rem 0" : "1.5rem 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex flex-col cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", color: "#fff", fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>
              DBZ<span style={{ color: "#dfff00" }}>.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => scrollToSection(link.path)}
                  className="relative text-white hover:text-[#dfff00] transition-colors duration-300 group"
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: "0.95rem", 
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                  <span 
                    className="absolute -bottom-1 left-0 w-full h-[2px] rounded-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                    style={{ background: "#dfff00", transformOrigin: "left" }}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('#contact')}
                className="ml-4 px-7 py-3 overflow-hidden group relative"
                style={{
                  background: "transparent",
                  border: "1px solid #dfff00",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#dfff00",
                  borderRadius: "2px"
                }}
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">Let's Talk</span>
                <div className="absolute inset-0 bg-[#dfff00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white hover:text-[#dfff00] transition-colors"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.25, 0, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col pt-24 px-8 pb-8"
          >
            <div className="flex flex-col gap-6 mt-8 flex-1">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  key={link.path}
                  onClick={() => scrollToSection(link.path)}
                  className="text-left text-white hover:text-[#dfff00] transition-colors text-4xl font-bold"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-auto"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full py-4 text-black text-center font-bold text-lg"
                style={{ background: "#dfff00", borderRadius: "2px" }}
              >
                Let's Talk
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

