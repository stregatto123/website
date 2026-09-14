/**
 * Composizione del link "click to chat" di WhatsApp usato dalla lista
 * richiesta: nessun backend, il messaggio viaggia precompilato nell'URL.
 *
 * Nel messaggio non compaiono MAI prezzi — solo nome prodotto ed eventuale
 * formato/tag: il listino resta riservato ai clienti professionali.
 */

export const WHATSAPP_NUMBER = "393317496528";

// Nome di chi riceve i messaggi al numero sopra: apre il messaggio con un
// saluto diretto invece di un "Buongiorno" anonimo.
const RECIPIENT_NAME = "Valerio";

const OUTRO = "Grazie, resto in attesa di un vostro riscontro.";

/** Riga leggibile per un prodotto: nome + eventuale formato/tag. */
function formatEntry(entry, index) {
  const details = (entry.tags || []).filter(Boolean).join(" · ");
  return `${index + 1}. ${entry.name}${details ? ` — ${details}` : ""}`;
}

/**
 * Riga di apertura: saluto diretto + presentazione di chi scrive, se ha
 * lasciato nome e/o attività (entrambi facoltativi).
 */
function formatIntro({ name, business } = {}) {
  const who = [name, business].map((v) => (v || "").trim()).filter(Boolean);
  const presentation =
    who.length === 2
      ? `sono ${who[0]} di ${who[1]}, `
      : who.length === 1
        ? `sono ${who[0]}, `
        : "";
  return `Buongiorno ${RECIPIENT_NAME}, ${presentation}vi scrivo dal sito Ingrosso Alimentari MAIORI. Vorrei ricevere disponibilità e preventivo per questi prodotti:`;
}

/** Messaggio in chiaro (usato anche dai test manuali e dall'anteprima). */
export function formatRequestMessage(items, sender) {
  const lines = items.map(formatEntry).join("\n");
  return `${formatIntro(sender)}\n\n${lines}\n\n${OUTRO}`;
}

/**
 * URL wa.me con il messaggio precompilato.
 * Ritorna null se la lista è vuota, così la UI può disabilitare la CTA.
 */
export function buildWhatsAppUrl(items, sender) {
  if (!items || items.length === 0) return null;
  const text = encodeURIComponent(formatRequestMessage(items, sender));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
