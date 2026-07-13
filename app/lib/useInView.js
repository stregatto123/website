"use client";

import { useCallback, useEffect, useState } from "react";

export function useInView() {
  const [node, setNode] = useState(null);
  const [v, setV] = useState(false);
  const ref = useCallback((el) => setNode(el), []);
  useEffect(() => {
    if (!node) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0 });
    o.observe(node);
    // Fallback: if the node is already at least partly on screen the moment we
    // start observing, don't wait for a threshold crossing that may never come
    // (e.g. a tab panel that mounts already-visible below a tall sticky header).
    const rect = node.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight && rect.bottom > 0) setV(true);
    return () => o.disconnect();
  }, [node]);
  return [ref, v];
}
