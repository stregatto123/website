"use client";

import { useInView } from "../lib/useInView";
import { cn } from "../lib/cn";

/**
 * Rivelazione all'ingresso nel viewport.
 *
 * Usa `useInView` di app/lib/useInView.js, che oltre all'IntersectionObserver
 * fa un controllo immediato con getBoundingClientRect: gli elementi già
 * visibili al mount compaiono subito, senza aspettare uno scroll.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  y = 18,
  className,
  children,
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        className
      )}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translateY(${y}px)`,
        transitionDelay: `${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
