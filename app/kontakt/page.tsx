import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt und Serviceanfrage",
  description:
    "Maschine defekt oder Frage zu einer Occasion? Kontaktieren Sie die Bastech Betriebe AG in Mehlsecken LU. Rückmeldung innert 24 Stunden. Telefon 079 388 67 68.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-5 pb-20 pt-10 sm:px-8 md:pt-16">
        <Reveal>
          <p className="tabular-nums text-[13px] font-medium text-brand">Kontakt</p>
          <h1 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.08] sm:text-5xl">
            Schildern Sie uns Ihr Anliegen
          </h1>
          <p className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-ink-soft">
            Sie erhalten innert 24 Stunden eine Rückmeldung. Bei dringenden Maschinenstillständen
            rufen Sie am besten direkt an.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal delay={0.05}>
            <div className="space-y-8">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-soft">Telefon</p>
                <div className="mt-2 space-y-1">
                  <a
                    href={site.phoneHref}
                    className="block tabular-nums text-2xl font-medium text-brand transition-colors duration-200 hover:text-brand-deep"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={site.phone2Href}
                    className="block tabular-nums text-lg text-ink-soft transition-colors duration-200 hover:text-brand"
                  >
                    {site.phone2}
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-soft">WhatsApp</p>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-lg font-medium text-brand transition-colors duration-200 hover:text-brand-deep"
                >
                  Direkt schreiben, Foto der Maschine gleich mitschicken
                </a>
              </div>

              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-soft">E-Mail</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-lg font-medium transition-colors duration-200 hover:text-brand"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-soft">Adresse</p>
                <address className="mt-2 text-[16px] not-italic leading-relaxed">
                  {site.name}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}, {site.address.canton}
                </address>
              </div>

              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-soft">
                  Erreichbarkeit
                </p>
                {/* TODO Übergabe: Öffnungs-/Erreichbarkeitszeiten aus Checkliste ergänzen */}
                <p className="mt-2 max-w-[36ch] text-[15px] leading-relaxed text-ink-soft">
                  Montag bis Freitag, nach Vereinbarung. Bei Maschinenstillständen sind wir auch
                  ausserhalb der Bürozeiten erreichbar.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <iframe
          title="Standort Bastech Betriebe AG auf OpenStreetMap"
          src="https://www.openstreetmap.org/export/embed.html?bbox=7.9448%2C47.2361%2C7.9748%2C47.2561&layer=mapnik&marker=47.2461%2C7.9598"
          className="h-[420px] w-full"
          loading="lazy"
        />
        <div className="mx-auto flex max-w-[1320px] justify-end px-5 py-3 sm:px-8">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${site.name}, ${site.address.street}, ${site.address.zip} ${site.address.city}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-semibold text-brand transition-colors duration-200 hover:text-brand-deep"
          >
            Route in Google Maps öffnen
          </a>
        </div>
      </section>
    </>
  );
}
