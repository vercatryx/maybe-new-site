import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md z-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* We'll use a standard img tag for simplicity or Image if preferred */}
          <img 
            src="/logos/poel-logo-full.png" 
            alt="Poel AI" 
            className="h-8 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="#philosophy" className="hover:text-black transition-colors">Philosophy</Link>
          <Link href="#methodology" className="hover:text-black transition-colors">Methodology</Link>
          <Link href="#features" className="hover:text-black transition-colors">Features</Link>
        </div>
        <button className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-colors">
          Schedule a Call
        </button>
      </div>
    </nav>
  );
}
