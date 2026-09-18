export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 text-xs font-bold tracking-[0.3em] text-brand-red uppercase">{eyebrow}</p>
      <h2 className={`text-3xl font-bold md:text-5xl ${dark ? "text-white" : "text-black"}`}>{title}</h2>
      <div className="mt-6 h-[2px] w-16 bg-brand-red" />
    </div>
  );
}
