"use client";

import { COLORS } from "../../lib/colors";
import ProductCard from "./ProductCard";

export default function SubCategoryBlock({ sub, accentColor, inView, subIndex, onOpenModal }) {
  return (
    <div style={{
      marginBottom: 44,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: `all 0.6s ease ${subIndex * 0.08}s`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ width: 4, height: 18, background: accentColor, borderRadius: 2 }} />
        <h4 style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: 16, fontWeight: 700, color: COLORS.charcoal, margin: 0,
        }}>{sub.title}</h4>
        <div style={{ flex: 1, height: 1, background: COLORS.lightGray }} />
        <span style={{
          fontFamily: "var(--font-dmsans), sans-serif", fontSize: 10,
          color: COLORS.gray, letterSpacing: "0.06em",
          background: COLORS.lightGray, padding: "2px 8px", borderRadius: 10,
        }}>{sub.items.length}</span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
        gap: 12,
      }}>
        {sub.items.map((item, i) => (
          <ProductCard
            key={i} item={item} accentColor={accentColor}
            delay={subIndex * 0.04 + i * 0.04}
            inView={inView}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </div>
  );
}
