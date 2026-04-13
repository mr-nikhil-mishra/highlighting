import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import FooterMarquee from "./FooterMarquee";
import FloatingWhatsApp from "./FloatingWhatsApp";

export function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#000000",
        minHeight: "100vh",
        color: "#ffffff"
      }}
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterMarquee />
      <FloatingWhatsApp />
    </div>
  );
}
