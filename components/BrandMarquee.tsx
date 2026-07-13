const brands = [
  "Müller Martini",
  "MBO",
  "Tanner",
  "Strapex",
  "Mosca",
  "Technotrans",
  "Heidolph",
  "SEW Eurodrive",
  "Siemens",
  "Becker",
  "Rietschle",
  "Baumer",
];

/**
 * Ruhig laufende Herstellerliste – belegt die Fachbreite ohne Werbeprosa.
 * Reines CSS (läuft auch ohne JS), pausiert bei Hover und Reduced Motion.
 */
export function BrandMarquee() {
  return (
    <section aria-label="Hersteller, mit denen wir vertraut sind" className="border-y border-line bg-white">
      <div className="mx-auto flex max-w-[1320px] items-center gap-8 px-5 py-5 sm:px-8">
        <p className="shrink-0 text-[13px] font-medium text-ink-soft">Vertraut mit</p>
        <div className="marquee flex-1" aria-hidden="true">
          <div className="marquee-track gap-12">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="whitespace-nowrap font-mono text-[13px] uppercase tracking-wider text-ink-soft"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
