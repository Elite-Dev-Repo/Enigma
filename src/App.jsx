import React from "react";
import IndustrialHero from "./components/IndustrialHero";
import ProtocolSection from "./components/ProtocolSection";
import ExecutionStream from "./components/ExecutionStream";
import SecurityVault from "./components/SecurityVault";
import GenesisCTA from "./components/GenesisCTA";
import elitelogo from "../public/elitelogo.png";

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-[#FF5F1F] selection:text-white">
      {/* Fixed Navigation Overlay */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 mix-blend-difference backdrop-blur-3xl">
        <div className="w-[50px] h-[50px]">
          <img src={elitelogo} alt="" className="w-full" />
        </div>
        <div className="flex gap-8">
          {["Logic", "Security", "Genesis"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-mono uppercase tracking-[0.3em] text-white/70 hover:text-[#FF5F1F] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content Flow */}
      <main>
        <IndustrialHero />

        <div id="logic">
          <ProtocolSection />
        </div>

        <ExecutionStream />

        <div id="security">
          <SecurityVault />
        </div>

        <div id="genesis">
          <GenesisCTA />
        </div>
      </main>

      {/* Industrial Footer */}
      <footer className="py-20 border-t border-white/5 px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} ELITE_DEVELOPER_GLOBAL
        </div>
        <div className="flex gap-6">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
            Status: Operational
          </span>
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
            Region: Lagos_Tier_1
          </span>
        </div>
      </footer>
    </div>
  );
}
