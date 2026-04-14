import React from "react";
import { motion } from "motion/react";

const words = [
  "Digital Marketing",
  "Advertising",
  "SEO",
  "Social Media",
  "Content",
  "Paid Media",
  "Web Design",
  "Local SEO",
];

// Double for seamless loop
const items = [...words, ...words, ...words, ...words];

export default function FooterMarquee() {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "1.2rem 0",
      }}
    >
      <div className="relative flex">
        <motion.div
          className="flex items-center whitespace-nowrap flex-shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {items.map((word, i) => (
            <span
              key={i}
              className="inline-flex items-center"
              style={{ padding: "0 0.6rem" }}
            >
              <span
                className="font-black uppercase"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  /* Alternate: even = outlined, odd = solid white */
                  ...(i % 2 === 0
                    ? {
                        color: "transparent",
                        WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
                      }
                    : {
                        color: "#ffffff",
                        WebkitTextStroke: "0px transparent",
                      }),
                }}
              >
                {word}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.2)",
                  margin: "0 0.8rem",
                  lineHeight: 1,
                }}
              >
                ◆
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
