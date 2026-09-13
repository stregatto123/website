"use client";

import { MotionConfig } from "framer-motion";

/**
 * `reducedMotion="user"` disattiva automaticamente trasformazioni e opacità
 * animate da Framer Motion quando il sistema ha "riduci animazioni" attivo,
 * in coppia con la media query in globals.css che copre le animazioni CSS.
 */
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
