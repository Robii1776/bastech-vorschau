/**
 * Halbes Spielfeld nach FIBA-Mass, 1 Einheit = 1 cm:
 * 15 m breit, 14 m bis zur Mittellinie, Korb 1.575 m vor der Grundlinie,
 * Zone 4.90 m breit, Freiwurflinie 5.80 m, Dreierlinie 6.75 m.
 * Liegt als schräger Hallenboden im Hero.
 */
export function Court() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] [perspective:1600px]">
      <div className="[transform:rotateX(52deg)_rotateZ(-32deg)] [transform-style:preserve-3d]">
        <svg
          viewBox="-60 -60 1620 1520"
          className="block w-full drop-shadow-[0_40px_40px_oklch(20%_0.02_262/0.22)]"
          role="img"
          aria-label="Halbes Basketballfeld mit Zone, Freiwurfkreis und Dreipunktelinie"
        >
          <defs>
            <pattern id="planks" width="108" height="900" patternUnits="userSpaceOnUse">
              <rect width="36" height="900" fill="var(--color-maple)" />
              <rect x="36" width="36" height="900" fill="oklch(79.5% 0.075 68)" />
              <rect x="72" width="36" height="900" fill="oklch(83.5% 0.065 75)" />
              <g stroke="oklch(70% 0.07 62 / 0.5)" strokeWidth="2">
                <path d="M36 0v900M72 0v900M108 0v900" />
                <path d="M0 210h36M36 610h36M72 380h36" />
              </g>
            </pattern>
          </defs>

          {/* Boden mit Auslauf */}
          <rect x="-60" y="-60" width="1620" height="1520" fill="url(#planks)" />

          {/* Zone und Mittelkreis in Vereinsrot */}
          <g className="court-paint" fill="var(--color-red)">
            <rect x="505" y="0" width="490" height="580" />
            <path d="M570 1400a180 180 0 0 1 360 0z" />
          </g>

          <g
            fill="none"
            stroke="var(--color-chalk)"
            strokeWidth="9"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <rect className="court-line" pathLength={1} x="0" y="0" width="1500" height="1400" strokeWidth="12" />
            <path className="court-line" pathLength={1} d="M505 0v580h490V0" />
            <path className="court-line" pathLength={1} d="M570 580a180 180 0 0 0 360 0" />
            <path className="court-paint" pathLength={1} d="M570 580a180 180 0 0 1 360 0" strokeDasharray="0.05 0.035" />
            <path className="court-line" pathLength={1} d="M90 0v299a675 675 0 0 0 1320 0V0" />
            <path className="court-line" pathLength={1} d="M625 157.5a125 125 0 0 0 250 0" />
            <path className="court-line" pathLength={1} d="M570 1400a180 180 0 0 1 360 0" />
          </g>

          {/* Brett und Ring */}
          <path d="M660 120h180" stroke="var(--color-ink)" strokeWidth="12" />
          <circle cx="750" cy="157.5" r="22.5" fill="none" stroke="var(--color-red-deep)" strokeWidth="8" />

          {/* Hallenbeschriftung an der Mittellinie */}
          <text
            x="1460"
            y="1360"
            textAnchor="end"
            fill="var(--color-ink)"
            fillOpacity="0.55"
            fontFamily="var(--font-display)"
            fontWeight="800"
            fontSize="64"
            letterSpacing="4"
          >
            SONNEGG · GOLDAU
          </text>
        </svg>
      </div>
    </div>
  );
}
