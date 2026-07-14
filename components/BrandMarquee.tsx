import { asset } from "@/lib/asset";
/* eslint-disable @next/next/no-img-element */

const brands: { name: string; src: string; h?: number }[] = [
  { name: "Müller Martini", src: "/logos/muellermartini.svg", h: 22 },
  { name: "MBO", src: "/logos/mbo.png", h: 30 },
  { name: "ATS-Tanner", src: "/logos/tanner.svg", h: 24 },
  { name: "Strapex", src: "/logos/strapex.jpg", h: 30 },
  { name: "Mosca", src: "/logos/mosca.svg", h: 22 },
  { name: "Technotrans", src: "/logos/technotrans.svg", h: 20 },
  { name: "Siemens", src: "/logos/siemens.svg", h: 18 },
  { name: "SEW Eurodrive", src: "/logos/sew.svg", h: 26 },
  { name: "Baumer", src: "/logos/baumer.svg", h: 20 },
];

/**
 * Hersteller, deren Maschinen und Komponenten wir warten, revidieren und
 * handeln. Echte Logos, Graustufen, volle Farbe bei Hover. Läuft ohne JS,
 * pausiert bei Hover und Reduced Motion.
 */
export function BrandMarquee() {
  return (
    <section aria-label="Hersteller, mit deren Maschinen wir arbeiten" className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1320px] items-center gap-10 px-5 py-6 sm:px-8">
        <p className="shrink-0 text-[13px] font-semibold text-ink-soft">
          Vertraut mit
        </p>
        <div className="marquee logo-strip flex-1" aria-hidden="true">
          <div className="marquee-track items-center gap-16">
            {[...brands, ...brands].map((brand, i) => (
              <img
                key={`${brand.name}-${i}`}
                src={asset(brand.src)}
                alt={brand.name}
                style={{ height: brand.h ?? 24 }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
