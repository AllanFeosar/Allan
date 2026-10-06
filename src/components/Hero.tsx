import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Faint red glow behind the content, purely decorative */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-red/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.4fr_1fr] md:px-16">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-lg tracking-[0.25em] text-brand-gray uppercase md:text-xl">
            {profile.title}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href={profile.resumeHref}
              download
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:border-brand-red hover:text-brand-red"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:border-brand-red hover:text-brand-red"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="hidden md:flex md:justify-end">
          <div className="flex h-72 w-72 flex-col items-center justify-center rounded-full border-2 border-brand-red bg-panel">
            <span className="text-7xl font-bold tracking-widest">{profile.initials}</span>
            <span className="mt-3 text-xs uppercase tracking-[0.3em] text-brand-gray">Chennai, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
