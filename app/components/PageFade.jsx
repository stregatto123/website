"use client";

import { usePathname } from "next/navigation";

export default function PageFade({ children }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-fade-in">
      {children}
    </div>
  );
}
