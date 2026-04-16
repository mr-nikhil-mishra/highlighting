/**
 * @file routes.jsx
 * @description The central routing manifesto for the React application. 
 * This file maps absolute URL endpoints directly to specific Page Components, 
 * nesting them inside the global Layout wrapper.
 * 
 * @module Routing
 */

import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailsPage } from "./pages/ServiceDetailsPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";

/**
 * The initialized React Router Browser instance.
 * It strictly dictates what component structures are loaded securely when navigating.
 */
export const router = createBrowserRouter([
  {
    // The base URL boundary. Everything sits inside here.
    path: "/",
    
    // The Layout component acts as a persistent shell (maintaining the Navbar globally)
    // while dynamic page components are injected into its <Outlet />
    Component: Layout,
    
    // Nested child routes mapped to specific paths.
    children: [
      { index: true, Component: HomePage }, // Resolves specifically to '/'
      { path: "services", Component: ServicesPage }, // Resolves to '/services'
      
      // Dynamic routing using url slugs (e.g., /services/website-development)
      // The parameter ':slug' is fetched natively via the `useParams` react-router hook.
      { path: "services/:slug", Component: ServiceDetailsPage },
      
      { path: "about", Component: AboutPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
      
      // Legacy or deprecated route fallbacks. If a user tries to access these,
      // they are safely and instantly redirected `<Navigate />` to the root homepage.
      { path: "case-studies", element: <Navigate to="/" replace /> },
      { path: "*", element: <Navigate to="/" replace /> }, // 404 Catch-All wildcard
    ],
  },
]);
