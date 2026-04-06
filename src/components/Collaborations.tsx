"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  {
    name: "ZOHO",
    content: (
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center space-x-[-12px] opacity-40">
          <div className="w-10 h-10 border-2 border-white rounded-[10px] transform rotate-12"></div>
          <div className="w-10 h-10 border-2 border-white rounded-[10px] transform -rotate-6"></div>
          <div className="w-10 h-10 border-2 border-white rounded-[10px] transform rotate-[15deg]"></div>
          <div className="w-10 h-10 border-2 border-white rounded-[10px] transform rotate-0"></div>
        </div>
        <span className="text-white/50 tracking-[0.4em] text-xs font-bold mt-2">ZOHO</span>
      </div>
    ),
    hoverTitle: "Zoho / Vodafone",
    hoverStat: "50M+ Organic Views",
    hoverDesc: "Deep tech storytelling generating massive engagement across YouTube & Instagram.",
    hoverBadge: "VIRAL CONTENT STRATEGY",
  },
  {
    name: "Lumio",
    content: (
       <div className="flex items-center justify-center h-full">
         <span className="text-white/40 text-3xl font-light tracking-wide font-sans">
           Lumio
         </span>
       </div>
    ),
    hoverTitle: "Lumio Integration",
    hoverStat: "10x Faster Processing",
    hoverDesc: "Revolutionary custom LLM pipelines solving heavy data operations gracefully.",
    hoverBadge: "AI ARCHITECTURE",
  },
  {
    name: "Project Beta",
    content: (
       <div className="flex items-center justify-center h-full">
         <span className="text-white/40 text-2xl font-bold tracking-widest uppercase">
           Project Beta
         </span>
       </div>
    ),
    hoverTitle: "Project Beta UI",
    hoverStat: "Top #3 Product",
    hoverDesc: "A sleek, motion-rich landing experience driving massive conversion.",
    hoverBadge: "FRONTEND ENGINEERING",
  },
  {
    name: "Nexus API",
    content: (
       <div className="flex items-center justify-center h-full">
         <span className="text-white/40 text-2xl font-serif italic tracking-wide">
           Nexus API
         </span>
       </div>
    ),
    hoverTitle: "Nexus Protocol",
    hoverStat: "Zero Latency",
    hoverDesc: "Distributed systems optimized for global scaling and secure data transfers.",
    hoverBadge: "BACKEND INFRASTRUCTURE",
  },
];

type PartnerCard = (typeof PARTNERS)[number];

export default function Collaborations() {
  return (
    <section className="relative w-full bg-[#0a0a0a] pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-[2px] bg-white/70"></div>
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Collaborations & Projects
          </h3>
        </div>

        {/* CSS Grid - Wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PARTNERS.map((partner, idx) => (
            <CollabCard key={idx} data={partner} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollabCard({ data, index }: { data: PartnerCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group relative flex flex-col items-center justify-center rounded-[2rem] bg-[#141414] border border-white/5 hover:border-white/20 transition-all duration-300 mx-auto w-full min-h-[320px] cursor-pointer overflow-hidden"
    >
      {/* Background/Logo Content fades back on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
        {data.content}
      </div>

      {/* Hover Information Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 bg-gradient-to-t from-black/90 via-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-left">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-3 gap-2">
          <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {data.hoverTitle}
          </h4>
          <span className="text-[#3eda78] font-bold text-sm md:text-base tracking-wide">
            {data.hoverStat}
          </span>
        </div>
        
        <p className="text-[#9ca3af] text-sm md:text-base leading-relaxed mb-6 font-light max-w-md">
          {data.hoverDesc}
        </p>

        <div>
          <span className="inline-block px-4 py-2 bg-white/10 text-[#d1d5db] text-xs font-bold tracking-[0.15em] uppercase rounded-full border border-white/5 backdrop-blur-sm">
            {data.hoverBadge}
          </span>
        </div>

      </div>
    </motion.div>
  );
}
