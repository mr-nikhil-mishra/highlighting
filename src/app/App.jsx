import { useState } from "react";
import { RouterProvider } from "react-router";
import { AnimatePresence } from "motion/react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { router } from "./routes";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AnimatePresence>
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        </AnimatePresence>
        {!loading && <RouterProvider router={router} />}
      </LanguageProvider>
    </ThemeProvider>
  );
}
