export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-red">{eyebrow}</p>
      <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
      <div className="mt-6 h-[2px] w-16 bg-brand-red" />
    </div>
  );
}
