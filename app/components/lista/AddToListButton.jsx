"use client";

import { Check, Plus } from "lucide-react";
import { productId, toListEntry } from "../../lib/requestList";
import { tint } from "../../lib/colors";
import { cn } from "../../lib/cn";
import { useRequestList } from "./RequestListProvider";

/**
 * Aggiunge/rimuove un prodotto dalla lista richiesta.
 *
 * Due vesti, stessa logica:
 * - `icon`  → pastiglia 44×44 sulla scheda prodotto in griglia;
 * - `full`  → bottone con etichetta dentro la modale.
 *
 * Lo stato è comunicato anche a chi non vede i colori: `aria-pressed` più
 * un'etichetta che cambia ("Aggiungi…" / "Rimuovi…").
 */
export default function AddToListButton({
  item,
  accentColor = "#1E6B58",
  categoryLabel,
  variant = "icon",
  className,
}) {
  const { has, toggle, ready } = useRequestList();
  const inList = ready && has(productId(item));

  const label = inList
    ? `Rimuovi ${item.name} dalla lista richiesta`
    : `Aggiungi ${item.name} alla lista richiesta`;

  function onClick() {
    toggle(toListEntry(item, { categoryLabel, color: accentColor }));
  }

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={inList}
        aria-label={label}
        className={cn(
          "btn w-full border transition-colors",
          inList
            ? "border-transparent text-white"
            : "border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5",
          className
        )}
        style={inList ? { backgroundColor: accentColor } : undefined}
      >
        {inList ? (
          <Check aria-hidden="true" className="h-4 w-4" />
        ) : (
          <Plus aria-hidden="true" className="h-4 w-4" />
        )}
        {inList ? "Nella lista" : "Aggiungi alla lista"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={inList}
      aria-label={label}
      className={cn(
        "grid h-11 w-11 place-items-center rounded-full border shadow-soft backdrop-blur-sm transition-[background-color,color,transform] duration-200 active:scale-95",
        inList ? "border-transparent text-white" : "bg-surface/95 hover:bg-surface",
        className
      )}
      style={
        inList
          ? { backgroundColor: accentColor }
          : { color: accentColor, borderColor: tint(accentColor, 0.28) }
      }
    >
      {inList ? (
        <Check aria-hidden="true" className="h-5 w-5" />
      ) : (
        <Plus aria-hidden="true" className="h-5 w-5" />
      )}
    </button>
  );
}
