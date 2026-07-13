import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerList } from "@/components/Reveal";
import { ImageReveal } from "@/components/ImageReveal";
import { BrandMarquee } from "@/components/BrandMarquee";
import { MachineCard } from "@/components/MachineCard";
import { CtaBand } from "@/components/CtaBand";
import { Faq, type FaqItem } from "@/components/Faq";
import { machines } from "@/lib/machines";
import { site } from "@/lib/site";

const services = [
  {
    title: "Service & Revisionen",
    text: "Vorbeugende Wartung und komplette Revisionen, damit Ausfälle gar nicht erst entstehen: geplant, dokumentiert, termingerecht.",
    href: "/leistungen/#service-revisionen",
  },
  {
    title: "Mechanische Reparaturen",
    text: "Schnelle Fehlerdiagnose und fachgerechte Instandsetzung an Falz-, Banderolier- und Umreifungsmaschinen, vor Ort oder in unserer Werkstatt.",
    href: "/leistungen/#reparaturen",
  },
  {
    title: "Ersatzteile",
    text: "Kurzfristig lieferbare Ersatz- und Verschleissteile, auch für ältere Maschinengenerationen von Müller Martini, MBO, Tanner und weiteren.",
    href: "/leistungen/#ersatzteile",
  },
  {
    title: "Handel & Occasionen",
    text: "An- und Verkauf geprüfter Occasionsmaschinen: revidiert, einsatzbereit, ehrlich beschrieben.",
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
    a: "Melden Sie sich telefonisch, schildern Sie das Problem. Wir geben Ihnen sofort eine ehrliche Einschätzung und vereinbaren den nächstmöglichen Termin. Bei dringenden Stillständen priorisieren wir Ihren Fall und sind schweizweit unterwegs.",
  },
  {
    q: "Welche Maschinen und Hersteller betreut Bastech?",
    a: "Wir sind spezialisiert auf Druckweiterverarbeitung, Buchbinderei und Umreifungstechnik: Falzmaschinen, Banderolier- und Umreifungsmaschinen, Anleger und Zusatzaggregate, unter anderem von Müller Martini, MBO, Tanner, Strapex und Mosca.",
  },
  {
    q: "Verkauft Bastech auch geprüfte Occasionsmaschinen?",
    a: "Ja. Alle Occasionsmaschinen werden bei uns geprüft und bei Bedarf revidiert, bevor sie den Betrieb wechseln. Sie erhalten eine transparente Zustandsbeschreibung. Besichtigen und Testen ist jederzeit möglich.",
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
            <p className="text-[15px] font-medium text-ink-soft">
              Maschinenservice aus Mehlsecken LU, schweizweit im Einsatz
            </p>
            <h1 className="mt-4 max-w-[16ch] text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
              Ihre Maschinen sollen laufen. Dafür sorgen wir.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
              Service, Revisionen und Reparaturen für Druckweiterverarbeitung, Buchbinderei und
              Umreifungstechnik, dazu geprüfte Occasionsmaschinen und Ersatzteile. Direkt,
              flexibel, seit {site.founded}.
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
            <dl className="mt-12 flex max-w-md flex-wrap gap-x-12 gap-y-5">
              {[
                ["Seit", site.founded],
                ["Einsatzgebiet", "Schweiz"],
                ["Rückmeldung", "unter 24 h"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[13px] font-medium text-ink-soft">{label}</dt>
                  <dd className="mt-0.5 font-mono text-[17px] font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/maschinen/"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand-tint px-4 py-2 text-[14px] font-semibold text-brand-deep transition-colors duration-200 hover:bg-brand hover:text-on-brand"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-brand opacity-60 group-hover:bg-on-brand" />
                <span className="relative h-2 w-2 rounded-full bg-brand group-hover:bg-on-brand" />
              </span>
              {machines.length} Occasionsmaschinen aktuell verfügbar
            </Link>
          </Reveal>

          <Reveal delay={0.15} y={0} className="relative">
            <ImageReveal className="img-frame relative aspect-[3/4] max-h-[560px] w-full rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src="/images/hero-1.jpg"
                  alt="Tanner Ultra-Sonic 2000 Banderoliermaschine, revidiert durch Bastech Betriebe AG"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="rounded-lg object-cover"
                />
              </div>
            </ImageReveal>
            <p className="mt-3 font-mono text-[12px] text-ink-soft">
              Tanner US-2000, revidiert und einsatzbereit
            </p>
          </Reveal>
        </div>
      </section>

      <BrandMarquee />

      {/* Leistungen */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[18ch] text-3xl font-bold sm:text-4xl">
              Alles aus einer Hand, vom Ersatzteil bis zur Revision
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
                <h3 className="text-lg font-bold transition-colors duration-200 group-hover:text-brand">
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
            <h2 className="max-w-[20ch] text-3xl font-bold sm:text-4xl">
              Geprüfte Occasionsmaschinen
            </h2>
            <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-ink-soft">
              Revidiert, getestet und sofort verfügbar. Ehrliche Zustandsbeschreibung statt Verkaufsprosa.
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
          <ImageReveal className="order-2 lg:order-1 img-frame relative aspect-[4/5] max-h-[520px] rounded-lg">
            <div className="relative h-full w-full">
              <Image
                src="/images/maschine-2.jpeg"
                alt="Revidierter Anleger mit Bastech Betriebe AG Typenschild"
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className="rounded-lg object-cover"
              />
            </div>
          </ImageReveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <h2 className="max-w-[18ch] text-3xl font-bold sm:text-4xl">
              Warum Betriebe mit Bastech arbeiten
            </h2>
            <ul className="mt-8 space-y-6">
              {[
                [
                  "Fachwissen, das man nicht googeln kann",
                  "Jahrzehntelange Erfahrung in Druckweiterverarbeitung, Buchbinderei und Umreifungstechnik, auch bei Maschinen, für die es offiziell keinen Support mehr gibt.",
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
                <li key={title}>
                  <p className="text-[17px] font-bold">{title}</p>
                  <p className="mt-1.5 max-w-[56ch] text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </li>
              ))}
            </ul>

            <blockquote className="mt-10 rounded-lg bg-brand-tint p-6">
              <p className="text-[16px] font-medium leading-relaxed text-brand-deep">
                «Beeindruckende Einsatzbereitschaft und Flexibilität, enormes Fachwissen.
                Ein Allrounder mit lösungsorientiertem Handeln.»
              </p>
              <footer className="mt-3 text-[14px] text-ink-soft">
                <span className="font-semibold text-ink">Patrick Näther</span>, Leiter Technischer
                Support, Swissprinters AG, Zofingen
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Ablauf */}
      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-24">
        <Reveal>
          <h2 className="max-w-[22ch] text-3xl font-bold sm:text-4xl">
            Vom Anruf bis zur laufenden Maschine
          </h2>
          <p className="mt-3 max-w-[54ch] text-[16px] leading-relaxed text-ink-soft">
            Kein Ticketsystem, keine Umwege. So arbeiten wir, wenn bei Ihnen eine Maschine steht
            oder eine Revision ansteht.
          </p>
        </Reveal>
        <StaggerList
          className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
          items={[
            [
              "1",
              "Kontakt aufnehmen",
              "Anruf, WhatsApp oder Formular. Schildern Sie kurz, welche Maschine betroffen ist und was passiert ist.",
            ],
            [
              "2",
              "Ehrliche Einschätzung",
              "Sie erhalten innert 24 Stunden eine erste Diagnose und eine klare Empfehlung, ob sich der Eingriff lohnt.",
            ],
            [
              "3",
              "Einsatz",
              "Reparatur oder Revision, bei Ihnen vor Ort oder in unserer Werkstatt in Mehlsecken. Termintreu und sauber.",
            ],
            [
              "4",
              "Abnahme & Dokumentation",
              "Die Maschine läuft, der Zustand ist dokumentiert. Auf Wunsch planen wir gleich das nächste Wartungsfenster.",
            ],
          ].map(([num, title, text]) => (
            <div key={num}>
              <p className="font-mono text-[15px] font-medium text-brand">{num}</p>
              <h3 className="mt-2 text-lg font-bold">{title}</h3>
              <p className="mt-2 max-w-[38ch] text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        />
        <Reveal className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={site.phoneHref}
            className="pressable rounded-md bg-brand px-7 py-4 font-mono text-[16px] font-medium text-on-brand transition-colors duration-200 hover:bg-brand-deep"
          >
            {site.phone}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable rounded-md border border-line bg-white px-7 py-4 text-[16px] font-semibold transition-colors duration-200 hover:border-brand hover:text-brand"
          >
            Per WhatsApp schreiben
          </a>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[880px] px-5 py-20 sm:px-8 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Häufige Fragen</h2>
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
        </div>
      </section>

      <CtaBand />
    </>
  );
}
