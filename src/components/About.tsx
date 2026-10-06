import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="Who I am" />
        <div className="grid gap-12 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-white/80">{profile.summary}</p>
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-brand-red">
              Focus areas
            </h3>
            <ul className="space-y-4">
              {profile.focus.map((item) => (
                <li key={item} className="flex gap-4 text-white/80">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
