"use client";

import { motion } from "framer-motion";
import {
  AppWindow,
  CheckCircle2,
  MonitorCheck,
  SearchCode,
  ShieldAlert,
  Wrench,
} from "lucide-react";

const SKILLS = [
  {
    icon: <MonitorCheck className="h-8 w-8 text-green-400" />,
    name: "Manual Testing & Bug Reporting",
    level: "Advanced",
  },
  {
    icon: <AppWindow className="h-8 w-8 text-blue-400" />,
    name: "Test Case Creation & Execution",
    level: "Advanced",
  },
  {
    icon: <SearchCode className="h-8 w-8 text-purple-400" />,
    name: "Regression, Smoke & Functional",
    level: "Advanced",
  },
  {
    icon: <Wrench className="h-8 w-8 text-pink-500" />,
    name: "Automation (Selenium, Playwright)",
    level: "Intermediate",
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-red-400" />,
    name: "Customer Support & Troubleshooting",
    level: "Advanced",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-teal-400" />,
    name: "HTML/CSS/JS UI Validation",
    level: "Intermediate",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-40 bg-[#0a0a0a] px-5 py-24 sm:px-6 md:px-12 md:py-32 lg:px-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-[2px] w-8 bg-[#3eda78]"></div>
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Core Competencies
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-start gap-4 rounded-2xl border border-white/5 bg-[#141414] p-5 transition-all duration-300 hover:border-white/20 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-16 sm:w-16">
                {skill.icon}
              </div>
              <div className="flex flex-col">
                <span className="mb-1 text-base leading-snug font-medium text-white sm:text-lg">
                  {skill.name}
                </span>
                <span className="text-sm tracking-widest text-zinc-500 uppercase">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
