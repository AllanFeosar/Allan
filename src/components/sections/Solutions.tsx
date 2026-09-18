import SectionHeading from "@/components/SectionHeading";

const SOLUTIONS = [
  { title: "Business Applications", desc: "Custom applications designed around business workflows and operational needs." },
  { title: "Dashboards & Internal Systems", desc: "Interfaces that bring business information, workflows and operations into one place." },
  { title: "API-Driven Systems", desc: "Backend services and APIs designed for integration, security and maintainability." },
  { title: "Database-Powered Solutions", desc: "Structured data systems using relational databases and application-driven business logic." },
  { title: "AI-Enabled Software", desc: "Practical integration of AI capabilities into software development and business workflows." },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-black px-6 py-24 md:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="04 / Solutions" title="From requirements to working digital systems." dark />
        <div className="space-y-8">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="border-l-2 border-brand-red pl-6">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">{s.title}</h3>
              <p className="mt-2 text-brand-gray">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
