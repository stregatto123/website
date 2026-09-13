import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Unisce classi condizionali risolvendo i conflitti fra utility Tailwind. */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
