export type Machine = {
  slug: string;
  name: string;
  category: string;
  year?: string;
  price?: string;
  note?: string;
  image?: string;
  featured?: boolean;
};

export const machines: Machine[] = [
  {
    slug: "tanner-us-2000-ad",
    name: "Tanner US-2000 AD",
    category: "Banderoliermaschine",
    year: "2017",
    price: "CHF 3'500.– VB",
    note: "Geprüft und einsatzbereit, mit ATS-Bedienpanel.",
    image: "/images/maschine-3.jpeg",
    featured: true,
  },
  {
    slug: "tanner-us-2000-lb",
    name: "Tanner US-2000 LB",
    category: "Banderoliermaschine",
    price: "CHF 2'000.– VB",
    note: "Drei Einheiten verfügbar, Ultraschall-Verschluss.",
    image: "/images/maschine-6.jpeg",
    featured: true,
  },
  {
    slug: "tanner-us-2000-ab",
    name: "Tanner US-2000 AB",
    category: "Banderoliermaschine",
    price: "CHF 3'000.–",
    note: "Fahrbares Untergestell, sofort verfügbar.",
    image: "/images/maschine-4.jpeg",
  },
  {
    slug: "strapex-smg-10",
    name: "Strapex SMG 10",
    category: "Umreifungsautomat",
    price: "Preis auf Anfrage",
    note: "Hochwertig überarbeitet, Swiss Made.",
    image: "/images/maschine-8.jpeg",
    featured: true,
  },
  {
    slug: "mosca-ro-m",
    name: "Mosca RO-M-P2 / RO-M-P4",
    category: "Umreifungsmaschine",
    price: "Preis auf Anfrage",
    note: "Zwei Ausführungen verfügbar, geprüft.",
    image: "/images/maschine-10.jpeg",
    featured: true,
  },
  {
    slug: "stenz-feeder",
    name: "Stenz Feeder",
    category: "Kuvertanleger",
    price: "Preis auf Anfrage",
    note: "Inklusive Auslageband, betriebsbereit.",
    image: "/images/maschine-5.jpeg",
  },
  {
    slug: "mbo-z2",
    name: "MBO Z2",
    category: "Falzmaschine",
    price: "CHF 3'000.– VB",
  },
  {
    slug: "technotrans-gamma-d",
    name: "Technotrans gamma.d 80L",
    category: "Feuchtmittelgerät",
    year: "2019",
    price: "CHF 12'000.– VB",
  },
];

export type PartGroup = {
  title: string;
  items: { name: string; price?: string }[];
};

export const parts: PartGroup[] = [
  {
    title: "Falz- und Weiterverarbeitung",
    items: [
      { name: "Egalisier-Fräskopf Müller Martini 2014.5519.2", price: "CHF 1'500.– VB" },
      { name: "Messer Müller Martini 0440.1689.2", price: "CHF 1'800.– VB" },
      { name: "Heidolph 681.211.030310", price: "CHF 750.–" },
      { name: "Laserzählköpfe Baumer", price: "CHF 1'000.– VB" },
    ],
  },
  {
    title: "Antriebstechnik & Motoren",
    items: [
      { name: "SEW Eurodrive MC07A008-2B1-4-00", price: "CHF 500.– VB" },
      { name: "Motor Siemens 1PH7107", price: "CHF 3'000.– VB" },
      { name: "Elektromotor SA S.56.S4.7061", price: "CHF 30.– VB" },
    ],
  },
  {
    title: "Verdichter & Pumpen",
    items: [
      { name: "Becker T 4.40 DSK (2007)", price: "CHF 1'200.– VB" },
      { name: "Becker VT 4.25 (2013)", price: "CHF 1'000.– VB" },
      { name: "Becker DT 4.4 (2 Stück)", price: "CHF 600.–" },
      { name: "Rietschle VLT 10 (2 Stück)", price: "CHF 400.– VB" },
      { name: "Rietschle SAP 90 (2004)", price: "CHF 180.– VB" },
    ],
  },
  {
    title: "Elektrotechnik & Steuerung",
    items: [
      { name: "Frequenzumrichter Lenze / KEB", price: "CHF 300.– bis 500.– VB" },
      { name: "Motorenstarter Siemens SIRIUS 3RW3027", price: "CHF 300.– VB" },
      { name: "Soft Starter Allen-Bradley 150-C30NBD", price: "CHF 400.– VB" },
      { name: "Siemens Bildschirme", price: "CHF 2'000.– VB" },
      { name: "Lauer EPC-GX 640tc", price: "CHF 650.– VB" },
    ],
  },
  {
    title: "Ersatzteile & Zubehör",
    items: [
      { name: "Ionisationssysteme Haug", price: "CHF 100.– bis 400.– VB" },
      { name: "Heizungen und Heizpatronen", price: "CHF 100.– bis 700.– VB" },
      { name: "SKF-Lager, Steuermodule und Regler", price: "auf Anfrage" },
    ],
  },
];
