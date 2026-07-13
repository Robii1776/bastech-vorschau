import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

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
            <p className="font-mono text-[13px] font-medium text-brand">Über uns</p>
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
                Unsere Kundschaft sind Druckereien, Buchbindereien, Weiterverarbeitungs- und
                Verpackungsbetriebe in der ganzen Schweiz. Viele arbeiten mit Maschinen, für die
                es offiziell keinen Support mehr gibt. Genau da fangen wir an: Wir kennen die
                alten Generationen von Müller Martini, MBO, Tanner, Strapex und Mosca so gut wie
                die aktuellen.
              </p>
              <p>
                Wir bleiben bewusst klein und direkt. Wer bei uns anruft, hat Inhaber Danilo
                Falzarano am Apparat, also die Person, die nachher auch an der Maschine steht,
                nicht eine Disposition. Das macht uns schnell, und es macht unsere Aussagen
                verbindlich.
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
                  <dd className="mt-0.5 font-mono text-[16px] font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <figure>
              <div className="img-frame relative aspect-[3/4] rounded-lg">
                <Image
                  src="/images/inhaber.jpeg"
                  alt="Danilo Falzarano, Inhaber der Bastech Betriebe AG"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="rounded-lg object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[15px]">
                <span className="font-semibold">Danilo Falzarano</span>
                <span className="block text-[13px] text-ink-soft">
                  Inhaber und Ihr direkter Ansprechpartner
                </span>
              </figcaption>
            </figure>
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
            <p className="mt-4 font-mono text-[14px] text-ink-soft">
              {site.address.street} · {site.address.zip} {site.address.city} · Kanton Luzern
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="img-frame relative aspect-[4/3] rounded-lg">
              <Image
                src="/images/maschine-6.jpeg"
                alt="Tanner US-2000 L Banderoliermaschine aus dem Bastech-Bestand"
                fill
                sizes="(max-width: 1024px) 90vw, 620px"
                className="rounded-lg object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
