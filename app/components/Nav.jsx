"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "../lib/site";
import { cn } from "../lib/cn";
import Logo from "./Logo";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sopra l'hero scuro della home la barra resta trasparente con testo chiaro.
  const overHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow,backdrop-filter] duration-300",
        overHero
          ? "on-dark bg-transparent"
          : "border-b border-line/80 bg-paper/90 shadow-[0_1px_20px_-10px_rgba(23,32,28,0.4)] backdrop-blur-md"
      )}
    >
      {/* Fascia informativa B2B */}
      <div
        className={cn(
          "hidden md:block",
          overHero ? "bg-brand-900/70" : "bg-brand-900"
        )}
      >
        <div className="shell flex h-9 items-center justify-between font-sans text-2xs text-white/70">
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brass" />
            {SITE.tagline}
          </p>
          <p className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-brass" />
              {SITE.zone}
            </span>
            <span className="text-white/40">Prezzi riservati ai professionisti</span>
          </p>
        </div>
      </div>

      {/* Barra principale */}
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-[68px]">
        <Link
          href="/"
          aria-label={`${SITE.name} — home`}
          className="rounded-lg py-1 no-underline"
        >
          <Logo tone={overHero ? "light" : "dark"} />
        </Link>

        {/* Navigazione desktop */}
        <nav aria-label="Principale" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex min-h-[44px] items-center rounded-lg px-4 font-sans text-[0.8125rem] font-bold uppercase tracking-[0.09em] no-underline transition-colors",
                  overHero
                    ? active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : active
                      ? "text-brand-700"
                      : "text-ink-soft hover:text-ink"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                      overHero ? "bg-brass" : "bg-accent"
                    )}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contatti"
            className={cn(
              "ml-3",
              overHero ? "btn bg-brass text-brand-900 hover:bg-brass-soft" : "btn-primary"
            )}
          >
            Richiedi preventivo
          </Link>
        </nav>

        {/* Menu mobile */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Apri il menu"
              className={cn(
                "-mr-2 grid h-11 w-11 place-items-center rounded-xl transition-colors md:hidden",
                overHero
                  ? "text-white hover:bg-white/10"
                  : "text-ink hover:bg-ink/5"
              )}
            >
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[150] bg-brand-900/60 backdrop-blur-sm data-[state=open]:animate-fade-in" />
            <Dialog.Content
              aria-describedby={undefined}
              className="on-dark fixed inset-y-0 right-0 z-[150] flex w-[min(22rem,88vw)] flex-col overflow-y-auto bg-brand-900 px-6 pb-8 pt-5 shadow-lifted data-[state=open]:animate-rise-in"
            >
              <Dialog.Title className="sr-only">Menu di navigazione</Dialog.Title>
              <div className="flex items-center justify-between">
                <Logo tone="light" />
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Chiudi il menu"
                    className="-mr-2 grid h-11 w-11 place-items-center rounded-xl text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X aria-hidden="true" className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>

              <nav aria-label="Principale (mobile)" className="mt-10 flex flex-col">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-[52px] items-center justify-between border-b border-white/10 font-display text-xl no-underline transition-colors",
                        active ? "text-brass" : "text-white hover:text-brass-soft"
                      )}
                    >
                      {link.label}
                      <ArrowRight aria-hidden="true" className="h-4 w-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/contatti"
                onClick={() => setOpen(false)}
                className="btn mt-8 w-full bg-brass text-brand-900 hover:bg-brass-soft"
              >
                Richiedi preventivo
              </Link>

              <dl className="mt-auto space-y-4 pt-12 font-sans text-sm text-white/70">
                {[
                  { Icon: Phone, label: "Telefono", value: SITE.phone },
                  { Icon: Mail, label: "Email", value: SITE.email },
                  { Icon: Clock, label: "Orari", value: SITE.hours },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    <div>
                      <dt className="text-2xs font-bold uppercase tracking-eyebrow text-white/45">
                        {label}
                      </dt>
                      <dd className="mt-0.5">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
