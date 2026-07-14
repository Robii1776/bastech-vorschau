import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, StaggerList } from "@/components/Reveal";
import { MachineCard } from "@/components/MachineCard";
import { CtaBand } from "@/components/CtaBand";
import { machines, parts } from "@/lib/machines";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Occasionsmaschinen und Ersatzteile, geprüft und einsatzbereit",
  description:
    "Geprüfte Occasionsmaschinen für Druckweiterverarbeitung und Umreifungstechnik: Tanner, Strapex, Mosca, MBO und mehr. Plus Ersatzteile, Motoren, Pumpen und Steuerungen. Bastech Betriebe AG.",
};

export default function MaschinenPage() {
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-5 pb-16 pt-10 sm:px-8 md:pt-16">
        <Reveal>
          <p className="tabular-nums text-[13px] font-medium text-brand">Occasionsmaschinen</p>
          <h1 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.08] sm:text-5xl">
            Geprüfte Maschinen, ehrlich beschrieben
          </h1>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-soft">
            Jede Maschine wird vor dem Verkauf geprüft und bei Bedarf revidiert. Besichtigung und
            Test vor Ort in {site.address.city} sind jederzeit möglich. Preise verstehen sich als
            Verhandlungsbasis, Transport auf Anfrage.
          </p>
        </Reveal>

        <StaggerList
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          items={machines.map((m) => (
            <MachineCard key={m.slug} machine={m} />
          ))}
        />
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 md:py-20">
          <Reveal>
            <h2 className="max-w-[24ch] text-3xl font-bold sm:text-4xl">
              Komponenten &amp; Ersatzteile ab Lager
            </h2>
            <p className="mt-3 max-w-[56ch] text-[16px] leading-relaxed text-ink-soft">
              Motoren, Pumpen, Steuerungen und Verschleissteile: geprüft und kurzfristig
              verfügbar. Fehlt etwas auf der Liste?{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-brand">
                Fragen Sie uns direkt.
              </a>
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-2">
            {parts.map((group, gi) => (
              <Reveal key={group.title} delay={Math.min(gi * 0.05, 0.2)}>
                <h3 className="text-lg font-bold">{group.title}</h3>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3"
                    >
                      <span className="text-[15px]">{item.name}</span>
                      <span className="tabular-nums text-[13px] text-ink-soft">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <p className="max-w-[64ch] text-[14px] leading-relaxed text-ink-soft">
              Alle Preise in CHF, Verhandlungsbasis (VB), exkl. Transport. Zustand und
              Verfügbarkeit auf Anfrage. Die Liste wird laufend aktualisiert.
            </p>
            <Link
              href="/kontakt/?betreff=Ersatzteile"
              className="pressable mt-6 inline-block rounded-md bg-brand px-7 py-4 text-[16px] font-semibold text-on-brand transition-colors duration-200 hover:bg-brand-deep"
            >
              Teil anfragen
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
