import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div style={{ background: "#000000", minHeight: "100vh", color: "#ffffff" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
