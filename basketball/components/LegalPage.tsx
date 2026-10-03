import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-[760px] px-5 pt-12 pb-28 sm:px-8 md:pt-20">
      <h1 className="text-[clamp(3.5rem,8vw,5.5rem)]">{title}</h1>
      <div className="mt-12 grid gap-10 text-[16px] leading-relaxed text-ink-soft [&_h2]:mb-3 [&_h2]:text-[28px] [&_h2]:text-ink [&_a]:font-semibold [&_a]:text-red">
        {children}
      </div>
    </section>
  );
}
