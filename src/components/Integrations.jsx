import { motion } from "framer-motion";
import { CreditCard, MessageSquare, Globe, Cpu } from "lucide-react";

const protocols = [
  {
    id: "STRIPE_v4",
    name: "Financial Settlement",
    provider: "Stripe",
    status: "Encrypted",
    icon: <CreditCard size={18} />,
    desc: "Autonomous payment execution and escrow management.",
  },
  {
    id: "WA_BRIDGE_01",
    name: "Communication Relay",
    provider: "WhatsApp Business",
    status: "Active",
    icon: <MessageSquare size={18} />,
    desc: "Direct-to-vendor negotiation and confirmation streams.",
  },
  {
    id: "G_MAPS_DATA",
    name: "Geospatial Index",
    provider: "Google Cloud",
    status: "Operational",
    icon: <Globe size={18} />,
    desc: "Real-time location verification and transit logistics.",
  },
  {
    id: "ENIGMA_SCRAPER",
    name: "Offline Web Access",
    provider: "Playwright/Python",
    status: "System Core",
    icon: <Cpu size={18} />,
    desc: "The proprietary engine for non-API business interaction.",
  },
];

export default function Integrations() {
  return (
    <section className="py-40  px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl max-md:text-3xl font-bold text-white italic tracking-tighter uppercase mb-4">
              Integrated_Protocols
            </h2>
            <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.4em]">
              Enigma connects to the world's infrastructure to execute your
              intent.
            </p>
          </div>
          <div className="text-[#FF5F1F] font-mono text-[10px] uppercase tracking-widest border border-[#FF5F1F]/30 px-4 py-2 bg-[#FF5F1F]/5">
            Total_Connections: 04_Stable
          </div>
        </div>

        {/* The Integration Grid */}
        <div className="grid md:grid-cols-2 gap-0 border-l border-t border-white/5">
          {protocols.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
              className="p-12 border-r border-b border-white/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="text-white/20 group-hover:text-[#FF5F1F] transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                    ID: {p.id}
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-2">
                  {p.name}
                </h3>
                <p className="text-white/40 text-xs font-mono uppercase tracking-tighter leading-relaxed mb-8">
                  {p.desc}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-[#FF5F1F]" />
                <span className="text-[10px] font-mono text-[#FF5F1F] uppercase tracking-widest">
                  {p.status}
                </span>
                <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest">
                  — {p.provider}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
