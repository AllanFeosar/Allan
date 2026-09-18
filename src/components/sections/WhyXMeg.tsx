import SectionHeading from "@/components/SectionHeading";

const REASONS = [
  { title: "Full-Stack Thinking", desc: "Frontend, backend, APIs and databases considered as one system." },
  { title: "Practical Engineering", desc: "Technology choices are driven by the actual requirement." },
  { title: "Custom Solutions", desc: "Build around business needs rather than forcing a business into a generic product." },
  { title: "API-First Capability", desc: "Design and integrate services that allow systems to communicate effectively." },
  { title: "Modern Deployment", desc: "Experience across IIS, Docker, Nginx, Git and application deployment workflows." },
  { title: "AI-Ready Development", desc: "Explore practical AI integration, AI-assisted development and agentic workflows where they create value." },
];

export default function WhyXMeg() {
  return (
    <section id="why-xmeg" className="bg-black px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="10 / Why X MEG" title="Technology should solve the problem, not become the problem." dark />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="border-l-2 border-brand-red pl-5">
              <h3 className="text-sm font-bold tracking-wide text-white uppercase">{r.title}</h3>
              <p className="mt-2 text-sm text-brand-gray">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
