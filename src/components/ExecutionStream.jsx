export default function ExecutionStream() {
  return (
    <section className="py-40 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-white italic tracking-tighter mb-6 uppercase">
            Beyond <br /> <span className="text-[#FF5F1F]">Chat.</span>
          </h2>
          <p className="text-white/40 font-mono text-xs uppercase tracking-[0.3em] leading-loose">
            Standard AI talks. Enigma executes. Our proprietary agentic layer
            negotiates with local providers in real-time.
          </p>
        </div>

        <div className="flex-1 w-full bg-[#0A0A0A] border border-white/10 p-6 rounded-sm font-mono text-[10px]">
          <div className="flex gap-2 mb-6">
            <div className="w-2 h-2 bg-[#FF5F1F]" />
            <div className="w-2 h-2 bg-white/10" />
            <div className="w-2 h-2 bg-white/10" />
          </div>
          <div className="space-y-2 uppercase text-white/60">
            <p className="text-white">// initializing_local_agent...</p>
            <p>{">"} targeting: barbershop_directory_lagos</p>
            <p>{">"} status: searching_availability</p>
            <p className="text-[#FF5F1F] animate-pulse">
              {">"} logic: resolving_conflict_at_1400hrs
            </p>
            <p className="pt-4 text-white">Result: Appointment_Secured_1530</p>
          </div>
        </div>
      </div>
    </section>
  );
}
