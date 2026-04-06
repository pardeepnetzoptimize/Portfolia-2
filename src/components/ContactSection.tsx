"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const isFormConfigured = WEB3FORMS_ACCESS_KEY.length > 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    if (!isFormConfigured) {
      setSubmitError(
        "Contact form is not configured yet. Please add your Web3Forms access key."
      );
      return;
    }

    setIsSubmitting(true);
    const form = e.currentTarget;

    const formData = new FormData(form);
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("subject", "New Portfolio Contact Message");
    formData.set("from_name", "Pardeep Portfolio");

    const replyTo = formData.get("email");
    if (typeof replyTo === "string" && replyTo.length > 0) {
      formData.set("replyto", replyTo);
    }

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = (await response.json()) as Web3FormsResponse;
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message. Please try again.");
      }

      form.reset();
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Could not send message right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-40 overflow-hidden bg-[#0a0a0a] px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-32 lg:px-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:gap-16 lg:flex-row xl:gap-20">
        <div className="flex min-w-0 flex-1 flex-col gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-[clamp(2.25rem,8vw,4.75rem)] leading-tight font-bold tracking-tight text-white">
              Let&apos;s Build Something <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Stunning Together.
              </span>
            </h2>
            <p className="mb-8 max-w-xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg">
              Whether you need a full QA audit, automation frameworks built from
              scratch, or a custom LLM pipeline, I&apos;m here to help.
            </p>

            <div className="flex flex-col gap-6">
              <div className="group flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-purple-600/20 group-hover:bg-purple-600/10">
                  <Mail className="h-5 w-5 text-zinc-300" />
                </div>
                <div className="min-w-0 flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Email me
                  </span>
                  <a
                    href="mailto:pk187405@gmail.com"
                    className="break-all text-white transition-colors hover:text-purple-400"
                  >
                    pk187405@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-[#3eda78]/20 group-hover:bg-[#3eda78]/10">
                  <Phone className="h-5 w-5 text-zinc-300" />
                </div>
                <div className="min-w-0 flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Call or WhatsApp
                  </span>
                  <a
                    href="tel:+919712584176"
                    className="text-white transition-colors hover:text-[#3eda78]"
                  >
                    +91 9712584176
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <MapPin className="h-5 w-5 text-zinc-300" />
                </div>
                <div className="min-w-0 flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Location
                  </span>
                  <span className="text-white">Patiala, India / Remote</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#141414] p-6 shadow-2xl sm:p-8 md:rounded-[2.5rem] md:p-12"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-5 py-16 text-center sm:gap-6 sm:py-20"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#3eda78]/20 bg-[#3eda78]/10">
                  <CheckCircle2 className="h-10 w-10 text-[#3eda78]" />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Thank you!
                </h3>
                <p className="text-sm text-zinc-400 sm:text-base">
                  Your message has been received. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 text-sm font-bold text-[#3eda78] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col gap-5 sm:gap-6"
              >
                <input type="hidden" name="subject" value="New Portfolio Contact Message" />
                <input type="hidden" name="from_name" value="Pardeep Portfolio" />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="ml-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="e.g. John Smith"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white transition-colors placeholder:text-zinc-700 focus:border-purple-500 focus:outline-none sm:px-6 sm:py-4"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="ml-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="e.g. name@company.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white transition-colors placeholder:text-zinc-700 focus:border-purple-500 focus:outline-none sm:px-6 sm:py-4"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="ml-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Services Needed
                  </label>
                  <select
                    name="service"
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white transition-colors focus:border-purple-500 focus:outline-none sm:px-6 sm:py-4"
                  >
                    <option value="Manual Testing" className="bg-[#141414]">
                      Manual Testing Audit
                    </option>
                    <option value="Automation" className="bg-[#141414]">
                      Automation Framework
                    </option>
                    <option value="LLM Pipelines" className="bg-[#141414]">
                      LLM / GenAI Integration
                    </option>
                    <option value="Other" className="bg-[#141414]">
                      Other Quality Services
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="ml-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Your Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me a bit about your project goals..."
                    className="w-full resize-none rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white transition-colors placeholder:text-zinc-700 focus:border-purple-500 focus:outline-none sm:px-6"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting || !isFormConfigured}
                  className={`mt-4 flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-sm font-bold tracking-wide transition-all sm:py-5 sm:text-base ${
                    isSubmitting || !isFormConfigured
                      ? "bg-zinc-800 text-zinc-500"
                      : "bg-white text-black hover:bg-zinc-200"
                  }`}
                >
                  {!isFormConfigured
                    ? "Form Setup Needed"
                    : isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </motion.button>

                {submitError && (
                  <p className="text-sm text-red-400" role="alert">
                    {submitError}
                  </p>
                )}

                {!isFormConfigured && (
                  <p className="text-xs text-zinc-500">
                    Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` to enable
                    email delivery.
                  </p>
                )}
              </form>
            )}

            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 bg-purple-600/10 blur-[100px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
