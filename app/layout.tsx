import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Assistant } from "@/components/Assistant";
import { site } from "@/lib/site";
import "./globals.css";

/**
 * Eine einzige Familie, Kontrast über die Breitenachse:
 * Archivo Variable (wdth 62–125). Display = Expanded 800,
 * Text = Normalbreite. Wirkt konstruiert wie ein Maschinenbau-CI,
 * ohne zweite Schrift und ohne Mono-Zahlen.
 */
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
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
    <html lang="de-CH" className={archivo.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <MobileActionBar />
        <Assistant />
      </body>
    </html>
  );
}
