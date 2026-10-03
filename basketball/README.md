# BasketAG – Website Basketball Arth-Goldau

Neue Website für den Basketballverein von Milos Dzonic und Freunden in
Arth-Goldau, Nachfolger der Basketballschule Arth-Goldau (basketag.ch, seit 2006).
Gebaut mit **Next.js 16 und Tailwind CSS 4**, statisch exportierbar, läuft damit
auf jedem Hosting (Hostpoint, cyon, Infomaniak, Netlify, Vercel …).

Dieses Projekt liegt als eigener Ordner im Repo `bastech-vorschau` und hat
nichts mit der Bastech-Website im Hauptordner zu tun.

## Befehle

```bash
cd basketball
npm install     # Abhängigkeiten installieren
npm run dev     # Entwicklung: http://localhost:3000
npm run build   # Statischer Export nach ./out
```

Den Inhalt von `./out` auf den Webspace von basketag.ch hochladen, fertig.

## Struktur

| Pfad | Inhalt |
|---|---|
| `app/page.tsx` | Onepager: Hero, Anzeigetafel, Verein, 3.05 m, Training, Teams, Mitmachen, FAQ, Kontakt |
| `app/impressum/`, `app/datenschutz/` | Rechtliches (CH-DSG) |
| `lib/club.ts` | **Alle Vereinsdaten**: Name, Kontakt, Halle, Trainingszeiten, Teams, Geschichte, FAQ |
| `components/Court.tsx` | Spielfeld im Hero, nach FIBA-Massen gezeichnet |
| `components/ContactForm.tsx` | Probetraining-Formular (Web3Forms) |
| `PRODUCT.md`, `DESIGN.md` | Produkt- und Designgrundlagen (impeccable-Format) |

## Vor dem Livegang mit Milos klären

Die alte Seite basketag.ch war beim Bau nicht erreichbar. Inhalte stammen aus
öffentlichen Quellen (Gemeinde Arth, Swiss Central Basketball, Basketplan).
Alles Folgende ist in `lib/club.ts` mit `BESTÄTIGEN` markiert:

- [ ] **Vereinsname**: Arbeitsname „BasketAG / Basketball Arth-Goldau“. Echten Namen eintragen.
- [ ] **Vereinsfarben und Logo**: Aktuell Schwyzer Rot mit gezeichnetem Ball. Falls es ein Logo gibt, als SVG liefern.
- [ ] **Kontakt**: Telefon 076 348 46 89, dzonic@bluewin.ch und Gotthardstrasse 33e, Oberarth stammen von der Basketballschule. Für den neuen Verein bestätigen (wer ist Ansprechperson?).
- [ ] **Trainingszeiten**: Belegt ist nur „Samstagmorgen, Sonnegg-Halle“. Die genauen Zeiten, Gruppen und die Dienstag/Donnerstag-Trainings sind Annahmen.
- [ ] **Teams**: Kids, Jugend (U14/U16), Aktive (Herren), Plausch sind Annahmen. Liga und Altersgrenzen bestätigen.
- [ ] **Zusagen**: „Probetraining gratis, zwei- bis dreimal“, „keine Trainings in den Schulferien“, Fakten zur Lizenz bestätigen.
- [ ] **Geschichte**: Milos’ Werdegang (Swiss Central Basketball, NLB) und Ivans Auszeichnung 2010 gegenlesen lassen.
- [ ] **Hallenadresse**: Genaue Adresse der Sonnegg-Halle.
- [ ] **Fotos**: Echte Bilder aus Training und Spiel, mit Einverständnis der Eltern.
- [ ] **Web3Forms-Key** in `components/ContactForm.tsx` eintragen (gratis auf web3forms.com).
- [ ] **Instagram/Facebook** des neuen Vereins in `lib/club.ts` ergänzen.
- [ ] **Domain**: basketag.ch auf das neue Hosting zeigen lassen, danach Sitemap bei der Google Search Console einreichen.

## Technik und Qualität

- Onepager mit Ankern, plus Impressum und Datenschutz. Funktioniert ohne JavaScript
  (Menü und FAQ sind native `<details>`), nur das Formular braucht JS.
- Scroll-Animationen rein in CSS (`animation-timeline: view()`), Inhalte bleiben
  in älteren Browsern und bei „Bewegung reduzieren“ einfach stehen.
- Schriften lokal eingebunden (Big Shoulders Display, Familjen Grotesk), keine
  Google-Fonts-Anfrage, kein Tracking, kein Cookie-Banner.
- SEO: `SportsClub`- und `FAQPage`-JSON-LD, `de_CH`, Sitemap und robots.txt beim Build.
- Handy: Daumenleiste mit „Anrufen“ und „Probetraining anfragen“.
