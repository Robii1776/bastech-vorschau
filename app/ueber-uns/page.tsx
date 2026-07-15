import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Über uns: Maschinenbau-Handwerk aus dem Kanton Luzern",
  description:
    "Die Bastech Betriebe AG steht seit 2008 für technische Dienstleistung und Handel in der grafischen Industrie. Lernen Sie den Betrieb aus Mehlsecken LU kennen.",
};

export default function UeberUnsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-5 pb-20 pt-10 sm:px-8 md:pt-16">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="tabular-nums text-[13px] font-medium text-brand">Über uns</p>
            <h1 className="mt-4 max-w-[18ch] text-4xl font-bold leading-[1.08] sm:text-5xl">
              Handwerk, das Maschinen am Leben hält
            </h1>
            <div className="mt-8 max-w-[62ch] space-y-5 text-[16px] leading-relaxed text-ink-soft">
              <p>
                Die Bastech Betriebe AG ist seit {site.founded} als Aktiengesellschaft im Kanton
                Luzern zu Hause. Was als technische Dienstleistung für die grafische Industrie
                begann, ist heute ein Betrieb, der Maschinen wartet, revidiert, repariert,
                handelt und, wenn nötig, neu erfindet.
              </p>
              <p>
                Unsere Kundschaft sind Druckereien, Buchbindereien, Verpackungs-, Logistik- und
                Industriebetriebe in der ganzen Schweiz. Viele arbeiten mit Maschinen, für die
                es offiziell keinen Support mehr gibt. Genau da fangen wir an: Wir kennen die
                alten Generationen von Müller Martini, MBO, Tanner, Strapex und Mosca so gut wie
                die aktuellen, und über unser Netzwerk decken wir auch Automation, Robotik und
                Fördertechnik ab.
              </p>
              <p>
                Wir bleiben bewusst klein und direkt. Wer bei uns anruft, spricht mit Inhaber
                André Basler oder mit Danilo Falzarano, also mit den Leuten, die nachher auch an
                der Maschine stehen, nicht mit einer Disposition. Das macht uns schnell, und es
                macht unsere Aussagen verbindlich.
              </p>
            </div>

            <dl className="mt-10 flex max-w-lg flex-wrap gap-x-12 gap-y-5">
              {[
                ["Gegründet", site.founded],
                ["Rechtsform", "AG"],
                ["Standort", "Mehlsecken LU"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[13px] font-medium text-ink-soft">{label}</dt>
                  <dd className="mt-0.5 tabular-nums text-[16px] font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-5">
              {/* TODO Übergabe: Namen/Rollen von Danilo bestätigen lassen */}
              {[
                ["/images/team-inhaber.jpeg", "André Basler", "Inhaber"],
                ["/images/team-danilo.jpeg", "Danilo Falzarano", "Service & Technik"],
              ].map(([src, name, role]) => (
                <figure key={name}>
                  <div className="img-frame relative aspect-[3/4] rounded-lg">
                    <Image
                      src={asset(src)}
                      alt={`${name}, ${role}, Bastech Betriebe AG`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 45vw, 260px"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-[15px]">
                    <span className="font-semibold">{name}</span>
                    <span className="block text-[13px] text-ink-soft">{role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-24">
          <Reveal>
            <h2 className="max-w-[20ch] text-3xl font-bold sm:text-4xl">
              Wofür wir stehen
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              [
                "Ehrlichkeit vor Umsatz",
                "Wenn sich eine Reparatur nicht lohnt, sagen wir es, auch wenn wir damit einen Auftrag verlieren. Langfristiges Vertrauen ist uns mehr wert.",
              ],
              [
                "Erreichbarkeit",
                "Maschinen halten sich nicht an Bürozeiten. Bei einem Stillstand erreichen Sie uns direkt und bekommen eine ehrliche Einschätzung statt einer Ticketnummer.",
              ],
              [
                "Qualität im Detail",
                "Eine Revision ist bei uns erst fertig, wenn die Maschine läuft wie am ersten Tag: geprüft, eingestellt und dokumentiert.",
              ],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed text-ink-soft">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="max-w-[20ch] text-3xl font-bold sm:text-4xl">
              Mitten in der Schweiz, schnell bei Ihnen
            </h2>
            <p className="mt-5 max-w-[54ch] text-[16px] leading-relaxed text-ink-soft">
              Von {site.address.city} bei Reiden LU aus sind wir in kurzer Zeit in Luzern, Aargau,
              Zürich, Bern und der ganzen Deutschschweiz, bei Bedarf auch darüber hinaus.
              Werkstatt-Arbeiten erledigen wir bei uns, Einsätze vor Ort direkt in Ihrer
              Produktion.
            </p>
            <p className="mt-4 tabular-nums text-[14px] text-ink-soft">
              {site.address.street} · {site.address.zip} {site.address.city} · Kanton Luzern
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="img-frame relative aspect-[4/3] rounded-lg">
              <Image
                src={asset("/images/maschine-6.jpeg")}
                alt="Tanner US-2000 L Banderoliermaschine aus dem Bastech-Bestand"
                fill
                sizes="(max-width: 1024px) 90vw, 620px"
                className="rounded-lg object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vertriebspartner */}
      <section id="partner" className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-24">
          <Reveal>
            <h2 className="max-w-[24ch] text-3xl sm:text-4xl">
              Unser Partner für Automation und Vertrieb
            </h2>
            <p className="mt-3 max-w-[58ch] text-[16px] leading-relaxed text-ink-soft">
              Für Industrieautomation, Robotik, Fördertechnik sowie Verpackungs- und
              End-of-Line-Systeme arbeiten wir eng mit Colangelo Industrial Solutions zusammen.
              Bastech übernimmt dabei die technische Unterstützung, Inbetriebnahme und den
              After-Sales-Service direkt in der Schweiz.
            </p>
          </Reveal>

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[340px_1fr]">
            <Reveal>
              <figure>
                <div className="img-frame relative aspect-[4/5] rounded-lg">
                  <Image
                    src={asset("/images/team-elvis.jpeg")}
                    alt="Elvis Colangelo, Business Development & Sales Partner, Colangelo Industrial Solutions"
                    fill
                    sizes="(max-width: 1024px) 90vw, 340px"
                    className="rounded-lg object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[15px]">
                  <span className="font-semibold">Elvis Colangelo</span>
                  <span className="block text-[13px] text-ink-soft">
                    Business Development &amp; Sales Partner, Colangelo Industrial Solutions
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="max-w-[62ch] space-y-5 text-[16px] leading-relaxed text-ink-soft">
                <p>
                  Mit über 23 Jahren Erfahrung in der Schweizer Industrie unterstützt Elvis
                  Colangelo italienische und europäische Unternehmen beim erfolgreichen
                  Markteintritt sowie beim Ausbau ihrer Geschäftstätigkeit in der Schweiz.
                </p>
                <p>
                  Colangelo Industrial Solutions ist spezialisiert auf Business Development,
                  technischen Vertrieb sowie individuelle Lösungen in den Bereichen
                  Industrieautomation, Robotik, Fördertechnik sowie Verpackungs- und
                  End-of-Line-Systeme.
                </p>
                <p>
                  Gemeinsam mit den Technologiepartnern begleitet er Kunden von der technischen
                  Beratung über die Projektentwicklung bis zur erfolgreichen Umsetzung. Dank der
                  Zusammenarbeit mit der Bastech Betriebe AG sind kompetente technische
                  Unterstützung, Inbetriebnahme und ein zuverlässiger After-Sales-Service direkt
                  in der Schweiz gewährleistet.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-[15px] font-bold">Kernkompetenzen</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Business Development Schweiz",
                    "Technischer Vertrieb",
                    "Industrieautomation",
                    "Robotik",
                    "Fördertechnik",
                    "Verpackungs- und End-of-Line-Lösungen",
                    "Projektmanagement",
                    "Technische Beratung",
                    "After-Sales-Service",
                  ].map((k) => (
                    <li
                      key={k}
                      className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-semibold"
                    >
                      {k}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-[15px] font-bold">Sprachen</h3>
                  <ul className="mt-3 space-y-1.5 text-[15px] text-ink-soft">
                    <li>Deutsch, Muttersprache</li>
                    <li>Italienisch, Muttersprache</li>
                    <li>Englisch, gute Kenntnisse</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold">Kontakt</h3>
                  <address className="mt-3 space-y-1.5 text-[15px] not-italic leading-relaxed text-ink-soft">
                    <span className="block">
                      Colangelo Industrial Solutions
                      <br />
                      Via P. e L. Chiesa 5, 6830 Chiasso TI
                    </span>
                    <a
                      href="mailto:cis.swiss@icloud.com"
                      className="block font-medium text-brand transition-colors duration-200 hover:text-brand-deep"
                    >
                      cis.swiss@icloud.com
                    </a>
                    <a
                      href="tel:+41792708161"
                      className="tabular-nums block font-medium text-brand transition-colors duration-200 hover:text-brand-deep"
                    >
                      +41 79 270 81 61
                    </a>
                  </address>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
