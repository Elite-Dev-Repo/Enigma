export default function GenesisCTA() {
  return (
    <section className="py-60 flex flex-col items-center text-center px-6 bg-black">
      <div className="w-20 h-[1px] bg-[#FF5F1F] mb-12" />
      <h2 className="text-6xl md:text-8xl font-bold text-white italic tracking-tighter mb-12">
        JOIN_GENESIS
      </h2>
      <button className="group relative px-12 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:pr-16">
        <span className="relative z-10">Request Access</span>
        <span className="absolute right-0 top-0 h-full w-0 bg-[#FF5F1F] transition-all group-hover:w-12 flex items-center justify-center text-white">
          →
        </span>
      </button>
      <p className="mt-8 text-white/40 font-mono text-[10px] uppercase tracking-[0.5em]">
        Limited Deployment: 10,000 Nodes
      </p>
    </section>
  );
}
