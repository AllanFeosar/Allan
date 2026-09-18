"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Three.js/WebGL only exists in the browser - dynamic + ssr:false keeps it
// out of the static export's server-rendered HTML entirely, so `next build`
// never tries to touch `document`/`canvas` during prerendering.
const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const { scrollYProgress: rawProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Raw scrollYProgress tracks the scrollbar 1:1, which feels jumpy on a
  // real mouse wheel/trackpad - a spring lets the animation glide toward
  // the target instead of snapping to it every scroll tick, which is what
  // actually makes reference sites like Apple's feel smooth (they're not
  // just playing back raw scroll position either).
  const scrollYProgress = useSpring(rawProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
    restDelta: 0.001,
  });

  const headlineOpacity = useTransform(scrollYProgress, [0.6, 0.78], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.6, 0.78], [24, 0]);
  const kickerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const sceneOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="relative h-full w-full" style={{ opacity: sceneOpacity }}>
          <HeroScene progress={scrollYProgress} reducedMotion={reducedMotion} />

          <motion.p
            style={{ opacity: kickerOpacity }}
            className="pointer-events-none absolute top-24 w-full text-center text-xs font-semibold tracking-[0.35em] text-brand-gray uppercase md:top-28"
          >
            Scroll to see how X MEG works
          </motion.p>

          <motion.div
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="pointer-events-none absolute bottom-20 w-full px-6 text-center md:bottom-24"
          >
            <h1 className="text-2xl font-bold text-white md:text-4xl">
              From scattered to <span className="text-brand-red">systemized.</span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-gray md:text-base">
              X MEG turns disconnected tools, spreadsheets and manual work into one
              organized digital system your business runs on.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
