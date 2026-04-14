import React from "react";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1];

export default function AnimatedReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 1.1,
  className = "",
  once = true,
}) {
  const hidden = {
    opacity: 0,
    y: direction === "up" ? 48 : direction === "down" ? -48 : 0,
    x: direction === "left" ? 48 : direction === "right" ? -48 : 0,
  };

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration, ease: EASE, delay },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{ hidden, visible }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container — wraps multiple children with stagger effect
export function StaggerContainer({ children, stagger = 0.1, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Child item for StaggerContainer
export function StaggerItem({ children, direction = "up", className = "" }) {
  const hidden = {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  };

  return (
    <motion.div
      variants={{
        hidden,
        visible: {
          opacity: 1, y: 0, x: 0,
          transition: { duration: 1.1, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
