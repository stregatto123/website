"use client";

import { useState } from "react";
import { COLORS } from "../../lib/colors";
import products from "../../lib/products";
import CategoryPanel from "./CategoryPanel";
import SearchResults from "./SearchResults";
import ProductModal from "./ProductModal";

const tabs = [
  { key: "latticini", label: "Latticini", icon: "🥛", color: COLORS.gold },
  { key: "salumi", label: "Salumi", icon: "🥩", color: COLORS.tomato },
  { key: "conserve", label: "Conserve", icon: "🍅", color: COLORS.olive },
];

export default function Catalogo() {
  const [activeTab, setActiveTab] = useState("latticini");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null); // { item, color }

  const totalProducts = Object.values(products).reduce((acc, cat) =>
    acc + cat.subcategories.reduce((a, s) => a + s.items.length, 0), 0);

  return (
    <section id="catalogo" style={{ scrollMarginTop: 72 }}>
      {/* Header */}
      <div style={{ background: COLORS.charcoal, padding: "64px 2rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 24, height: 2, background: COLORS.gold }} />
            <span style={{ fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: COLORS.gold, textTransform: "uppercase" }}>
              Il Nostro Assortimento
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px,4vw,46px)", fontWeight: 700,
              color: "#fff", margin: 0,
            }}>Catalogo Prodotti</h2>
            <span style={{
              fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13,
              color: "rgba(255,255,255,0.4)",
            }}>{totalProducts} referenze disponibili · prezzi su richiesta</span>
          </div>

          {/* Search bar */}
          <div style={{
            position: "relative", marginBottom: 32, maxWidth: 440,
          }}>
            <span style={{
              position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
              fontSize: 16, pointerEvents: "none",
            }}>🔍</span>
            <input
              type="text"
              placeholder="Cerca un prodotto... es. mozzarella, tonno"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", padding: "12px 16px 12px 42px",
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.15)",
                borderRadius: 8, outline: "none",
                fontFamily: "var(--font-dmsans), sans-serif", fontSize: 14,
                color: "#fff", boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "rgba(255,255,255,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
            />
            {search && (
              <button onClick={() => setSearch("")} style={{
                position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.5)", fontSize: 16,
              }}>✕</button>
            )}
          </div>

          {/* Tabs */}
          {!search && (
            <div style={{ display: "flex", gap: 0, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              {tabs.map(t => (
                <button key={t.key} onClick={() => setActiveTab(t.key)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "12px 28px 14px",
                  fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13, fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: activeTab === t.key ? t.color : "rgba(255,255,255,0.45)",
                  borderBottom: activeTab === t.key ? `2px solid ${t.color}` : "2px solid transparent",
                  marginBottom: -1, transition: "all 0.2s",
                  display: "flex", alignItems: "center", gap: 7,
                }}>
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                  <span style={{
                    background: activeTab === t.key ? `${t.color}22` : "rgba(255,255,255,0.08)",
                    color: activeTab === t.key ? t.color : "rgba(255,255,255,0.3)",
                    fontSize: 10, padding: "1px 7px", borderRadius: 10, fontWeight: 600,
                  }}>
                    {products[t.key].subcategories.reduce((a, s) => a + s.items.length, 0)}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ background: COLORS.warmWhite, minHeight: 400 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          {search ? (
            <SearchResults query={search} onOpenModal={(item) => setModal({ item, color: Object.values(products).find(c => c.subcategories.some(s => s.items.includes(item)))?.color || COLORS.olive })} />
          ) : (
            Object.entries(products).map(([key, data]) => (
              <CategoryPanel
                key={key} data={data}
                isActive={activeTab === key}
                onOpenModal={(item) => setModal({ item, color: data.color })}
              />
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <ProductModal
          item={modal.item}
          accentColor={modal.color}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
