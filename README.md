# Bastech Betriebe AG – Website

Moderne, mehrseitige Website für die Bastech Betriebe AG (Mehlsecken LU).
Gebaut mit **Next.js 15, Tailwind CSS 4 und Motion** – statisch exportierbar,
läuft damit auf jedem Hosting (Hostpoint, cyon, Metanet, Vercel, Netlify …).

## Befehle

```bash
npm install     # Abhängigkeiten installieren
npm run dev     # Entwicklung: http://localhost:3000
npm run build   # Statischer Export nach ./out
```

Der Inhalt von `./out` kann direkt auf jeden Webspace hochgeladen werden.

## Struktur

| Pfad | Inhalt |
|---|---|
| `app/page.tsx` | Startseite (Hero, Leistungen, Occasionen, FAQ, CTA) |
| `app/leistungen/` | Detailseite aller 5 Leistungen |
| `app/maschinen/` | Occasionsmaschinen + Ersatzteilliste |
| `app/ueber-uns/` | Firmengeschichte, Werte, Standort |
| `app/kontakt/` | Formular, Kontaktdaten, Google-Maps |
| `app/impressum/`, `app/datenschutz/` | Rechtliches (CH-DSG) |
| `lib/site.ts` | **Zentrale Firmendaten** (Telefon, Adresse, E-Mail) |
| `lib/machines.ts` | **Maschinen- und Ersatzteilliste** (hier pflegen) |
| `components/` | Header, Footer, Formular, Karten, Animationen |
| `public/images/` | Fotos (von der bisherigen Website übernommen) |

## Vor dem Livegang (offene Punkte)

- [ ] **Web3Forms-Key**: Auf https://web3forms.com kostenlosen Access-Key für
      `info@bastech.ch` erstellen und in `components/ContactForm.tsx` eintragen.
- [ ] **Adresse bestätigen**: Website sagt „Kreuzmatte 1a, 6260 Mehlsecken“,
      Handelsregister „Beim Kreuz 21, 6262 Langnau b. Reiden“ (Mutation 02/2026).
      Korrekte Adresse in `lib/site.ts` eintragen.
- [ ] **Team-Angaben bestätigen**: Eingebaut sind André Basler (Inhaber, per
      Handelsregister/Moneyhouse: Mitglied mit Einzelunterschrift) und
      Danilo Falzarano (Rolle aktuell „Service & Technik“, Annahme!).
      Schreibweise und Funktionen von beiden bestätigen lassen
      (Über uns, CTA-Karte, Impressum).
- [ ] **Checkliste des Kunden einarbeiten**: Erreichbarkeitszeiten (Kontakt),
      evtl. Teamfotos und weitere Mitarbeitende.
- [ ] **Claims prüfen**: „Rückmeldung unter 24 h“ ist als Versprechen eingebaut,
      mit dem Kunden bestätigen oder anpassen (`app/page.tsx`, `CtaBand.tsx`, Kontakt).
- [ ] **Preise prüfen**: Auf Kundenwunsch in CHF ausgezeichnet; Beträge stammen
      aus der alten Produktliste (dort EUR). Beträge bestätigen lassen
      (`lib/machines.ts`).
- [ ] **WhatsApp bestätigen**: Buttons verlinken auf 079 388 67 68
      (`lib/site.ts`); prüfen, ob diese Nummer WhatsApp Business nutzt.
- [ ] **Domain & DNS**: `bastechbetriebeag.ch` auf neues Hosting zeigen lassen;
      danach Google Search Console verifizieren und `sitemap.xml` einreichen.
- [ ] **Google Business Profile** verknüpfen (Adresse identisch zur Website halten –
      wichtig für lokales SEO).
- [ ] Neue Logins für den Kunden erstellen (Hosting, Web3Forms, Search Console)
      und Zugangsdaten sauber übergeben.

## SEO / GEO

- Individuelle Title/Description pro Seite, OpenGraph, `de_CH`
- JSON-LD: `LocalBusiness` (Layout) + `FAQPage` (Startseite)
- `sitemap.xml` und `robots.txt` werden beim Build generiert
- Semantisches HTML, sprechende Alt-Texte, saubere URL-Struktur mit Trailing Slash
- Kein Tracking → kein Cookie-Banner nötig (Datenschutz einfach halten)

## Design-Grundlagen

- Markenfarbe aus dem bestehenden Logo abgeleitet (Blau, OKLCH)
- Schrift: IBM Plex Sans + IBM Plex Mono (Ingenieurs-Charakter, bewusst kein
  AI-Standard-Font; „bold“ global auf 600 abgeschwächt)
- Animationen: Scroll-Reveals, Clip-Path-Bildreveals, Stagger-Listen,
  Hersteller-Marquee (reines CSS), Nav-Underlines, Akkordeon (Motion) –
  alle mit `prefers-reduced-motion`- und Hintergrund-Tab-Fallback
- Design-Tokens zentral in `app/globals.css` (`@theme`)
- Bewusst ohne Three.js/3D gehalten (Seriosität + Ladezeit); Option für später:
  360°-Ansichten der Occasionsmaschinen
