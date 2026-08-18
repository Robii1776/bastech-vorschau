---
name: Bastech Betriebe AG
description: Werkstatt-Visitenkarte für Maschinenservice und Handel, handfest, verbindlich, präzise
colors:
  bastech-blau: "oklch(45% 0.088 253)"
  nachtblau: "oklch(29% 0.058 255)"
  himmelblau: "oklch(80% 0.05 250)"
  blauton: "oklch(93.5% 0.018 250)"
  stahlgrau: "oklch(23% 0.025 255)"
  stahlgrau-weich: "oklch(42% 0.02 255)"
  linie: "oklch(89% 0.008 250)"
  papier: "oklch(98.6% 0.002 247)"
  fläche: "oklch(96.2% 0.005 247)"
  weiss-auf-blau: "oklch(98% 0.005 250)"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 122"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 122"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  numeric:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.3
    fontFeature: "'tnum'"
rounded:
  sm: "6px"
  md: "8px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "48px"
  section: "80px"
  section-lg: "96px"
components:
  button-primary:
    backgroundColor: "{colors.bastech-blau}"
    textColor: "{colors.weiss-auf-blau}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.nachtblau}"
    textColor: "{colors.weiss-auf-blau}"
  button-inverse:
    backgroundColor: "#ffffff"
    textColor: "{colors.nachtblau}"
    rounded: "{rounded.sm}"
    padding: "14px 20px"
  button-ghost:
    backgroundColor: "#ffffff"
    textColor: "{colors.stahlgrau}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-ghost-hover:
    textColor: "{colors.bastech-blau}"
  chip:
    backgroundColor: "#ffffff"
    textColor: "{colors.stahlgrau}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  chip-hover:
    textColor: "{colors.bastech-blau}"
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.stahlgrau}"
    rounded: "{rounded.md}"
    padding: "20px"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.stahlgrau}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  band-dark:
    backgroundColor: "{colors.nachtblau}"
    textColor: "{colors.weiss-auf-blau}"
    padding: "64px 20px"
---

# Design System: Bastech Betriebe AG

## Overview

**Creative North Star: "Die Werkstatt-Visitenkarte"**

Das System verhält sich wie ein sauber gefrästes Typenschild an einer Maschine: eine Grundfarbe, eine Schrift, keine Verzierung, und alles, was darauf steht, ist überprüfbar. Der Auftritt eines Zwei-Personen-Betriebs, der Industriemaschinen am Laufen hält, muss handfest wirken, nicht wie ein Software-Startup. Deshalb tragen die Titel Gewicht und Breite statt Eleganz, Zahlen laufen tabellarisch wie in einem Katalog, und die Menschen (André, Danilo) sind das prominenteste Bildmotiv, weil sie das eigentliche Produkt sind.

Farblich lebt das System von einer einzigen Familie: dem Bastech-Blau aus dem Logo. Es taucht als tiefe Nachtblau-Fläche im Hero und in den Abschluss-Bändern auf (Committed-Strategie: eine gesättigte Farbe trägt 30–40 % der Fläche), als Aktionsfarbe auf Buttons und Links, und als Himmelblau-Akzent in Titeln auf dunklem Grund. Alles andere ist ein kühl getöntes Neutralraster von Papier über Fläche bis Stahlgrau. Es gibt keine zweite Farbe, keine Verläufe, keine Glas-Effekte.

Dichte: mittel. Grosszügige Sektionsabstände, aber Inhalte kompakt gesetzt, mit Listen und Trennlinien statt Kartengittern. Bewegung ist bewusst und sparsam: Reveals beim Scrollen, ein langsam laufendes Herstellerband, ein Umriss-Textband, sonst nichts. Alle Bewegung respektiert Reduced-Motion und funktioniert in Hintergrund-Tabs.

**Key Characteristics:**
- Eine Schriftfamilie (Archivo Variable), Kontrast über die Breitenachse statt über Schriftmischung
- Eine Markenfarbe in drei Rollen: Nachtblau-Flächen, Bastech-Blau-Aktionen, Himmelblau-Akzent
- Kühl getönte Neutrale, kein Cremeton, kein reines Schwarz
- Echte Menschen und echte Maschinen; Duotone nur für Stimmungsbilder, Echtfarbe für Ware und Porträts
- Flache Flächen, Schatten nur als Reaktion oder für schwebende Elemente
- Saubere Linien-Icons (Feather-Stil), keine Unicode-Pfeile, keine Emojis
- Keine Gedankenstriche im Fliesstext, Schweizer Schreibweise (ss, `CHF 3'500.–`)

## Colors

Eine Blaufamilie aus dem Logo, umgeben von kühl getönten Neutralen; die Sättigung sitzt in Flächen und Aktionen, nie in Text-Dekor.

### Primary
- **Bastech-Blau** (oklch(45% 0.088 253), ≈ #2f5785): Die Aktionsfarbe. Primäre Buttons, Textlinks, Icon-Farbe in der mobilen Leiste und im Assistenten, Fokusring, Nav-Underline. Aus dem Signet abgeleitet und bindend.
- **Nachtblau** (oklch(29% 0.058 255), ≈ #162c48): Die Markenfläche. Hero-Hintergrund, Abschluss-Band (CTA), Footer, Assistenten-Kopf. Auch Hover-Zustand des primären Buttons und Text auf Blauton-Flächen.
- **Himmelblau** (oklch(80% 0.05 250), ≈ #a6c1dd): Der Akzent auf dunklem Grund. Zweiter Satzteil der Hero-Headline, Textlink im Hero. Nie auf hellem Grund verwenden (zu wenig Kontrast).
- **Blauton** (oklch(93.5% 0.018 250), ≈ #e1ebf5): Getönte Hintergrundfläche für Erfolgsmeldungen und Hervorhebungen; darauf steht Nachtblau-Text.

### Neutral
- **Stahlgrau** (oklch(23% 0.025 255), ≈ #151e29): Fliesstext, Titel, Icons auf hellem Grund. Kein reines Schwarz.
- **Stahlgrau weich** (oklch(42% 0.02 255), ≈ #464e58): Sekundärtext, Bildunterschriften, Labels, Rollen unter Namen. Bewusst dunkel genug für 4.5:1 auf Papier.
- **Linie** (oklch(89% 0.008 250), ≈ #d7dbe0): Trennlinien, Rahmen von Karten, Inputs und Ghost-Buttons.
- **Papier** (oklch(98.6% 0.002 247), ≈ #f9fafc): Seitenhintergrund und Header.
- **Fläche** (oklch(96.2% 0.005 247), ≈ #f0f3f6): Wechselnde Sektionshintergründe, Bot-Sprechblasen, Bild-Platzhalter.
- **Weiss auf Blau** (oklch(98% 0.005 250), ≈ #f6f9fc): Text und Buttons auf Nachtblau; mit Alpha-Stufen 85/70/60/55 für Hierarchie auf dunklem Grund.

### Named Rules
**Die Eine-Familie-Regel.** Es gibt genau eine Buntfarbe. Jede neue Fläche, jeder neue Zustand wird aus Bastech-Blau, Nachtblau, Himmelblau oder Blauton gebaut, oder aus dem Neutralraster. Eine zweite Farbe (Grün für Erfolg, Rot für Fehler) ist nur in Formular-Feedback erlaubt und bleibt dort.

**Die Fläche-trägt-Regel.** Sättigung sitzt in grossen Flächen (Hero, Bänder, Footer) und in Aktionen. Sie sitzt nie in Verläufen, Textverläufen, farbigen Seitenstreifen oder Glas-Effekten.

## Typography

**Display Font:** Archivo Variable (mit system-ui, sans-serif), Breitenachse `wdth` 122 %
**Body Font:** Archivo Variable, Breitenachse normal (100 %)
**Label/Numeric:** Archivo Variable mit tabellarischen Ziffern (`font-variant-numeric: tabular-nums`)

**Character:** Eine einzige Familie, deren Persönlichkeit aus der Breitenachse kommt: Titel breit und schwer wie eine gefräste Beschriftung, Fliesstext normalbreit und ruhig. Keine Monospace für Zahlen (das war der stärkste KI-Marker); Preise und Nummern stehen tabellarisch in der Hausschrift wie in einem gedruckten Katalog. `bold` ist global auf 600 gesetzt, damit fette Auszeichnungen präzise statt marktschreierisch wirken.

### Hierarchy
- **Display** (800, clamp 3–4.5rem, 1.02, `wdth` 122, −0.01em): Nur die Hero-Headline. Zweiter Satzteil in Himmelblau als Betonung.
- **Headline** (800, 1.875–2.25rem, 1.02, `wdth` 122): Sektionstitel (h2). Maximalbreite 18–24ch, `text-wrap: balance`.
- **Title** (700, 1.125–1.25rem, 1.25, `wdth` 112): Kartentitel, Leistungszeilen, Zwischentitel (h3), Personennamen.
- **Body** (400, 15–17px, 1.65): Fliesstext, maximal 52–64ch. Sekundärtext in Stahlgrau weich.
- **Label** (600, 12–14px): Rollen, Kicker, Bildunterschriften, Chip-Text, Button-Beschriftung. Kein Uppercase-Tracking als Sektionsauftakt; Uppercase nur für Kategoriezeilen in Karten und Footer-Spaltentitel.
- **Numeric** (700, tabellarisch): Telefonnummern, Preise, Jahreszahlen, UID.

### Named Rules
**Die Breiten-Regel.** Hierarchie entsteht durch Breite und Gewicht der Archivo, nie durch eine zweite Schriftfamilie. Wer eine Monospace oder Serife einführen will, verlässt das System.

**Die Ziffern-Regel.** Alles, was gezählt oder gewählt wird (Telefon, CHF, Baujahr), steht tabellarisch und fett genug, um auf dem Handy in der Werkhalle lesbar zu sein.

## Layout

Zentrierter Container mit 1320px Maximalbreite, seitlich 20px (mobil) bzw. 32px (ab sm) Aussenabstand. Header fixiert, 80px hoch, voll deckend in Papier ohne Backdrop-Blur (der Blur machte das mobile Menü unsichtbar; er bleibt draussen). Sektionen wechseln zwischen Papier und Fläche, getrennt durch Linie; Rhythmus vertikal 80px (mobil) bis 96px (Desktop).

Layout-Grammatik: asymmetrische Zwei-Spalten-Grids (1.15fr/1fr, 1.2fr/1fr, 1.5fr/1fr) statt symmetrischer Hälften. Listen mit Trennlinien (`divide-y`) statt Kartengitter, wo Inhalte gleichrangig sind. Karten nur für Occasionsmaschinen (Ware) und Referenz-Beispiele. Vier-Spalten-Grid für Prozessschritte, drei Spalten für Werte, zwei für Fakten und Formularfelder.

Responsive: unter `lg` (1024px) fällt jedes Grid auf eine Spalte, Bilder wandern unter den Text; unter `sm` (640px) werden auch Zwei-Spalten-Formularfelder gestapelt. Mobil kommt eine fixierte Aktionsleiste unten hinzu (vier Spalten: André, Danilo, WhatsApp, Anfrage), der Assistent sitzt darüber. Touch-Ziele mindestens 44px.

## Elevation & Depth

Das System ist flach. Tiefe entsteht über Flächenwechsel (Papier/Fläche/Nachtblau) und Linien, nicht über Schatten. Schatten erscheinen nur als Reaktion oder für Elemente, die tatsächlich über der Seite schweben.

### Shadow Vocabulary
- **Karten-Hover** (`0 8px 24px -12px rgba(20,40,70,0.25)`): Occasionskarten bei Hover, sonst randlos-flach mit Linie.
- **Hero-Bild** (`0 32px 80px -32px rgba(5,15,35,0.8)`): Einmalig unter dem Duotone-Bild im Hero, damit es aus der Nachtblau-Fläche tritt.
- **Schwebend** (`0 24px 64px -24px rgba(15,30,50,0.45)`): Assistenten-Panel; Assistenten-Button `0 8px 24px -8px rgba(15,30,50,0.5)`.
- **Header-Scroll** (`0 1px 8px rgba(15,30,50,0.06)`): Nur nach dem ersten Scroll, um den fixen Header von der Seite zu lösen.
- **Bild-Info-Karte** (`0 8px 24px -12px rgba(5,15,35,0.5)`): Halbtransparente weisse Karte auf dem Hero-Bild.

### Named Rules
**Die Reaktions-Regel.** Ruhezustand ist flach. Ein Schatten braucht einen Grund: Hover, Schweben über der Seite oder das eine Hero-Bild. Kein Schatten auf Sektionen, Bändern, Buttons oder Inputs.

## Shapes

Kleine, konsequente Radien: 6px für Buttons, Inputs und Info-Karten, 8px für Bilder und Karten, Vollrund nur für Chips, Avatare, den Assistenten-Button und den Verfügbarkeits-Link. Nichts über 8px auf Flächen. Rahmen sind 1px Linie; Ghost-Buttons und Inputs bekommen bei Hover/Fokus Bastech-Blau als Rahmen. Der Assistenten-Sprechblasen-Stil bricht eine Ecke auf 2px (oben links beim Bot, oben rechts beim Nutzer). Bilder in Rahmen mit `overflow: hidden` und Fläche als Platzhalter; Duotone-Bilder liegen auf Nachtblau mit `mix-blend-mode: luminosity`.

## Components

### Buttons
Tastbar und ruhig: kein Glow, kein Verlauf, Rückmeldung über Farbe und einen minimalen Druck.
- **Shape:** Leicht gerundet (6px), Padding 16px/28px, Label 600 in 15–16px.
- **Primary:** Bastech-Blau mit Weiss auf Blau; Hover Nachtblau. Aktion „Service anfragen", Formular senden, Assistent senden.
- **Inverse (auf Nachtblau):** Weiss mit Nachtblau-Text; für die zwei Telefon-Buttons im Hero und im CTA-Band. Zweizeilig: Label „André · Inhaber" in Bastech-Blau 12px 600, darunter Nummer tabellarisch 16px 700, links Telefon-Icon.
- **Ghost:** Weiss mit Linie-Rahmen; Hover Rahmen und Text Bastech-Blau. Auf Nachtblau: transparenter Rahmen `on-brand/30`, Hover `/70`.
- **Press:** Alle Buttons `scale(0.97)` bei `:active`, 160ms starkes Ease-out.
- **Focus:** 2px Bastech-Blau-Outline mit 2px Offset (`:focus-visible`).

### Chips
- **Style:** Weiss, Linie-Rahmen, Vollrund, 13px 600, Padding 6px/14px.
- **State:** Hover Rahmen und Text Bastech-Blau. Verwendet für Leistungs-Sprungmarken, Assistenten-Themen und Kompetenzen; nicht für Status.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** Weiss auf Papier/Fläche; Bild oben in 4:3, darunter 20px Innenabstand.
- **Shadow Strategy:** Flach mit Linie-Rahmen; Karten-Hover-Schatten nur bei Hover.
- **Border:** 1px Linie.
- **Inhalt:** Kategoriezeile uppercase 12px, Titel 700 18px, Notiz 14px, unten Preis tabellarisch links und „Anfragen" mit Pfeil-Icon rechts.

### Inputs / Fields
- **Style:** Weiss, 1px Linie, 6px Radius, Padding 12px/16px, 15px Text; Label 14px 600 oberhalb, Abstand 8px.
- **Focus:** Rahmen wechselt auf Bastech-Blau, kein Outline zusätzlich.
- **Error:** Rote Meldungsfläche unter dem Formular (einzige Fremdfarbe), Erfolg als Blauton-Fläche mit Nachtblau-Titel.

### Navigation
- **Desktop:** Fixer Papier-Header, Logo-Signet 44px hoch plus Wortmarke 17px 700 und Untertitel 11px. Links 15px 500 in Stahlgrau; aktiver Link Bastech-Blau mit 2px Unterstrich (Motion `layoutId`), inaktive Links mit wachsendem 2px-Unterstrich in Bastech-Blau/75 bei Hover (nur `hover: hover`). Rechts zwei gestapelte Kontaktzeilen „André 079 388 67 68" 13px und primärer Button.
- **Mobile:** Burger mit drei Balken, wird zum X. Overlay in Papier unter dem Header, Menüpunkte 24px 600 mit Linie darunter, unten beide Kontakte (Label + Nummer) und primärer Button. Bewusst ohne Einblend-Animation.
- **Mobile Aktionsleiste:** Fix unten, weiss, Linie oben, vier Spalten mit Icon 18px und Label 12px 600 in Bastech-Blau, `safe-area-inset-bottom` berücksichtigt.

### Herstellerband (Signatur)
Weisse Leiste unter dem Hero mit „Vertraut mit" und einem endlos laufenden Band echter Herstellerlogos (Höhe 18–30px je Logo, Graustufen 60 % Deckung, Hover farbig 100 %). Reines CSS: 46s linear, pausiert bei Hover, links/rechts per Maske ausgeblendet, bei Reduced-Motion statisch. Es belegt Fachbreite ohne Prosa.

### Kinetisches Textband (Signatur)
Umriss-Typo in Archivo 800 `wdth` 125, clamp 3–5.5rem, Farbe transparent mit 1.5px Kontur in Bastech-Blau/38, läuft 70s linear zwischen Sektionen („Service · Revision · Reparatur · Ersatzteile · Occasionen"). Dekorativ, `aria-hidden`, statisch bei Reduced-Motion.

### Nachtblau-Band (Signatur)
Wiederkehrende Vollflächen in Nachtblau: Hero und Abschluss-Band. Titel weiss, Sekundärtext Weiss/75, Sekundärlabels Weiss/60. Immer mit beiden Telefon-Buttons (Inverse) und einem Ghost-Button. Im Abschluss-Band rechts die zwei Porträts nebeneinander in 4:5, Namen 700, Rolle 13px Weiss/60.

### Service-Assistent
Schwebender Bastech-Blau-Button (56px, vollrund) unten rechts, über der mobilen Leiste. Panel 380px breit, 8px Radius, Nachtblau-Kopf, Fläche-Sprechblasen für den Bot, Bastech-Blau-Sprechblasen für Nutzer, Chips und Aktions-Buttons wie oben. Fusszeile in Fläche mit Hinweis „Automatischer Assistent ohne KI".

## Do's and Don'ts

### Do:
- **Do** jede neue Fläche aus Papier, Fläche oder Nachtblau bauen und mit 1px Linie trennen; Sektionsabstand 80–96px.
- **Do** Titel in Archivo 800 mit `wdth` 122 setzen, Fliesstext in 400 normalbreit, Zahlen tabellarisch und fett.
- **Do** beide Ansprechpartner mit Name, Rolle und Nummer zeigen, wo eine Kontaktaufnahme möglich ist (Hero, CTA-Band, Kontakt, Footer, mobile Leiste, Assistent).
- **Do** Feather-Linien-Icons aus `components/Icons.tsx` verwenden (Strichstärke 1.8–2), Grösse 14–20px, Farbe erbt vom Text.
- **Do** Duotone (`.duotone`) nur für Stimmungsbilder auf Nachtblau; Occasionsmaschinen und Porträts in Echtfarbe.
- **Do** Reveals so bauen, dass Server-HTML sichtbar ist und die Animation erst nach Hydration und nur in sichtbaren Tabs startet.
- **Do** Schweizer Schreibweise: ss statt ß, `CHF 3'500.–`, Kommas und Punkte statt Gedankenstriche.

### Don't:
- **Don't** eine zweite Schriftfamilie, Monospace-Zahlen oder Uppercase-Tracking-Kicker über Sektionen einführen.
- **Don't** Verläufe, Textverläufe, Glas-Effekte, farbige Seitenstreifen oder Neon-Glows verwenden.
- **Don't** Unicode-Pfeile („→"), Emojis oder Ping-Punkte als Symbole setzen.
- **Don't** Radien über 8px auf Karten, Bildern oder Sektionen; Vollrund nur für Chips, Avatare und den Assistenten-Button.
- **Don't** Backdrop-Blur auf dem fixen Header (kollabiert das mobile Menü) und keine Inhalte, deren Sichtbarkeit von JavaScript-Animationen abhängt.
- **Don't** Schatten im Ruhezustand auf Sektionen, Bändern, Buttons oder Inputs.
- **Don't** Referenzen, Bewertungen, Zertifikate oder Kundenzahlen darstellen, die nicht in PRODUCT.md als vorhanden geführt sind.
