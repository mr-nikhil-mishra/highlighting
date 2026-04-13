import { createContext, useContext, useEffect } from "react";

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

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
  colors: darkColors,
});

export function ThemeProvider({ children }) {
  const isDark = true;
  const colors = darkColors;

  const toggleTheme = () => {
    // Disabled functionality for locked aesthetic
    console.log("Theme is locked to dark mode for this aesthetic.");
  };

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

export function useTheme() {
  return useContext(ThemeContext);
}

