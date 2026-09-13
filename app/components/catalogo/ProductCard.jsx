"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { tint } from "../../lib/colors";
import AddToListButton from "../lista/AddToListButton";

/**
 * Scheda prodotto.
 *
 * L'ingresso è una semplice animazione CSS che parte al mount (`animate-rise-in`):
 * niente IntersectionObserver, così i prodotti di un pannello sono sempre
 * visibili appena il tab viene selezionato, anche senza scorrere la pagina.
 *
 * La scheda ha due azioni distinte e mai annidate fra loro: il corpo apre la
 * modale, la pastiglia in alto a destra aggiunge/rimuove il prodotto dalla
 * lista richiesta.
 */
export default function ProductCard({
  item,
  accentColor,
  categoryLabel,
  index = 0,
  onOpen,
}) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div
      className="group relative flex animate-rise-in flex-col overflow-hidden rounded-card border border-line bg-surface shadow-soft transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:shadow-lifted"
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = tint(accentColor, 0.45);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
      }}
    >
      <button
        type="button"
        onClick={() => onOpen(item)}
        aria-label={`${item.name} — apri la scheda prodotto`}
        className="flex flex-1 flex-col text-left"
      >
        <span
          className="relative block aspect-[4/3] w-full overflow-hidden"
          style={{ backgroundColor: tint(accentColor, 0.08) }}
        >
          {item.img && !imgErr ? (
            <img
              src={item.img}
              alt=""
              loading="lazy"
              onError={() => setImgErr(true)}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
          ) : (
            <span
              aria-hidden="true"
              className="grid h-full w-full place-items-center font-display text-2xl font-bold"
              style={{ color: accentColor }}
            >
              M
            </span>
          )}

          {/* Affordance "apri scheda" */}
          <span
            aria-hidden="true"
            className="absolute bottom-2.5 right-2.5 grid h-8 w-8 place-items-center rounded-full bg-surface/95 opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            style={{ color: accentColor }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </span>

        <span className="flex flex-1 flex-col gap-2 p-4">
          <span className="font-sans text-[0.9375rem] font-bold leading-snug text-ink">
            {item.name}
          </span>
          <span className="line-clamp-2 font-sans text-[0.8125rem] leading-relaxed text-ink-soft">
            {item.desc}
          </span>
          {item.tags?.length > 0 && (
            <span className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
              {item.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-1 font-sans text-[0.625rem] font-bold leading-none"
                  style={{
                    color: accentColor,
                    backgroundColor: tint(accentColor, 0.1),
                    boxShadow: `inset 0 0 0 1px ${tint(accentColor, 0.22)}`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </span>
          )}
        </span>
      </button>

      <AddToListButton
        item={item}
        accentColor={accentColor}
        categoryLabel={categoryLabel}
        className="absolute right-2.5 top-2.5 z-10"
      />
    </div>
  );
}
