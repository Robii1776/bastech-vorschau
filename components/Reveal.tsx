"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Reveal-Sicherheit: Das Server-HTML ist immer vollständig sichtbar (kein
 * opacity:0 im Markup). Animiert wird erst nach der Hydration – und nur,
 * wenn der Tab sichtbar ist. So bleibt der Inhalt in Hintergrund-Tabs,
 * Headless-Renderern und ohne JavaScript nie unsichtbar hängen.
 */
function useRevealEnabled() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (document.visibilityState === "visible") setEnabled(true);
  }, []);
  return enabled;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const enabled = useRevealEnabled();

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  className?: string;
  itemClassName?: string;
  items: ReactNode[];
};

export function StaggerList({ items, className, itemClassName }: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const enabled = useRevealEnabled();

  if (!enabled) {
    return (
      <ul className={className}>
        {items.map((item, i) => (
          <li key={i} className={itemClassName}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          className={itemClassName}
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
            },
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
