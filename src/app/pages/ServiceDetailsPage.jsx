/**
 * @file ServiceDetailsPage.jsx
 * @description Renders the dynamic, individualized service details page. 
 * This component fetches data based on the URL slug, renders localized metadata,
 * animates hero/layout content using framer-motion, and embeds global elements (CTA/Footer).
 * 
 * @module pages/ServiceDetailsPage
 */

import { useParams, Navigate, useNavigate } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { services } from "../data/services";
import { motion } from "motion/react";
import AnimatedReveal from "../components/AnimatedReveal";
import { CTASection } from "../components/CTASection";
import FooterMarquee from "../components/FooterMarquee";
import SiteFooter from "../components/sections/SiteFooter";

/**
 * ServiceDetailsPage Component
 * 
 * Retrieves the currently active service by paring the 'slug' from the URL.
 * It contains four main sections:
 * - A: The massive visual hero header with title and breadcrumb routing.
 * - B: The specific text-heavy service summary content block.
 * - C: The granular features/services grid loop.
 * - D: The global Call-to-Action and layout Footer instances.
 * 
 * @returns {JSX.Element} The rendered React component.
 */
export function ServiceDetailsPage() {
  // Extract dynamic slug from route (e.g., /services/:slug)
  const { slug } = useParams();
  
  // Hook used for imperative navigation (e.g., Back button triggers)
  const navigate = useNavigate();
  
  // Globally injected theme context for managing dynamic background palettes
  const { colors } = useTheme();

  // Cross-reference URL parameter against our local data payload
  const service = services.find((s) => s.slug === slug);

  // Fallback routing: If the user inputs an invalid or non-existent service slug, shunt back to main directory.
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    // Primary wrapper using the globally active theme background token
    <div style={{ background: colors.bg, minHeight: "100vh" }}>
      
      {/* =========================================
          SECTION A: HERO HEADER
         ========================================= 
         Uses absolute positioning and blend modes to embed the heroImage directly into the top edge 
         while maintaining text legibility through a heavy gradient overlay. */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "50vh", paddingTop: "160px", paddingBottom: "100px" }}>
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-[center_35%] opacity-25"
            style={{ mixBlendMode: "luminosity" }} // Drops saturation nicely into the dark mode UI
          />
          {/* Gradient Overlay for Text Legibility (fades from heavy to total black) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/90 to-[#050505]" />
        </div>

        {/* Hero Content Constraints (Inline styles here ensure no conflict with disabled local Tailwind environments) */}
        <div className="relative z-10 w-full" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          
          <AnimatedReveal className="flex flex-col items-center w-full text-center">
            {/* 
              Custom Internal "Back" Button 
              Rather than traditional navigation, this specifically forces the user 
              to the homepage root first, then invokes a delayed smooth scroll to the Services Section.
            */}
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              style={{ 
                color: "#111", 
                background: "var(--brand-neon)",
                fontFamily: "'Space Grotesk', sans-serif",
                padding: "0.6rem 1.5rem",
                borderRadius: "50px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "2.5rem",
                cursor: "pointer",
                border: "none",
                transition: "transform 0.2s, opacity 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              ← Back to Services
            </button>

            {/* Dynamic Hero Title targeting main localized payload */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-black mb-6 text-white text-center w-full"
              style={{
                fontSize: "clamp(3.5rem, 7vw, 6.5rem)", // Fluid typography scales cleanly on mobile
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              {service.title}
            </motion.h1>

            {/* Subtitle hook description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-300 mx-auto text-center"
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                lineHeight: 1.6,
                maxWidth: "700px" 
              }}
            >
              {service.description}
            </motion.p>
          </AnimatedReveal>
        </div>
      </section>

      {/* =========================================
          SECTION B: MAIN CONTENT
          ========================================= 
          Two-column grid implementation displaying related product image 
          and looping over the deep descriptive text array. */}
      <section className="relative" style={{ padding: "8rem 0" }}>
        {/* Core Layout constraint wrapper */}
        <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Block: Utilizes whileInView for scroll-tracking entrance animations */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden group shadow-2xl"
            >
              {/* Image naturally scales slightly on mouse hover */}
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={service.image}
                alt={`${service.title} implementation`}
                className="w-full h-auto"
              />
              {/* Subtle glassmmorphic inner-border for premium feel */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </motion.div>

            {/* Staggered Text Block */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col gap-6 text-gray-300" 
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.85, fontSize: "1.1rem" }}
            >
              <h2
                className="text-white font-black mb-4"
                style={{ fontSize: "2.8rem", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Service Overview
              </h2>
              {/* Dynamically cycles through paragraphs provided in active service data */}
              {service.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION C: FEATURES GRID
          ========================================= */}
      <section style={{ padding: "8rem 0", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-center text-white font-black mb-16"
              style={{ fontSize: "3.5rem", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
            >
              What's Included
            </h2>
          </motion.div>
          
          {/* Automatically flows child cards based on intrinsic properties rather than hard grid restraints */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            
            {service.features.map((feature, idx) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * idx }} // Staggers entrance dynamically 
                className="rounded-2xl border border-white/10 transition-all duration-300 group h-full flex flex-col"
                style={{ 
                  background: "rgba(0,0,0,0.3)",
                  padding: "2.5rem 2rem", // Enforces strict inner boundaries for icon/text layout
                }}
                /* 
                  Raw inline event hooks for hover states to bypass any CSS class Purge 
                  issues and ensure immediate 60fps interaction rendering.
                */
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(237,244,6,0.3)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0,0,0,0.3)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform origin-left">
                  {feature.icon}
                </div>
                <h3 
                  className="text-white font-bold mb-3"
                  style={{ fontSize: "1.45rem", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.01em" }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-400 leading-relaxed"
                  style={{ fontSize: "0.95rem", fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION D: GLOBAL APP INCLUSIONS
          ========================================= */}
          
      {/* Standardized Call-To-Action Block */}
      {/* <CTASection /> */}
      
      {/* Global Footer (mirrors identical Layout scope wrapper used on Homepage) */}
      <FooterMarquee />
      <SiteFooter />
      
    </div>
  );
}
