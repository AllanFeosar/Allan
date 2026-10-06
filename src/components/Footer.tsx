import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-brand-gray md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
