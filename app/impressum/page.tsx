import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Bastech Betriebe AG, Mehlsecken LU.",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-[760px] px-5 pb-24 pt-10 sm:px-8 md:pt-16">
      <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>

      <div className="mt-10 space-y-8 text-[16px] leading-relaxed">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Verantwortlich für den Inhalt</h2>
          <address className="mt-3 not-italic text-ink-soft">
            {site.name}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}, {site.address.canton}
            <br />
            {site.address.country}
          </address>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight">Kontakt</h2>
          <p className="mt-3 text-ink-soft">
            Telefon: <a href={site.phoneHref} className="font-mono text-brand">{site.phone}</a>
            <br />
            E-Mail: <a href={`mailto:${site.email}`} className="text-brand">{site.email}</a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight">Handelsregister</h2>
          <p className="mt-3 text-ink-soft">
            Eingetragen im Handelsregister des Kantons Luzern
            <br />
            UID: {site.uid}
            <br />
            Rechtsform: Aktiengesellschaft
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight">Haftungsausschluss</h2>
          <p className="mt-3 text-ink-soft">
            Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Die
            {" "}{site.name} übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und
            Aktualität der bereitgestellten Inhalte. Angebote zu Occasionsmaschinen und
            Ersatzteilen sind freibleibend und unverbindlich; Irrtum und Zwischenverkauf
            vorbehalten.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight">Urheberrechte</h2>
          <p className="mt-3 text-ink-soft">
            Die auf dieser Website veröffentlichten Inhalte, Bilder und Texte unterliegen dem
            schweizerischen Urheberrecht. Jede Verwertung ausserhalb der Grenzen des
            Urheberrechts bedarf der schriftlichen Zustimmung der {site.name}.
          </p>
        </div>
      </div>
    </section>
  );
}
