"use client";

import ProductCard from "./ProductCard";
import { tint } from "../../lib/colors";

export default function SubCategoryBlock({
  sub,
  accentColor,
  categoryLabel,
  onOpen,
  slug,
}) {
  return (
    <section id={slug} className="scroll-mt-44">
      <header className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-5 w-1 shrink-0 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        <h3 className="font-display text-lg font-bold leading-tight text-ink">
          {sub.title}
        </h3>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-line sm:block" />
        <span
          className="shrink-0 rounded-full px-2.5 py-1 font-sans text-[0.625rem] font-bold leading-none"
          style={{ color: accentColor, backgroundColor: tint(accentColor, 0.1) }}
        >
          {sub.items.length} prodotti
        </span>
      </header>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {sub.items.map((item, i) => (
          <ProductCard
            key={`${sub.title}-${item.name}-${i}`}
            item={item}
            accentColor={accentColor}
            categoryLabel={categoryLabel}
            index={i}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}
