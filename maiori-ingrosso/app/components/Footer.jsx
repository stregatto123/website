"use client";

import { COLORS } from "../lib/colors";

export default function Footer() {
  return (
    <footer style={{ background: COLORS.oliveDark, padding: "44px 2rem 28px" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        flexWrap: "wrap", gap: 32, marginBottom: 36,
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 30, height: 30, borderRadius: "50%", background: COLORS.gold,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: COLORS.oliveDark, fontWeight: 800, fontSize: 13 }}>M</span>
            </div>
            <span style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: 19, fontWeight: 700, color: "#fff",
            }}>Maiori</span>
          </div>
          <p style={{
            fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13,
            lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: 270,
          }}>
            Ingrosso Alimentari MAIORI — fornitore B2B di latticini, salumi e conserve per pizzerie e ristorazione.
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          {[
            { title: "Navigazione", links: [["Chi Siamo", "/chi-siamo"], ["Catalogo", "/catalogo"], ["Contatti", "/contatti"]] },
            { title: "Categorie", links: [["Latticini", "/catalogo"], ["Salumi", "/catalogo"], ["Scatolame", "/catalogo"]] },
          ].map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily: "var(--font-dmsans), sans-serif", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.14em", color: COLORS.goldLight,
                textTransform: "uppercase", marginBottom: 14,
              }}>{col.title}</div>
              {col.links.map(([label, href]) => (
                <a key={label} href={href} style={{
                  display: "block",
                  fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13,
                  marginBottom: 9, color: "rgba(255,255,255,0.5)",
                  transition: "color 0.2s", textDecoration: "none",
                }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                >{label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20,
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10,
        fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)",
      }}>
        <span>© {new Date().getFullYear()} Ingrosso Alimentari MAIORI — Tutti i diritti riservati</span>
        <span>P.IVA: [P.IVA da inserire] — [Indirizzo da inserire]</span>
      </div>
    </footer>
  );
}
