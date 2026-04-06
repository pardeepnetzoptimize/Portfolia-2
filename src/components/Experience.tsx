"use client";

import { motion } from "framer-motion";
import Experience3DSlider from "./Experience3DSlider";

const EXPERIENCES = [
  {
    role: "QA Engineer (Automation/Manual)",
    company: "Netzoptimize",
    date: "May 2024 - Present",
    desc: "Currently working as a QA Engineer with hands-on experience in automation and manual testing.",
    skills: ["Selenium", "Playwright", "Cypress", "Java", "JavaScript"],
  },
  {
    role: "Product Support & QA Intern",
    company: "BlueBrick Technologies - Remote",
    date: "Jan 2024 - Apr 2024",
    desc: "Provided Level 1 support for core product Axiom Protect, managing real-time client issues, analyzing system behavior, and escalating critical tickets. Conducted hands-on QA testing across BlueBrick's suite, including Collabrix, VeriSNow, and EngageBot to ensure seamless product performance pre-release.",
    skills: ["Manual Testing", "Client Support", "Bug Escalation", "QA"],
  },
  {
    role: "MERN Stack Development Intern",
    company: "Excellence Technology",
    date: "Jan 2024 - Jun 2024",
    desc: "Completed 6 months training focusing on full-stack web development.",
    skills: ["MERN Stack", "Web Development"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-40 overflow-hidden bg-[#0a0a0a] px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-32 lg:px-24"
    >
      <div className="relative z-10 mx-auto mb-14 flex max-w-4xl flex-col items-start gap-4 text-left sm:mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Work Experience
        </h2>
        <p className="text-base font-light text-zinc-500 sm:text-lg md:text-xl">
          My professional journey in QA and product support.
        </p>
      </div>

      {/* 3D Carousel Slider */}
      <div className="relative mx-auto max-w-4xl mb-20">
        <Experience3DSlider />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute top-0 bottom-0 left-4 z-0 w-px bg-white/10 sm:left-7 sm:w-[2px]"></div>

        <div className="relative z-10 flex flex-col gap-10 sm:gap-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex items-start gap-4 sm:gap-6"
            >
              <div className="relative mt-1 flex w-8 shrink-0 justify-center sm:w-14">
                <div className="relative z-10 h-4 w-4 rounded-full border-[3px] border-[#0a0a0a] bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.5)] sm:h-5 sm:w-5 sm:border-[4px]"></div>
              </div>

              <div className="min-w-0 flex-1 rounded-2xl border border-white/5 bg-[#121212] p-5 shadow-xl transition-colors hover:border-white/10 sm:p-8">
                <h4 className="mb-2 text-xl font-bold tracking-wide text-white sm:text-2xl">
                  {exp.role}
                </h4>

                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-semibold text-pink-400">{exp.company}</span>
                  <span className="inline-flex w-fit rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-500">
                    {exp.date}
                  </span>
                </div>

                <p className="mb-6 text-sm leading-relaxed font-light text-zinc-400 sm:text-base">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded border border-white/5 bg-[#1a1a1a] px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
