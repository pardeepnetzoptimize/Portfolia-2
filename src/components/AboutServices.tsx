"use client";

import { motion } from "framer-motion";

export default function AboutServices() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-5 py-24 sm:px-6 sm:py-32 md:py-40">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center sm:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-70 blur-md transition-opacity duration-500 group-hover:opacity-100"></div>
          <div className="relative rounded-full border border-pink-500/50 bg-[#121212]/90 px-5 py-2.5 backdrop-blur-md sm:px-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-pink-300 uppercase">
              Quality Automation & AI Engineer
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2.5rem,10vw,6rem)] leading-[1.05] font-bold tracking-tight text-white"
        >
          Precision. Quality. <br className="hidden md:block" />
          Automation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-2 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg md:mt-4 md:text-2xl"
        >
          A motivated professional with a solid foundation in{" "}
          <strong className="font-semibold text-white">manual testing</strong>,{" "}
          <strong className="font-semibold text-white">test case writing</strong>, and{" "}
          <strong className="font-semibold text-white">automation frameworks</strong>.
          Adept at identifying issues, troubleshooting, and ensuring flawless
          product stability in collaborative environments.
        </motion.p>
      </div>
    </section>
  );
}
