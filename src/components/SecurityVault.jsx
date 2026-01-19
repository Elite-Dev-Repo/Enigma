import { motion } from "framer-motion";

export default function SecurityVault() {
  return (
    <section className="py-24 md:py-40 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header: Fluid font size and adjusted spacing */}
        <div className="border-l-2 border-[#FF5F1F] pl-6 md:pl-8 mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
            Secure_Vault
          </h2>
          <p className="text-white/30 font-mono uppercase tracking-[0.2em] md:tracking-widest text-[10px] md:text-sm mt-3">
            Privacy is the Protocol.
          </p>
        </div>

        {/* Grid: Stacks on mobile, 2-cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 border border-white/5 bg-gradient-to-br from-white/5 to-transparent relative group"
          >
            {/* Industrial corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-[#FF5F1F]/40 transition-colors" />

            <h4 className="text-white font-bold mb-4 uppercase tracking-tight text-sm md:text-base">
              Isolated Execution
            </h4>
            <p className="text-white/40 text-[11px] md:text-xs font-mono uppercase leading-6 tracking-tight">
              Agent tasks are processed in ephemeral secure enclaves. Once the
              task is executed, the data footprint is purged.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 border border-white/5 bg-gradient-to-br from-white/5 to-transparent relative group"
          >
            {/* Industrial corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-[#FF5F1F]/40 transition-colors" />

            <h4 className="text-white font-bold mb-4 uppercase tracking-tight text-sm md:text-base">
              Zero Knowledge Intent
            </h4>
            <p className="text-white/40 text-[11px] md:text-xs font-mono uppercase leading-6 tracking-tight">
              Enigma manages your preferences locally. Your "Intent Profile" is
              never sold, indexed, or shared with advertisers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
