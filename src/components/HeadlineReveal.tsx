"use client";

import { useEffect, useRef } from "react";

export function HeadlineReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      el.classList.add("is-revealed");
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="headline-reveal">
      {children}
    </div>
  );
}
