"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { CHAOS_ICONS } from "./ChaosIcons";

type IconConfig = {
  chaos: { x: number; y: number; rotate: number; rotateX: number; rotateY: number; z: number };
  order: { x: number; y: number };
};

// Hand-placed (not random) so the "chaos" reads as genuinely scattered but
// stays identical on every load/render - random() would cause a hydration
// mismatch between server and client render.
const ICON_CONFIGS: IconConfig[] = [
  { chaos: { x: -420, y: -240, rotate: -35, rotateX: -30, rotateY: 25, z: -160 }, order: { x: -240, y: -90 } },
  { chaos: { x: 160, y: -340, rotate: 50, rotateX: 25, rotateY: -20, z: 120 }, order: { x: -80, y: -90 } },
  { chaos: { x: -280, y: 200, rotate: -60, rotateX: 35, rotateY: 15, z: -100 }, order: { x: 80, y: -90 } },
  { chaos: { x: 380, y: -150, rotate: 25, rotateX: -20, rotateY: -30, z: 140 }, order: { x: 240, y: -90 } },
  { chaos: { x: -440, y: 140, rotate: 40, rotateX: 20, rotateY: 30, z: -140 }, order: { x: -240, y: 90 } },
  { chaos: { x: 60, y: 320, rotate: -45, rotateX: -25, rotateY: -15, z: 100 }, order: { x: -80, y: 90 } },
  { chaos: { x: 320, y: 280, rotate: 65, rotateX: 30, rotateY: 20, z: -120 }, order: { x: 80, y: 90 } },
  { chaos: { x: 440, y: -260, rotate: -30, rotateX: -15, rotateY: -25, z: 160 }, order: { x: 240, y: 90 } },
];

function ChaosIcon({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const Icon = CHAOS_ICONS[index];
  const cfg = ICON_CONFIGS[index];

  const x = useTransform(progress, [0, 0.55], [cfg.chaos.x, cfg.order.x]);
  const y = useTransform(progress, [0, 0.55], [cfg.chaos.y, cfg.order.y]);
  const z = useTransform(progress, [0, 0.55], [cfg.chaos.z, 0]);
  const rotate = useTransform(progress, [0, 0.55], [cfg.chaos.rotate, 0]);
  const rotateX = useTransform(progress, [0, 0.55], [cfg.chaos.rotateX, 0]);
  const rotateY = useTransform(progress, [0, 0.55], [cfg.chaos.rotateY, 0]);
  const borderColor = useTransform(progress, [0, 0.55], ["#8a8a8a", "#ed1111"]);
  const boxOpacity = useTransform(progress, [0.55, 0.62, 0.82, 1], [1, 1, 1, 0.15]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 flex h-16 w-16 items-center justify-center rounded-xl border-2 bg-black/60 backdrop-blur-sm md:h-20 md:w-20"
      style={{
        x,
        y,
        z,
        rotate,
        rotateX,
        rotateY,
        borderColor,
        opacity: boxOpacity,
        color: "#f2f2f2",
        marginLeft: "-2.5rem",
        marginTop: "-2.5rem",
      }}
    >
      <div className="h-8 w-8 md:h-10 md:w-10">
        <Icon />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const logoScale = useTransform(scrollYProgress, [0.45, 0.65], [0.6, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const headlineOpacity = useTransform(scrollYProgress, [0.6, 0.78], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.6, 0.78], [24, 0]);
  const kickerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const sceneOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="relative flex h-full w-full items-center justify-center"
          style={{ perspective: 1400, opacity: sceneOpacity }}
        >
          <motion.p
            style={{ opacity: kickerOpacity }}
            className="absolute top-24 w-full text-center text-xs font-semibold tracking-[0.35em] text-brand-gray uppercase md:top-28"
          >
            Scroll to see how X MEG works
          </motion.p>

          <div className="relative h-[320px] w-[320px] md:h-[520px] md:w-[520px]" style={{ transformStyle: "preserve-3d" }}>
            {ICON_CONFIGS.map((_, i) => (
              <ChaosIcon key={i} index={i} progress={scrollYProgress} />
            ))}

            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ scale: logoScale, opacity: logoOpacity }}
            >
              <Image src="/images/logo.png" alt="X MEG" width={150} height={150} className="rounded-full" priority />
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="absolute bottom-20 w-full px-6 text-center md:bottom-24"
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
