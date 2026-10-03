---
name: BasketAG
description: Hallenboden bei Tageslicht. Kreideweiss, Ahorn-Parkett, Schwyzer Rot, Anzeigetafel.
colors:
  kreide: "oklch(98.4% 0.003 90)"
  fläche: "oklch(95.6% 0.007 80)"
  tinte: "oklch(20.5% 0.018 262)"
  tinte-weich: "oklch(42% 0.018 262)"
  linie: "oklch(88.5% 0.01 80)"
  schwyzer-rot: "oklch(53% 0.2 27)"
  rot-tief: "oklch(42% 0.165 27)"
  ahorn: "oklch(82% 0.07 72)"
  tafel: "oklch(17% 0.014 262)"
  led: "oklch(84% 0.14 78)"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontWeight: 800
    lineHeight: 0.92
    textTransform: uppercase
  body:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "1rem–1.125rem"
    lineHeight: 1.65
  eyebrow:
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.14em"
    textTransform: uppercase
rounded:
  card: "16px"
  button: "9999px"
---

# Design System: BasketAG

## Idee

Die Seite ist die Sonnegg-Halle. Kreideweisser Grund wie die Hallenwand, Ahorn-Parkett als Material, Linien und Zone in Schwyzer Rot (Kantonsfarbe), Zahlen in LED-Gelb auf schwarzer Anzeigetafel. Rot heisst: Hier wird gespielt, also geklickt.

## Signatur-Elemente

- **Spielfeld im Hero** (`components/Court.tsx`): halbes Feld nach FIBA-Mass (1 Einheit = 1 cm), schräg als Hallenboden gestellt. Linien werden beim Laden einmal gezogen, der Ball springt auf die Freiwurflinie.
- **Anzeigetafel** unter dem Hero und im Trainingsplan: Big Shoulders in LED-Gelb, tabellarische Ziffern.
- **3.05 m** auf Parkett: das einzige Mass, das für alle gleich ist, als Haltung des Vereins.

## Typografie

Big Shoulders Display (schmal, laut, Hallen- und Stadionbeschriftung) nur für Titel, Zahlen und Labels der Anzeigetafel. Familjen Grotesk für allen Fliesstext. Eyebrows in Grossbuchstaben mit 0.14em Sperrung.

## Bewegung

Eine orchestrierte Szene (Spielfeld und Ball im Hero), sonst nur sanfte Scroll-Reveals in reinem CSS. Alles respektiert `prefers-reduced-motion`; ohne Unterstützung steht der Inhalt einfach da.

## Nicht tun

Keine Stockfotos von NBA-Arenen, keine Orange-Schwarz-Klischees, keine Emojis, keine Glas-Effekte, keine erfundenen Erfolge.
