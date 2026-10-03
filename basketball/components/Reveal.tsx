import type { ReactNode } from "react";

/**
 * Scroll-Reveal ohne JavaScript: CSS-Scroll-Timeline (animation-timeline:
 * view()). Wo der Browser das nicht kann oder Reduced Motion aktiv ist,
 * steht der Inhalt einfach da. Nichts bleibt je unsichtbar hängen.
 * `delay` (0–0.3) verschiebt den Startpunkt leicht, für gestaffelte Listen.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay ? ({ "--reveal-offset": `${Math.round(delay * 100)}%` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
