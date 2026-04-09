import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Theme = "dark" | "light";

export interface ThemeColors {
  bg: string;
  bgAlt: string;
  bgDeep: string;
  text: string;
  textMuted: string;
  textDim: string;
  card: string;
  cardHover: string;
  border: string;
  borderHover: string;
  navBg: string;
  mobileMenu: string;
  badgeBg: string;
  badgeBorder: string;
  inputBg: string;
  inputBorder: string;
}

const darkColors: ThemeColors = {
  bg: "#050505",
  bgAlt: "#080808",
  bgDeep: "#030303",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.45)",
  textDim: "rgba(255,255,255,0.25)",
  card: "rgba(255,255,255,0.03)",
  cardHover: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.07)",
  borderHover: "rgba(212,255,0,0.35)",
  navBg: "rgba(5,5,5,0.92)",
  mobileMenu: "rgba(10,10,10,0.97)",
  badgeBg: "rgba(212,255,0,0.08)",
  badgeBorder: "rgba(212,255,0,0.2)",
  inputBg: "rgba(255,255,255,0.04)",
  inputBorder: "rgba(255,255,255,0.1)",
};

const lightColors: ThemeColors = {
  bg: "#f5f5f0",
  bgAlt: "#edede8",
  bgDeep: "#e6e6e1",
  text: "#0a0a0a",
  textMuted: "rgba(10,10,10,0.55)",
  textDim: "rgba(10,10,10,0.35)",
  card: "rgba(0,0,0,0.04)",
  cardHover: "rgba(0,0,0,0.07)",
  border: "rgba(0,0,0,0.09)",
  borderHover: "rgba(150,180,0,0.5)",
  navBg: "rgba(245,245,240,0.95)",
  mobileMenu: "rgba(248,248,244,0.98)",
  badgeBg: "rgba(180,215,0,0.1)",
  badgeBorder: "rgba(150,180,0,0.3)",
  inputBg: "rgba(0,0,0,0.04)",
  inputBorder: "rgba(0,0,0,0.12)",
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
  colors: darkColors,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("apex-theme");
    return (saved as Theme) || "dark";
  });

  const isDark = theme === "dark";
  const colors = isDark ? darkColors : lightColors;

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("apex-theme", next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.style.background = isDark ? "#050505" : "#f5f5f0";
    document.body.style.transition = "background-color 0.4s ease";
  }, [theme, isDark]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
