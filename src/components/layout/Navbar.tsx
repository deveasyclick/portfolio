"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

const links = [
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Writing",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Yusuf<span className="text-blue-500">.</span>
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/resume/resume.pdf"
            download
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-sm font-medium"
          >
            <Download size={16} />
            Resume
          </a>

          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 backdrop-blur-md bg-dark/90">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-zinc-400 hover:text-white transition py-2"
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            ))}
            <a
              href="/resume/resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-sm font-medium mt-2"
            >
              <Download size={16} />
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
