/**
 * @file main.jsx
 * @description The highest-level entry point for the React application. 
 * This file binds the React component tree directly to the actual HTML DOM 
 * and imports baseline global styles.
 * 
 * @module RootEntry
 */

import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

// Locate the foundational id="root" node in the index.html file 
// and mount our primary App component using React 18's createRoot API.
createRoot(document.getElementById("root")).render(<App />);
