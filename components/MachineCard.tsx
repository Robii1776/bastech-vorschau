import Image from "next/image";
import Link from "next/link";
import type { Machine } from "@/lib/machines";
import { ArrowRightIcon } from "@/components/Icons";

export function MachineCard({ machine }: { machine: Machine }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow duration-300 hover:shadow-[0_8px_24px_-12px_rgba(20,40,70,0.25)]">
      <div className="img-frame relative aspect-[4/3]">
        {machine.image ? (
          <Image
            src={machine.image}
            alt={`${machine.name}, ${machine.category}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-surface">
            <span className="tabular-nums text-[13px] text-ink-soft">Foto auf Anfrage</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="tabular-nums text-[12px] uppercase tracking-wide text-ink-soft">
          {machine.category}
          {machine.year ? ` · ${machine.year}` : ""}
        </p>
        <h3 className="mt-1.5 text-lg font-bold">{machine.name}</h3>
        {machine.note && (
          <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{machine.note}</p>
        )}
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="tabular-nums text-[14px] font-medium">{machine.price ?? "Preis auf Anfrage"}</span>
          <Link
            href={`/kontakt/?betreff=${encodeURIComponent(machine.name)}`}
            className="group/link inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand transition-colors duration-200 hover:text-brand-deep"
          >
            Anfragen
            <ArrowRightIcon size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
