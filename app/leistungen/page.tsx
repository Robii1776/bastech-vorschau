import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Leistungen: Service, Revisionen, Reparaturen und Ersatzteile",
  description:
    "Maschinenservice für die Schweizer Industrie: Revisionen, mechanische Reparaturen, Ersatzteile, Handel mit Occasionsmaschinen und Neuentwicklungen. Bastech Betriebe AG, schweizweit.",
};

const sections = [
  {
    id: "service-revisionen",
    title: "Service & Revisionen",
    lead: "Planbare Wartung statt teurer Stillstand.",
    text: "Regelmässige Wartung ist die günstigste Versicherung gegen Produktionsausfälle. Wir revidieren Falz-, Banderolier- und Umreifungsmaschinen komplett: zerlegen, prüfen, ersetzen, einstellen und dokumentieren jeden Schritt.",
    points: [
      "Komplette Revisionen inklusive Verschleissteil-Ersatz",
      "Wartungspläne mit fixen Intervallen für Ihre Maschinenflotte",
      "Einstellung und Optimierung nach Herstellervorgaben",
      "Dokumentierter Zustand nach jedem Einsatz",
    ],
    image: "/images/maschine-2.jpeg",
    imageAlt: "Durch Bastech revidierter Anleger mit Firmenschild",
  },
  {
    id: "reparaturen",
    title: "Mechanische Reparaturen",
    lead: "Schnelle Diagnose, fachgerechte Instandsetzung.",
    text: "Wenn eine Maschine steht, zählt jede Stunde. Wir finden die Ursache statt nur das Symptom, ob mechanisch, pneumatisch oder steuerungsseitig, und setzen instand: vor Ort bei Ihnen oder in unserer Werkstatt. Das gilt für Anlagen aus der ganzen Industrie, nicht nur aus der grafischen.",
    points: [
      "Fehlerdiagnose an Mechanik, Pneumatik und Steuerung",
      "Einsätze vor Ort in der ganzen Schweiz",
      "Instandsetzung auch älterer Maschinengenerationen",
      "Ehrliche Empfehlung: reparieren oder ersetzen",
    ],
    image: "/images/maschine-10.jpeg",
    imageAlt: "Mosca Umreifungsmaschine in der Werkstatt",
  },
  {
    id: "ersatzteile",
    title: "Ersatzteile",
    lead: "Auch für Maschinen, die offiziell keinen Support mehr haben.",
    text: "Wir liefern Ersatz- und Verschleissteile für Druckweiterverarbeitung und Umreifungstechnik, von Müller Martini über MBO bis Tanner. Vieles ab Lager, anderes über unser Netzwerk, notfalls als Nachfertigung.",
    points: [
      "Verschleiss- und Ersatzteile ab eigenem Lager",
      "Beschaffung über langjähriges Branchennetzwerk",
      "Frequenzumrichter, Motoren, Pumpen und Steuerungen",
      "Beratung zur Teile-Identifikation anhand Typenschild",
    ],
    image: "/images/maschine-8.jpeg",
    imageAlt: "Strapex Umreifungsautomat, Swiss Made",
  },
  {
    id: "handel",
    title: "Handel & Occasionsmaschinen",
    lead: "Geprüfte Maschinen mit ehrlicher Zustandsbeschreibung.",
    text: "Wir kaufen und verkaufen Maschinen für Druckweiterverarbeitung, Buchbinderei und Verpackung. Jede Occasion wird geprüft, bei Bedarf revidiert und transparent beschrieben. Besichtigen und Testen ausdrücklich erwünscht.",
    points: [
      "An- und Verkauf von Occasionsmaschinen",
      "Revision und Prüfung vor jeder Übergabe",
      "Faire Bewertung Ihrer Altmaschinen bei Ersatz",
      "Demontage, Transportvorbereitung und Inbetriebnahme",
    ],
    image: "/images/maschine-3.jpeg",
    imageAlt: "Tanner US-2000 AD Banderoliermaschine, geprüft",
  },
  {
    id: "neuentwicklung",
    title: "Neuentwicklungen & Sonderlösungen",
    lead: "Wenn es die Lösung nicht zu kaufen gibt, bauen wir sie.",
    text: "Spezielle Zusatzaggregate, Anpassungen und Vorrichtungen nach Ihren Vorgaben: Wir konstruieren und fertigen Sonderlösungen, die Ihre bestehenden Maschinen produktiver machen.",
    points: [
      "Zusatzaggregate nach Kundenspezifikation",
      "Anpassungen bestehender Maschinen an neue Produkte",
      "Konstruktion, Fertigung und Inbetriebnahme aus einer Hand",
    ],
    image: "/images/maschine-5.jpeg",
    imageAlt: "Stenz Feeder Kuvertanleger mit Auslageband",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-5 pb-16 pt-10 sm:px-8 md:pt-16">
        <Reveal>
          <p className="tabular-nums text-[13px] font-medium text-brand">Leistungen</p>
          <h1 className="mt-4 max-w-[22ch] text-4xl font-bold leading-[1.08] sm:text-5xl">
            Technische Dienstleistung für die Industrie
          </h1>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-soft">
            Von der vorbeugenden Wartung bis zur Sonderkonstruktion: Wir halten Ihre Produktion
            am Laufen, von der Druckweiterverarbeitung über Verpackungslinien bis zur
            Fördertechnik. Mit kurzen Wegen und Ansprechpartnern, welche die Maschinen wirklich
            kennen.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <nav aria-label="Leistungsübersicht" className="flex flex-wrap gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="pressable rounded-full border border-line bg-white px-5 py-2.5 text-[14px] font-semibold transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      <div className="border-t border-line">
        {sections.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={i % 2 === 1 ? "border-y border-line bg-surface" : ""}
          >
            <div
              className={`mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <h2 className="text-3xl font-bold sm:text-4xl">{s.title}</h2>
                <p className="mt-3 text-[17px] font-semibold text-brand">{s.lead}</p>
                <p className="mt-4 max-w-[56ch] text-[16px] leading-relaxed text-ink-soft">{s.text}</p>
                <ul className="mt-7 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed">
                      <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/kontakt/?betreff=${encodeURIComponent(s.title)}`}
                  className="mt-8 inline-block text-[15px] font-semibold text-brand transition-colors duration-200 hover:text-brand-deep"
                >
                  {s.title} anfragen
                </Link>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="img-frame relative aspect-[4/3] rounded-lg">
                  <Image
                    src={asset(s.image)}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 620px"
                    className="rounded-lg object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-[880px] px-5 py-16 text-center sm:px-8 md:py-20">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Nicht sicher, welche Leistung Sie brauchen?
          </h2>
          <p className="mx-auto mt-3 max-w-[48ch] text-[16px] leading-relaxed text-ink-soft">
            Rufen Sie an und schildern Sie das Problem. Wir sagen Ihnen in fünf Minuten, wie wir
            vorgehen würden.
          </p>
          <a
            href={site.phoneHref}
            className="pressable mt-7 inline-block rounded-md bg-brand px-7 py-4 tabular-nums text-[16px] font-medium text-on-brand transition-colors duration-200 hover:bg-brand-deep"
          >
            {site.phone}
          </a>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
