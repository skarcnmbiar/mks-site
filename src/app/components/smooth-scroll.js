"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children, options }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6, // Example: Faster scroll
      easing: (t) => Math.easeInOutQuart(t),
      smoothWheel: false,
      // ... other options
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [options]); // Re-initialize if options prop changes

  return <>{children}</>;
}
