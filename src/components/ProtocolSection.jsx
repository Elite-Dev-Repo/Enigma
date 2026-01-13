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
    <section className="py-40 bg-black border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-1px bg-white/5">
        {specs.map((spec) => (
          <div
            key={spec.code}
            className="bg-black p-12 transition-all hover:bg-white/[0.02] group"
          >
            <div className="text-[#FF5F1F] font-mono text-xs mb-8 tracking-widest">
              [{spec.code}]
            </div>
            <h3 className="text-white text-xl font-bold tracking-tighter mb-4 uppercase">
              {spec.label}
            </h3>
            <p className="text-white/40 text-sm font-mono leading-relaxed uppercase tracking-tight">
              {spec.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
