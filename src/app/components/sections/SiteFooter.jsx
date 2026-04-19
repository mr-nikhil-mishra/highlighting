import React from "react";
import { SITE_CONFIG } from "../../../config/site.config";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TikTokIcon from "@mui/icons-material/MusicNote";
import LanguageIcon from "@mui/icons-material/Language";

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: XIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
};

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Website Designing",
  "SEO Services",
  "Local SEO",
  "Social Media Marketing",
  "Content Marketing",
  "Paid Media Advertising",
  "Email Marketing",
  "Programmatic Advertising",
];

export default function SiteFooter() {
  return (
    <footer className="bg-black" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "5rem 1.5rem 2.5rem" }}>

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/logo.png"
              alt="HIGHLIGHT Marketing Management"
              style={{
                height: "44px",
                width: "auto",
                filter: "brightness(0) invert(1)",
                marginBottom: "1rem",
                display: "block",
              }}
            />
            <p
              className="text-[#555] max-w-xs"
              style={{ fontSize: "15px", lineHeight: 1.7 }}
            >
              A full-service digital marketing agency based in Dubai, UAE — helping ambitious brands attract traffic, generate leads, and scale revenue.
            </p>
            <div className="flex gap-3 mt-8">
              {Object.entries(SITE_CONFIG.social).map(([name, url]) => {
                const Icon = SOCIAL_ICONS[name.toLowerCase()] ?? LanguageIcon;
                return (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    title={name.charAt(0).toUpperCase() + name.slice(1)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.03)",
                      color: "#555",
                      transition: "all 0.25s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(237,244,6,0.1)";
                      e.currentTarget.style.borderColor = "rgba(237,244,6,0.4)";
                      e.currentTarget.style.color = "#EDF406";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(237,244,6,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "#555";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon style={{ fontSize: "20px" }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="font-black text-[#444] uppercase mb-6"
              style={{ fontSize: "10px", letterSpacing: "0.22em" }}
            >
              Navigation
            </div>
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[#666] hover:text-[#EDF406] transition-colors duration-300 font-medium"
                  style={{ fontSize: "15px" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="font-black text-[#444] uppercase mb-6"
              style={{ fontSize: "10px", letterSpacing: "0.22em" }}
            >
              Get In Touch
            </div>
            <div className="flex flex-col gap-3.5">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-[#666] hover:text-[#EDF406] transition-colors duration-300 font-medium"
                style={{ fontSize: "15px" }}
              >
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-[#666] hover:text-[#EDF406] transition-colors duration-300 font-medium"
                style={{ fontSize: "15px" }}
              >
                {SITE_CONFIG.email}
              </a>
              <span className="text-[#666] font-medium" style={{ fontSize: "15px" }}>
                {SITE_CONFIG.address}
              </span>
            </div>

            <button
              onClick={() => scrollTo("#contact")}
              className="mt-7 font-black text-black bg-[#EDF406] hover:bg-white transition-colors duration-300"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "0.65rem 1.4rem",
                borderRadius: "9999px",
                display: "inline-block",
              }}
            >
              {SITE_CONFIG.cta.primary}
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-[#333] font-medium" style={{ fontSize: "13px" }}>
            {SITE_CONFIG.copyright}
          </span>
          <span className="text-[#333] font-medium" style={{ fontSize: "13px" }}>
            Built for performance. Built to scale.
          </span>
        </div>
      </div>
    </footer>
  );
}
