import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  isRTL: false,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("apex-language");
    return saved || "en";
  });

  const isRTL = language === "ar";

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "ar" : "en";
      localStorage.setItem("apex-language", next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
