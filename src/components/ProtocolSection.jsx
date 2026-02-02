export default function ProtocolSection() {
  const specs = [
    {
      code: "01",
      label: "INTENT_CAPTURE",
      detail: "Natural language processing via Enigma LLM Layer.",
    },
    {
      code: "02",
      label: "AUTONOMOUS_SCRAPE",
      detail: "Playwright-driven execution across non-API local webs.",
    },
    {
      code: "03",
      label: "LOGISTIC_RESOLVE",
      detail: "Finalizing bookings, payments, and calendar syncs.",
    },
  ];

  return (
    <section className="py-24 md:py-40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* On mobile: vertical stack with borders. On md+: 3-column grid with 1px gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border-x border-white/5 md:border-none">
          {specs.map((spec, index) => (
            <div
              key={spec.code}
              className={` *: border border-[var(--border-light)] 
                p-8 md:p-12 transition-all hover:bg-white/[0.02] group 
                ${index !== specs.length - 1 ? "border-b border-white/5 md:border-b-0" : ""}
              `}
            >
              {/* Mono Code - Smaller on mobile */}
              <div className="text-[#FF5F1F] font-mono text-[10px] md:text-xs mb-6 md:mb-8 tracking-[0.2em] md:tracking-widest">
                [{spec.code}]
              </div>

              {/* Label - Adjusted for mobile readability */}
              <h3 className="text-white text-lg md:text-xl font-bold tracking-tighter mb-4 uppercase">
                {spec.label}
              </h3>

              {/* Detail - Mono text often needs extra leading (line height) */}
              <p className="text-white/40 text-[11px] md:text-sm font-mono leading-relaxed md:leading-loose uppercase tracking-tight">
                {spec.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
