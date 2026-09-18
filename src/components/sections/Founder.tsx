import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function Founder() {
  return (
    <section id="founder" className="bg-black px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[280px_1fr]">
        <div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/images/founder.jpeg"
              alt="Allan Geoffrey Feosar J.B"
              fill
              sizes="(min-width: 768px) 280px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-xs font-bold tracking-widest text-brand-red uppercase">Founder</p>
          <h3 className="text-xl font-bold text-white">Allan Geoffrey Feosar J.B</h3>
          <p className="text-brand-gray">Full-Stack Web Developer</p>
          <div className="mt-4 space-y-1 text-sm text-brand-gray">
            <p>Chennai, India</p>
            <p>linkedin.com/in/allan-feosar-204a6a21a</p>
            <p>github.com/AllanFeosar</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="06 / Founder" title="Founder" dark />
          <div className="space-y-5 text-lg leading-relaxed text-gray-300">
            <p>
              X MEG is driven by hands-on software engineering experience across
              frontend development, backend systems, APIs, databases, deployment and
              emerging AI technologies.
            </p>
            <p>
              Allan&apos;s technical background includes C#, ASP.NET Core, REST APIs,
              JWT, React, Next.js, TypeScript, SQL Server, MySQL, Python, Node.js, PHP,
              Docker, Nginx, Git, GitHub, Swagger, Postman and AI-enabled development.
            </p>
            <p>
              The focus is practical engineering: understanding a requirement,
              designing the technical solution and building software that can be used
              in real operational environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
