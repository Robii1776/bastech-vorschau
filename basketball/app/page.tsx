import { BallMark } from "@/components/BallMark";
import { ContactForm } from "@/components/ContactForm";
import { Court } from "@/components/Court";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";
import { club, faqs, milestones, sessions, teams } from "@/lib/club";

const container = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className={`${container} grid items-center gap-6 pt-10 pb-6 lg:grid-cols-[1.08fr_1fr] lg:gap-4 lg:pt-16 lg:pb-12`}>
        <div className="relative z-10">
          <p className="eyebrow text-ink-soft">
            <span className="hidden sm:inline">Basketballverein · </span>
            {club.region.split(",")[0]} · neu gegründet {club.founded}
          </p>
          <h1 className="mt-5 text-[clamp(4.25rem,8.6vw,7.5rem)]">
            Gleiche Halle.
            <br />
            <span className="text-red">Neue Generation.</span>
          </h1>
          <p className="mt-7 max-w-[52ch] text-[18px] leading-relaxed text-ink-soft">
            Wir sind ein neuer Basketballverein in {club.place}, gegründet von Spielern, die in der{" "}
            {club.hall.name} selbst gross geworden sind. Kids, Jugend, Aktive und Plausch: Das erste
            Training ist gratis.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={asset("/#kontakt")}
              className="pressable w-full rounded-full bg-red px-7 py-4 text-center text-[16px] font-semibold text-on-dark hover:bg-red-deep sm:w-auto"
            >
              Probetraining anfragen
            </a>
            <a
              href={asset("/#training")}
              className="pressable group flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-4 sm:w-auto text-[16px] font-semibold hover:border-ink"
            >
              Trainingszeiten
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>

        <div className="relative -mx-5 sm:mx-0">
          <Court />
          {/* Ball liegt auf der Freiwurflinie */}
          <div className="pointer-events-none absolute left-[46%] top-[25%] w-[16%] max-w-[88px]" aria-hidden="true">
            <svg viewBox="0 0 40 60" className="ball-drop block w-full overflow-visible">
              <ellipse cx="20" cy="57" rx="13" ry="3.2" fill="var(--color-ink)" fillOpacity="0.22" />
              <g transform="translate(0 15)">
                <circle cx="20" cy="20" r="18.5" fill="var(--color-red)" />
                <circle cx="14" cy="13" r="9" fill="var(--color-chalk)" fillOpacity="0.14" />
                <g fill="none" stroke="var(--color-ink)" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="20" cy="20" r="18.5" />
                  <path d="M20 1.5v37M1.5 20h37" />
                  <path d="M7.2 6.6c5.2 4.4 7.3 8.8 7.3 13.4s-2.1 9-7.3 13.4" />
                  <path d="M32.8 6.6c-5.2 4.4-7.3 8.8-7.3 13.4s2.1 9 7.3 13.4" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Anzeigetafel: die vier Fakten, die man vor dem ersten Training wissen will. */
function Scoreboard() {
  const cells = [
    { label: "Verein seit", value: club.founded },
    { label: "Basketball in Goldau seit", value: club.roots },
    { label: "Training", value: "Sa 09.00" },
    { label: "Probetraining", value: "Gratis" },
  ];
  return (
    <section aria-label="Der Verein in Zahlen" className="bg-board text-on-dark">
      <div className={`${container} py-2`}>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {cells.map((cell, i) => (
            <div
              key={cell.label}
              className={`flex flex-col-reverse gap-1 py-6 lg:px-8 ${i % 2 === 1 ? "pl-5 border-l border-on-dark/10" : ""} ${i > 1 ? "border-t border-on-dark/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:border-on-dark/10" : ""} ${i === 0 ? "lg:pl-0" : ""}`}
            >
              <dt className="eyebrow text-[11.5px] text-on-dark-soft">{cell.label}</dt>
              <dd className="display tabular-nums text-[clamp(2.5rem,5vw,3.75rem)] text-led">
                {cell.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Verein() {
  return (
    <section id="verein" className="py-24 lg:py-32">
      <div className={`${container} grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow text-red">Der Verein</p>
            <h2 className="mt-4 text-[clamp(3rem,6vw,5rem)]">Zwanzig Jahre Basketball in Goldau. Jetzt als Verein.</h2>
            <p className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-ink-soft">
              Seit {club.roots} springt in der {club.hall.name} jeden Samstag der Ball. Kinder aus
              Goldau, Oberarth, Arth und aus aller Welt haben hier ihren ersten Korbleger geworfen.
              Jetzt übernehmen die, die damals selbst als Kinder in der Halle standen.
            </p>
            <p className="mt-4 max-w-[54ch] text-[17px] leading-relaxed text-ink-soft">
              Unser Ziel ist einfach: ein Verein, in dem jedes Kind mitspielen darf, Jugendliche
              gefördert werden und die Grossen eine Mannschaft haben.
            </p>
          </Reveal>
        </div>

        <ol className="relative grid gap-12 border-l-2 border-line pl-8 sm:pl-12">
          {milestones.map((m, i) => (
            <li key={m.year} className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-3 -left-[calc(2rem+7px)] size-3 rounded-full sm:-left-[calc(3rem+7px)] ${i === milestones.length - 1 ? "bg-red ring-4 ring-red/20" : "bg-ink"}`}
              />
              <Reveal delay={i * 0.05}>
                <p
                  className={`display tabular-nums text-[clamp(3.5rem,7vw,5.5rem)] ${i === milestones.length - 1 ? "text-red" : "text-ink/20"}`}
                >
                  {m.year}
                </p>
                <h3 className="mt-1 text-[28px] leading-none">{m.title}</h3>
                <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-ink-soft">{m.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Ein Mass, das jeder Spieler kennt, als Haltung des Vereins. */
function Statement() {
  return (
    <section
      aria-label="Korbhöhe"
      className="overflow-hidden border-y border-maple-deep/40 bg-[repeating-linear-gradient(90deg,var(--color-maple)_0_29px,oklch(70%_0.07_62/0.55)_29px_30px,oklch(79.5%_0.075_68)_30px_59px,oklch(70%_0.07_62/0.55)_59px_60px,oklch(84%_0.062_75)_60px_89px,oklch(70%_0.07_62/0.55)_89px_90px)]"
    >
      <div className={`${container} grid items-end gap-6 py-16 lg:grid-cols-[auto_1fr] lg:gap-14 lg:py-20`}>
        <p className="display whitespace-nowrap text-[clamp(6rem,22vw,17rem)] leading-[0.8] text-ink tabular-nums">
          3.05<span className="text-[0.45em] normal-case"> m</span>
        </p>
        <div className="max-w-[40ch] pb-2">
          <p className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-[0.95] text-ink">
            So hoch hängt der Korb. Für alle gleich.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Egal woher du kommst, wie alt du bist oder wie gut du schon wirfst. Bei uns zählt, wer
            kommt.
          </p>
        </div>
      </div>
    </section>
  );
}

function Training() {
  const steps = [
    {
      title: "Melde dich",
      text: "Kurz per Formular, Telefon oder WhatsApp. Sag uns Alter und Erfahrung, wir sagen dir die passende Gruppe.",
    },
    {
      title: "Pack die Tasche",
      text: "Hallenschuhe mit heller Sohle, Sportkleider und Trinkflasche einpacken. Bälle haben wir in der Halle.",
    },
    {
      title: "Spiel mit",
      text: "Sei zehn Minuten vor Trainingsbeginn in der Halle. Zwei bis drei Probetrainings sind gratis.",
    },
  ];

  return (
    <section id="training" className="bg-surface py-24 lg:py-32">
      <div className={container}>
        <Reveal>
          <p className="eyebrow text-red">Training</p>
          <h2 className="mt-4 text-[clamp(3rem,6vw,5rem)]">Wann und wo wir spielen</h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="min-w-0">
            <div className="overflow-x-auto rounded-2xl bg-board text-on-dark">
              <table className="w-full text-left">
                <caption className="sr-only">Trainingszeiten</caption>
                <thead>
                  <tr className="eyebrow text-[11.5px] text-on-dark-soft">
                    <th scope="col" className="py-3 pt-6 pr-3 pl-5 font-semibold sm:px-6">Tag</th>
                    <th scope="col" className="px-3 pt-6 pb-3 font-semibold sm:px-6">Zeit</th>
                    <th scope="col" className="py-3 pt-6 pr-5 pl-3 font-semibold sm:px-6">Gruppe</th>
                    <th scope="col" className="hidden px-6 pt-6 pb-3 font-semibold sm:table-cell">Alter</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((s) => (
                    <tr key={`${s.day}-${s.time}`} className="border-t border-on-dark/10">
                      <td className="py-5 pr-3 pl-5 text-[15px] font-semibold sm:px-6 sm:text-[16px]">
                        <span className="sm:hidden">{s.day.slice(0, 2)}</span>
                        <span className="hidden sm:inline">{s.day}</span>
                      </td>
                      <td className="display px-3 py-5 text-[24px] whitespace-nowrap text-led tabular-nums sm:px-6 sm:text-[30px]">
                        {s.time}
                      </td>
                      <td className="py-5 pr-5 pl-3 text-[16px] sm:px-6">
                        {s.group}
                        <span className="block text-[13px] text-on-dark-soft tabular-nums sm:hidden">{s.ages}</span>
                      </td>
                      <td className="hidden px-6 py-5 text-[15px] text-on-dark-soft tabular-nums sm:table-cell">
                        {s.ages}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="border-t border-on-dark/10 px-6 py-4 text-[14px] text-on-dark-soft">
                In den Schulferien des Kantons Schwyz finden keine Trainings statt.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0">
            <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-chalk p-7">
              <div>
                <p className="eyebrow text-ink-soft">Unsere Halle</p>
                <p className="display mt-3 text-[44px]">{club.hall.name}</p>
                <p className="mt-2 text-[16px] text-ink-soft">{club.hall.address}</p>
                <div className="mt-7 border-t border-line pt-6">
                  <p className="eyebrow text-ink-soft">In die Tasche</p>
                  <ul className="mt-3 grid gap-2 text-[16px]">
                    {["Hallenschuhe mit heller Sohle", "Sportkleider", "Trinkflasche"].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span aria-hidden="true" className="size-1.5 rounded-full bg-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href={club.hall.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-5 py-3 text-[15px] font-semibold hover:border-ink"
              >
                Route planen <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-[clamp(2.25rem,4vw,3.25rem)]">So läuft dein Probetraining</h3>
          </Reveal>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.06}>
                  <div className="flex items-baseline gap-4 border-t-2 border-ink pt-5">
                    <span className="display text-[44px] text-red tabular-nums">{i + 1}</span>
                    <h4 className="display text-[30px]">{step.title}</h4>
                  </div>
                  <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-ink-soft">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Teams() {
  return (
    <section id="teams" className="py-24 lg:py-32">
      <div className={container}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-red">Teams</p>
              <h2 className="mt-4 text-[clamp(3rem,6vw,5rem)]">Vier Gruppen. Ein Verein.</h2>
            </div>
            <p className="max-w-[42ch] text-[17px] leading-relaxed text-ink-soft">
              Eingeteilt wird nach Alter und Können. Wer schneller wächst, wechselt früher.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((team, i) => (
            <li key={team.name}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl bg-surface p-7 transition-colors duration-300 hover:bg-board hover:text-on-dark">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-[11.5px] text-ink-soft group-hover:text-on-dark-soft">
                      {team.position}
                    </span>
                    <BallMark className="size-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <p className="display mt-8 text-[64px] tabular-nums text-red group-hover:text-led">
                    {team.ages}
                  </p>
                  <h3 className="mt-1 text-[34px]">{team.name}</h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft group-hover:text-on-dark-soft">
                    {team.text}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Mitmachen() {
  const ways = [
    {
      title: "Spielen",
      text: "Ab 6 Jahren, mit oder ohne Erfahrung. Komm ins Probetraining und schau, welche Gruppe passt.",
      cta: "Probetraining anfragen",
      href: asset("/#kontakt"),
    },
    {
      title: "Mithelfen",
      text: "Wir suchen Hilfstrainer, Schiedsrichter, Fahrerinnen für Auswärtsspiele und Leute für den Kuchenstand. Ein paar Stunden im Monat helfen schon.",
      cta: "Mithilfe anbieten",
      href: asset("/#kontakt"),
    },
    {
      title: "Unterstützen",
      text: "Als Gönnerin, Firma oder Sponsor: Ihr Beitrag geht in Bälle, Trikots, Hallenmiete und Turnierreisen für die Jugend.",
      cta: "Partner werden",
      href: `mailto:${club.contact.email}?subject=Partnerschaft%20${club.name}`,
    },
  ];

  return (
    <section id="mitmachen" className="bg-board py-24 text-on-dark lg:py-32">
      <div className={container}>
        <Reveal>
          <p className="eyebrow text-led">Mitmachen</p>
          <h2 className="mt-4 max-w-[16ch] text-[clamp(3rem,6vw,5rem)]">
            Ein Verein lebt von Leuten, die mitanpacken.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-on-dark/10 md:grid-cols-3">
          {ways.map((way, i) => (
            <li key={way.title} className="bg-board">
              <Reveal delay={i * 0.06} className="flex h-full flex-col gap-6 p-7 lg:p-9">
                <h3 className="text-[44px]">{way.title}</h3>
                <p className="flex-1 text-[16px] leading-relaxed text-on-dark-soft">{way.text}</p>
                <a
                  href={way.href}
                  className="pressable inline-flex items-center gap-2 self-start rounded-full bg-on-dark px-5 py-3 text-[15px] font-semibold text-ink hover:bg-led"
                >
                  {way.cta} <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="fragen" className="py-24 lg:py-32">
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20`}>
        <Reveal>
          <p className="eyebrow text-red">Fragen</p>
          <h2 className="mt-4 text-[clamp(3rem,6vw,5rem)]">Was Eltern und Neue oft fragen</h2>
        </Reveal>
        <div className="border-t border-line">
          {faqs.map((item) => (
            <details key={item.q} className="faq group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-6 text-[19px] font-semibold">
                {item.q}
                <span
                  aria-hidden="true"
                  className="faq-icon flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-[22px] font-normal leading-none group-hover:border-ink"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[60ch] pb-7 text-[16px] leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kontakt() {
  const initials = club.contact.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section id="kontakt" className="border-t border-line bg-surface py-24 lg:py-32">
      <div className={`${container} grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20`}>
        <div>
          <Reveal>
            <p className="eyebrow text-red">Kontakt</p>
            <h2 className="mt-4 text-[clamp(3.5rem,7vw,6rem)]">Komm vorbei.</h2>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-ink-soft">
              Schreib uns für ein Probetraining oder ruf direkt an. Es antwortet dir kein Sekretariat,
              sondern jemand aus dem Trainerteam.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-10 rounded-2xl bg-chalk p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="display flex size-16 shrink-0 items-center justify-center rounded-full bg-red text-[28px] text-on-dark"
                >
                  {initials}
                </span>
                <div>
                  <p className="text-[18px] font-semibold">{club.contact.name}</p>
                  <p className="text-[15px] text-ink-soft">{club.contact.role}</p>
                </div>
              </div>
              <dl className="mt-6 grid gap-3 border-t border-line pt-6 text-[16px]">
                <div className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                  <dt className="text-ink-soft">Telefon</dt>
                  <dd>
                    <a href={club.contact.phoneHref} className="link-underline font-semibold tabular-nums">
                      {club.contact.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                  <dt className="text-ink-soft">WhatsApp</dt>
                  <dd>
                    <a
                      href={club.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-semibold"
                    >
                      Nachricht schreiben
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                  <dt className="text-ink-soft">E-Mail</dt>
                  <dd>
                    <a href={`mailto:${club.contact.email}`} className="link-underline font-semibold">
                      {club.contact.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                  <dt className="text-ink-soft">Halle</dt>
                  <dd className="font-semibold">
                    {club.hall.name}, {club.place}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-chalk p-6 sm:p-9">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Scoreboard />
      <Verein />
      <Statement />
      <Training />
      <Teams />
      <Mitmachen />
      <Faq />
      <Kontakt />
    </>
  );
}
