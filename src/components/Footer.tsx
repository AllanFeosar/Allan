import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-brand-gray md:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="X MEG" width={24} height={24} className="rounded-full" />
          <span>&copy; {new Date().getFullYear()} X MEG. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-brand-red">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-brand-red">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
