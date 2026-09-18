"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

// Wraps the whole app in Lenis's smoothed scroll - this is what makes the
// scroll wheel/trackpad itself feel inertial instead of stepping in raw OS
// increments. Lenis keeps window.scrollY in sync as it animates, so
// framer-motion's useScroll (in Hero.tsx) picks it up with no extra wiring.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
