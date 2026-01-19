import { motion } from "framer-motion";
import StarfieldHero from "./StarFieldHero";

export default function IndustrialHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-4 sm:px-6">
      <StarfieldHero />

      {/* 1px Vertical/Horizontal Lines - Adjusted opacity for mobile */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[1px] h-full bg-white/[0.03]" />
        <div className="absolute top-1/2 w-full h-[1px] bg-white/[0.03] hidden sm:block" />
      </div>

      {/* Brand Identity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center w-full max-w-4xl"
      >
        <div className="mb-6 md:mb-8 flex items-center gap-2 px-3 py-1 border border-white/10 rounded-sm bg-white/5">
          <div className="w-2 h-2 rounded-full animate-pulse bg-[#FF5F1F] shadow-[0_0_8px_#FF5F1F]" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-mono text-white/50">
            in Production...
          </span>
        </div>

        {/* Fluid Typography: Text scales from 2.5rem to 4.5rem based on screen size */}
        <h1 className="text-[2.2rem] xs:text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold text-center text-white tracking-tight mb-4 leading-[1.1]">
          The{" "}
          <span className="inline-block rounded bg-white/5 px-2 md:px-4 text-center border border-white/10">
            Execution
          </span>{" "}
          layer for <br className="hidden sm:block" /> intent.
        </h1>

        <p className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] mb-12 md:mb-16 text-center max-w-[280px] sm:max-w-none">
          Autonomous agent executing local life.
        </p>
      </motion.div>

      {/* The Command Console */}
      <div className="z-10 w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative group bg-white/[0.02] border border-white/20 p-1 rounded-sm focus-within:border-[#FF5F1F]/50 transition-colors"
        >
          <div className="flex items-center">
            <span className="pl-3 md:pl-4 pr-2 md:pr-3 text-[#FF5F1F] font-mono leading-none">
              →
            </span>
            <input
              type="text"
              placeholder="ENIGMA_EXECUTE..."
              className="bg-transparent border-none outline-none py-3 md:py-4 text-white font-mono text-xs md:text-sm w-full placeholder:text-white/20 uppercase tracking-widest"
            />
          </div>
        </motion.div>

        {/* Helper Footer: Stacked on mobile, row on desktop */}
        <div className="mt-3 flex flex-col sm:flex-row justify-between px-1 gap-2 text-[9px] font-mono text-white/40 uppercase tracking-tighter sm:tracking-normal">
          <span className="flex items-center gap-1">
            Target: <span className="text-white/60">Global_Local_APIs</span>
          </span>
          <span className="flex items-center gap-1">
            Auth: <span className="text-white/60">Secure_Vault_7</span>
          </span>
        </div>
      </div>

      {/* Bottom Floating Menu - Responsive placement */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-row md:flex-col gap-6 md:gap-4 z-20">
        {["Docs", "Status", "Log"].map((item) => (
          <button
            key={item}
            className="text-[11px] md:text-[13px] font-mono uppercase text-white/50 hover:text-[#FF5F1F] transition-colors text-left tracking-[0.2em] md:tracking-widest"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
