import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Contact() {
  const { contact } = profile;
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's build something" />

        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/75">
          I&apos;m open to full-stack development work: APIs, web applications, and the systems behind them.
          Reach out by email, phone, or LinkedIn.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactRow label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
          <ContactRow label="LinkedIn" value="allan-feosar-204a6a21a" href={contact.linkedin} external />
          <ContactRow label="GitHub" value="AllanFeosar" href={contact.github} external />
          <ContactRow label="Location" value={profile.location} />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const body = (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gray">{label}</p>
      <p className="mt-2 break-all text-lg">{value}</p>
    </>
  );
  const shared = "rounded-2xl border border-white/10 bg-panel p-6";
  if (!href) return <div className={shared}>{body}</div>;
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${shared} transition-colors hover:border-brand-red/60`}
    >
      {body}
    </a>
  );
}
