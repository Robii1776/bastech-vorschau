"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Web3Forms-Anbindung: Vor dem Livegang unter https://web3forms.com einen
 * kostenlosen Access-Key für info@bastech.ch erstellen und hier einsetzen.
 */
const WEB3FORMS_ACCESS_KEY = "HIER_WEB3FORMS_KEY_EINSETZEN";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] transition-colors duration-200 placeholder:text-ink-soft/60 focus:border-brand focus:outline-none";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const betreff = searchParams.get("betreff") ?? "";
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: Bots füllen das versteckte Feld aus
    if (data.get("firmenname_check")) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Anfrage über bastechbetriebeag.ch${data.get("anliegen") ? `: ${data.get("anliegen")}` : ""}`,
          name: data.get("name"),
          firma: data.get("firma"),
          email: data.get("email"),
          telefon: data.get("telefon"),
          anliegen: data.get("anliegen"),
          maschine: data.get("maschine"),
          nachricht: data.get("nachricht"),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-line bg-brand-tint p-8">
        <p className="text-xl font-bold text-brand-deep">Vielen Dank für Ihre Anfrage.</p>
        <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-ink-soft">
          Wir melden uns innert 24 Stunden bei Ihnen. In dringenden Fällen erreichen Sie uns
          direkt unter <a href="tel:+41793886768" className="tabular-nums font-medium text-brand">079 388 67 68</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <input
        type="text"
        name="firmenname_check"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-[14px] font-semibold">
            Name *
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="firma" className="block text-[14px] font-semibold">
            Firma
          </label>
          <input id="firma" name="firma" type="text" autoComplete="organization" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-[14px] font-semibold">
            E-Mail *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="telefon" className="block text-[14px] font-semibold">
            Telefon
          </label>
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="anliegen" className="block text-[14px] font-semibold">
          Anliegen *
        </label>
        <select id="anliegen" name="anliegen" required defaultValue={betreff ? "Occasionsmaschine" : ""} className={inputClass}>
          <option value="" disabled>
            Bitte wählen …
          </option>
          <option>Service / Reparatur</option>
          <option>Revision / Wartung</option>
          <option>Ersatzteile</option>
          <option>Occasionsmaschine</option>
          <option>Neuentwicklung / Sonderlösung</option>
          <option>Sonstiges</option>
        </select>
      </div>

      {betreff && (
        <div className="space-y-2">
          <label htmlFor="maschine" className="block text-[14px] font-semibold">
            Maschine
          </label>
          <input id="maschine" name="maschine" type="text" defaultValue={betreff} className={inputClass} />
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="nachricht" className="block text-[14px] font-semibold">
          Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={5}
          required
          placeholder="Beschreiben Sie kurz Maschine, Problem oder Anliegen …"
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-[14px] font-medium text-red-800">
          Das Senden hat nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns an:
          079 388 67 68.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="pressable w-full rounded-md bg-brand px-6 py-4 text-[16px] font-semibold text-on-brand transition-colors duration-200 hover:bg-brand-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
      <p className="text-[13px] leading-relaxed text-ink-soft">
        Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Angaben zur Bearbeitung der
        Anfrage einverstanden. Details in der Datenschutzerklärung.
      </p>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormInner />
    </Suspense>
  );
}
