"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ClipboardList, MessageCircle, Trash2, X } from "lucide-react";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { tint } from "../../lib/colors";
import { useRequestList } from "./RequestListProvider";

/**
 * Pannello laterale con i prodotti aggiunti alla lista richiesta.
 *
 * Da qui il cliente rimuove le referenze che non gli servono e invia tutto
 * su WhatsApp: il link `wa.me` porta il messaggio già scritto, con nome e
 * formato di ogni prodotto — mai prezzi.
 */
export default function RequestListDrawer({ open, onOpenChange }) {
  const { items, count, remove, clear, sender, setSenderField } = useRequestList();
  const whatsappUrl = buildWhatsAppUrl(items, sender);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[150] bg-brand-900/60 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-[150] flex w-[min(25rem,92vw)] flex-col bg-paper shadow-lifted data-[state=open]:animate-rise-in"
        >
          <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
            <div>
              <p className="eyebrow text-accent">Richiesta rapida</p>
              <Dialog.Title className="mt-1.5 font-display text-xl font-bold leading-tight text-ink">
                La tua lista
              </Dialog.Title>
              <p className="mt-1 font-sans text-xs text-ink-soft">
                {count === 0
                  ? "Nessun prodotto selezionato"
                  : `${count} ${count === 1 ? "prodotto" : "prodotti"} · prezzi su richiesta`}
              </p>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Chiudi la lista richiesta"
                className="-mr-2 -mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-xl text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </header>

          {count === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
              <span
                aria-hidden="true"
                className="grid h-16 w-16 place-items-center rounded-full bg-paper-2 text-ink-soft/60"
              >
                <ClipboardList className="h-7 w-7" />
              </span>
              <p className="mt-5 font-display text-lg font-bold text-ink">
                La lista è vuota
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                Sfoglia il catalogo e tocca <strong className="font-bold text-ink">+</strong>{" "}
                sui prodotti che ti interessano: li raccogliamo qui e li invii
                su WhatsApp in un messaggio solo.
              </p>
              <Dialog.Close asChild>
                <Link href="/catalogo" className="btn-primary mt-7">
                  Vai al catalogo
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Dialog.Close>
            </div>
          ) : (
            <ul className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
              {items.map((entry) => {
                const accent = entry.color || "#1E6B58";
                return (
                  <li
                    key={entry.id}
                    className="flex items-start gap-3 border-b border-line/70 py-3 last:border-b-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-4 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    <div className="min-w-0 flex-1">
                      {entry.categoryLabel && (
                        <p
                          className="font-sans text-[0.625rem] font-bold uppercase tracking-eyebrow"
                          style={{ color: accent }}
                        >
                          {entry.categoryLabel}
                        </p>
                      )}
                      <p className="mt-0.5 font-sans text-sm font-bold leading-snug text-ink">
                        {entry.name}
                      </p>
                      {entry.tags?.length > 0 && (
                        <p className="mt-1.5 flex flex-wrap gap-1.5">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full px-2 py-1 font-sans text-[0.625rem] font-bold leading-none"
                              style={{
                                color: accent,
                                backgroundColor: tint(accent, 0.1),
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(entry.id)}
                      aria-label={`Rimuovi ${entry.name} dalla lista richiesta`}
                      className="-mr-2 grid h-11 w-11 shrink-0 place-items-center rounded-xl text-ink-soft transition-colors hover:bg-accent/10 hover:text-accent"
                    >
                      <X aria-hidden="true" className="h-4 w-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {count > 0 && (
            <footer className="border-t border-line bg-surface px-5 pb-5 pt-4 sm:px-6">
              <p className="font-sans text-2xs leading-relaxed text-ink-soft">
                Inviando la lista ricevi disponibilità e preventivo: i prezzi
                sono riservati ai clienti professionali.
              </p>

              <div className="mt-3 grid gap-3">
                <div>
                  <label htmlFor="lista-mittente-nome" className="field-label">
                    Il tuo nome
                  </label>
                  <input
                    id="lista-mittente-nome"
                    type="text"
                    value={sender.name}
                    onChange={(e) => setSenderField("name", e.target.value)}
                    placeholder="Mario Esposito"
                    autoComplete="name"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="lista-mittente-attivita" className="field-label">
                    La tua attività
                  </label>
                  <input
                    id="lista-mittente-attivita"
                    type="text"
                    value={sender.business}
                    onChange={(e) => setSenderField("business", e.target.value)}
                    placeholder="La Pizzeria di Mario"
                    autoComplete="organization"
                    className="field"
                  />
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Invia su WhatsApp la richiesta con ${count} ${
                  count === 1 ? "prodotto" : "prodotti"
                }`}
                className="btn mt-3 w-full bg-[#128C7E] text-white hover:bg-[#0E6F64] active:translate-y-px"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Invia richiesta su WhatsApp
              </a>
              <button
                type="button"
                onClick={clear}
                className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full font-sans text-xs font-bold uppercase tracking-[0.08em] text-ink-soft transition-colors hover:text-accent"
              >
                <Trash2 aria-hidden="true" className="h-3.5 w-3.5" />
                Svuota la lista
              </button>
            </footer>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
