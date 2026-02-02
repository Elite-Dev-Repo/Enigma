import React from "react";
import IndustrialHero from "./components/IndustrialHero";
import ProtocolSection from "./components/ProtocolSection";
import ExecutionStream from "./components/ExecutionStream";
import SecurityVault from "./components/SecurityVault";
import GenesisCTA from "./components/GenesisCTA";
import enigma from "../src/assets/enigma.png";
import Integrations from "./components/Integrations";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#FF5F1F] selection:text-white scroll-smooth">
      {/* Fixed Navigation Overlay */}
      <nav className="fixed top-0 h-[80px] w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 md:py-6 mix-blend-difference backdrop-blur-[5px]">
        <div className="flex items-center gap-4">
          <img src={enigma} alt="logo" className="w-[120px] md:w-[160px]" />
        </div>

        {/* Navigation - Hidden text on very small screens or reduced tracking */}
        <div className="flex gap-4 md:gap-8">
          {["Logic", "Security", "Genesis"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70 hover:text-[#FF5F1F] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content Flow */}
      <main>
        <IndustrialHero />

        <section id="logic">
          <ProtocolSection />
        </section>

        <ExecutionStream />

        <section id="security">
          <SecurityVault />
        </section>

        <Integrations />

        <section id="genesis">
          <GenesisCTA />
        </section>
      </main>

      {/* Industrial Footer */}
      <footer className="py-12 md:py-20 border-t border-white/5 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="text-[9px] md:text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] md:tracking-[0.5em] text-center md:text-left">
          © {new Date().getFullYear()} ELITE_DEVELOPER_GLOBAL
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <span className="text-[9px] md:text-[10px] font-mono text-white/50 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#FF5F1F] animate-pulse" />
            Status: Operational
          </span>
          <span className="text-[9px] md:text-[10px] font-mono text-white/50 uppercase tracking-widest">
            Region: Lagos_Tier_1
          </span>
        </div>
      </footer>
    </div>
  );
}
