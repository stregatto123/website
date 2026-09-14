/**
 * Helper puri della "lista richiesta" (il carrello senza prezzi).
 *
 * La lista vive solo nel browser del cliente (localStorage): nessun backend,
 * nessun database. Di ogni prodotto conserviamo il minimo indispensabile per
 * ricostruire la richiesta — nome, formato/tag, categoria — mai prezzi,
 * che nel catalogo non esistono proprio (vedi app/lib/products.js).
 */
import { slugify } from "./slugify";

export const STORAGE_KEY = "maiori:lista-richiesta:v1";
export const SENDER_STORAGE_KEY = "maiori:lista-richiesta:mittente:v1";

/** Scarta un mittente salvato corrotto o scritto da una versione precedente. */
export function sanitizeSender(value) {
  if (!value || typeof value !== "object") return { name: "", business: "" };
  return {
    name: typeof value.name === "string" ? value.name : "",
    business: typeof value.business === "string" ? value.business : "",
  };
}

/**
 * Identificativo stabile di una referenza.
 * Il solo nome non basta: alcune voci del catalogo hanno lo stesso nome e
 * differiscono per formato (es. le bufale DOP), quindi entra anche `desc`.
 */
export function productId(item) {
  return slugify(`${item.name} ${item.desc || ""}`);
}

/** Voce salvata in lista a partire da un prodotto del catalogo. */
export function toListEntry(item, { categoryLabel, color } = {}) {
  return {
    id: productId(item),
    name: item.name,
    // Massimo due tag: sono il formato/la caratteristica, mai un prezzo.
    tags: (item.tags || []).slice(0, 2),
    categoryLabel: categoryLabel || null,
    color: color || null,
  };
}

/** Scarta voci corrotte o scritte da versioni precedenti dello schema. */
export function sanitizeEntries(value) {
  if (!Array.isArray(value)) return [];
  const seen = new Set();
  return value.reduce((acc, entry) => {
    if (!entry || typeof entry.id !== "string" || typeof entry.name !== "string") {
      return acc;
    }
    if (seen.has(entry.id)) return acc;
    seen.add(entry.id);
    acc.push({
      id: entry.id,
      name: entry.name,
      tags: Array.isArray(entry.tags) ? entry.tags.filter((t) => typeof t === "string") : [],
      categoryLabel: typeof entry.categoryLabel === "string" ? entry.categoryLabel : null,
      color: typeof entry.color === "string" ? entry.color : null,
    });
    return acc;
  }, []);
}
