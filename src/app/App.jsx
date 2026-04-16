/**
 * @file App.jsx
 * @description The main orchestration component for the application.
 * `App` wraps all routing architectures within essential global context providers 
 * (like theming and language) while conditionally executing custom loading states 
 * and animated mounting transitions.
 * 
 * @module Components/App
 */

import { useState } from "react";
import { RouterProvider } from "react-router";
import { AnimatePresence } from "motion/react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { router } from "./routes";

/**
 * App Shell component.
 * Tracks global initialization to determine if the user should see a temporary
 * artificial loading screen prior to revealing the main routing interface.
 * 
 * @returns {JSX.Element} The completely wrapped application ready for rendering.
 */
export default function App() {
  // Boolean state to artificially hold back immediate DOM render for visual effect
  // Defaults to true, forcing the <LoadingScreen /> to appear immediately.
  const [loading, setLoading] = useState(true);

  return (
    /* ThemeProvider ensures all child components can subscribe to dark/light tokens */
    <ThemeProvider>
      {/* LanguageProvider supplies multi-language payload translation hooks natively */}
      <LanguageProvider>
        {/* AnimatePresence allows framer-motion components to animate OUT cleanly during unmounting */}
        <AnimatePresence>
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        </AnimatePresence>
        
        {/* Only inject the browser router module once the loading sequence entirely completes */}
        {!loading && <RouterProvider router={router} />}
      </LanguageProvider>
    </ThemeProvider>
  );
}
