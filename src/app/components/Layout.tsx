import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { useTheme } from "../contexts/ThemeContext";

export function Layout() {
  const { colors } = useTheme();
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        background: colors.bg,
        minHeight: "100vh",
        transition: "background-color 0.4s ease",
      }}
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
