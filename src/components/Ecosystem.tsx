"use client";

import { motion } from "framer-motion";
import { TreePine, Sprout, Shield, Headphones, Database, Network } from "lucide-react";

const STARTUPS = [
  {
    icon: <TreePine className="w-8 h-8 text-green-400" />,
    imageBg: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
    name: "Mom's Grove",
    description: "AI-assisted 360° Playschool System",
  },
  {
    icon: <Sprout className="w-8 h-8 text-pink-400" />,
    imageBg: "bg-white",
    name: "Nori AI",
    description: "AI Home Companion",
  },
  {
    icon: <Shield className="w-8 h-8 text-red-500" />,
    imageBg: "bg-gradient-to-br from-red-900 via-gray-900 to-black",
    name: "Kratos AI",
    description: "Fine-Tuned LLMs, Simplified",
  },
  {
    icon: <Headphones className="w-8 h-8 text-amber-500" />,
    imageBg: "bg-[#110e20]", // Dark purple tone
    name: "SWARA AI",
    description: "Voice AI for Healthcare",
  },
  {
    icon: <Database className="w-8 h-8 text-indigo-500" />,
    imageBg: "bg-white",
    name: "Orphos Labs",
    description: "Synthetic Data Platform",
  },
  {
    icon: <Network className="w-8 h-8 text-cyan-400" />,
    imageBg: "bg-black",
    name: "Neos Studio",
    description: "AI Content Intelligence",
  },
];

export default function Ecosystem() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header line with purple bar */}
        <div className="flex items-center gap-4">
          <div className="w-[3px] h-8 bg-purple-500 rounded-full"></div>
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            The Brainchain Ecosystem
          </h3>
        </div>

        {/* CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STARTUPS.map((startup, idx) => (
            <EcosystemCard key={idx} {...startup} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemCard({
  icon,
  imageBg,
  name,
  description,
  index,
}: {
  icon: React.ReactNode;
  imageBg: string;
  name: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex flex-col items-center justify-center p-10 py-16 rounded-[2rem] bg-[#141414] border border-white/5 hover:border-white/10 transition-colors mx-auto w-full min-h-[300px]"
    >
      {/* Icon Wrapper (Mocking the images from the screenshot) */}
      <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-2xl ${imageBg}`}>
        {/* Adds that subtle dark inner ring seen in the screenshots */}
        <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>
        {icon}
      </div>

      <h4 className="text-2xl font-semibold text-white mb-3 tracking-wide">
        {name}
      </h4>
      <p className="text-[#a084c7] text-sm font-medium tracking-wide">
        {description}
      </p>
    </motion.div>
  );
}
