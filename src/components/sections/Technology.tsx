import SectionHeading from "@/components/SectionHeading";

const GROUPS = [
  { title: "Backend", items: ["C#", "ASP.NET Core / .NET", "REST APIs", "JWT"] },
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "HTML / CSS / JavaScript"] },
  { title: "Database", items: ["SQL Server", "MySQL"] },
  { title: "Programming", items: ["Python", "Node.js", "PHP"] },
  { title: "DevOps & Deployment", items: ["Docker", "Nginx", "IIS", "Git / GitHub"] },
  { title: "Developer Tools", items: ["Swagger / OpenAPI", "Postman"] },
  { title: "AI", items: ["AI Integration", "AI Coding", "Agentic AI"] },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-white px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="03 / Technology" title="A practical full-stack engineering toolkit." />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="border-b-2 border-brand-red pb-2 text-sm font-bold tracking-widest text-brand-red uppercase">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
