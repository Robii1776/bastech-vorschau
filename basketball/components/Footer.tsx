import { asset } from "@/lib/asset";
import { Wordmark } from "@/components/BallMark";
import { club, nav } from "@/lib/club";

export function Footer() {
  return (
    <footer className="bg-board pb-28 text-on-dark lg:pb-0">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Wordmark light />
          <p className="mt-5 text-[15px] leading-relaxed text-on-dark-soft">
            {club.fullName}. Basketball für Kinder, Jugendliche und Erwachsene in der{" "}
            {club.hall.name} in {club.place}. Wurzeln seit {club.roots}.
          </p>
        </div>

        <div>
          <p className="eyebrow text-on-dark-soft">Verein</p>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={asset(item.href)} className="link-underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-on-dark-soft">Kontakt</p>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li>{club.contact.name}</li>
            <li>
              <a href={club.contact.phoneHref} className="link-underline tabular-nums">
                {club.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${club.contact.email}`} className="link-underline">
                {club.contact.email}
              </a>
            </li>
            <li className="text-on-dark-soft">
              {club.address.street}, {club.address.zip} {club.address.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-on-dark/10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-5 py-6 text-[13px] text-on-dark-soft sm:px-8">
          <p>
            © {new Date().getFullYear()} {club.fullName}
          </p>
          <div className="flex gap-6">
            <a href={asset("/impressum/")} className="link-underline">
              Impressum
            </a>
            <a href={asset("/datenschutz/")} className="link-underline">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
