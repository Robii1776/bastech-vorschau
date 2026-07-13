import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerList } from "@/components/Reveal";
import { MachineCard } from "@/components/MachineCard";
import { CtaBand } from "@/components/CtaBand";
import { Faq, type FaqItem } from "@/components/Faq";
import { machines } from "@/lib/machines";
import { site } from "@/lib/site";

const services = [
  {
    title: "Service & Revisionen",
    text: "Vorbeugende Wartung und komplette Revisionen, damit Ausfälle gar nicht erst entstehen – geplant, dokumentiert und termingerecht.",
    href: "/leistungen/#service-revisionen",
  },
  {
    title: "Mechanische Reparaturen",
    text: "Schnelle Fehlerdiagnose und fachgerechte Instandsetzung an Falz-, Banderolier- und Umreifungsmaschinen – vor Ort oder in unserer Werkstatt.",
    href: "/leistungen/#reparaturen",
  },
  {
    title: "Ersatzteile",
    text: "Kurzfristig lieferbare Ersatz- und Verschleissteile, auch für ältere Maschinengenerationen von Müller Martini, MBO, Tanner und weiteren.",
    href: "/leistungen/#ersatzteile",
  },
  {
    title: "Handel & Occasionen",
    text: "An- und Verkauf geprüfter Occasionsmaschinen – revidiert, einsatzbereit und mit ehrlicher Zustandsbeschreibung.",
    href: "/leistungen/#handel",
  },
  {
    title: "Neuentwicklungen",
    text: "Spezielle Zusatzaggregate und Sonderlösungen nach Ihren Vorgaben, wenn Standardkomponenten nicht mehr ausreichen.",
    href: "/leistungen/#neuentwicklung",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Wie schnell ist Bastech bei einem Maschinenstillstand vor Ort?",
    a: "Melden Sie sich telefonisch, schildern Sie das Problem – wir geben Ihnen sofort eine ehrliche Einschätzung und vereinbaren den nächstmöglichen Termin. Bei dringenden Stillständen priorisieren wir Ihren Fall und sind schweizweit unterwegs.",
  },
  {
    q: "Welche Maschinen und Hersteller betreut Bastech?",
    a: "Wir sind spezialisiert auf Druckweiterverarbeitung, Buchbinderei und Umreifungstechnik: Falzmaschinen, Banderolier- und Umreifungsmaschinen, Anleger und Zusatzaggregate – unter anderem von Müller Martini, MBO, Tanner, Strapex und Mosca.",
  },
  {
    q: "Verkauft Bastech auch geprüfte Occasionsmaschinen?",
    a: "Ja. Alle Occasionsmaschinen werden bei uns geprüft und bei Bedarf revidiert, bevor sie den Betrieb wechseln. Sie erhalten eine transparente Zustandsbeschreibung – besichtigen und testen ist jederzeit möglich.",
  },
  {
    q: "Übernimmt Bastech auch regelmässige Wartungen mit Vertrag?",
    a: "Gerne. Wir erstellen für Ihre Maschinenflotte einen Wartungsplan mit fixen Intervallen, damit Verschleiss früh erkannt wird und Produktionsausfälle gar nicht erst entstehen.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HomePage() {
  const featured = machines.filter((m) => m.featured);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="mx-auto max-w-[1320px] px-5 pb-20 pt-10 sm:px-8 md:pb-28 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <p className="font-mono text-[13px] font-medium text-brand">
              Mehlsecken LU · schweizweit im Einsatz
            </p>
            <h1 className="mt-4 max-w-[16ch] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Ihre Maschinen sollen laufen. Dafür sorgen wir.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
              Service, Revisionen und Reparaturen für Druckweiterverarbeitung, Buchbinderei und
              Umreifungstechnik – plus geprüfte Occasionsmaschinen und Ersatzteile. Direkt,
              flexibel und seit {site.founded}.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakt/"
                className="pressable rounded-md bg-brand px-7 py-4 text-[16px] font-semibold text-on-brand transition-colors duration-200 hover:bg-brand-deep"
              >
                Service anfragen
              </Link>
              <a
                href={site.phoneHref}
                className="pressable rounded-md border border-line bg-white px-7 py-4 font-mono text-[16px] font-medium transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                {site.phone}
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 divide-x divide-line border-y border-line">
              {[
                ["Seit", site.founded],
                ["Einsatzgebiet", "Schweiz"],
                ["Rückmeldung", "< 24 h"],
              ].map(([label, value]) => (
                <div key={label} className="px-4 py-4 first:pl-0">
                  <dt className="text-[12px] font-medium uppercase tracking-wide text-ink-soft">{label}</dt>
                  <dd className="mt-1 font-mono text-[17px] font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} y={32} className="relative">
            <div className="img-frame relative aspect-[3/4] max-h-[560px] w-full rounded-lg">
              <Image
                src="/images/hero-1.jpg"
                alt="Tanner Ultra-Sonic 2000 Banderoliermaschine, revidiert durch Bastech Betriebe AG"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 560px"
                className="rounded-lg object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[12px] text-ink-soft">
              Tanner US-2000 – revidiert &amp; einsatzbereit
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leistungen */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[18ch] text-3xl font-bold tracking-tight sm:text-4xl">
              Alles aus einer Hand – vom Ersatzteil bis zur Revision
            </h2>
            <Link
              href="/leistungen/"
              className="text-[15px] font-semibold text-brand transition-colors duration-200 hover:text-brand-deep"
            >
              Alle Leistungen →
            </Link>
          </Reveal>

          <StaggerList
            className="mt-12 divide-y divide-line border-t border-line"
            items={services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group grid gap-2 py-6 transition-colors duration-200 sm:grid-cols-[260px_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <h3 className="text-lg font-bold tracking-tight transition-colors duration-200 group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="max-w-[64ch] text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
                <span
                  aria-hidden
                  className="hidden font-mono text-lg text-brand opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 sm:block"
                >
                  →
                </span>
              </Link>
            ))}
          />
        </div>
      </section>

      {/* Occasionsmaschinen */}
      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="max-w-[20ch] text-3xl font-bold tracking-tight sm:text-4xl">
              Geprüfte Occasionsmaschinen
            </h2>
            <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-ink-soft">
              Revidiert, getestet und sofort verfügbar – mit ehrlicher Zustandsbeschreibung statt
              Verkaufsprosa.
            </p>
          </div>
          <Link
            href="/maschinen/"
            className="text-[15px] font-semibold text-brand transition-colors duration-200 hover:text-brand-deep"
          >
            Alle Maschinen →
          </Link>
        </Reveal>

        <StaggerList
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          items={featured.map((m) => (
            <MachineCard key={m.slug} machine={m} />
          ))}
        />
      </section>

      {/* Warum Bastech */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="order-2 lg:order-1">
            <div className="img-frame relative aspect-[4/5] max-h-[520px] rounded-lg">
              <Image
                src="/images/maschine-2.jpeg"
                alt="Revidierter Anleger mit Bastech Betriebe AG Typenschild"
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className="rounded-lg object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <h2 className="max-w-[18ch] text-3xl font-bold tracking-tight sm:text-4xl">
              Warum Betriebe mit Bastech arbeiten
            </h2>
            <ul className="mt-8 space-y-6">
              {[
                [
                  "Fachwissen, das man nicht googeln kann",
                  "Jahrzehntelange Erfahrung in Druckweiterverarbeitung, Buchbinderei und Umreifungstechnik – auch bei Maschinen, für die es offiziell keinen Support mehr gibt.",
                ],
                [
                  "Einsatzbereitschaft & Flexibilität",
                  "Wir richten uns nach Ihrer Produktion, nicht umgekehrt. Kurzfristige Einsätze und unkonventionelle Lösungen gehören zum Alltag.",
                ],
                [
                  "Ehrliche Beratung",
                  "Wenn sich eine Reparatur nicht lohnt, sagen wir es Ihnen. Wenn eine Occasion die bessere Wahl ist, finden wir sie.",
                ],
              ].map(([title, text]) => (
                <li key={title} className="grid gap-1.5">
                  <p className="flex items-center gap-3 text-[17px] font-bold tracking-tight">
                    <span aria-hidden className="h-px w-8 shrink-0 bg-brand" />
                    {title}
                  </p>
                  <p className="max-w-[56ch] pl-11 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </li>
              ))}
            </ul>

            <blockquote className="mt-10 border-l-0 rounded-lg bg-brand-tint p-6">
              <p className="text-[16px] font-medium leading-relaxed text-brand-deep">
                «Beeindruckende Einsatzbereitschaft und Flexibilität, enormes Fachwissen –
                ein Allrounder mit lösungsorientiertem Handeln.»
              </p>
              <footer className="mt-3 font-mono text-[13px] text-ink-soft">
                Kundenstimme aus der Druckweiterverarbeitung
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[880px] px-5 py-20 sm:px-8 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Häufige Fragen</h2>
          <p className="mt-3 max-w-[56ch] text-[16px] leading-relaxed text-ink-soft">
            Kurz und ehrlich beantwortet. Für alles andere:{" "}
            <a href={site.phoneHref} className="font-mono font-medium text-brand">
              {site.phone}
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <Faq items={faqItems} />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
