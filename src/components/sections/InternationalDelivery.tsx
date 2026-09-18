import SectionHeading from "@/components/SectionHeading";

const BLOCKS = [
  { title: "Clear Communication", desc: "Requirements, scope and technical decisions are documented clearly." },
  { title: "Remote Collaboration", desc: "Digital workflows support communication and development across locations." },
  { title: "Flexible Engagement", desc: "Projects can be approached according to business requirements and technical scope." },
  { title: "Modern Development", desc: "Use current web technologies, APIs, databases, deployment practices and AI capabilities where appropriate." },
];

export default function InternationalDelivery() {
  return (
    <section id="international" className="bg-white px-6 py-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="09 / International Delivery" title="Engineering from India. Collaboration without borders." />
        <p className="max-w-2xl text-lg text-gray-700">
          X MEG is based in Chennai, India and is structured to work with clients
          through remote and digital collaboration. Our delivery approach is built
          around:
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {BLOCKS.map((b) => (
            <div key={b.title} className="border-l-2 border-brand-red pl-6">
              <h3 className="text-sm font-bold tracking-widest text-black uppercase">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
