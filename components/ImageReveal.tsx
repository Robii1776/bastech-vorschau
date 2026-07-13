"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Bild-Reveal per clip-path von unten – hardwarebeschleunigt, ohne Layout-Shift.
 * Gleiche Reveal-Sicherheit wie Reveal.tsx: Server-HTML ist immer sichtbar,
 * animiert wird nur in sichtbaren Tabs.
 */
export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (document.visibilityState === "visible") setEnabled(true);
  }, []);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { clipPath: "inset(0 0 100% 0)", transform: "translateY(12px)" }
      }
      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : { clipPath: "inset(0 0 0% 0)", transform: "translateY(0px)" }
      }
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
    >
      {children}
    </motion.div>
  );
}
