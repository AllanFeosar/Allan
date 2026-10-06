import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <ol className="relative border-l border-white/15">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="mb-12 ml-8 last:mb-0">
              <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-brand-red" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gray">{job.period}</p>
              <h3 className="mt-2 text-xl font-bold md:text-2xl">
                {job.role} <span className="text-brand-gray">·</span>{" "}
                <span className="text-white/80">{job.company}</span>
              </h3>
              <ul className="mt-4 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-white/70">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
