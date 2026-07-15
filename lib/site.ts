export const site = {
  name: "Bastech Betriebe AG",
  claim: "Technische Dienstleistung und Handel für die Industrie",
  url: "https://bastechbetriebeag.ch",
  phone: "079 388 67 68",
  phoneHref: "tel:+41793886768",
  phone2: "079 919 17 29",
  phone2Href: "tel:+41799191729",
  // TODO Übergabe: Zuordnung der Nummern zu André/Danilo bestätigen lassen
  contacts: [
    {
      name: "André Basler",
      short: "André",
      role: "Inhaber",
      phone: "079 388 67 68",
      href: "tel:+41793886768",
    },
    {
      name: "Danilo Falzarano",
      short: "Danilo",
      role: "Service & Technik",
      phone: "079 919 17 29",
      href: "tel:+41799191729",
    },
  ],
  email: "info@bastech.ch",
  whatsapp: "https://wa.me/41793886768",
  // TODO Übergabe: Adresse mit Handelsregister abgleichen
  // (HR-Eintrag: Beim Kreuz 21, 6262 Langnau b. Reiden / Website: Kreuzmatte 1a, 6260 Mehlsecken)
  address: {
    street: "Kreuzmatte 1a",
    zip: "6260",
    city: "Mehlsecken",
    canton: "LU",
    country: "Schweiz",
  },
  uid: "CHE-114.373.376",
  founded: "2008",
  instagram: "https://www.instagram.com/bastechbetriebeag",
} as const;

export const nav = [
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/maschinen/", label: "Occasionsmaschinen" },
  { href: "/ueber-uns/", label: "Über uns" },
  { href: "/kontakt/", label: "Kontakt" },
] as const;
