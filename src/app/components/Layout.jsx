/**
 * @file Layout.jsx
 * @description The persistent structural wrapper of the application. 
 * This component runs exactly once per session, wrapping the `Navbar` globally 
 * and using the `Outlet` component to dynamically stream Page-level changes inside.
 * 
 * @module Components/Layout
 */

import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";

/**
 * Global Layout provider.
 * 
 * @returns {JSX.Element} Base structural shell holding Navbar and dynamic views.
 */
export function Layout() {
  // Track structural route path updates natively from the browser payload
  const { pathname } = useLocation();

  /**
   * Scroll-To-Top Lifecycle Hook
   * Prevents standard browser behavior where navigating between pages might remember
   * your previous scroll depth. This instantly resets the viewport to the top (y: 0) 
   * upon any route change.
   */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    // Globally hardcoded black background to enforce the dark-mode identity of the agency
    <div style={{ background: "#000000", minHeight: "100vh", color: "#ffffff" }}>
      {/* Persists universally across every single page without re-rendering unnecessarily */}
      <Navbar />
      
      <main>
        {/* Child routes from routes.jsx are dynamically mounted precisely here */}
        <Outlet />
      </main>
    </div>
  );
}
