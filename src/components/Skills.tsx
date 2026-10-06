import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-white/10 bg-panel p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">{s.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
