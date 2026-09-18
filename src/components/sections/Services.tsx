import SectionHeading from "@/components/SectionHeading";

const SERVICES = [
  { title: "Web Application Development", desc: "Custom web applications designed around business workflows, users and operational requirements." },
  { title: "Website Design", desc: "Responsive, modern websites focused on usability, performance and professional presentation." },
  { title: "Software Development", desc: "Custom software solutions built around specific business requirements and processes." },
  { title: "API & Integration", desc: "REST APIs, system integration and backend services connecting applications and data." },
  { title: "Business Automation", desc: "Digital workflows and software solutions that reduce repetitive work and improve operational efficiency." },
  { title: "Job Consultancy", desc: "Technical and job consultancy support based on practical software-development experience." },
];

export default function Services() {
  return (
    <section id="services" className="bg-black px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="02 / Services" title="Services" dark />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-red/60"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-red" />
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
