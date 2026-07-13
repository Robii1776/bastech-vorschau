import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-on-brand">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xl font-bold">{site.name}</p>
            <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-on-brand/70">
              {site.claim}. Service, Revisionen, Reparaturen und Occasionsmaschinen für die grafische
              Industrie. Von {site.address.city} aus schweizweit im Einsatz.
            </p>
            <p className="mt-6 font-mono text-[13px] text-on-brand/60">UID {site.uid} · AG seit {site.founded}</p>
          </div>

          <nav aria-label="Footer-Navigation">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-on-brand/50">Seiten</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-on-brand/85 transition-colors duration-200 hover:text-on-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-on-brand/50">Kontakt</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-on-brand/85">
              <li>
                {site.address.street}, {site.address.zip} {site.address.city}
              </li>
              <li>
                <a href={site.phoneHref} className="font-mono transition-colors duration-200 hover:text-on-brand">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.phone2Href} className="font-mono transition-colors duration-200 hover:text-on-brand">
                  {site.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-200 hover:text-on-brand"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-on-brand"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-on-brand/15 pt-6 text-[13px] text-on-brand/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link href="/impressum/" className="transition-colors duration-200 hover:text-on-brand">
              Impressum
            </Link>
            <Link href="/datenschutz/" className="transition-colors duration-200 hover:text-on-brand">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
