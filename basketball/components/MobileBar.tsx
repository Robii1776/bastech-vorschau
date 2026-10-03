import { asset } from "@/lib/asset";
import { club } from "@/lib/club";

/** Daumenleiste auf dem Handy: die zwei Wege in die Halle. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-chalk/95 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={club.contact.phoneHref}
          className="pressable flex flex-1 items-center justify-center rounded-full border border-ink/15 py-3 text-[15px] font-semibold"
        >
          Anrufen
        </a>
        <a
          href={asset("/#kontakt")}
          className="pressable flex flex-[1.4] items-center justify-center rounded-full bg-red py-3 text-[15px] font-semibold text-on-dark"
        >
          Probetraining anfragen
        </a>
      </div>
    </div>
  );
}
