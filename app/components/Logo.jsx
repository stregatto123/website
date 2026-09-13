import { cn } from "../lib/cn";

/**
 * Marchio "MAIORI": logotipo con occhiello.
 * `tone="light"` per i fondali scuri, `tone="dark"` per quelli chiari.
 */
export default function Logo({ tone = "dark", compact = false, className }) {
  const light = tone === "light";
  return (
    <span className={cn("flex items-center gap-3", className)}>
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
