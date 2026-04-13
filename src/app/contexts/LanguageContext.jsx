import { createContext, useContext, useEffect } from "react";
import { translations } from "../translations";

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  isRTL: false,
});

export function LanguageProvider({ children }) {
  const isRTL = false;
  const language = "en";

  const toggleLanguage = () => {};

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
