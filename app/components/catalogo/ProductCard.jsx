"use client";

import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../lib/colors";

export default function ProductCard({ item, accentColor, delay, inView, onOpenModal }) {
  const [imgErr, setImgErr] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hover, setHover] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) setImgLoaded(true);
  }, []);

  return (
    <div
      onClick={() => onOpenModal(item)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 12, overflow: "hidden",
        background: "#fff",
        border: `1px solid ${hover ? accentColor : COLORS.lightGray}`,
        boxShadow: hover ? `0 12px 36px rgba(0,0,0,0.1)` : "0 2px 8px rgba(0,0,0,0.05)",
        transform: hover ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.25s ease",
        cursor: "pointer",
        opacity: inView ? 1 : 0,
        transitionDelay: inView ? `${delay}s` : "0s",
        display: "flex", flexDirection: "column",
      }}>
      {/* Image */}
      <div style={{ height: 150, overflow: "hidden", position: "relative", background: `${accentColor}10`, flexShrink: 0 }}>
        {item.img && !imgErr ? (
          <img ref={imgRef} src={item.img} alt={item.name} onError={() => setImgErr(true)} onLoad={() => setImgLoaded(true)}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              opacity: imgLoaded ? 1 : 0,
              transform: hover ? "scale(1.06)" : imgLoaded ? "scale(1)" : "scale(1.03)",
              transition: "transform 0.4s ease, opacity 0.35s ease",
            }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>
            {accentColor === COLORS.gold ? "🧀" : accentColor === COLORS.tomato ? "🥩" : "🍅"}
          </div>
        )}
        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `${accentColor}22`,
          opacity: hover ? 1 : 0, transition: "opacity 0.25s",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            background: "#fff", borderRadius: 20, padding: "5px 14px",
            fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11,
            fontWeight: 700, color: accentColor,
          }}>Dettagli →</div>
        </div>
      </div>

      {/* Name + tags */}
      <div style={{ padding: "12px 13px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: 13, fontWeight: 700, color: COLORS.charcoal, lineHeight: 1.35,
        }}>{item.name}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {item.tags.slice(0, 2).map(t => (
            <span key={t} style={{
              background: `${accentColor}12`, border: `1px solid ${accentColor}28`,
              color: accentColor, padding: "2px 7px", borderRadius: 100,
              fontFamily: "var(--font-dmsans), sans-serif", fontSize: 9, fontWeight: 700,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
