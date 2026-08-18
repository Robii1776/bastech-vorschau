# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Alle drei Zielgruppen sind gleichwertig; die Website muss jede davon abholen:

1. **Betriebs- und Produktionsleiter, Techniker mit Störfall.** Eine Maschine steht, die Produktion wartet, gesucht wird vom Handy in der Werkhalle. Job: sofort einen Menschen erreichen, der die Maschine kennt und ehrlich sagt, ob und wie schnell sie wieder läuft.
2. **Einkäufer und Betriebsinhaber für Occasionsmaschinen.** Suchen geprüfte Gebrauchtmaschinen oder wollen eigene Maschinen verkaufen. Job: Zustand, Preis und Verfügbarkeit einschätzen, besichtigen, anfragen.
3. **Industriebetriebe mit Automations-, Förder- und Verpackungsprojekten**, die über den Vertriebspartner Colangelo Industrial Solutions kommen. Job: Bastech als Umsetzungs-, Inbetriebnahme- und After-Sales-Partner in der Schweiz verstehen.

Gemeinsam: B2B, Deutschschweiz, technisch versiert, wenig Geduld für Marketingprosa, hohes Bedürfnis nach Verbindlichkeit und direktem Kontakt.

## Product Purpose

Bastech Betriebe AG (Mehlsecken LU, AG seit 2008, UID CHE-114.373.376) bietet technische Dienstleistung und Handel für die Industrie: Service und Revisionen, mechanische Reparaturen, Ersatzteile, An- und Verkauf geprüfter Occasionsmaschinen sowie Neuentwicklungen und Sonderlösungen.

Die Website ersetzt eine veraltete WordPress-Seite. Sie soll Anfragen erzeugen (Anruf, WhatsApp, Formular), Occasionsmaschinen sichtbar machen und Bastech als seriösen, direkten Partner positionieren. Erfolg heisst: mehr qualifizierte Kontaktaufnahmen, gute Auffindbarkeit über Google (inkl. Google Business Profile) und ein Auftritt, der wie eine 10'000-Franken-Website wirkt.

## Positioning

Wer bei Bastech anruft, spricht direkt mit den zwei Menschen, die nachher an der Maschine stehen: Inhaber André Basler und Danilo Falzarano (Service & Technik). Kein Callcenter, keine Disposition, keine Ticketnummer. Dazu Fachwissen für Maschinen, für die es offiziell keinen Herstellersupport mehr gibt, ehrliche Empfehlungen (reparieren oder ersetzen) und geprüfte Occasionen mit transparenter Zustandsbeschreibung.

Zielgruppe ist die **allgemeine Schweizer Industrie**. Die grafische Industrie ist eine Kundengruppe unter mehreren (Verpackung, Logistik, Produktion, Automation), nicht der Kern und nicht die "Herkunft", die hervorgehoben werden soll.

## Operating Context

- Werkstatt in Mehlsecken LU (Kreuzmatte 1a, 6260); Vor-Ort-Einsätze in der ganzen Schweiz.
- Kunden kontaktieren typischerweise per Handy: Anruf, WhatsApp mit Foto/Video der Maschine oder des Typenschilds, seltener Formular.
- Zwei Ansprechpartner mit je eigener Handynummer: André Basler 079 388 67 68, Danilo Falzarano 079 919 17 29 (Zuordnung vom Kunden noch zu bestätigen).
- Partnerschaft mit Colangelo Industrial Solutions (Elvis Colangelo, Chiasso TI) für Industrieautomation, Robotik, Fördertechnik, Verpackungs- und End-of-Line-Systeme; Bastech übernimmt technische Unterstützung, Inbetriebnahme und After-Sales-Service.
- Hersteller, mit denen Bastech vertraut ist: Müller Martini, MBO, ATS-Tanner, Strapex, Mosca, Technotrans, Siemens, SEW Eurodrive, Baumer, Heidolph, Becker, Rietschle.

## Capabilities and Constraints

- Statische Website (Next.js, statischer Export), muss auf beliebigem Hosting laufen und an den Kunden übergebbar sein. Aktuell temporäre Vorschau auf GitHub Pages unter Unterpfad; Livegang später auf eigener Domain (bastechbetriebeag.ch) und Kunden-Accounts.
- Kontaktformular über Web3Forms (Access-Key noch einzusetzen).
- Regelbasierter Service-Assistent ohne KI-Backend (bewusst, damit die Seite statisch und kostenlos bleibt).
- Preise in CHF (Beträge aus alter EUR-Liste übernommen, vom Kunden zu bestätigen).
- Kein Tracking, kein Cookie-Banner.
- **Bestätigte Zusagen**, die die Website verbindlich machen darf: Rückmeldung unter 24 Stunden; schweizweit im Einsatz; bei Stillstand auch ausserhalb der Bürozeiten telefonisch erreichbar.
- Offen: Adress-Diskrepanz (Website Mehlsecken vs. Handelsregister Beim Kreuz 21, Langnau b. Reiden), Rollenbezeichnung von Danilo, Erreichbarkeitszeiten im Detail, echte Referenzberichte.

## Brand Commitments

- Name: Bastech Betriebe AG. Claim: "Technische Dienstleistung und Handel für die Industrie".
- Logo: blaues Signet (Kreis mit Pferdekopf und Schraubenschlüssel) plus Wortmarke, Vektordaten in `assets/bastech-logo.pdf`, freigestelltes Signet in `public/images/logo-mark.png`. Markenblau aus dem Logo ist bindend.
- Sprache: Deutsch (Schweiz), "ss" statt "ß", CHF-Notation `CHF 3'500.–`. Keine Gedankenstriche in Fliesstexten (ausdrücklicher Wunsch), keine Emojis, keine KI-Floskeln.
- Voice: direkt, handfest, ehrlich, technisch fundiert. Kein Marketing-Pathos.
- Authentizität ist zentral: Nichts darf KI-generiert wirken. Echte Menschen (Porträts von André, Danilo, Elvis), echte Maschinenfotos, echte Herstellerlogos.

## Evidence on Hand

- Porträts: `public/images/team-inhaber.jpeg` (André Basler), `team-danilo.jpeg` (Danilo Falzarano), `team-elvis.jpeg` (Elvis Colangelo).
- Maschinenfotos aus dem eigenen Bestand: `public/images/maschine-*.jpeg`, `hero-1.jpg` (Tanner, Strapex, Mosca, Stenz, MBO).
- Herstellerlogos in `public/logos/` (von Herstellern bzw. Wikimedia bezogen).
- Ein echtes Testimonial: Patrick Näther, Leiter Technischer Support, Swissprinters AG, Zofingen ("Beeindruckende Einsatzbereitschaft und Flexibilität, enormes Fachwissen. Ein Allrounder mit lösungsorientiertem Handeln.").
- Occasions- und Ersatzteilliste in `lib/machines.ts` (aus alter Produktliste).
- Partnerprofil Elvis Colangelo (Text vom Kunden geliefert).
- **Nicht vorhanden, nicht erfinden:** weitere Kundenreferenzen oder Fallberichte, Werkstattfotos, Zertifikate, Google-Bewertungen. Referenz-Beispiele auf der Startseite sind Platzhalter, die durch echte Berichte ersetzt werden.

## Product Principles

1. **Der Anruf ist die Conversion.** Zwei benannte Handynummern sind auf jeder Seite einen Daumendruck entfernt; WhatsApp und Formular sind zweiter und dritter Weg.
2. **Menschen vor Maschinen.** André und Danilo sind das Produkt: sichtbar, benannt, mit Gesicht, überall wo Vertrauen entscheidet.
3. **Ehrlich statt vollmundig.** Nur belegbare Zusagen, nur echte Referenzen, Zustandsbeschreibungen statt Verkaufsprosa.
4. **Ganze Industrie, keine Nische.** Formulierungen, Beispiele und Metadaten sprechen Produktions-, Verpackungs-, Logistik- und Automationsbetriebe gleichermassen an.
5. **Übergebbar und wartbar.** Inhalte zentral gepflegt (`lib/site.ts`, `lib/machines.ts`), statisch, ohne laufende Kosten, damit der Kunde die Seite selbst betreiben kann.

## Accessibility & Inclusion

Nutzung häufig mobil in Werkhallen: grosse Touch-Ziele, kontrastreiche Typografie, Inhalte nie von Animationen abhängig (Reduced-Motion und Hintergrund-Tab-Fallbacks), Formularfelder mit Labels, semantisches HTML.
