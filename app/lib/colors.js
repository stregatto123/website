/**
 * Token colore condivisi fra il design system Tailwind (tailwind.config.js)
 * e i pochi punti in cui serve il valore esadecimale a runtime — in
 * particolare gli accenti di categoria usati da app/lib/products.js.
 *
 * Le tre tinte di categoria (gold/tomato/olive) sono scelte per avere
 * contrasto >= 4.5:1 su fondo bianco, così possono essere usate anche per
 * testo (tag, titoli di sottocategoria) senza rompere WCAG AA.
 */
export const COLORS = {
  // Accenti di categoria
  gold: "#8A6A1C", // Latticini & Formaggi
  tomato: "#B04A22", // Salumi & Affettati
  olive: "#1E6B58", // Scatolame & Conserve

  // Palette di base
  paper: "#FBF7F0",
  paper2: "#F4EDE1",
  surface: "#FFFFFF",
  line: "#E5DDCE",
  ink: "#17201C",
  inkSoft: "#53605A",
  brand500: "#1E6B58",
  brand700: "#134438",
  brand900: "#0C2B24",
  accent: "#B04A22",
  brass: "#C89A3C",
};

/** Tinta trasparente di un accento, per sfondi e bordi leggeri. */
export function tint(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
