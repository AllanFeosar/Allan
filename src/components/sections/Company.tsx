import SectionHeading from "@/components/SectionHeading";

const FACTS = [
  { label: "Based In", value: "Chennai, India" },
  { label: "Focus", value: "Digital Engineering" },
  { label: "Delivery", value: "Remote & International" },
  { label: "Capability", value: "Full-Stack Development" },
];

export default function Company() {
  return (
    <section id="company" className="bg-white px-6 py-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="01 / Company" title="Digital solutions built around real business needs." />
        <div className="grid gap-6 text-lg leading-relaxed text-gray-700 md:grid-cols-2 md:gap-12">
          <p>
            X MEG is an emerging technology and digital engineering company based in
            Chennai, India. We focus on building practical web applications, websites,
            software systems and digital solutions that help businesses turn ideas,
            processes and requirements into usable technology.
          </p>
          <p>
            Our approach combines full-stack development, API engineering, database
            systems, modern frontend development, deployment practices and emerging AI
            capabilities. We work with businesses that need technology designed around
            their specific requirements rather than one-size-fits-all solutions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 md:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.label} className="border-l-2 border-brand-red pl-4">
              <p className="text-xs font-bold tracking-widest text-brand-red uppercase">{f.label}</p>
              <p className="mt-1 text-lg font-bold text-black">{f.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
