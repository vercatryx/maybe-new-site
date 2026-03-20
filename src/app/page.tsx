import ScrollHero from "@/components/ScrollHero";

export default function Home() {
  return (
    <main className="w-full bg-white min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ScrollHero />
      
      <section className="h-screen w-full flex items-center justify-center bg-white px-6 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <div className="text-center max-w-2xl border border-zinc-200 rounded-3xl p-12 bg-white/50 backdrop-blur-sm shadow-xl">
          <h2 className="text-5xl font-bold mb-6 text-black tracking-tight">The Future is Automated</h2>
          <p className="text-xl text-zinc-600 mb-10">
            The chaotic office is gone. Your transition to a seamless, perfectly organized workflow is complete.
          </p>
          <button className="px-10 py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-zinc-800 transition-transform hover:scale-105 active:scale-95 shadow-lg">
            Start Automating
          </button>
        </div>
      </section>
    </main>
  );
}
