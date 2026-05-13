import { motion } from "motion/react";
import { fadeIn, staggerContainer, staggerItem } from "./animations";

// Componente de diferenciais e métricas
export function Differentiation() {
  return (
    <motion.section {...fadeIn} className="px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
      <h2 className="tracking-tight mb-8 max-w-4xl">
        <span className="block text-white text-4xl md:text-5xl lg:text-[56px] font-semibold mb-2 leading-[1.1]">
          We don’t just send candidates.
        </span>
        <span className="block text-[#9CA3AF] text-3xl md:text-4xl lg:text-[48px] font-medium leading-[1.15]">
          We make hiring in Brazil<br />
          a safe bet
        </span>
      </h2>
      <div className="w-48 h-[2px] bg-gradient-to-r from-kaptas-green to-[#A78BFA] rounded-full mb-16"></div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 w-full pb-16 border-b border-white/10"
      >
        <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-bold text-kaptas-green mb-2">20+</span>
          <span className="text-lg font-medium text-gray-300 mb-1">Years</span>
          <span className="text-gray-500 text-sm">Combined experience in<br />Brazil's tech market</span>
        </motion.div>
        <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-bold text-kaptas-green mb-2">30+</span>
          <span className="text-lg font-medium text-gray-300 mb-1">Clients</span>
          <span className="text-gray-500 text-sm">US and global<br />companies served</span>
        </motion.div>
        <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-bold text-kaptas-green mb-2">300+</span>
          <span className="text-lg font-medium text-gray-300 mb-1">Placements</span>
          <span className="text-gray-500 text-sm">Engineers and specialists<br />hired and placed</span>
        </motion.div>
        <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-bold text-kaptas-green mb-2">75%</span>
          <span className="text-lg font-medium text-gray-300 mb-1">Rate</span>
          <span className="text-gray-500 text-sm">Placement on<br />presented finalists</span>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full"
      >
        <motion.div variants={staggerItem} className="border-l-2 border-kaptas-purple pl-6 py-2">
          <h3 className="text-xl font-semibold mb-3">Strategic partner, not a recruiter</h3>
          <p className="text-gray-400 text-sm leading-relaxed">We learn your stack, stage, and culture before sourcing a single candidate.</p>
        </motion.div>
        <motion.div variants={staggerItem} className="border-l-2 border-kaptas-purple pl-6 py-2">
          <h3 className="text-xl font-semibold mb-3">Build teams, not just fill roles</h3>
          <p className="text-gray-400 text-sm leading-relaxed">We help you structure and scale operations, thinking beyond the immediate hire.</p>
        </motion.div>
        <motion.div variants={staggerItem} className="border-l-2 border-kaptas-purple pl-6 py-2">
          <h3 className="text-xl font-semibold mb-3">Highly specialized in Brazil</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Brazil-only. Deep local network, not a LatAm marketplace.</p>
        </motion.div>
        <motion.div variants={staggerItem} className="border-l-2 border-kaptas-purple pl-6 py-2">
          <h3 className="text-xl font-semibold mb-3">Raise the talent<br />bar</h3>
          <p className="text-gray-400 text-sm leading-relaxed">We vet 50+ candidates to present 3 finalists. You only interview the best.</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
