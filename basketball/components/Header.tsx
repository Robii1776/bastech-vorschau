import { asset } from "@/lib/asset";
import { Wordmark } from "@/components/BallMark";
import { nav } from "@/lib/club";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-chalk/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href={asset("/")} aria-label="BasketAG Startseite" className="pressable">
          <Wordmark />
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={asset(item.href)} className="link-underline text-[15px] font-medium">
              {item.label}
            </a>
          ))}
          <a
            href={asset("/#kontakt")}
            className="pressable rounded-full bg-red px-5 py-2.5 text-[15px] font-semibold text-on-dark hover:bg-red-deep"
          >
            Probetraining
          </a>
        </nav>

        <details className="menu relative lg:hidden">
          <summary
            aria-label="Menü"
            className="pressable flex size-11 items-center justify-center rounded-full border border-line bg-chalk"
          >
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 top-14 w-[min(84vw,320px)] rounded-2xl border border-line bg-chalk p-3 shadow-[0_24px_60px_-20px_oklch(20%_0.02_262/0.35)]">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={asset(item.href)}
                    className="display block rounded-lg px-4 py-3 text-[28px] hover:bg-surface"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={asset("/#kontakt")}
              className="pressable mt-2 block rounded-xl bg-red px-4 py-3.5 text-center text-[16px] font-semibold text-on-dark"
            >
              Probetraining anfragen
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
