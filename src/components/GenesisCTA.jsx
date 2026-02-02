export default function GenesisCTA() {
  return (
    <section className="py-32 md:py-60 flex flex-col items-center text-center px-6  relative overflow-hidden">
      {/* Decorative background element for mobile depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#fff]/5 blur-[120px] pointer-events-none" />

      <div className="w-12 md:w-20 h-[1px] bg-[#FF5F1F] mb-8 md:mb-12" />

      {/* Fluid text: scales from 3.5rem on mobile to 8rem on desktop */}
      <h2 className="text-[3.2rem] sm:text-[5rem] md:text-8xl font-bold text-white italic tracking-[calc(-0.05em)] mb-10 md:mb-12 leading-none z-10">
        JOIN_GENESIS
      </h2>

      <button className="group relative w-full max-w-[280px] sm:max-w-none sm:w-auto px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs overflow-hidden transition-all active:scale-95 z-10">
        <span className="relative z-10">Request Access</span>

        {/* The Hover/Active Slide - Made orange always visible on small mobile for clarity */}
        <span className="absolute right-0 top-0 h-full w-0 sm:group-hover:w-12 bg-[#FF5F1F] transition-all flex items-center justify-center text-white">
          <span className="opacity-0 sm:group-hover:opacity-100 transition-opacity">
            →
          </span>
        </span>
      </button>

      <div className="mt-12 space-y-2 z-10">
        <p className="text-white/40 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em]">
          Limited Deployment: 10,000 Nodes
        </p>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 ${i < 3 ? "bg-[#FF5F1F]" : "bg-white/10"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
