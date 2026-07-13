"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Bastech Betriebe AG, Startseite">
          <Image
            src="/images/logo.jpeg"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
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
          <a
            href={site.phoneHref}
            className="font-mono text-[14px] font-medium text-ink-soft transition-colors duration-200 hover:text-brand"
          >
            {site.phone}
          </a>
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 top-20 z-40 bg-bg lg:hidden"
          >
            <nav className="flex h-full flex-col justify-between px-6 pb-10 pt-8" aria-label="Mobile Navigation">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } }, hidden: {} }}
                className="space-y-2"
              >
                {nav.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-line py-4 text-2xl font-semibold"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.4 } }}
                className="space-y-3"
              >
                <a
                  href={site.phoneHref}
                  className="block font-mono text-lg font-medium text-brand"
                >
                  {site.phone}
                </a>
                <Link
                  href="/kontakt/"
                  className="pressable block rounded-md bg-brand px-6 py-4 text-center text-lg font-semibold text-on-brand"
                >
                  Service anfragen
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
