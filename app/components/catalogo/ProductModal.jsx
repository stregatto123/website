"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Tag, X } from "lucide-react";
import { tint } from "../../lib/colors";

/**
 * Scheda prodotto in modale (Radix Dialog: focus trap, chiusura con Esc,
 * blocco dello scroll e ruoli ARIA gestiti dalla primitiva).
 * Non mostra mai prezzi: rimanda sempre alla richiesta di preventivo.
 */
export default function ProductModal({ product, onClose }) {
  const [imgErr, setImgErr] = useState(false);
  const open = Boolean(product);
  const item = product?.item;
  const accent = product?.color ?? "#1E6B58";

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) {
          setImgErr(false);
          onClose();
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[400] bg-brand-900/70 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[400] max-h-[92vh] w-[min(30rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-surface shadow-lifted data-[state=open]:animate-scale-in">
          {item && (
            <>
              <div
                className="relative aspect-[16/10] max-h-[13.75rem] overflow-hidden"
                style={{ backgroundColor: tint(accent, 0.1) }}
              >
                {item.img && !imgErr ? (
                  <img
                    src={item.img}
                    alt=""
                    onError={() => setImgErr(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid h-full w-full place-items-center font-display text-5xl font-bold"
                    style={{ color: accent }}
                  >
                    M
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1"
                  style={{ backgroundColor: accent }}
                />
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Chiudi la scheda prodotto"
                    className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-brand-900/55 text-white backdrop-blur-sm transition-colors hover:bg-brand-900/80"
                  >
                    <X aria-hidden="true" className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>

              <div className="p-6 sm:p-7">
                <p
                  className="eyebrow flex items-center gap-2"
                  style={{ color: accent }}
                >
                  <Tag aria-hidden="true" className="h-3.5 w-3.5" />
                  {product.categoryLabel}
                </p>

                <Dialog.Title className="mt-3 font-display text-[1.375rem] font-bold leading-snug text-ink">
                  {item.name}
                </Dialog.Title>

                <Dialog.Description className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
                  {item.desc}
                </Dialog.Description>

                {item.tags?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full px-3 py-1.5 font-sans text-xs font-bold leading-none"
                        style={{
                          color: accent,
                          backgroundColor: tint(accent, 0.1),
                          boxShadow: `inset 0 0 0 1px ${tint(accent, 0.28)}`,
                        }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-6 rounded-xl bg-paper-2 px-4 py-3 font-sans text-[0.8125rem] leading-relaxed text-ink-soft">
                  I prezzi sono riservati ai clienti professionali: richiedi un
                  preventivo per disponibilità e condizioni.
                </p>

                <Link
                  href="/contatti"
                  onClick={onClose}
                  className="btn-primary mt-4 w-full"
                >
                  Richiedi preventivo
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
