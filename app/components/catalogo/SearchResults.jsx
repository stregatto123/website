"use client";

import { SearchX } from "lucide-react";
import ProductCard from "./ProductCard";

export default function SearchResults({ query, results, onOpen, onReset }) {
  if (results.length === 0) {
    return (
      <div className="mx-auto max-w-md rounded-card border border-line bg-surface px-6 py-14 text-center shadow-soft">
        <SearchX aria-hidden="true" className="mx-auto h-9 w-9 text-ink-soft/50" />
        <p className="mt-4 font-display text-lg font-bold text-ink">
          Nessun prodotto trovato
        </p>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
          Non ci sono risultati per «{query}». Prova con un termine più
          generico, oppure scrivici: l&apos;assortimento è più ampio di quanto
          pubblicato.
        </p>
        <button type="button" onClick={onReset} className="btn-ghost mt-6">
          Azzera la ricerca
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {results.map((result, i) => (
        <ProductCard
          key={`${result.item.name}-${i}`}
          item={result.item}
          accentColor={result.color}
          index={i}
          onOpen={() => onOpen(result)}
        />
      ))}
    </div>
  );
}
