import { motion } from "motion/react";
import { fadeIn } from "./animations";

// Componente de prova social (Carrossel de marcas)
export function SocialProof() {
  return (
    <motion.section {...fadeIn} className="w-full border-y border-gray-200 bg-[#F9FAFB] py-12 relative z-10">
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-8 text-center">
          trusted by startups building fast
        </p>
        <div className="w-full relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear" as any, duration: 30 }}
          >
            {/* Group 1 */}
            <div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
              <div className="text-xl font-black font-serif tracking-tight text-[#111111] hover:opacity-100 cursor-default transition-opacity">Acme Corp</div>
              <div className="text-xl font-black tracking-tighter text-[#111111] hover:opacity-100 cursor-default transition-opacity">GLOBAL</div>
              <div className="text-xl font-black italic text-[#111111] hover:opacity-100 cursor-default transition-opacity">TechFlow</div>
              <div className="text-xl font-black uppercase text-[#111111] hover:opacity-100 cursor-default transition-opacity">NEXUS</div>
              <div className="text-xl font-black text-[#111111] hover:opacity-100 cursor-default transition-opacity">Vanguard</div>
              <div className="text-xl font-black font-mono tracking-tighter text-[#111111] hover:opacity-100 cursor-default transition-opacity">SYNAPSE</div>
            </div>
            {/* Group 2 (Duplicate for seamless loop) */}
            <div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
              <div className="text-xl font-black font-serif tracking-tight text-[#111111] hover:opacity-100 cursor-default transition-opacity">Acme Corp</div>
              <div className="text-xl font-black tracking-tighter text-[#111111] hover:opacity-100 cursor-default transition-opacity">GLOBAL</div>
              <div className="text-xl font-black italic text-[#111111] hover:opacity-100 cursor-default transition-opacity">TechFlow</div>
              <div className="text-xl font-black uppercase text-[#111111] hover:opacity-100 cursor-default transition-opacity">NEXUS</div>
              <div className="text-xl font-black text-[#111111] hover:opacity-100 cursor-default transition-opacity">Vanguard</div>
              <div className="text-xl font-black font-mono tracking-tighter text-[#111111] hover:opacity-100 cursor-default transition-opacity">SYNAPSE</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
