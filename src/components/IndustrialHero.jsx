import { motion } from "framer-motion";
import StarfieldHero from "./StarFieldHero";

export default function IndustrialHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* 1px Vertical/Horizontal Lines (The 'Ngrok' Look) */}
      <StarfieldHero />
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[1px] h-full bg-white/[0.03]" />
        <div className="absolute top-1/2 w-full h-[1px] bg-white/[0.03]" />
      </div>

      {/* Brand Identity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="z-10 flex flex-col items-center"
      >
        <div className="mb-8 flex items-center gap-2 px-3 py-1 border border-white/10 rounded-sm bg-white/5">
          <div className="w-2 h-2 rounded-full bg-[#FF5F1F] shadow-[0_0_8px_#FF5F1F]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/50">
            in Production...
          </span>
        </div>

        {/* <h1 className="text-3xl md:text-[5rem] font-bold text-center text-white tracking-tight mb-4 italic">
          <span className=" rounded bg-[#ff5f1f] text-center">
            {" "}
            Autonomous{" "}
          </span>
          agent executing <br /> local life.
        </h1> */}

        <h1 className="items-center text-3xl md:text-[5rem] font-bold text-center text-white tracking-tight mb-4">
          The{" "}
          <span className=" rounded bg-[#ff5f1f] px-4 text-center">
            Execution
          </span>{" "}
          layer for <br /> intent.
        </h1>

        <p className="text-white/40 font-mono text-xs uppercase tracking-[0.5em] mb-16">
          Autonomous agent executing local life.
        </p>
      </motion.div>

      {/* The Command Console */}
      <div className="z-10 w-full max-w-xl px-4">
        <div className="relative group bg-white/[0.02] border border-white/10 p-1 rounded-sm focus-within:border-[#FF5F1F]/50 transition-colors">
          <div className="flex items-center">
            <span className="pl-4 pr-3 text-[#FF5F1F] font-mono leading-none">
              →
            </span>
            <input
              type="text"
              placeholder="ENIGMA_EXECUTE: find_best_flight_to_lagos"
              className="bg-transparent border-none outline-none py-4 text-white font-mono text-sm w-full placeholder:text-white/10 uppercase tracking-widest"
            />
          </div>
        </div>

        {/* Helper Footer under Input */}
        <div className="mt-3 flex justify-between px-1 text-[9px] font-mono text-white/40 uppercase">
          <span>Target: Global_Local_APIs</span>
          <span>Auth: Secure_Vault_7</span>
        </div>
      </div>

      {/* Bottom Floating Menu */}
      <div className="absolute bottom-10 left-10 flex flex-col gap-4">
        {["Docs", "Status", "Log"].map((item) => (
          <button
            key={item}
            className="text-[13px] font-mono uppercase text-white/50 hover:text-[#FF5F1F] transition-colors text-left tracking-widest"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
