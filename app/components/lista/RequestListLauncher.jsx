"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardList } from "lucide-react";
import { cn } from "../../lib/cn";
import { useRequestList } from "./RequestListProvider";
import RequestListDrawer from "./RequestListDrawer";

/**
 * Pulsante sempre presente in navbar: apre la lista richiesta e ne mostra
 * il numero di prodotti. Il contatore compare solo dopo la lettura di
 * localStorage (`ready`), così server e client renderizzano lo stesso markup.
 */
export default function RequestListLauncher({ tone = "dark" }) {
  const { count, ready } = useRequestList();
  const [open, setOpen] = useState(false);

  // Annuncio per gli screen reader: solo sui cambiamenti successivi alla
  // lettura iniziale dello storage, per non parlare a vuoto al primo render.
  const [announcement, setAnnouncement] = useState("");
  const previous = useRef(null);
  useEffect(() => {
    if (!ready) return;
    if (previous.current !== null && previous.current !== count) {
      setAnnouncement(
        count === 0
          ? "Lista richiesta vuota"
          : `${count} ${count === 1 ? "prodotto" : "prodotti"} nella lista richiesta`
      );
    }
    previous.current = count;
  }, [count, ready]);

  const badge = ready && count > 0;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={
          badge
            ? `Apri la lista richiesta — ${count} ${count === 1 ? "prodotto" : "prodotti"}`
            : "Apri la lista richiesta — nessun prodotto"
        }
        className={cn(
          "relative grid h-11 w-11 place-items-center rounded-xl transition-colors",
          tone === "light"
            ? "text-white hover:bg-white/10"
            : "text-ink hover:bg-ink/5"
        )}
      >
        <ClipboardList aria-hidden="true" className="h-[22px] w-[22px]" />
        {badge && (
          <span
            aria-hidden="true"
            className={cn(
              "absolute right-1 top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full px-1 font-sans text-[0.625rem] font-bold leading-none",
              tone === "light" ? "bg-brass text-brand-900" : "bg-accent text-white"
            )}
          >
            {count > 99 ? "99+" : count}
          </span>
        )}
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>

      <RequestListDrawer open={open} onOpenChange={setOpen} />
    </>
  );
}
