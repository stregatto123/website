"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import * as Tabs from "@radix-ui/react-tabs";
import { Search, X } from "lucide-react";
import products from "../../lib/products";
import { slugify } from "../../lib/slugify";
import { cn } from "../../lib/cn";
import { tint } from "../../lib/colors";
import CategoryPanel from "./CategoryPanel";
import SearchResults from "./SearchResults";
import ProductModal from "./ProductModal";

const CATEGORY_KEYS = Object.keys(products);

const countItems = (category) =>
  category.subcategories.reduce((acc, sub) => acc + sub.items.length, 0);

/** Normalizza per la ricerca: minuscole e senza accenti. */
const normalize = (value) =>
  String(value)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export default function Catalogo() {
  const searchParams = useSearchParams();
  const requestedCat = searchParams.get("cat");

  const [activeTab, setActiveTab] = useState(
    CATEGORY_KEYS.includes(requestedCat) ? requestedCat : CATEGORY_KEYS[0]
  );
  const [subFilter, setSubFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  // Permette di arrivare su una categoria specifica da /catalogo?cat=salumi
  useEffect(() => {
    if (CATEGORY_KEYS.includes(requestedCat)) {
      setActiveTab(requestedCat);
      setSubFilter("all");
    }
  }, [requestedCat]);

  const totalProducts = useMemo(
    () => Object.values(products).reduce((acc, cat) => acc + countItems(cat), 0),
    []
  );

  const trimmed = query.trim();
  const searching = trimmed.length > 0;

  const results = useMemo(() => {
    if (!searching) return [];
    const needle = normalize(trimmed);
    const found = [];
    Object.values(products).forEach((category) => {
      category.subcategories.forEach((sub) => {
        sub.items.forEach((item) => {
          const haystack = normalize(
            [item.name, item.desc, sub.title, ...(item.tags || [])].join(" ")
          );
          if (haystack.includes(needle)) {
            found.push({
              item,
              color: category.color,
              categoryLabel: category.label,
            });
          }
        });
      });
    });
    return found;
  }, [searching, trimmed]);

  const activeCategory = products[activeTab];

  function handleTabChange(next) {
    setActiveTab(next);
    setSubFilter("all");
    // Mantiene l'URL condivisibile senza forzare un nuovo render del router.
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("cat", next);
      window.history.replaceState(null, "", url);
    }
  }

  return (
    <>
      {/* Intestazione */}
      <section className="on-dark relative isolate overflow-hidden bg-brand-900 text-white grain">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl"
        />
        <div className="shell relative z-10 pb-12 pt-[calc(var(--nav-h)+2.5rem)]">
          <p className="eyebrow eyebrow-rule text-brass">Il nostro assortimento</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em]">
              Catalogo prodotti
            </h1>
            <p className="font-sans text-sm text-white/60">
              {totalProducts} referenze · prezzi riservati ai professionisti
            </p>
          </div>

          <div className="relative mt-8 max-w-xl">
            <label htmlFor="catalogo-search" className="sr-only">
              Cerca un prodotto nel catalogo
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45"
            />
            <input
              id="catalogo-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca un prodotto… es. mozzarella, tonno, crudo"
              className="min-h-[52px] w-full rounded-full border border-white/20 bg-white/10 pl-12 pr-12 font-sans text-[0.9375rem] text-white outline-none transition placeholder:text-white/45 focus:border-brass/70 focus:bg-white/15 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Cancella la ricerca"
                className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Tab categorie + filtri sottocategoria */}
      <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
        <div className="sticky top-[var(--nav-h)] z-30 border-b border-line bg-paper/95 backdrop-blur-md">
          <div className="shell">
            {searching ? (
              <div className="flex min-h-[60px] flex-wrap items-center justify-between gap-3 py-3">
                <p className="font-sans text-sm text-ink-soft" aria-live="polite">
                  <strong className="font-bold text-ink">{results.length}</strong>{" "}
                  {results.length === 1 ? "risultato" : "risultati"} per «
                  <strong className="font-bold text-ink">{trimmed}</strong>»
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="inline-flex min-h-[44px] items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-[0.08em] text-accent"
                >
                  <X aria-hidden="true" className="h-3.5 w-3.5" />
                  Torna alle categorie
                </button>
              </div>
            ) : (
              <Tabs.List
                aria-label="Categorie di prodotto"
                className="-mx-1 flex gap-1 overflow-x-auto py-2.5"
              >
                {CATEGORY_KEYS.map((key) => {
                  const category = products[key];
                  const active = activeTab === key;
                  return (
                    <Tabs.Trigger
                      key={key}
                      value={key}
                      className={cn(
                        "group inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 font-sans text-[0.8125rem] font-bold transition-colors",
                        active ? "text-white" : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                      )}
                      style={active ? { backgroundColor: category.color } : undefined}
                    >
                      {category.label}
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[0.625rem] leading-none",
                          active ? "bg-white/20 text-white" : "bg-ink/8 text-ink-soft"
                        )}
                      >
                        {countItems(category)}
                      </span>
                    </Tabs.Trigger>
                  );
                })}
              </Tabs.List>
            )}
          </div>
        </div>

        <div className="bg-paper pb-24 pt-10">
          <div className="shell">
            {searching ? (
              <SearchResults
                query={trimmed}
                results={results}
                onOpen={setSelected}
                onReset={() => setQuery("")}
              />
            ) : (
              <>
                {/* Filtri rapidi per sottocategoria */}
                <div className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                  {[{ slug: "all", title: "Tutte le sottocategorie" }]
                    .concat(
                      activeCategory.subcategories.map((sub) => ({
                        slug: slugify(sub.title),
                        title: sub.title,
                      }))
                    )
                    .map((chip) => {
                      const active = subFilter === chip.slug;
                      return (
                        <button
                          key={chip.slug}
                          type="button"
                          onClick={() => setSubFilter(chip.slug)}
                          aria-pressed={active}
                          className={cn(
                            "inline-flex min-h-[38px] shrink-0 items-center rounded-full border px-3.5 font-sans text-xs font-semibold transition-colors",
                            active
                              ? "border-transparent text-white"
                              : "border-line bg-surface text-ink-soft hover:border-ink/25 hover:text-ink"
                          )}
                          style={
                            active
                              ? { backgroundColor: activeCategory.color }
                              : undefined
                          }
                        >
                          {chip.title}
                        </button>
                      );
                    })}
                </div>

                {CATEGORY_KEYS.map((key) => (
                  <Tabs.Content key={key} value={key} className="outline-none">
                    <CategoryPanel
                      category={products[key]}
                      subFilter={subFilter}
                      onOpen={setSelected}
                    />
                  </Tabs.Content>
                ))}

                <p
                  className="mt-16 rounded-card border px-5 py-4 font-sans text-sm leading-relaxed text-ink-soft"
                  style={{
                    borderColor: tint(activeCategory.color, 0.25),
                    backgroundColor: tint(activeCategory.color, 0.06),
                  }}
                >
                  Non trovi una referenza? L&apos;assortimento è più ampio di
                  quanto pubblicato:{" "}
                  <Link href="/contatti" className="font-bold text-accent underline underline-offset-2">
                    scrivici
                  </Link>{" "}
                  e verifichiamo la disponibilità.
                </p>
              </>
            )}
          </div>
        </div>
      </Tabs.Root>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
