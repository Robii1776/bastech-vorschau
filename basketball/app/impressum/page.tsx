import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { club } from "@/lib/club";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${club.fullName}.`,
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <div>
        <h2>Verantwortlich für den Inhalt</h2>
        <address className="not-italic">
          {club.fullName}
          <br />
          c/o {club.contact.name}
          <br />
          {club.address.street}
          <br />
          {club.address.zip} {club.address.city} {club.address.canton}
          <br />
          Schweiz
        </address>
      </div>
      <div>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={club.contact.phoneHref} className="tabular-nums">{club.contact.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${club.contact.email}`}>{club.contact.email}</a>
        </p>
      </div>
      <div>
        <h2>Rechtsform</h2>
        <p>
          Verein im Sinne von Art. 60 ff. ZGB mit Sitz in {club.place}. Vertreten durch den
          Vorstand.
        </p>
      </div>
      <div>
        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit
          und Aktualität übernehmen wir keine Gewähr. Trainingszeiten können sich kurzfristig ändern,
          zum Beispiel bei Hallenbelegungen durch die Schule.
        </p>
      </div>
      <div>
        <h2>Links</h2>
        <p>
          Für Inhalte verlinkter Websites sind ausschliesslich deren Betreiber verantwortlich.
        </p>
      </div>
    </LegalPage>
  );
}
