"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COLORS } from "../lib/colors";

export default function Hero() {
  const [on, setOn] = useState(false);
  useEffect(() => { setTimeout(() => setOn(true), 100); }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh", background: COLORS.oliveDark,
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "45%",
        display: "grid", gridTemplateRows: "1fr 1fr", gap: 2, opacity: 0.5,
      }}>
        <div style={{ overflow: "hidden" }}>
          <img src="/images/mozzarella-hero.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ overflow: "hidden" }}>
          <img src="/images/salame.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${COLORS.oliveDark} 0%, transparent 55%)` }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 2rem 80px", position: "relative", zIndex: 2, width: "100%" }}>
        <div style={{ maxWidth: 600 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
            opacity: on ? 1 : 0, transition: "opacity 0.6s 0.1s",
          }}>
            <div style={{ width: 32, height: 2, background: COLORS.gold }} />
            <span style={{ fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11, letterSpacing: "0.15em", color: COLORS.gold, textTransform: "uppercase" }}>
              Fornitore B2B · Pizzerie & Ristorazione
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(38px,6vw,64px)",
            fontWeight: 700, lineHeight: 1.1,
            color: "#fff", margin: "0 0 24px",
            opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s 0.2s",
          }}>
            L'ingrediente giusto,<br />ogni volta.
          </h1>

          <p style={{
            fontFamily: "var(--font-dmsans), sans-serif", fontSize: 16, lineHeight: 1.75,
            color: "rgba(255,255,255,0.75)", margin: "0 0 40px", maxWidth: 460,
            opacity: on ? 1 : 0, transition: "all 0.8s 0.35s",
          }}>
            Latticini freschi, salumi selezionati, conserve di qualità.
            110 referenze per pizzerie e ristoranti.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", opacity: on ? 1 : 0, transition: "all 0.8s 0.5s" }}>
            <Link href="/catalogo" style={{
              background: COLORS.gold, color: COLORS.oliveDark,
              padding: "14px 30px", borderRadius: 4,
              fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13, fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none",
            }}>Scopri il Catalogo</Link>
            <Link href="/contatti" style={{
              border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff",
              padding: "14px 30px", borderRadius: 4,
              fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none",
            }}>Contattaci</Link>
          </div>

          <div style={{
            display: "flex", gap: 0, marginTop: 64,
            borderTop: "1px solid rgba(255,255,255,0.15)",
            opacity: on ? 1 : 0, transition: "all 0.8s 0.65s",
          }}>
            {[["110", "Referenze"], ["3", "Categorie"]].map(([n, l], i) => (
              <div key={i} style={{
                flex: 1, padding: "22px 0",
                borderRight: i < 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                paddingLeft: i > 0 ? 24 : 0,
              }}>
                <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 30, fontWeight: 700, color: COLORS.gold }}>{n}</div>
                <div style={{ fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
