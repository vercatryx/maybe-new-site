import ScrollHero from "@/components/ScrollHero";

export default function Home() {
  return (
    <div className="w-full bg-white font-sans text-zinc-900 pb-20">
      {/* Hero Video Animation */}
      <ScrollHero />

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The Efficiency of Automation</h2>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto">
            We replace complex, chaotic, or legacy human workflows with ruthless machine efficiency.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "No Headcount", desc: "Eliminate roles, salaries, benefits, and management overhead permanently." },
            { title: "Zero Sick Days", desc: "Your tailored operations run 24/7/365 without a single interruption or delay." },
            { title: "Consistent Output", desc: "No retraining, no human error. Absolute precision, executed every single time." }
          ].map((item, i) => (
            <div key={i} className="p-10 md:p-12 rounded-[2rem] bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-8">
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24 md:py-32 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-32">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our 3-Step Process</h2>
            <p className="text-xl text-zinc-400 max-w-3xl">
              We don't sell templates or SaaS subscriptions. We build custom intelligence engines engineered precisely for your operational bottlenecks.
            </p>
          </div>
          <div className="space-y-16 md:space-y-24">
            {[
              { step: "01", title: "Discovery & Analysis", desc: "We comprehensively audit your manual workflows, mapping every click, document, and decision, to identify the central bottlenecks." },
              { step: "02", title: "Engine Construction", desc: "We construct bespoke AI agents equipped with advanced OCR and decision logic, designed to seamlessly run your unique operations." },
              { step: "03", title: "Total Deployment", desc: "We launch the autonomous system into your environment and hand you back the controls to a newly evolved business." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start border-t border-zinc-800 pt-16">
                <span className="text-6xl md:text-7xl font-light text-zinc-700 font-mono tracking-tighter">{item.step}</span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{item.title}</h3>
                  <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Technical Capabilities</h2>
            <p className="text-xl text-zinc-500 mb-12 leading-relaxed">
              Legacy systems and missing APIs shouldn't halt innovation. Our agents utilize state-of-the-art unstructured data extraction and cognitive automation to interface seamlessly with any platform.
            </p>
            <ul className="space-y-8">
              {[
                "Advanced OCR & Data Extraction",
                "Legacy Browser & Portal Emulation",
                "Complex Decision Logic Structuring"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-6 text-xl md:text-2xl font-semibold text-black">
                  <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg shadow-md shrink-0">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 aspect-square bg-zinc-50 rounded-[3rem] p-12 relative overflow-hidden flex items-center justify-center border border-zinc-200 shadow-2xl">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
            <img src="/logos/poel logo .png" alt="Poel AI Central Node" className="w-[60%] h-auto object-contain relative z-10 drop-shadow-2xl" />
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 text-black">Ready to evolve?</h2>
        <button className="px-12 py-6 bg-black text-white text-xl font-bold rounded-full hover:bg-zinc-800 transition-transform hover:scale-105 active:scale-95 shadow-2xl">
          Schedule Your Audit
        </button>
      </section>
    </div>
  );
}
