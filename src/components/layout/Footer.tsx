import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Yusuf Adeniyi. Built with Next.js
          & Tailwind.
        </p>

        <a
          href="#"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition"
        >
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
