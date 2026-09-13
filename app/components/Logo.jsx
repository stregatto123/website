import { cn } from "../lib/cn";

/**
 * Marchio "MAIORI": monogramma + logotipo con occhiello.
 * `tone="light"` per i fondali scuri, `tone="dark"` per quelli chiari.
 */
export default function Logo({ tone = "dark", compact = false, className }) {
  const light = tone === "light";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-[11px] font-display text-lg font-bold leading-none",
          light
            ? "bg-brass text-brand-900"
            : "bg-brand-900 text-brass ring-1 ring-brand-900/10"
        )}
      >
        M
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-bold tracking-[0.04em]",
            light ? "text-white" : "text-brand-900"
          )}
        >
          MAIORI
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 font-sans text-[0.5625rem] font-bold uppercase tracking-[0.2em]",
              light ? "text-white/60" : "text-ink-soft"
            )}
          >
            Ingrosso Alimentari
          </span>
        )}
      </span>
    </span>
  );
}
