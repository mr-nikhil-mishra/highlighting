import React from "react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../../../config/site.config";

const EASE = [0.16, 1, 0.3, 1];

const stats = [
  { value: "8+", label: "Core Services" },
  { value: "3×", label: "Average ROI" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function HeroSection() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Subtle radial glow — matches digitalbyzia */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 58% 38%, rgba(237,244,6,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 w-full"
        style={{ maxWidth: "1300px", margin: "0 auto", padding: "10rem 1.5rem 5rem" }}
      >
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.05 }}
          style={{ marginBottom: "2rem" }}
        >
          <span
            className="inline-flex items-center gap-2 font-black text-[#EDF406] border border-[#EDF406]/40 uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.22em", padding: "0.5rem 1.2rem", borderRadius: "9999px" }}
          >
            <span
              className="rounded-full bg-[#EDF406] animate-pulse"
              style={{ width: "6px", height: "6px", flexShrink: 0 }}
            />
            Marketing management Company · Dubai, UAE
          </span>
        </motion.div>

        {/* H1 — fully solid bold, single line like reference */}
        <div style={{ overflow: "hidden", marginBottom: "2.5rem" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.14 }}
            className="font-black text-white"
            style={{
              fontSize: "70px",
              letterSpacing: "-0.055em",
              lineHeight: 0.88,
              display: "block",
              color: "#ffffff",
              paddingBottom:"10px"
            }}
          >
            HIGHLIGHT Marketing Management
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.38 }}
          style={{
            color: "#a3a3a3",
            fontSize: "19px",
            lineHeight: 1.68,
            fontWeight: 500,
            maxWidth: "480px",
            marginBottom: "2.5rem",
          }}
        >
          We help businesses attract more traffic, generate qualified leads,
          and increase sales — using{" "}
          <span style={{ color: "#ffffff", fontWeight: 600 }}>
            strategies that actually work.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "5.5rem" }}
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="font-black text-black hover:text-black"
            style={{
              background: "#EDF406",
              fontSize: "12.5px",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 32px rgba(237,244,6,0.2)",
              transition: "background 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.boxShadow = "0 0 32px rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#EDF406";
              e.currentTarget.style.boxShadow = "0 0 32px rgba(237,244,6,0.2)";
            }}
          >
            {SITE_CONFIG.cta.hero}
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="font-black text-white"
            style={{
              background: "transparent",
              fontSize: "12.5px",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              border: "1.5px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              transition: "border-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#EDF406";
              e.currentTarget.style.color = "#EDF406";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            {SITE_CONFIG.cta.heroSecondary}
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.64 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3.5rem",
            paddingTop: "2.25rem",
            borderTop: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span
                className="font-black text-white"
                style={{ fontSize: "clamp(38px, 5vw, 56px)", letterSpacing: "-0.055em", lineHeight: 1 }}
              >
                {s.value}
              </span>
              <span
                className="font-bold"
                style={{ color: "#444", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            color: "#444",
            fontSize: "9.5px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "55px",
            background: "linear-gradient(to bottom, #444, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
