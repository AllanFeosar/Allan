import SectionHeading from "@/components/SectionHeading";

const STEPS = [
  { n: "01", title: "Discover", desc: "Understand the business problem, users, requirements and constraints." },
  { n: "02", title: "Plan", desc: "Define scope, architecture, technology and implementation strategy." },
  { n: "03", title: "Architect", desc: "Design application structure, APIs, database models and technical foundations." },
  { n: "04", title: "Build", desc: "Develop frontend, backend, APIs and supporting systems." },
  { n: "05", title: "Test", desc: "Validate functionality, usability, integration and reliability." },
  { n: "06", title: "Deploy", desc: "Prepare the application for its target environment and deployment workflow." },
  { n: "07", title: "Support", desc: "Continue improvements, maintenance and technical support as required." },
];

export default function Process() {
  return (
    <section id="process" className="bg-white px-6 py-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="05 / Our Process" title="Our Process" />
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                {s.n}
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">{s.title}</h3>
                <p className="mt-1 text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
