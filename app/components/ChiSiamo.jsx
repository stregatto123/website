"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "../lib/useInView";
import { COLORS } from "../lib/colors";

function FadeImg({ src }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) setLoaded(true);
  }, []);
  return (
    <img ref={imgRef} src={src} alt="" onLoad={() => setLoaded(true)}
      style={{
        width: "100%", height: "100%", objectFit: "cover",
        opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease",
      }} />
  );
}

export default function ChiSiamo({ standalone = false }) {
  const [ref, inView] = useInView();
  return (
    <section id="chi-siamo" style={{ scrollMarginTop: 80, background: standalone ? COLORS.warmWhite : COLORS.cream, padding: "88px 2rem" }}>
      <div ref={ref} style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
      }} className="chi-siamo-grid">
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s ease",
        }}>
          <div style={{ fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: COLORS.tomato, textTransform: "uppercase", marginBottom: 16 }}>
            Chi Siamo
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(28px,4vw,40px)",
            fontWeight: 700, color: COLORS.charcoal, margin: "0 0 20px", lineHeight: 1.2,
          }}>Qualità che si sente,<br />ad ogni consegna.</h2>
          <p style={{ fontFamily: "var(--font-dmsans), sans-serif", fontSize: 15, lineHeight: 1.8, color: COLORS.gray, marginBottom: 16 }}>
            Ingrosso Alimentari MAIORI nasce dalla passione per l'eccellenza alimentare e dalla conoscenza diretta del mondo della ristorazione. Selezioniamo ogni referenza con cura, dai latticini freschi ai salumi stagionati, fino alle conserve di qualità.
          </p>
          <p style={{ fontFamily: "var(--font-dmsans), sans-serif", fontSize: 15, lineHeight: 1.8, color: COLORS.gray, marginBottom: 36 }}>
            Un fornitore che conosce le tue esigenze. Un referente dedicato per ogni cliente, nessun call center.
          </p>
          {[["🌿", "Filiere selezionate"], ["📦", "Ampio assortimento per la ristorazione"], ["🤝", "Referente dedicato"]].map(([ic, la], i) => (
            <div key={la} style={{
              display: "flex", alignItems: "center", gap: 14, marginBottom: 16,
              paddingBottom: 16, borderBottom: i < 2 ? `1px solid ${COLORS.lightGray}` : "none",
              opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-12px)",
              transition: `all 0.5s ease ${0.15 + i * 0.12}s`,
            }}>
              <span style={{ fontSize: 20 }}>{ic}</span>
              <span style={{ fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13, color: COLORS.charcoal, fontWeight: 600 }}>{la}</span>
            </div>
          ))}
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
          opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.15s",
        }}>
          {["/images/bufala.png", "/images/salame.png", "/images/bresaola.png", "/images/scamorza.png"].map((img, i) => (
            <div key={i} style={{ borderRadius: 8, overflow: "hidden", height: 170 }}>
              <FadeImg src={img} />
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:800px){.chi-siamo-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
