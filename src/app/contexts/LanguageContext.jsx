/**
 * @file LanguageContext.jsx
 * @description Controls global multi-lingual payloads. It parses the active localization
 * state and distributes translated string matrices globally bypassing severe prop-drilling.
 * Note: Currently locked entirely to Left-To-Right English architecture per client spec.
 * 
 * @module Contexts/Language
 */

import { createContext, useContext, useEffect } from "react";
import { translations } from "../translations";

/**
 * Initializes the structure that deeply nested descendants will subscribe to.
 */
const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  isRTL: false,
});

/**
 * Global Language Wrapper component.
 * Mounted at the application root allowing all child systems to extract exact strings.
 * 
 * @param {object} props Containing React children elements.
 */
export function LanguageProvider({ children }) {
  // Arabic (RTL) toggling is explicitly disabled currently 
  const isRTL = false;
  
  // Base dictionary explicitly locked to english
  const language = "en";

  const toggleLanguage = () => {};

  /**
   * One-time mounting hook establishing raw SEO and Document linguistic metadata 
   * specifically onto the <html> tag.
   */
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

/**
 * Custom convenience hook allowing nested views to destructure language translation blocks.
 * Example implementation: `const { language } = useLanguage(); const t = translations[language];`
 */
export function useLanguage() {
  return useContext(LanguageContext);
}
