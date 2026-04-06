"use client";

import { motion } from "framer-motion";
import { Search, Map, Zap } from "lucide-react";

const STEPS = [
  {
    num: 1,
    icon: <Search className="w-6 h-6 text-white" />,
    title: "Discovery",
    description: "Understand your goals, challenges, and creative direction.",
  },
  {
    num: 2,
    icon: <Map className="w-6 h-6 text-white" />,
    title: "Strategy & Blueprint",
    description: "Design the roadmap — technologies, deliverables, and growth plan.",
  },
  {
    num: 3,
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Execution & Integration",
    description: "Code, deployment, and seamless integration with full transparency.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            How I Work
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light">
            From concept to high-impact reality.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex flex-col md:flex-row items-start justify-between">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
          
          {/* Vertical Connecting Line (Mobile) */}
          <div className="block md:hidden absolute left-[48px] top-[5%] bottom-[5%] w-[1px] bg-white/10 z-0"></div>

          {/* Steps */}
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative z-10 flex flex-col md:items-center text-left md:text-center w-full md:w-1/3 mb-16 md:mb-0 group"
            >
              {/* Icon Circle */}
              <div className="flex md:justify-center mb-8 pl-6 md:pl-0">
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[#121212] border border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-white/10">
                  {step.icon}
                  
                  {/* Purple Number Badge */}
                  <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-bold shadow-lg border-2 border-[#0a0a0a]">
                    {step.num}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="px-4">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-wide">
                  {step.title}
                </h4>
                <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-[280px] mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
