import { cn } from "../lib/cn";

/**
 * Sagoma Italia stilizzata (mainland + Sicilia + Sardegna), unico colore.
 * Riprende il simbolo del nuovo logo su biglietto da visita.
 */
function ItalyMark({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 100"
      className={className}
      fill="currentColor"
    >
      <polygon points="24,2 36,5 30,20 34,26 42,32 30,42 34,48 20,54 24,64 16,74 12,50 18,30 10,16 16,8" />
      <polygon points="12,78 22,80 11,85" />
      <ellipse cx="4" cy="42" rx="3" ry="6.5" transform="rotate(-6 4 42)" />
    </svg>
  );
}

/**
 * Marchio "MAIORI": sagoma Italia + logotipo con occhiello.
 * `tone="light"` per i fondali scuri, `tone="dark"` per quelli chiari.
 */
export default function Logo({ tone = "dark", compact = false, className }) {
  const light = tone === "light";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <ItalyMark
        className={cn("h-9 shrink-0", light ? "text-logo-on-dark" : "text-logo")}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-bold tracking-[0.04em]",
            light ? "text-white" : "text-ink"
          )}
        >
          MAIORI
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 font-sans text-[0.5625rem] font-bold uppercase tracking-[0.2em]",
              light ? "text-logo-on-dark" : "text-logo-text"
            )}
          >
            Ingrosso Alimentari
          </span>
        )}
      </span>
    </span>
  );
}
