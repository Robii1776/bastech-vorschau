import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { club } from "@/lib/club";
import "./globals.css";

/**
 * Big Shoulders Display: schmal, laut, gebaut für Hallen- und
 * Stadionbeschriftung, mit Ziffern wie auf der Anzeigetafel.
 * Familjen Grotesk für Text: freundlich und robust auf kleinen Screens.
 * Beide lokal eingebunden (keine Google-Fonts-Anfrage, DSG-freundlich).
 */
const shoulders = localFont({
  src: "../node_modules/@fontsource-variable/big-shoulders-display/files/big-shoulders-display-latin-wght-normal.woff2",
  variable: "--font-shoulders",
  weight: "100 900",
  display: "swap",
});

const familjen = localFont({
  src: "../node_modules/@fontsource-variable/familjen-grotesk/files/familjen-grotesk-latin-wght-normal.woff2",
  variable: "--font-familjen",
  weight: "400 700",
  display: "swap",
});

const title = `${club.name} | ${club.fullName}: Basketballverein in Goldau`;
const description =
  "Neuer Basketballverein in Arth-Goldau: Training für Kids, Jugend, Aktive und Plausch in der Sonnegg-Halle Goldau. Probetraining gratis, Wurzeln seit 2006.";

export const metadata: Metadata = {
  metadataBase: new URL(club.url),
  title: { default: title, template: `%s | ${club.name}` },
  description,
  keywords: [
    "Basketball Goldau",
    "Basketball Arth-Goldau",
    "Basketballverein Schwyz",
    "Basketball Kinder Schwyz",
    "Basketball Training Zentralschweiz",
    "Sonnegg-Halle",
    "Probetraining Basketball",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: club.fullName,
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f9f8f5",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: club.fullName,
  alternateName: club.name,
  sport: "Basketball",
  url: club.url,
  email: club.contact.email,
  telephone: club.contact.phoneHref.replace("tel:", ""),
  foundingDate: club.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: club.address.street,
    postalCode: club.address.zip,
    addressLocality: club.address.city,
    addressRegion: club.address.canton,
    addressCountry: "CH",
  },
  location: {
    "@type": "SportsActivityLocation",
    name: club.hall.name,
    address: club.hall.address,
  },
  areaServed: club.region,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH" className={`${shoulders.variable} ${familjen.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-on-dark"
        >
          Zum Inhalt
        </a>
        <Header />
        <main id="inhalt" className="pt-[72px]">
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
