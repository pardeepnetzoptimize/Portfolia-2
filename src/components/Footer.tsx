export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-[#0a0a0a] px-5 py-24 text-white sm:px-6 sm:py-28 md:py-32">
      <div className="flex max-w-4xl flex-col items-center gap-8 text-center">
        <h2 className="text-[clamp(2.5rem,10vw,5.5rem)] font-bold tracking-tight">
          Ready to Elevate <br />
          Your Quality?
        </h2>

        <p className="max-w-2xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg md:text-xl">
          If you need a dedicated QA Engineer for manual testing, automation, or
          bug tracking, let&apos;s talk.
        </p>

        <a
          href="#contact"
          className="mt-4 w-full rounded-full bg-white px-8 py-4 text-center font-semibold tracking-wide text-black transition-transform duration-300 hover:scale-105 sm:w-auto"
        >
          Get In Touch
        </a>

        <div className="mt-10 mb-16 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-zinc-400 sm:mt-12 sm:mb-20 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/pardeep-kumar-patiala"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="tel:+919712584176"
            className="text-sm opacity-80 transition-colors hover:text-white"
          >
            9712584176
          </a>
          <a
            href="mailto:pk187405@gmail.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </div>

      <div className="flex w-full max-w-5xl flex-col items-center">
        <div className="mb-8 h-[1px] w-full bg-white/10"></div>
        <p className="text-center text-xs font-medium text-zinc-600 sm:text-sm">
          Copyright {new Date().getFullYear()} Pardeep Sharma. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
