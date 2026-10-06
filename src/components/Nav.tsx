import { profile } from "@/data/profile";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-16">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-red text-xs font-bold tracking-wider">
            {profile.initials}
          </span>
          <span className="text-sm font-bold tracking-widest">{profile.shortName}</span>
        </a>

        <nav className="hidden gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-brand-gray transition-colors hover:text-brand-red"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resumeHref}
          download
          className="rounded-full border border-brand-red px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-brand-red"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
