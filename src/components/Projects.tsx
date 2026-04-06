"use client";

import { motion } from "framer-motion";
import { FolderGit2, Users } from "lucide-react";

const PROJECTS = [
  {
    icon: <Users className="h-8 w-8 text-cyan-400" />,
    name: "verify now Digital Identity Verification System",
    description:
      "Web-based platform providing seamless eKYC, face match, Aadhaar authentication, and document verification.",
    tech: ["Manual Testing", "API Testing", "Jira", "Postman"],
    bullets: [
      "Performed manual testing on modules like eKYC, OTP authentication, and face verification workflows.",
      "Validated API responses using Postman for Aadhaar number, PAN, and mobile verification.",
      "Identified and reported UI/UX issues and inconsistencies across browsers.",
      "Assisted product support team in reproducing bugs reported by clients.",
      "Wrote test cases for user onboarding flow including document upload and approval processes.",
    ],
  },
  {
    icon: <FolderGit2 className="h-8 w-8 text-purple-400" />,
    name: "Collabrix",
    description: "B2B Communication & Document Collaboration Platform.",
    tech: ["Manual Testing", "Jira", "Postman", "Bug Reporting"],
    bullets: [
      "Digital platform for managing B2B partnerships and vendor collaborations with feature sharing and e-signatures.",
      "Conducted manual testing of modules including Partner Onboarding, Workflow Automation, and Document Upload.",
      "Wrote and executed test cases for key features like e-signing and end-user role management.",
      "Performed UI/UX testing across desktop and mobile browsers to ensure consistency.",
      "Reported bugs using Jira, categorized them by priority, and followed up resolutions.",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-40 bg-[#0a0a0a] px-5 py-24 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-12">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-8 w-[3px] rounded-full bg-purple-500"></div>
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Key Projects
          </h3>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="rounded-[1.75rem] border border-white/5 bg-[#141414] p-6 transition-colors hover:border-white/10 sm:rounded-[2rem] sm:p-8 md:p-10"
            >
              <div className="flex flex-col items-start gap-5 sm:gap-6 md:flex-row">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
                  {proj.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="mb-2 text-xl font-semibold text-white sm:text-2xl">
                    {proj.name}
                  </h4>
                  <p className="mb-4 text-sm font-medium text-[#a084c7] sm:text-base">
                    {proj.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {proj.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
