import type { Metadata } from "next";
import { Anton, Barlow, Barlow_Semi_Condensed, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { site } from "@/lib/site";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: "400",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["400", "500", "600"],
});

const barlowDisplay = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-display",
  display: "swap",
  weight: ["600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bastech Betriebe AG | Maschinenservice für die grafische Industrie",
    template: "%s | Bastech Betriebe AG",
  },
  description:
    "Service, Revisionen, Reparaturen und Occasionsmaschinen für Druckweiterverarbeitung, Buchbinderei und Umreifungstechnik. Schweizweit im Einsatz. Bastech Betriebe AG, Mehlsecken LU.",
  keywords: [
    "Maschinenservice",
    "Druckweiterverarbeitung",
    "Buchbinderei",
    "Umreifungstechnik",
    "Banderoliermaschine",
    "Occasionsmaschinen",
    "Revision",
    "mechanische Reparaturen",
    "grafische Industrie",
    "Luzern",
    "Schweiz",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: site.name,
    title: "Bastech Betriebe AG | Maschinenservice für die grafische Industrie",
    description:
      "Service, Revisionen, Reparaturen und Occasionsmaschinen für Druckweiterverarbeitung, Buchbinderei und Umreifungstechnik. Schweizweit im Einsatz.",
    images: [{ url: "/images/maschine-3.jpeg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description:
    "Technische Dienstleistung und Handel für die Industrie: Service, Revisionen, mechanische Reparaturen, Ersatzteile und Occasionsmaschinen für die grafische Industrie.",
  url: site.url,
  telephone: "+41793886768",
  email: site.email,
  foundingDate: "2008",
  vatID: site.uid,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: site.address.canton,
    addressCountry: "CH",
  },
  areaServed: { "@type": "Country", name: "Schweiz" },
  sameAs: [site.instagram],
  knowsAbout: [
    "Druckweiterverarbeitung",
    "Buchbinderei",
    "Umreifungstechnik",
    "Banderoliermaschinen",
    "Maschinenrevision",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de-CH"
      className={`${anton.variable} ${barlow.variable} ${barlowDisplay.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
