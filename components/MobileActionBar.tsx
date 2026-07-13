import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Mobile Aktionsleiste: Bei Maschinenstillstand wird meist vom Handy in der
 * Werkhalle gesucht. Anruf, WhatsApp und Anfrage sind damit immer einen
 * Daumendruck entfernt.
 */
export function MobileActionBar() {
  return (
    <>
      <div aria-hidden className="h-16 lg:hidden" />
      <nav
        aria-label="Schnellkontakt"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <a
          href={site.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[12px] font-semibold text-brand"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          Anrufen
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 border-x border-line py-2.5 text-[12px] font-semibold text-brand"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M9 8.5c0 4 2.5 6.5 6.5 6.5l.9-1.8-2-1.2-1 .7c-1-.5-1.6-1.1-2.1-2.1l.7-1-1.2-2L9 8.5Z"
              fill="currentColor"
            />
          </svg>
          WhatsApp
        </a>
        <Link
          href="/kontakt/"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[12px] font-semibold text-brand"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 6h16v12H4V6Zm0 .5 8 6 8-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          Anfrage
        </Link>
      </nav>
    </>
  );
}
