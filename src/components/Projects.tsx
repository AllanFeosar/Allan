import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected work" title="Projects I've built" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-panel p-8 transition-colors hover:border-brand-red/60"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">{p.kind}</p>
              <h3 className="mt-3 text-2xl font-bold">{p.name}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-white/70">{p.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {"link" in p && p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit text-sm font-bold uppercase tracking-widest text-brand-red hover:underline"
                >
                  {p.link.label} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
