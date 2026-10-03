/** Vereinszeichen: Ball mit Nähten, gezeichnet statt Clipart. */
export function BallMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" fill="var(--color-red)" />
      <g fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round">
        <circle cx="20" cy="20" r="18.5" />
        <path d="M20 1.5v37M1.5 20h37" />
        <path d="M7.2 6.6c5.2 4.4 7.3 8.8 7.3 13.4s-2.1 9-7.3 13.4" />
        <path d="M32.8 6.6c-5.2 4.4-7.3 8.8-7.3 13.4s2.1 9 7.3 13.4" />
      </g>
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <BallMark className="size-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`display text-[26px] tracking-[0.01em] ${light ? "text-on-dark" : "text-ink"}`}
        >
          Basket<span className="text-red">AG</span>
        </span>
        <span
          className={`mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] ${light ? "text-on-dark-soft" : "text-ink-soft"}`}
        >
          Arth-Goldau
        </span>
      </span>
    </span>
  );
}
