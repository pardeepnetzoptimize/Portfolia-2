"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const SLIDES = [
  {
    title: "Test Automation",
    icon: "⚙️",
    image: "/standard-quality-control-concept-m.jpg",
    description:
      "Transform your testing process with intelligent automation. Reduce testing time by 70%, increase coverage, and catch bugs before they reach production.",
    benefits: [
      "70% faster test execution",
      "24/7 continuous testing",
      "Zero manual errors",
      "100% repeatability",
    ],
  },
  {
    title: "AI-Powered Testing",
    icon: "🤖",
    image: "/ai-cloud-concept-with-robot-arms.jpg",
    description:
      "Leverage cutting-edge AI to revolutionize your QA strategy. Smart test generation, predictive failure analysis, and autonomous quality management.",
    benefits: [
      "Smart test case generation",
      "Predictive bug detection",
      "Self-healing tests",
      "Intelligent automation",
    ],
  },
  {
    title: "Quality Assurance",
    icon: "✓",
    image: "/Man and digital era algorithm of AI.jpg",
    description:
      "Ensure flawless product delivery with comprehensive QA solutions. Combining manual expertise with automation for ultimate product excellence.",
    benefits: [
      "Zero-defect delivery",
      "Risk matrix analysis",
      "Performance monitoring",
      "Compliance validation",
    ],
  },
];

export default function Experience3DSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: dir > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: dir < 0 ? 45 : -45,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full mb-16">
      <div className="relative h-[500px] sm:h-[550px] md:h-[600px] perspective">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              rotateY: { duration: 0.4 },
            }}
            className="absolute inset-0 w-full"
            style={{ perspective: "1200px" }}
          >
            <div className="h-full w-full rounded-3xl border border-white/10 bg-[#0f0f0f] shadow-2xl overflow-hidden flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 z-10"></div>
                <Image
                  src={SLIDES[current].image}
                  alt={SLIDES[current].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative">
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>

                {/* Icon and Title */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl sm:text-5xl">{SLIDES[current].icon}</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {SLIDES[current].title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
                    {SLIDES[current].description}
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest font-bold text-purple-400 mb-4">
                    Key Advantages
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {SLIDES[current].benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/20 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-zinc-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-between absolute -left-6 -right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none sm:pointer-events-auto sm:-left-16 sm:-right-16">
        <button
          onClick={() => paginate(-1)}
          className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 border border-white/20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 border border-white/20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {SLIDES.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`transition-all rounded-full ${
              idx === current
                ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-3"
                : "bg-white/20 w-3 h-3 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-6 text-zinc-500 text-sm">
        <span className="text-white font-semibold">{current + 1}</span> / {SLIDES.length}
      </div>
    </div>
  );
}
