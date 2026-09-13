"use client";

import { useRef, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const FIELDS = [
  {
    key: "nome",
    label: "Nome e cognome",
    type: "text",
    placeholder: "Mario Esposito",
    autoComplete: "name",
    required: true,
  },
  {
    key: "azienda",
    label: "Attività / ragione sociale",
    type: "text",
    placeholder: "La Pizzeria di Mario",
    autoComplete: "organization",
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    placeholder: "mario@lapizzeria.it",
    autoComplete: "email",
    required: true,
  },
  {
    key: "telefono",
    label: "Telefono",
    type: "tel",
    placeholder: "+39 340 000 0000",
    autoComplete: "tel",
  },
];

const EMPTY = { nome: "", email: "", telefono: "", azienda: "", messaggio: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const confirmRef = useRef(null);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      // Porta il lettore di schermo e il focus sulla conferma.
      requestAnimationFrame(() => confirmRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        ref={confirmRef}
        tabIndex={-1}
        role="status"
        className="card p-8 text-center sm:p-10"
      >
        <CheckCircle2
          aria-hidden="true"
          className="mx-auto h-12 w-12 text-brand-500"
        />
        <h3 className="mt-5 font-display text-xl font-bold text-ink">
          Richiesta inviata
        </h3>
        <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
          Ti ricontattiamo al più presto con il preventivo e le disponibilità.
          Grazie per aver scelto Ingrosso Alimentari MAIORI.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setStatus("idle");
          }}
          className="btn-ghost mt-7"
        >
          Invia un&apos;altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="card p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold text-ink">
        Richiedi un preventivo
      </h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
        Compila il modulo: ti rispondiamo con le condizioni dedicate alla tua
        attività. I campi con <span aria-hidden="true">*</span>
        <span className="sr-only">asterisco</span> sono obbligatori.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.key}>
            <label htmlFor={`lead-${field.key}`} className="field-label">
              {field.label}
              {field.required && (
                <>
                  {" "}
                  <span aria-hidden="true" className="text-accent">
                    *
                  </span>
                </>
              )}
            </label>
            <input
              id={`lead-${field.key}`}
              name={field.key}
              type={field.type}
              value={form[field.key]}
              onChange={update(field.key)}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required={field.required}
              aria-required={field.required || undefined}
              className="field"
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="lead-messaggio" className="field-label">
            Messaggio
          </label>
          <textarea
            id="lead-messaggio"
            name="messaggio"
            rows={4}
            value={form.messaggio}
            onChange={update("messaggio")}
            placeholder="Prodotti di interesse, volumi, frequenza delle consegne…"
            className="field resize-y"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
            Invio in corso…
          </>
        ) : (
          <>
            Invia richiesta
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </>
        )}
      </button>

      <p aria-live="polite" className="sr-only">
        {status === "sending" ? "Invio della richiesta in corso" : ""}
      </p>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-xl bg-accent-soft px-4 py-3 font-sans text-sm leading-relaxed text-[#7E3416]"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          Non siamo riusciti a inviare la richiesta. Riprova fra poco oppure
          contattaci direttamente ai recapiti qui a fianco.
        </p>
      )}

      <p className="mt-5 font-sans text-xs leading-relaxed text-ink-soft">
        I dati inviati servono solo a ricontattarti e non vengono condivisi con
        terze parti.
      </p>
    </form>
  );
}
