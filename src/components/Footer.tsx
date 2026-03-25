export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-2 mb-6 md:mb-0">
          <img 
            src="/logos/poel-logo-full.png" 
            alt="Poel AI" 
            className="h-6 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
          <p className="text-sm text-zinc-500">© 2026 Poel AI. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          <a href="mailto:info@poel.ai" className="hover:text-black transition-colors">info@poel.ai</a>
        </div>
      </div>
    </footer>
  );
}
