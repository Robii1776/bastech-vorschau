"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { nav, site } from "@/lib/site";
import { asset } from "@/lib/asset";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    // Kein backdrop-filter im Header: er würde zum Containing Block für das
    // fixe Mobile-Menü und kollabiert dessen Höhe auf 0.
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-bg transition-shadow duration-300 ${
        scrolled && !open ? "shadow-[0_1px_8px_rgba(15,30,50,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Bastech Betriebe AG, Startseite">
          <Image
            src={asset("/images/logo-mark.png")}
            alt=""
            width={44}
            height={52}
            className="h-11 w-auto"
            priority
          />
          <span className="leading-tight">
            <span className="block text-[17px] font-bold">Bastech Betriebe AG</span>
            <span className="hidden text-[11px] font-medium tracking-wide text-ink-soft sm:block">
              Technische Dienstleistung &amp; Handel
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const active = Boolean(pathname && pathname.startsWith(item.href.replace(/\/$/, "")));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[15px] font-medium transition-colors duration-200 hover:text-brand ${
                  active ? "text-brand" : "link-underline text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-brand"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex flex-col items-end gap-0.5">
            {site.contacts.map((c) => (
              <a
                key={c.short}
                href={c.href}
                className="text-[13px] font-medium leading-tight text-ink-soft transition-colors duration-200 hover:text-brand"
              >
                {c.short} <span className="tabular-nums font-semibold">{c.phone}</span>
              </a>
            ))}
          </div>
          <Link
            href="/kontakt/"
            className="pressable rounded-md bg-brand px-5 py-2.5 text-[15px] font-semibold text-on-brand transition-colors duration-200 hover:bg-brand-deep"
          >
            Service anfragen
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="pressable relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-ink transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-full bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-full bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Bewusst ohne JS-Animation: Menüinhalt darf nie unsichtbar hängen,
          der sanfte Einstieg kommt rein aus CSS (@starting-style). */}
      {open && (
        <div className="menu-overlay fixed inset-0 top-20 z-40 overflow-y-auto bg-bg lg:hidden">
          <nav
            className="flex min-h-full flex-col justify-between px-6 pb-10 pt-8"
            aria-label="Mobile Navigation"
          >
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block border-b border-line py-4 text-2xl font-semibold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4">
              {site.contacts.map((c) => (
                <a key={c.short} href={c.href} className="block">
                  <span className="block text-[13px] font-semibold text-ink-soft">
                    {c.short} · {c.role}
                  </span>
                  <span className="tabular-nums block text-lg font-bold text-brand">{c.phone}</span>
                </a>
              ))}
              <Link
                href="/kontakt/"
                className="pressable block rounded-md bg-brand px-6 py-4 text-center text-lg font-semibold text-on-brand"
              >
                Service anfragen
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
