"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-zinc-800 font-medium">Richiesta inviata, grazie!</p>
        <p className="mt-1 text-sm text-zinc-600">Ti risponderemo al più presto con il listino e le informazioni richieste.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <label className="text-sm">
        <span className="block mb-1 text-zinc-700">Nome e cognome</span>
        <input required type="text" className="w-full rounded-2xl border border-zinc-300 px-3 py-2" value={form.name} onChange={update("name")} />
      </label>
      <label className="text-sm">
        <span className="block mb-1 text-zinc-700">Attività / Ragione sociale</span>
        <input type="text" className="w-full rounded-2xl border border-zinc-300 px-3 py-2" value={form.company} onChange={update("company")} />
      </label>
      <label className="text-sm">
        <span className="block mb-1 text-zinc-700">Email</span>
        <input required type="email" className="w-full rounded-2xl border border-zinc-300 px-3 py-2" value={form.email} onChange={update("email")} />
      </label>
      <label className="text-sm">
        <span className="block mb-1 text-zinc-700">Telefono</span>
        <input type="tel" className="w-full rounded-2xl border border-zinc-300 px-3 py-2" value={form.phone} onChange={update("phone")} />
      </label>
      <label className="text-sm sm:col-span-2">
        <span className="block mb-1 text-zinc-700">Messaggio</span>
        <textarea rows={4} className="w-full rounded-2xl border border-zinc-300 px-3 py-2" placeholder="Es. Vorrei ricevere il listino prezzi per la mia pizzeria" value={form.message} onChange={update("message")} />
      </label>
      <div className="sm:col-span-2 flex items-center gap-3">
        <button type="submit" disabled={status === "sending"} className="rounded-2xl bg-amber-600 px-5 py-3 text-white font-medium shadow hover:bg-amber-700 disabled:opacity-60">
          {status === "sending" ? "Invio in corso..." : "Richiedi il listino"}
        </button>
        {status === "error" && <span className="text-sm text-red-600">Errore nell'invio, riprova o scrivici via email.</span>}
      </div>
    </form>
  );
}
