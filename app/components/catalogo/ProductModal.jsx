"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { COLORS } from "../../lib/colors";

export default function ProductModal({ item, accentColor, onClose }) {
  const [imgErr, setImgErr] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) setImgLoaded(true);
  }, []);

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 500,
      background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "1rem",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fff", borderRadius: 16,
        maxWidth: 480, width: "100%",
        boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
        overflow: "hidden",
        animation: "modalIn 0.25s ease",
      }}>
        {/* Image */}
        <div style={{ height: 220, overflow: "hidden", position: "relative", background: `${accentColor}12` }}>
          {item.img && !imgErr ? (
            <img ref={imgRef} src={item.img} alt={item.name} onError={() => setImgErr(true)} onLoad={() => setImgLoaded(true)}
              style={{
                width: "100%", height: "100%", objectFit: "cover",
                opacity: imgLoaded ? 1 : 0, transition: "opacity 0.4s ease",
              }} />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>
              {accentColor === COLORS.gold ? "🧀" : accentColor === COLORS.tomato ? "🥩" : "🍅"}
            </div>
          )}
          {/* Color bar */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: accentColor }} />
          {/* Close btn */}
          <button onClick={onClose} aria-label="Chiudi" style={{
            position: "absolute", top: 8, right: 8,
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(0,0,0,0.4)", border: "none", cursor: "pointer",
            color: "#fff", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
          }}>✕</button>
        </div>

        {/* Content */}
        <div style={{ padding: "24px 24px 28px" }}>
          <h3 style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: 20, fontWeight: 700, color: COLORS.charcoal,
            margin: "0 0 10px", lineHeight: 1.3,
          }}>{item.name}</h3>
          <p style={{
            fontFamily: "var(--font-dmsans), sans-serif",
            fontSize: 14, lineHeight: 1.75, color: COLORS.gray,
            margin: "0 0 18px",
          }}>{item.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {item.tags.map(t => (
              <span key={t} style={{
                background: `${accentColor}12`, border: `1px solid ${accentColor}35`,
                color: accentColor, padding: "4px 12px", borderRadius: 100,
                fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11, fontWeight: 700,
              }}>{t}</span>
            ))}
          </div>
          <Link href="/contatti" onClick={onClose} className="btn-lift" style={{
            display: "block", textAlign: "center",
            background: accentColor, color: "#fff",
            padding: "13px", borderRadius: 8,
            fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13,
            fontWeight: 700, letterSpacing: "0.07em",
            textDecoration: "none", textTransform: "uppercase",
          }}>Richiedi Preventivo →</Link>
        </div>
      </div>
      <style>{`@keyframes modalIn { from { opacity:0; transform:scale(0.93) translateY(16px); } to { opacity:1; transform:scale(1) translateY(0); } }`}</style>
    </div>
  );
}
