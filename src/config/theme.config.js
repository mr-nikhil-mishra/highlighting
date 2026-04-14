// ============================================================
// DESIGN TOKENS — Extracted from digitalbyzia.com
// ============================================================

export const THEME = {
  colors: {
    background: "#000000",
    surface: "#111111",
    surfaceElevated: "rgba(255, 255, 255, 0.02)",
    border: "rgba(255, 255, 255, 0.08)",
    borderHover: "#EDF406",
    accent: "#EDF406",
    accentDark: "#c9ce00",
    white: "#ffffff",
    textPrimary: "#ffffff",
    textMuted: "#a3a3a3",
    textDim: "#555555",
  },

  typography: {
    fontFamily: "'Outfit', sans-serif",
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    sizes: {
      heroXl: "clamp(72px, 11vw, 160px)",
      heroLg: "clamp(56px, 8vw, 110px)",
      h2: "clamp(48px, 6.5vw, 90px)",
      h3: "clamp(28px, 3vw, 40px)",
      h4: "24px",
      bodyLg: "20px",
      body: "18px",
      bodySm: "16px",
      label: "12px",
    },
    letterSpacing: {
      tight: "-0.05em",
      normal: "-0.02em",
      label: "0.2em",
      button: "0.12em",
    },
    lineHeight: {
      heading: 0.9,
      body: 1.7,
    },
  },

  spacing: {
    sectionPy: "9rem", // 144px — py-36
    containerMaxWidth: "1300px",
    containerPx: "1.5rem",
  },

  radius: {
    pill: "9999px",
    card: "24px",
    cardLg: "40px",
    icon: "16px",
  },

  shadows: {
    accentGlow: "0 0 30px rgba(237,244,6, 0.2)",
    accentGlowSm: "0 0 15px rgba(237,244,6, 0.12)",
    whiteGlow: "0 0 30px rgba(255, 255, 255, 0.12)",
  },

  animation: {
    // The digitalbyzia.com ease curve — fast start, slow finish (spring-like)
    ease: [0.16, 1, 0.3, 1],
    duration: {
      fast: 0.35,
      normal: 0.7,
      slow: 1.1,
      reveal: 1.2,
    },
    stagger: 0.1,
    navbarScrollThreshold: 30,
  },
};
