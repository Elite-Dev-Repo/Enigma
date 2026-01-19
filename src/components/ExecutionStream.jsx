export default function ExecutionStream() {
  return (
    <section className="py-24 md:py-40 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
        {/* Content Side */}
        <div className="flex-1 w-full lg:pt-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white italic tracking-tighter mb-6 uppercase leading-none">
            Beyond <br /> <span className="text-[#FF5F1F]">Chat.</span>
          </h2>
          <p className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] leading-loose max-w-md">
            Standard AI talks. Enigma executes. Our proprietary agentic layer
            negotiates with local providers in real-time.
          </p>
        </div>

        {/* Terminal Side */}
        <div className="flex-1 w-full max-w-2xl bg-[#0A0A0A] border border-white/10 p-5 md:p-8 rounded-sm font-mono text-[9px] md:text-[11px] relative overflow-hidden">
          {/* Subtle Scanline Effect for Premium Look */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />

          {/* Terminal Window Chrome */}
          <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF5F1F] shadow-[0_0_5px_#FF5F1F]" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/5" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/5" />
            </div>
            <div className="text-[8px] text-white/20 tracking-widest uppercase">
              Console.v4_Active
            </div>
          </div>

          {/* Terminal Content */}
          <div className="space-y-3 uppercase text-white/50 relative z-10">
            <p className="text-white/80">// initializing_local_agent...</p>
            <div className="flex gap-2">
              <span className="text-[#FF5F1F] opacity-50">{">"}</span>
              <p className="break-all">
                targeting:{" "}
                <span className="text-white/90">
                  barbershop_directory_lagos
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[#FF5F1F] opacity-50">{">"}</span>
              <p>
                status:{" "}
                <span className="text-white/90">searching_availability</span>
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-[#FF5F1F] animate-pulse">{">"}</span>
              <p className="text-[#FF5F1F]/80">
                logic: resolving_conflict_at_1400hrs
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5">
              <p className="text-white flex items-center gap-2">
                <span className="text-[#FF5F1F] font-bold">SUCCESS:</span>
                Appointment_Secured_1530
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
