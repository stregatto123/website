"use client";

import { useState } from "react";
import { useInView } from "../lib/useInView";
import { COLORS } from "../lib/colors";

export default function ContactForm() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", azienda: "", messaggio: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const inp = {
    width: "100%", padding: "13px 15px",
    background: COLORS.cream, border: `1px solid ${COLORS.lightGray}`,
    borderRadius: 6, outline: "none",
    fontFamily: "var(--font-dmsans), sans-serif", fontSize: 14, color: COLORS.charcoal,
    boxSizing: "border-box", transition: "border-color 0.2s",
  };

  async function handleSubmit() {
    if (!form.nome || !form.email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contatti" style={{ background: COLORS.warmWhite, padding: "100px 2rem" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72,
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease",
        }} className="cont-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <div style={{ width: 28, height: 2, background: COLORS.olive }} />
              <span style={{
                fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.14em", color: COLORS.olive, textTransform: "uppercase",
              }}>Contattaci</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 700,
              color: COLORS.charcoal, margin: "0 0 18px", lineHeight: 1.2,
            }}>Parliamo del tuo<br />
              <span style={{ color: COLORS.olive }}>fabbisogno</span></h2>
            <p style={{
              fontFamily: "var(--font-dmsans), sans-serif", fontSize: 15,
              lineHeight: 1.8, color: COLORS.gray, margin: "0 0 44px",
            }}>
              Richiedi un preventivo personalizzato, verifica la disponibilità dei prodotti
              o organizza la prima consegna.
            </p>

            {[
              { icon: "📞", label: "Telefono", val: "[Telefono da inserire]" },
              { icon: "✉️", label: "Email", val: "[Email da inserire]" },
              { icon: "📍", label: "Zona di distribuzione", val: "Area Campana — Napoli e provincia" },
              { icon: "🕐", label: "Orari", val: "[Orari da inserire]" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 8, flexShrink: 0,
                  background: `${COLORS.olive}12`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19,
                }}>{c.icon}</div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-dmsans), sans-serif", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.1em", color: COLORS.gray, textTransform: "uppercase", marginBottom: 2,
                  }}>{c.label}</div>
                  <div style={{
                    fontFamily: "var(--font-dmsans), sans-serif", fontSize: 14,
                    fontWeight: 500, color: COLORS.charcoal,
                  }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: COLORS.cream, border: `1px solid ${COLORS.lightGray}`,
            borderRadius: 12, padding: "40px 34px",
          }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h3 style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: 22, color: COLORS.charcoal, margin: "0 0 12px",
                }}>Richiesta inviata!</h3>
                <p style={{
                  fontFamily: "var(--font-dmsans), sans-serif", color: COLORS.gray,
                  fontSize: 14, lineHeight: 1.7,
                }}>Ti ricontatteremo al più presto.<br />Grazie per aver scelto Ingrosso Alimentari MAIORI.</p>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: 21, fontWeight: 700, color: COLORS.charcoal, margin: "0 0 6px",
                }}>Richiedi un preventivo</h3>
                <p style={{
                  fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13,
                  color: COLORS.gray, margin: "0 0 26px",
                }}>Compila il modulo, ti risponderemo al più presto.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { key: "nome", label: "Nome e Cognome *", type: "text", ph: "Mario Esposito" },
                    { key: "azienda", label: "Attività / Ragione sociale", type: "text", ph: "La Pizzeria di Mario" },
                    { key: "email", label: "Email *", type: "email", ph: "mario@lapizzeria.it" },
                    { key: "telefono", label: "Telefono", type: "tel", ph: "+39 340 000 0000" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{
                        fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11, fontWeight: 700,
                        color: COLORS.charcoal, display: "block", marginBottom: 5, letterSpacing: "0.05em",
                      }}>{f.label}</label>
                      <input
                        type={f.type} placeholder={f.ph}
                        value={form[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        onFocus={e => e.target.style.borderColor = COLORS.olive}
                        onBlur={e => e.target.style.borderColor = COLORS.lightGray}
                        style={inp}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{
                      fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11, fontWeight: 700,
                      color: COLORS.charcoal, display: "block", marginBottom: 5, letterSpacing: "0.05em",
                    }}>Messaggio</label>
                    <textarea
                      rows={4}
                      placeholder="Prodotti di interesse, volumi, frequenza consegne..."
                      value={form.messaggio}
                      onChange={e => setForm({ ...form, messaggio: e.target.value })}
                      onFocus={e => e.target.style.borderColor = COLORS.olive}
                      onBlur={e => e.target.style.borderColor = COLORS.lightGray}
                      style={{ ...inp, resize: "vertical" }}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    style={{
                      background: form.nome && form.email ? COLORS.olive : "#ccc",
                      color: "#fff", padding: "14px", borderRadius: 6,
                      fontFamily: "var(--font-dmsans), sans-serif", fontSize: 13, fontWeight: 700,
                      letterSpacing: "0.09em", border: "none", textTransform: "uppercase",
                      cursor: form.nome && form.email ? "pointer" : "default", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { if (form.nome && form.email) e.target.style.background = COLORS.oliveDark; }}
                    onMouseLeave={e => { if (form.nome && form.email) e.target.style.background = COLORS.olive; }}
                  >{status === "sending" ? "Invio in corso..." : "Invia Richiesta →"}</button>
                  {status === "error" && (
                    <p style={{ fontFamily: "var(--font-dmsans), sans-serif", fontSize: 12, color: COLORS.tomato, textAlign: "center", margin: 0 }}>
                      Errore nell'invio, riprova o scrivici direttamente.
                    </p>
                  )}
                  <p style={{
                    fontFamily: "var(--font-dmsans), sans-serif", fontSize: 11,
                    color: COLORS.gray, textAlign: "center", margin: 0,
                  }}>I dati non verranno condivisi con terze parti.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.cont-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}
