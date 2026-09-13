/**
 * Composizione del link "click to chat" di WhatsApp usato dalla lista
 * richiesta: nessun backend, il messaggio viaggia precompilato nell'URL.
 *
 * Nel messaggio non compaiono MAI prezzi — solo nome prodotto ed eventuale
 * formato/tag: il listino resta riservato ai clienti professionali.
 */

// TODO: sostituire con il numero WhatsApp reale dell'attività.
// Formato internazionale senza "+", spazi o trattini (prefisso paese + numero,
// es. 39 seguito dal numero italiano). Il valore qui sotto è un SEGNAPOSTO
// fittizio: va compilato prima della pubblicazione del sito.
export const WHATSAPP_NUMBER = "390000000000";

const INTRO =
  "Buongiorno, vi scrivo dal sito Ingrosso Alimentari MAIORI. Vorrei ricevere disponibilità e preventivo per questi prodotti:";

const OUTRO = "Grazie, resto in attesa di un vostro riscontro.";

/** Riga leggibile per un prodotto: nome + eventuale formato/tag. */
function formatEntry(entry, index) {
  const details = (entry.tags || []).filter(Boolean).join(" · ");
  return `${index + 1}. ${entry.name}${details ? ` — ${details}` : ""}`;
}

/** Messaggio in chiaro (usato anche dai test manuali e dall'anteprima). */
export function formatRequestMessage(items) {
  const lines = items.map(formatEntry).join("\n");
  return `${INTRO}\n\n${lines}\n\n${OUTRO}`;
}

/**
 * URL wa.me con il messaggio precompilato.
 * Ritorna null se la lista è vuota, così la UI può disabilitare la CTA.
 */
export function buildWhatsAppUrl(items) {
  if (!items || items.length === 0) return null;
  const text = encodeURIComponent(formatRequestMessage(items));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
