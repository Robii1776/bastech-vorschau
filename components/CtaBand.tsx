import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";

export function CtaBand() {
  return (
    <section className="bg-brand-deep text-on-brand">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr] md:py-20">
        <Reveal>
          <h2 className="max-w-[20ch] text-3xl font-bold sm:text-4xl">
            Maschine steht? Wir sind eine Anruflänge entfernt.
          </h2>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-on-brand/75">
            Schildern Sie uns kurz das Problem. Sie erhalten innert 24 Stunden eine Rückmeldung
            mit dem weiteren Vorgehen. Unkompliziert, ehrlich und ohne Callcenter.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {site.contacts.map((c) => (
              <a
                key={c.short}
                href={c.href}
                className="pressable rounded-md bg-on-brand px-5 py-3 text-brand-deep transition-opacity duration-200 hover:opacity-90"
              >
                <span className="block text-[12px] font-semibold text-brand">{c.short} · {c.role}</span>
                <span className="tabular-nums block text-[15px] font-bold">{c.phone}</span>
              </a>
            ))}
            <Link
              href="/kontakt/"
              className="pressable rounded-md border border-on-brand/30 px-6 py-3.5 text-[16px] font-semibold transition-colors duration-200 hover:border-on-brand/60"
            >
              Anfrage senden
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="justify-self-center md:justify-self-end">
          <div className="max-w-[400px]">
            <div className="grid grid-cols-2 gap-4">
              {[
                ["/images/team-inhaber.jpeg", "André Basler", "Inhaber"],
                ["/images/team-danilo.jpeg", "Danilo Falzarano", "Service & Technik"],
              ].map(([src, name, role]) => (
                <figure key={name}>
                  <div className="img-frame relative aspect-[4/5] rounded-lg">
                    <Image
                      src={asset(src)}
                      alt={`${name}, ${role}, Bastech Betriebe AG`}
                      fill
                      sizes="200px"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <figcaption className="mt-2.5 text-[14px] leading-snug">
                    <span className="block font-semibold text-on-brand">{name}</span>
                    <span className="text-[13px] text-on-brand/60">{role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-[14px] text-on-brand/70">
              Ihr direkter Draht: kein Callcenter, keine Warteschlaufe.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
