"use client";

import { COLORS } from "../../lib/colors";
import ProductCard from "./ProductCard";
import products from "../../lib/products";

export default function SearchResults({ query, onOpenModal }) {
  const results = [];
  Object.values(products).forEach(cat => {
    cat.subcategories.forEach(sub => {
      sub.items.forEach(item => {
        if (item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))) {
          results.push({ item, color: cat.color });
        }
      });
    });
  });

  if (results.length === 0) return (
    <div style={{ textAlign: "center", padding: "60px 0", color: COLORS.gray, fontFamily: "var(--font-dmsans), sans-serif" }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
      <div style={{ fontSize: 15 }}>Nessun prodotto trovato per "<strong>{query}</strong>"</div>
    </div>
  );

  return (
    <div style={{ padding: "24px 0" }}>
      <div style={{
        fontFamily: "var(--font-dmsans), sans-serif", fontSize: 12,
        color: COLORS.gray, marginBottom: 20, letterSpacing: "0.04em",
      }}>{results.length} risultati per "<strong style={{ color: COLORS.charcoal }}>{query}</strong>"</div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
        gap: 12,
      }}>
        {results.map(({ item, color }, i) => (
          <ProductCard
            key={i} item={item} accentColor={color}
            delay={i * 0.03} inView={true} onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </div>
  );
}
