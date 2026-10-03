"use client";

import { useState } from "react";
import { club, teams } from "@/lib/club";

/**
 * Web3Forms-Anbindung: Vor dem Livegang unter https://web3forms.com einen
 * kostenlosen Access-Key für die Vereinsadresse erstellen und hier einsetzen.
 */
const WEB3FORMS_ACCESS_KEY = "HIER_WEB3FORMS_KEY_EINSETZEN";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-line bg-chalk px-4 py-3.5 text-[16px] transition-colors duration-200 placeholder:text-ink-soft/55 focus:border-ink focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: Bots füllen das versteckte Feld aus
    if (data.get("website_check")) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Probetraining ${data.get("gruppe") || ""} über basketag.ch`,
          name: data.get("name"),
          email: data.get("email"),
          telefon: data.get("telefon"),
          fuer: data.get("fuer"),
          gruppe: data.get("gruppe"),
          jahrgang: data.get("jahrgang"),
          nachricht: data.get("nachricht"),
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
      if (json.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-surface p-8">
        <p className="display text-[40px] text-ink">Danke, bis bald in der Halle.</p>
        <p className="mt-3 max-w-[46ch] text-[16px] leading-relaxed text-ink-soft">
          Wir melden uns in den nächsten Tagen mit dem passenden Trainingstermin. Eilt es? Ruf{" "}
          {club.contact.name.split(" ")[0]} an:{" "}
          <a href={club.contact.phoneHref} className="font-semibold text-red tabular-nums">
            {club.contact.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input
        type="text"
        name="website_check"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <fieldset className="grid gap-2">
        <legend className="mb-2 text-[14px] font-semibold">Für wen ist das Probetraining?</legend>
        <div className="flex flex-wrap gap-2">
          {["Für mich", "Für mein Kind"].map((option, i) => (
            <label
              key={option}
              className="pressable cursor-pointer rounded-full border border-line bg-chalk px-4 py-2.5 text-[15px] has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-on-dark"
            >
              <input
                type="radio"
                name="fuer"
                value={option}
                defaultChecked={i === 1}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-[14px] font-semibold">
            Dein Name *
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="jahrgang" className="text-[14px] font-semibold">
            Jahrgang Spieler/in
          </label>
          <input
            id="jahrgang"
            name="jahrgang"
            type="text"
            inputMode="numeric"
            placeholder="z.B. 2015"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-[14px] font-semibold">
            E-Mail *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="telefon" className="text-[14px] font-semibold">
            Telefon
          </label>
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="gruppe" className="text-[14px] font-semibold">
          Gruppe
        </label>
        <select id="gruppe" name="gruppe" defaultValue="" className={inputClass}>
          <option value="">Weiss ich noch nicht</option>
          {teams.map((team) => (
            <option key={team.name} value={team.name}>
              {team.name} ({team.ages} Jahre)
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="nachricht" className="text-[14px] font-semibold">
          Nachricht
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          placeholder="Erfahrung, Fragen, Wunschtermin"
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red/10 px-4 py-3 text-[15px] text-red-deep" role="alert">
          Das hat nicht geklappt. Bitte versuch es nochmals oder schreib direkt an{" "}
          <a href={`mailto:${club.contact.email}`} className="font-semibold underline">
            {club.contact.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="pressable justify-self-start rounded-full bg-red px-8 py-4 text-[16px] font-semibold text-on-dark hover:bg-red-deep disabled:opacity-60"
      >
        {status === "sending" ? "Wird gesendet …" : "Probetraining anfragen"}
      </button>
      <p className="text-[13px] text-ink-soft">
        Wir verwenden deine Angaben nur, um dich wegen des Trainings zu kontaktieren.
      </p>
    </form>
  );
}
