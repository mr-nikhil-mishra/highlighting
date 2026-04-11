import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: AboutPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
      { path: "case-studies", element: <Navigate to="/" replace /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
