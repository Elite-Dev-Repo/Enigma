import { motion } from "framer-motion";

export default function SecurityVault() {
  return (
    <section className="py-40 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-l-2 border-[#FF5F1F] pl-8 mb-20">
          <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter">
            Secure_Vault
          </h2>
          <p className="text-white/30 font-mono uppercase tracking-widest text-sm mt-2">
            Privacy is the Protocol.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 border border-white/5 bg-gradient-to-br from-white/5 to-transparent"
          >
            <h4 className="text-white font-bold mb-4 uppercase tracking-tight">
              Isolated Execution
            </h4>
            <p className="text-white/40 text-xs font-mono uppercase leading-6">
              Agent tasks are processed in ephemeral secure enclaves. Once the
              task is executed, the data footprint is purged.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 border border-white/5 bg-gradient-to-br from-white/5 to-transparent"
          >
            <h4 className="text-white font-bold mb-4 uppercase tracking-tight">
              Zero Knowledge Intent
            </h4>
            <p className="text-white/40 text-xs font-mono uppercase leading-6">
              Enigma manages your preferences locally. Your "Intent Profile" is
              never sold, indexed, or shared with advertisers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
