"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/site";

const links = [
  { href: "#kelebihan", label: "Kelebihan" },
  { href: "#peralatan", label: "Peralatan" },
  { href: "#harga", label: "Harga" },
  { href: "#lokasi", label: "Lokasi" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="font-display text-2xl font-bold tracking-wide">
          ALPHA<span className="text-accent">GYM</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-body"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-wa px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-wa-deep sm:block"
          >
            WHATSAPP KAMI
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="cursor-pointer p-2 text-muted transition-colors duration-200 hover:text-body md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <div className="flex flex-col px-4 py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm text-muted transition-colors duration-200 hover:text-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 mb-2 rounded-md bg-wa px-5 py-3 text-center font-display text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-wa-deep sm:hidden"
            >
              WHATSAPP KAMI
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
