import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

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
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={site.phoneHref}
              className="pressable rounded-md bg-on-brand px-6 py-3.5 tabular-nums text-[16px] font-medium text-brand-deep transition-opacity duration-200 hover:opacity-90"
            >
              {site.phone}
            </a>
            <Link
              href="/kontakt/"
              className="pressable rounded-md border border-on-brand/30 px-6 py-3.5 text-[16px] font-semibold transition-colors duration-200 hover:border-on-brand/60"
            >
              Anfrage senden
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="justify-self-center md:justify-self-end">
          <figure className="max-w-[280px]">
            <div className="img-frame relative aspect-[4/5] w-64 rounded-lg">
              <Image
                src="/images/team-inhaber.jpeg"
                alt="André Basler, Inhaber der Bastech Betriebe AG"
                fill
                sizes="256px"
                className="rounded-lg object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[14px] text-on-brand/70">
              <span className="font-semibold text-on-brand">André Basler</span>, Inhaber.
              Ihr direkter Draht: kein Callcenter, keine Warteschlaufe.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
