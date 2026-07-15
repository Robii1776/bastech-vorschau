"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import { machines } from "@/lib/machines";
import { PhoneIcon, WhatsAppIcon, MailIcon, PlusIcon } from "@/components/Icons";

type Action = { label: string; href: string; external?: boolean; kind: "primary" | "ghost" };
type Msg = {
  from: "bot" | "user";
  text: string;
  chips?: string[];
  actions?: Action[];
};

type Flow = "idle" | "stillstand-maschine";

const START_CHIPS = [
  "Maschine steht / Störung",
  "Ersatzteil gesucht",
  "Wartung / Revision",
  "Occasionsmaschine kaufen",
  "Maschine verkaufen",
];

const MACHINE_CHIPS = [
  "Falzmaschine",
  "Banderoliermaschine",
  "Umreifungsmaschine",
  "Anleger / Feeder",
  "Andere Maschine",
];

function wa(text: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

const contactActions = (betreff: string, waText: string): Action[] => [
  ...site.contacts.map(
    (c): Action => ({
      label: `${c.short} ${c.phone}`,
      href: c.href,
      kind: c === site.contacts[0] ? "primary" : "ghost",
    })
  ),
  { label: "Per WhatsApp senden", href: wa(waText), external: true, kind: "ghost" },
  { label: "Anfrage-Formular", href: `/kontakt/?betreff=${encodeURIComponent(betreff)}`, kind: "ghost" },
];

function classify(text: string): string {
  const t = text.toLowerCase();
  const hit = (words: string[]) => words.some((w) => t.includes(w));
  if (hit(["steht", "stillstand", "defekt", "störung", "stoerung", "kaputt", "ausfall", "notfall", "läuft nicht", "laeuft nicht", "fehler", "blockiert"])) return "stillstand";
  if (hit(["ersatzteil", "teil", "motor", "pumpe", "frequenzumrichter", "messer", "lager", "riemen", "sensor", "steuerung"])) return "ersatzteil";
  if (hit(["wartung", "revision", "unterhalt", "intervall", "kontrolle"])) return "wartung";
  if (hit(["verkaufen", "abgeben", "loswerden", "ausmustern"])) return "verkaufen";
  if (hit(["kaufen", "occasion", "suche", "angebot", "banderolier", "umreifung", "falzmaschine", "preis"])) return "occasion";
  return "unbekannt";
}

function botReply(intent: string, detail?: string): Msg[] {
  switch (intent) {
    case "stillstand":
      return [
        {
          from: "bot",
          text: "Verstanden, ein Stillstand hat bei uns Priorität. Um welche Art Maschine geht es?",
          chips: MACHINE_CHIPS,
        },
      ];
    case "stillstand-advice": {
      const m = detail && detail !== "Andere Maschine" ? detail : "Maschine";
      return [
        {
          from: "bot",
          text:
            `Beste Vorgehensweise bei einem Stillstand der ${m}:\n\n` +
            "1. Maschine ausschalten und sichern.\n" +
            "2. Fehlerbild festhalten: Was ist passiert, welche Anzeige, welches Geräusch? Ein Foto oder kurzes Video hilft enorm.\n" +
            "3. Direkt anrufen. Sie sprechen sofort mit dem Techniker und erhalten eine ehrliche Ersteinschätzung, ob sich die Reparatur lohnt und wie schnell wir vor Ort sind.",
          actions: contactActions(`Störung ${m}`, `Störung an ${m}: `),
        },
      ];
    }
    case "ersatzteil":
      return [
        {
          from: "bot",
          text:
            "Am schnellsten geht es so: Fotografieren Sie das Typenschild der Maschine und, falls möglich, das defekte Teil. Senden Sie uns beides per WhatsApp. Wir identifizieren das Teil und melden uns mit Verfügbarkeit und Preis, vieles haben wir ab Lager.",
          actions: contactActions("Ersatzteile", "Ersatzteil-Anfrage, Typenschild im Anhang: "),
        },
      ];
    case "wartung":
      return [
        {
          from: "bot",
          text:
            "Gute Entscheidung: Regelmässige Wartung ist die günstigste Versicherung gegen Ausfälle. Wir erstellen Wartungspläne mit fixen Intervallen für Ihren Maschinenpark. Nennen Sie uns kurz Ihre Maschinen (Hersteller und Typ), dann schlagen wir Intervalle und einen fairen Rahmen vor.",
          actions: contactActions("Revision / Wartung", "Wartungsanfrage für folgende Maschinen: "),
        },
      ];
    case "occasion":
      return [
        {
          from: "bot",
          text: `Aktuell sind ${machines.length} geprüfte Occasionsmaschinen ab Lager verfügbar, von Banderolier- über Umreifungsmaschinen bis zum Kuvertanleger. Besichtigung und Test in Mehlsecken sind jederzeit möglich. Suchen Sie etwas Bestimmtes? Wir halten auch Ausschau über unser Netzwerk.`,
          actions: [
            { label: "Maschinen ansehen", href: "/maschinen/", kind: "primary" },
            { label: "Suchauftrag senden", href: `/kontakt/?betreff=${encodeURIComponent("Occasionsmaschine gesucht")}`, kind: "ghost" },
          ],
        },
      ];
    case "verkaufen":
      return [
        {
          from: "bot",
          text:
            "Wir kaufen Maschinen aus Druckweiterverarbeitung, Buchbinderei und Verpackung. Senden Sie uns Hersteller, Typ, Baujahr und zwei, drei Fotos per WhatsApp. Sie erhalten eine faire Einschätzung, ohne Verpflichtung. Demontage und Abtransport übernehmen wir bei Bedarf.",
          actions: contactActions("Maschine verkaufen", "Maschine zu verkaufen: "),
        },
      ];
    default:
      return [
        {
          from: "bot",
          text:
            "Das klärt sich am schnellsten im direkten Gespräch. Rufen Sie an oder schreiben Sie per WhatsApp, Sie erhalten innert 24 Stunden eine Rückmeldung. Oder wählen Sie eines der Themen:",
          chips: START_CHIPS,
          actions: [
            { label: `${site.contacts[0].short} ${site.contacts[0].phone}`, href: site.contacts[0].href, kind: "primary" },
            { label: "WhatsApp", href: wa(""), external: true, kind: "ghost" },
          ],
        },
      ];
  }
}

const chipToIntent: Record<string, string> = {
  "Maschine steht / Störung": "stillstand",
  "Ersatzteil gesucht": "ersatzteil",
  "Wartung / Revision": "wartung",
  "Occasionsmaschine kaufen": "occasion",
  "Maschine verkaufen": "verkaufen",
};

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [flow, setFlow] = useState<Flow>("idle");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Grüezi! Beschreiben Sie kurz Ihr Anliegen, oder wählen Sie ein Thema. Ich sage Ihnen, wie Sie am schnellsten zur Lösung kommen.",
      chips: START_CHIPS,
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
  }, [messages, open, reduceMotion]);

  function push(...msgs: Msg[]) {
    setMessages((prev) => [...prev, ...msgs]);
  }

  function handleChip(chip: string) {
    push({ from: "user", text: chip });
    if (flow === "stillstand-maschine" || MACHINE_CHIPS.includes(chip)) {
      setFlow("idle");
      push(...botReply("stillstand-advice", chip));
      return;
    }
    const intent = chipToIntent[chip] ?? "unbekannt";
    if (intent === "stillstand") setFlow("stillstand-maschine");
    push(...botReply(intent));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    push({ from: "user", text });
    if (flow === "stillstand-maschine") {
      setFlow("idle");
      push(...botReply("stillstand-advice", text));
      return;
    }
    const intent = classify(text);
    if (intent === "stillstand") setFlow("stillstand-maschine");
    push(...botReply(intent));
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Assistent schliessen" : "Fragen? Assistent öffnen"}
        className="pressable fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-on-brand shadow-[0_8px_24px_-8px_rgba(15,30,50,0.5)] transition-colors duration-200 hover:bg-brand-deep lg:bottom-6 lg:right-6"
      >
        {open ? (
          <PlusIcon size={24} className="rotate-45" />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fixed bottom-36 right-4 z-50 flex max-h-[min(560px,calc(100dvh-9rem))] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[0_24px_64px_-24px_rgba(15,30,50,0.45)] lg:bottom-24 lg:right-6"
            role="dialog"
            aria-label="Service-Assistent"
          >
            <div className="bg-brand-deep px-5 py-4 text-on-brand">
              <p className="text-[15px] font-bold">Service-Assistent</p>
              <p className="mt-0.5 text-[12px] text-on-brand/65">
                Beschreiben Sie Ihr Problem, wir zeigen den schnellsten Weg zur Lösung.
              </p>
            </div>

            <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4" aria-live="polite">
              {messages.map((m, i) => (
                <div key={i}>
                  <div
                    className={
                      m.from === "bot"
                        ? "max-w-[85%] whitespace-pre-line rounded-lg rounded-tl-sm bg-surface px-4 py-3 text-[14px] leading-relaxed"
                        : "ml-auto w-fit max-w-[85%] whitespace-pre-line rounded-lg rounded-tr-sm bg-brand px-4 py-3 text-[14px] leading-relaxed text-on-brand"
                    }
                  >
                    {m.text}
                  </div>
                  {m.chips && (
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {m.chips.map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => handleChip(chip)}
                          className="pressable rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-semibold transition-colors duration-200 hover:border-brand hover:text-brand"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                  {m.actions && (
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {m.actions.map((a) => (
                        <a
                          key={a.label}
                          href={a.href}
                          {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className={
                            a.kind === "primary"
                              ? "pressable tabular-nums inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-[13px] font-bold text-on-brand transition-colors duration-200 hover:bg-brand-deep"
                              : "pressable inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2.5 text-[13px] font-semibold transition-colors duration-200 hover:border-brand hover:text-brand"
                          }
                        >
                          {a.href.startsWith("tel:") && <PhoneIcon size={14} />}
                          {a.external && <WhatsAppIcon size={14} />}
                          {a.href.startsWith("/kontakt") && <MailIcon size={14} />}
                          {a.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-line p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Problem kurz beschreiben …"
                aria-label="Nachricht an den Assistenten"
                className="min-w-0 flex-1 rounded-md border border-line px-3.5 py-2.5 text-[14px] transition-colors duration-200 placeholder:text-ink-soft/60 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="pressable rounded-md bg-brand px-4 py-2.5 text-[14px] font-bold text-on-brand transition-colors duration-200 hover:bg-brand-deep"
              >
                Senden
              </button>
            </form>
            <p className="border-t border-line bg-surface px-4 py-2 text-[11px] leading-snug text-ink-soft">
              Automatischer Assistent ohne KI. Verbindliche Auskünfte gibt es am Telefon:{" "}
              <a href={site.phoneHref} className="tabular-nums font-semibold text-brand">{site.phone}</a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
