import SectionHeading from "@/components/SectionHeading";

const GROUPS = [
  { title: "Startups", desc: "Turn product ideas and operational requirements into working digital systems." },
  { title: "Small & Medium Businesses", desc: "Build software around real workflows, customers and business operations." },
  { title: "Entrepreneurs", desc: "Support digital products, websites, applications and technical ideas." },
  { title: "Organizations", desc: "Develop custom applications and systems around organizational requirements." },
  { title: "Businesses Modernizing Their Operations", desc: "Digitize workflows, connect systems and introduce practical automation." },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-black px-6 py-24 md:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="08 / Who We Serve" title="Who We Serve" dark />
        <div className="space-y-8">
          {GROUPS.map((g) => (
            <div key={g.title} className="border-l-2 border-brand-red pl-6">
              <h3 className="text-lg font-bold text-white">{g.title}</h3>
              <p className="mt-2 text-brand-gray">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
