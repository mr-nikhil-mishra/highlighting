/**
 * @file ThemeContext.jsx
 * @description Global Provider for injecting CSS color tokens throughout the application.
 * Note: To maintain the strict "MediaPulse360" agency aesthetic, Light Mode has been disabled.
 * The system permanently enforces a sleek, dark-mode styling matrix.
 * 
 * @module Contexts/Theme
 */

import { createContext, useContext, useEffect } from "react";

/**
 * Standardized color palette schema.
 * All React internal style objects rely on these precise RGBA / HEX definitions.
 */
const darkColors = {
  bg: "#000000",
  bgAlt: "#050505",
  bgDeep: "#000000",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.6)",
  textDim: "rgba(255,255,255,0.4)",
  card: "rgba(255,255,255,0.03)",
  cardHover: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(var(--brand-neon-rgb),0.5)",
  navBg: "rgba(0,0,0,0.9)",
  mobileMenu: "rgba(5,5,5,0.98)",
  badgeBg: "rgba(var(--brand-neon-rgb),0.1)",
  badgeBorder: "rgba(var(--brand-neon-rgb),0.25)",
  inputBg: "rgba(255,255,255,0.04)",
  inputBorder: "rgba(255,255,255,0.1)",
};

/**
 * Initialize Context with strict default fallbacks.
 */
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
  colors: darkColors,
});

/**
 * Global Theme Wrapper component. 
 * Should be mounted as close to the React root node as possible (via App.jsx).
 * 
 * @param {object} props containing React children elements to be rendered inside.
 */
export function ThemeProvider({ children }) {
  // Hardcoded flags disabling any system-layer overrides (prefers-color-scheme)
  const isDark = true;
  const colors = darkColors;

  const toggleTheme = () => {
    // Disabled functionality for locked aesthetic ensuring the premium look is never disrupted
    console.log("Theme is locked to dark mode for this aesthetic.");
  };

  /**
   * One-time mounting hook establishing structural CSS overrides at the native HTML level
   */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    document.body.style.background = "#000000";
    document.body.style.color = "#ffffff";
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme, isDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom convenience hook allowing any nested component to destructure internal palette objects.
 * Instead of `useContext(ThemeContext)`, components simply invoke `useTheme()`.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
