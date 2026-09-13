"use client";

import SubCategoryBlock from "./SubCategoryBlock";
import { slugify } from "../../lib/slugify";

/**
 * Pannello di una categoria: elenco delle sottocategorie (eventualmente
 * filtrate) con le relative griglie di prodotti.
 *
 * Il contenuto è sempre renderizzato quando il pannello è attivo — nessun
 * gating su IntersectionObserver — così i prodotti compaiono subito al
 * cambio di tab, senza bisogno di scorrere la pagina.
 */
export default function CategoryPanel({ category, subFilter, onOpen }) {
  const subs =
    subFilter === "all"
      ? category.subcategories
      : category.subcategories.filter((s) => slugify(s.title) === subFilter);

  if (subs.length === 0) return null;

  return (
    <div className="space-y-12 sm:space-y-14">
      {subs.map((sub) => (
        <SubCategoryBlock
          key={sub.title}
          sub={sub}
          slug={slugify(sub.title)}
          accentColor={category.color}
          categoryLabel={category.label}
          onOpen={(item) =>
            onOpen({
              item,
              color: category.color,
              categoryLabel: category.label,
            })
          }
        />
      ))}
    </div>
  );
}
