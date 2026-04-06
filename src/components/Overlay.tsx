"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const o1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const o2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

  const o3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], [50, -50]);

  return (
    <div className="relative h-full w-full">
      <motion.div
        style={{ opacity: o1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-24 text-center sm:px-8 sm:pt-28 md:px-24 md:pt-0"
      >
        <h1 className="max-w-4xl text-[clamp(2.75rem,13vw,5.5rem)] leading-[0.95] font-bold tracking-[0.14em] text-white uppercase sm:tracking-[0.2em]">
          Pardeep Sharma
        </h1>
        <p className="mt-4 mb-8 text-base font-medium tracking-[0.2em] text-white uppercase sm:text-lg md:text-2xl">
          Quality Automation & AI Engineer
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          download
          className="pointer-events-auto w-full max-w-xs rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md transition-all hover:border-white/40 sm:w-auto sm:px-8 sm:py-3"
        >
          Download Resume
        </motion.a>
      </motion.div>

      <motion.div
        style={{ opacity: o2, y: y2 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-10 md:items-start md:px-24 md:text-left"
      >
        <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight text-white sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-6xl">
          I ensure seamless digital <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            experiences.
          </span>
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: o3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-10 md:items-end md:px-24 md:text-right"
      >
        <h2 className="max-w-sm text-3xl font-semibold leading-tight text-white sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-6xl">
          Bridging the gap between <br className="hidden md:block" />
          <span className="font-light italic text-zinc-400">code and quality.</span>
        </h2>
      </motion.div>
    </div>
  );
}
