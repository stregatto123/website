"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS } from "../lib/colors";

const links = [
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/catalogo", label: "Catalogo" },
  { href: "/contatti", label: "Contatti" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const dark = scrolled || pathname !== "/";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: dark ? "rgba(250,246,238,0.97)" : "transparent",
      backdropFilter: dark ? "blur(12px)" : "none",
      boxShadow: dark ? "0 1px 24px rgba(0,0,0,0.07)" : "none",
      transition: "all 0.4s", padding: "0 2rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: scrolled ? 64 : 80, transition: "height 0.4s",
      }}>
        <Link href="/" onClick={() => setOpen(false)} style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "none", border: "none", cursor: "pointer", padding: 0,
          textDecoration: "none",
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: `linear-gradient(135deg,${COLORS.olive},${COLORS.oliveLight})`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>M</span>
          </div>
          <span style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: 22, fontWeight: 700, letterSpacing: "0.02em",
            color: dark ? COLORS.oliveDark : "#fff",
            transition: "color 0.4s",
          }}>Maiori</span>
        </Link>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "" : "nav-link"} style={{
              fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.07em", textTransform: "uppercase",
              background: "none", border: "none", cursor: "pointer",
              color: pathname === l.href ? COLORS.olive : (dark ? COLORS.charcoal : "rgba(255,255,255,0.85)"),
              borderBottom: pathname === l.href ? `2px solid ${COLORS.olive}` : "2px solid transparent",
              paddingBottom: 2, transition: "color 0.25s",
              textDecoration: "none",
            }}>{l.label}</Link>
          ))}
          <Link href="/contatti" className="btn-lift" style={{
            background: COLORS.gold, color: COLORS.oliveDark,
            padding: "10px 22px", borderRadius: 4,
            fontFamily: "var(--font-dmsans), sans-serif", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.09em", textTransform: "uppercase",
            border: "none", cursor: "pointer",
            textDecoration: "none",
          }}>Richiedi Preventivo</Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", padding: 10,
            width: 44, height: 44,
            flexDirection: "column", alignItems: "center", justifyContent: "center",
          }} className="burger">
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 24, height: 2, marginBottom: i < 2 ? 5 : 0,
              background: dark ? COLORS.charcoal : "#fff",
            }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{
          background: COLORS.cream, padding: "1.5rem 2rem",
          borderTop: `1px solid ${COLORS.lightGray}`,
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: "var(--font-dmsans), sans-serif", fontSize: 16,
              color: pathname === l.href ? COLORS.olive : COLORS.charcoal,
              fontWeight: pathname === l.href ? 700 : 500,
              background: "none", border: "none", cursor: "pointer",
              textAlign: "left", padding: "4px 0",
              textDecoration: "none",
            }}>{l.label}</Link>
          ))}
          <Link href="/contatti" onClick={() => setOpen(false)} style={{
            background: COLORS.olive, color: "#fff",
            padding: "13px", borderRadius: 4, textAlign: "center",
            fontFamily: "var(--font-dmsans), sans-serif", fontSize: 14, fontWeight: 700,
            border: "none", cursor: "pointer", marginTop: 4,
            textDecoration: "none", display: "block",
          }}>Richiedi Preventivo →</Link>
        </div>
      )}

      <style>{`
        @media(max-width:768px){.desktop-nav{display:none!important}.burger{display:flex!important}}
      `}</style>
    </nav>
  );
}
