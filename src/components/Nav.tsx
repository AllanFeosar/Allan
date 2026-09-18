"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useLenis } from "lenis/react";

// Hrefs are section ids only - these sections live on the home page ("/").
// On other pages (privacy-policy, thank-you, ...) they don't exist, so
// clicking one navigates home first, then scrolls once there.
const LINKS = [
  { href: "#company", label: "Company" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

const HEADER_OFFSET = -80;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();

  // Plain <a href="#..."> relies on native browser anchor-scroll, which
  // fights Lenis's own virtualized scroll position (confirmed 2026-09 -
  // it was jumping to the wrong section entirely). Routing every anchor
  // click through lenis.scrollTo() keeps Lenis's internal state in sync -
  // but only when the target section actually exists on the current page.
  const goTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    if (!document.querySelector(href === "#top" ? "#top" : href)) return;
    lenis?.scrollTo(href, { offset: HEADER_OFFSET, duration: 1.2 });
  };

  const linkHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-16">
        <a href={linkHref("#top")} onClick={(e) => goTo(e, "#top")} className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="X MEG" width={36} height={36} className="rounded-full" priority />
          <span className="text-sm font-bold tracking-widest text-white">X MEG</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={linkHref(l.href)}
              onClick={(e) => goTo(e, l.href)}
              className="text-sm text-brand-gray transition-colors hover:text-brand-red"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="text-sm font-bold text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={linkHref(l.href)}
              onClick={(e) => goTo(e, l.href)}
              className="py-2 text-brand-gray hover:text-brand-red"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
