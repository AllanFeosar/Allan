import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="border-t border-white/10 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Education & certifications" />

        <ul className="grid gap-6 md:grid-cols-3">
          {education.map((e) => (
            <li key={e.title} className="rounded-2xl border border-white/10 bg-panel p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gray">{e.period}</p>
              <h3 className="mt-3 text-lg font-bold leading-snug">{e.title}</h3>
              <p className="mt-2 text-white/65">{e.org}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
