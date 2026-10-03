import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { club } from "@/lib/club";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${club.fullName} nach Schweizer Datenschutzgesetz (DSG).`,
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <div>
        <h2>Grundsatz</h2>
        <p>
          Wir behandeln personenbezogene Daten vertraulich und nach dem Schweizer
          Datenschutzgesetz (DSG). Diese Website verwendet keine Cookies, kein Tracking und keine
          Werbedienste. Schriften werden von unserem eigenen Server geladen.
        </p>
      </div>
      <div>
        <h2>Verantwortliche Stelle</h2>
        <p>
          {club.fullName}, c/o {club.contact.name}, {club.address.street}, {club.address.zip}{" "}
          {club.address.city}. E-Mail: <a href={`mailto:${club.contact.email}`}>{club.contact.email}</a>
        </p>
      </div>
      <div>
        <h2>Kontaktformular</h2>
        <p>
          Wenn du uns über das Formular schreibst, verarbeiten wir Name, E-Mail, Telefon, Jahrgang
          und Nachricht, um dich wegen des Trainings zu kontaktieren. Die Übermittlung läuft über
          den Dienst Web3Forms, der die Nachricht per E-Mail an uns weiterleitet. Wir geben deine
          Angaben nicht an Dritte weiter und löschen sie, wenn sie nicht mehr gebraucht werden.
        </p>
      </div>
      <div>
        <h2>Daten von Kindern</h2>
        <p>
          Anfragen für Kinder bitten wir durch einen Elternteil zu stellen. Fotos von Trainings und
          Spielen veröffentlichen wir nur mit Einverständnis der Eltern.
        </p>
      </div>
      <div>
        <h2>Hosting</h2>
        <p>
          Beim Aufruf der Website speichert der Hosting-Anbieter technisch notwendige Daten wie
          IP-Adresse, Datum und Uhrzeit in Server-Logfiles. Diese dienen nur dem sicheren Betrieb.
        </p>
      </div>
      <div>
        <h2>Deine Rechte</h2>
        <p>
          Du kannst jederzeit Auskunft über deine gespeicherten Daten verlangen sowie deren
          Berichtigung oder Löschung. Schreib dafür an{" "}
          <a href={`mailto:${club.contact.email}`}>{club.contact.email}</a>.
        </p>
      </div>
    </LegalPage>
  );
}
