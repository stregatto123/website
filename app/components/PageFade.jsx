"use client";

import { usePathname } from "next/navigation";

/** Dissolvenza d'ingresso a ogni cambio di pagina (App Router). */
export default function PageFade({ children }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="animate-fade-in">
      {children}
    </div>
  );
}
