import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

const LANGUAGES = ['en', 'ar', 'fr', 'es', 'de'];

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  isRTL: false,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("apex-language");
    return saved && LANGUAGES.includes(saved) ? saved : "en";
  });

  const isRTL = language === "ar";

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const currentIndex = LANGUAGES.indexOf(prev);
      const nextIndex = (currentIndex + 1) % LANGUAGES.length;
      const next = LANGUAGES[nextIndex];
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
