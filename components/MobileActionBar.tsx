import Link from "next/link";
import { site } from "@/lib/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";

/**
 * Mobile Aktionsleiste: Bei Maschinenstillstand wird meist vom Handy in der
 * Werkhalle gesucht. Beide Ansprechpartner, WhatsApp und Anfrage sind damit
 * immer einen Daumendruck entfernt.
 */
export function MobileActionBar() {
  return (
    <>
      <div aria-hidden className="h-16 lg:hidden" />
      <nav
        aria-label="Schnellkontakt"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 divide-x divide-line border-t border-line bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        {site.contacts.map((c) => (
          <a
            key={c.short}
            href={c.href}
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-[12px] font-semibold text-brand"
            aria-label={`${c.name} anrufen, ${c.phone}`}
          >
            <PhoneIcon size={18} />
            {c.short}
          </a>
        ))}
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-[12px] font-semibold text-brand"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </a>
        <Link
          href="/kontakt/"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-[12px] font-semibold text-brand"
        >
          <MailIcon size={18} />
          Anfrage
        </Link>
      </nav>
    </>
  );
}
