import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Bastech Betriebe AG gemäss Schweizer Datenschutzgesetz (DSG).",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-[760px] px-5 pb-24 pt-10 sm:px-8 md:pt-16">
      <h1 className="text-4xl font-bold tracking-tight">Datenschutzerklärung</h1>
      <p className="mt-4 text-[15px] text-ink-soft">Stand: Juli 2026</p>

      <div className="mt-10 space-y-8 text-[16px] leading-relaxed text-ink-soft">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-ink">1. Verantwortliche Stelle</h2>
          <p className="mt-3">
            {site.name}, {site.address.street}, {site.address.zip} {site.address.city},{" "}
            {site.address.country}. Bei Fragen zum Datenschutz erreichen Sie uns unter{" "}
            <a href={`mailto:${site.email}`} className="text-brand">{site.email}</a>.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight text-ink">2. Grundsatz</h2>
          <p className="mt-3">
            Wir bearbeiten Personendaten gemäss dem schweizerischen Datenschutzgesetz (DSG). Wir
            erheben nur Daten, die für die Bearbeitung Ihrer Anfrage oder den Betrieb dieser
            Website erforderlich sind.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight text-ink">3. Kontaktformular</h2>
          <p className="mt-3">
            Wenn Sie unser Kontaktformular nutzen, werden die von Ihnen angegebenen Daten (Name,
            Firma, E-Mail, Telefon, Nachricht) zur Bearbeitung Ihrer Anfrage an uns übermittelt.
            Für den technischen Versand nutzen wir den Dienst Web3Forms; die Übermittlung erfolgt
            verschlüsselt. Ihre Angaben werden ausschliesslich zur Beantwortung Ihrer Anfrage
            verwendet und nicht an Dritte weitergegeben.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight text-ink">4. Server-Logdaten</h2>
          <p className="mt-3">
            Beim Aufruf dieser Website können durch den Hosting-Anbieter technisch bedingte Daten
            (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite, Browsertyp) in Logdateien gespeichert
            werden. Diese Daten dienen der Sicherstellung des Betriebs und der Sicherheit und
            lassen keine direkte Identifikation zu.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight text-ink">5. Externe Inhalte</h2>
          <p className="mt-3">
            Auf der Kontaktseite ist eine Karte von Google Maps eingebunden. Beim Laden der Karte
            werden Daten (u.a. Ihre IP-Adresse) an Google übermittelt. Anbieter: Google Ireland
            Limited, Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight text-ink">6. Cookies &amp; Tracking</h2>
          <p className="mt-3">
            Diese Website verwendet keine Tracking-Cookies und keine Analysedienste, die
            Personendaten erheben.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight text-ink">7. Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten Personendaten sowie
            auf deren Berichtigung oder Löschung. Wenden Sie sich dazu an{" "}
            <a href={`mailto:${site.email}`} className="text-brand">{site.email}</a>.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight text-ink">8. Änderungen</h2>
          <p className="mt-3">
            Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt die jeweils auf
            dieser Website publizierte Fassung.
          </p>
        </div>
      </div>
    </section>
  );
}
