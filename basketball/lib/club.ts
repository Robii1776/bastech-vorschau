/**
 * Zentrale Vereinsdaten. Alles, was sich ändert (Name, Kontakte,
 * Trainingszeiten, Teams), wird nur hier gepflegt.
 *
 * TODO Übergabe: Alle mit "BESTÄTIGEN" markierten Werte sind Annahmen
 * aus der alten Website (basketag.ch) und öffentlichen Quellen. Vor dem
 * Livegang mit Milos durchgehen.
 */
export const club = {
  // BESTÄTIGEN: offizieller Name des neuen Vereins
  name: "BasketAG",
  fullName: "Basketball Arth-Goldau",
  claim: "Basketball in Goldau, für alle ab 6 Jahren",
  url: "https://www.basketag.ch",
  founded: "2026",
  roots: "2006",
  place: "Goldau",
  region: "Arth-Goldau, Kanton Schwyz",
  hall: {
    name: "Sonnegg-Halle",
    // BESTÄTIGEN: genaue Hallenadresse
    address: "Schulanlage Sonnegg, 6410 Goldau",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=Schulhaus+Sonnegg+Goldau",
  },
  // BESTÄTIGEN: Kontaktperson, Nummer und Adresse des neuen Vereins
  // (aktuell die Angaben der Basketballschule Arth-Goldau)
  contact: {
    name: "Milos Dzonic",
    role: "Mitgründer, Spieler und Trainer",
    phone: "076 348 46 89",
    phoneHref: "tel:+41763484689",
    whatsapp: "https://wa.me/41763484689",
    email: "dzonic@bluewin.ch",
  },
  address: {
    street: "Gotthardstrasse 33e",
    zip: "6414",
    city: "Oberarth",
    canton: "SZ",
  },
  // BESTÄTIGEN: Social-Media-Kanäle des neuen Vereins
  instagram: "",
} as const;

export const nav = [
  { href: "/#verein", label: "Verein" },
  { href: "/#training", label: "Training" },
  { href: "/#teams", label: "Teams" },
  { href: "/#mitmachen", label: "Mitmachen" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export type Session = {
  day: string;
  time: string;
  group: string;
  ages: string;
};

// Samstagmorgen in der Sonnegg-Halle ist von der alten Website belegt.
// BESTÄTIGEN: alle Zeiten und Gruppen
export const sessions: Session[] = [
  { day: "Samstag", time: "09.00–10.30", group: "Kids", ages: "6–11 Jahre" },
  { day: "Samstag", time: "10.30–12.00", group: "Jugend", ages: "12–17 Jahre" },
  { day: "Dienstag", time: "19.30–21.00", group: "Aktive", ages: "ab 16 Jahren" },
  { day: "Donnerstag", time: "19.30–21.00", group: "Aktive", ages: "ab 16 Jahren" },
];

export type Team = {
  name: string;
  ages: string;
  text: string;
  position: string;
};

// BESTÄTIGEN: Teams und Ligazugehörigkeit
export const teams: Team[] = [
  {
    name: "Kids",
    ages: "6–11",
    position: "Mini",
    text: "Dribbeln, passen, werfen auf den tiefen Korb. Viel Spiel, wenig Warten in der Reihe. Wer mag, spielt an Mini-Turnieren in der Zentralschweiz.",
  },
  {
    name: "Jugend",
    ages: "12–17",
    position: "U14 · U16",
    text: "Technik, Spielverständnis und Teamtaktik auf dem grossen Feld. Ziel ist der Einstieg in die regionale Nachwuchsmeisterschaft.",
  },
  {
    name: "Aktive",
    ages: "16+",
    position: "Herren",
    text: "Das Team der Gründer. Zwei Abende pro Woche, Meisterschaft im Regionalverband. Neue Spielerinnen und Spieler mit Erfahrung sind willkommen.",
  },
  {
    name: "Plausch",
    ages: "18+",
    position: "Offen",
    text: "Für alle, die früher gespielt haben oder einfach Lust auf ein gutes Spiel haben. Kein Ligabetrieb, kein Druck.",
  },
];

export const milestones = [
  {
    year: "2006",
    title: "Die Basketballschule startet",
    text: "Ivan Dzonic gründet die Basketballschule Arth-Goldau. Trainiert wird am Samstagmorgen in der Sonnegg-Halle, offen für alle Kinder aus der Region.",
  },
  {
    year: "2009",
    title: "Teil der Zentralschweiz",
    text: "Swiss Central Basketball entsteht als Leistungszentrum der Region, Goldau ist als Partnerverein dabei. Spieler aus der Sonnegg-Halle gehen diesen Weg bis in die Nationalliga B, darunter Milos Dzonic als Aufbauspieler.",
  },
  {
    year: "2010",
    title: "Sportförderer des Jahres",
    text: "Die Gemeinde Arth zeichnet Ivan Dzonic als Sportförderer des Jahres aus, für den Aufbau der Teams und für die Arbeit mit jungen Menschen aus allen Herkunftsländern.",
  },
  {
    year: "2026",
    title: "Der neue Verein",
    text: "Milos und Freunde, die selbst in dieser Halle gross geworden sind, gründen den Verein neu. Gleiche Halle, neue Generation.",
  },
] as const;

export const faqs = [
  {
    q: "Muss ich schon Basketball spielen können?",
    a: "Nein. Die meisten Kinder fangen bei uns ohne Vorkenntnisse an. Auch bei den Aktiven und im Plausch finden Einsteiger ihren Platz.",
  },
  {
    q: "Was kostet ein Probetraining?",
    a: "Nichts. Du kannst zwei- bis dreimal mittrainieren, bevor du dich entscheidest. Melde dich vorher kurz, damit wir mit dir rechnen.",
  },
  {
    q: "Was muss ich mitbringen?",
    a: "Hallenschuhe mit heller Sohle, Sportkleidung und eine Trinkflasche. Bälle haben wir.",
  },
  {
    q: "Wie hoch ist der Mitgliederbeitrag?",
    a: "Die Beiträge legt die Gründungsversammlung fest. Sie werden für Kinder und Jugendliche bewusst tief gehalten. Frag uns gerne direkt.",
  },
  {
    q: "Brauche ich eine Lizenz?",
    a: "Für Trainings nicht. Wer Meisterschaft spielt, bekommt über den Verein eine Spielerlizenz bei Swiss Basketball. Das erledigen wir für dich.",
  },
  {
    q: "Können Eltern zuschauen?",
    a: "Ja, die Tribüne ist offen. Wir freuen uns auch über Eltern, die beim Fahren an Turniere oder beim Kuchenstand mithelfen.",
  },
] as const;
