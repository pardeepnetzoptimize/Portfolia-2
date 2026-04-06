"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export default function Education() {
  const EDU = [
    {
      degree: "Bachelor of Technology (B.TECH) - CSE",
      school: "Universal Group of Institutions",
      year: "2021 - 2024",
      grade: "SGPA - 7.78",
      icon: <GraduationCap className="h-8 w-8 text-purple-400" />,
    },
    {
      degree: "Diploma - CSE",
      school: "Thapar Polytechnic College",
      year: "2019 - 2021",
      grade: "64%",
      icon: <Award className="h-8 w-8 text-[#3eda78]" />,
    },
    {
      degree: "Higher Secondary (12th)",
      school: "PSEB",
      year: "2016",
      grade: "65%",
      icon: <BookOpen className="h-8 w-8 text-zinc-400" />,
    },
  ];

  return (
    <section
      id="education"
      className="relative scroll-mt-40 bg-[#0a0a0a] px-5 pb-24 sm:px-6 sm:pb-28 md:px-12 md:pb-32 lg:px-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-[2px] w-8 bg-white/70"></div>
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Education
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {EDU.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="flex w-full flex-col rounded-[1.75rem] border border-white/5 bg-[#141414] p-6 shadow-lg transition-all duration-300 hover:border-white/20 sm:rounded-[2rem] sm:p-8 md:p-10"
            >
              <div className="mb-6 w-fit rounded-2xl border border-white/10 bg-white/5 p-4">
                {edu.icon}
              </div>
              <h4 className="mb-2 text-lg font-bold leading-snug text-white sm:text-xl">
                {edu.degree}
              </h4>
              <p className="mb-1 font-medium text-zinc-400">{edu.school}</p>

              <div className="mt-auto flex flex-col items-start gap-3 border-t border-white/5 pt-5 sm:flex-row sm:items-end sm:justify-between sm:pt-6">
                <span className="font-medium text-zinc-500">{edu.year}</span>
                <span className="w-fit rounded-full bg-[#3eda78]/10 px-3 py-1 text-sm font-bold text-[#3eda78]">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
