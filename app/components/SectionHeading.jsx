import { cn } from "../lib/cn";
import Reveal from "./Reveal";

/** Occhiello + titolo + testo introduttivo, con varianti chiaro/scuro. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  className,
}) {
  const light = tone === "light";
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow eyebrow-rule",
            light ? "text-brass" : "text-accent"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.01em]",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 font-sans text-base leading-relaxed",
            light ? "text-white/70" : "text-ink-soft"
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
