import { motion } from "motion/react";
import { fadeIn } from "./animations";

// Componente de mapeamento de talentos e cargos
export function TalentMapping() {
  return (
    <div className="bg-[#F9FAFB] text-[#111111] pt-[50px] pb-[50px] h-[500px] w-full mt-0 relative z-10 overflow-hidden">
      <motion.section {...fadeIn} className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-kaptas-purple"></div>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Talent Mapping</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#111111] mb-6">
            The best talent isn't applying.<br />
            <span className="font-semibold text-[#111111]">We go find them</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            No job postings. No applicant pools. We run targeted searches across Brazil's top tech companies to find the exact profile your team needs.
          </p>
        </div>
      </motion.section>
      
      {/* Marquee 1 */}
      <div className="flex whitespace-nowrap overflow-hidden mb-6 relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10"></div>
        <motion.div 
          className="flex gap-4 px-2 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear" as any, duration: 40 }}
        >
          {[
            { name: "Frontend Engineer", color: "bg-kaptas-green" },
            { name: "Account Executive", color: "bg-red-500" },
            { name: "Financial Analyst", color: "bg-blue-500" },
            { name: "Product Manager", color: "bg-kaptas-green" },
            { name: "Backend Engineer", color: "bg-kaptas-green" },
            { name: "SDR", color: "bg-red-500" },
            { name: "UI/UX Designer", color: "bg-orange-500" },
            { name: "Data Scientist", color: "bg-kaptas-green" },
            { name: "Fullstack Engineer", color: "bg-kaptas-green" },
            { name: "Head of Finance", color: "bg-blue-500" },
            { name: "Machine Learning", color: "bg-kaptas-green" },
            { name: "QA Engineer", color: "bg-kaptas-green" },
            { name: "Blockchain Engineer", color: "bg-kaptas-green" },
            { name: "Frontend Engineer", color: "bg-kaptas-green" },
            { name: "Account Executive", color: "bg-red-500" },
            { name: "Financial Analyst", color: "bg-blue-500" },
            { name: "Product Manager", color: "bg-kaptas-green" },
            { name: "Backend Engineer", color: "bg-kaptas-green" },
            { name: "SDR", color: "bg-red-500" },
            { name: "UI/UX Designer", color: "bg-orange-500" },
            { name: "Data Scientist", color: "bg-kaptas-green" },
            { name: "Fullstack Engineer", color: "bg-kaptas-green" },
            { name: "Head of Finance", color: "bg-blue-500" },
            { name: "Machine Learning", color: "bg-kaptas-green" },
            { name: "QA Engineer", color: "bg-kaptas-green" },
            { name: "Blockchain Engineer", color: "bg-kaptas-green" }
          ].map((role, i) => (
            <div key={i} className="px-4 py-2 md:px-5 md:py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#111111] shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-nowrap flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${role.color}`}></div>
              {role.name}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee 2 */}
      <div className="flex whitespace-nowrap overflow-hidden relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10"></div>
        <motion.div 
          className="flex gap-4 px-2 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear" as any, duration: 45 }}
        >
          {[
            { name: "CTO", color: "bg-kaptas-green" },
            { name: "VP of Sales", color: "bg-red-500" },
            { name: "AI Engineer", color: "bg-kaptas-green" },
            { name: "Cloud Architect", color: "bg-kaptas-green" },
            { name: "RevOps Specialist", color: "bg-blue-500" },
            { name: "Marketing Director", color: "bg-orange-500" },
            { name: "Security Engineer", color: "bg-kaptas-green" },
            { name: "Technical Sales", color: "bg-red-500" },
            { name: "Fullstack Engineer", color: "bg-kaptas-green" },
            { name: "CFO", color: "bg-blue-500" },
            { name: "Mobile Developer", color: "bg-kaptas-green" },
            { name: "QA Engineer", color: "bg-kaptas-green" },
            { name: "Blockchain Engineer", color: "bg-kaptas-green" },
            { name: "CTO", color: "bg-kaptas-green" },
            { name: "VP of Sales", color: "bg-red-500" },
            { name: "AI Engineer", color: "bg-kaptas-green" },
            { name: "Cloud Architect", color: "bg-kaptas-green" },
            { name: "RevOps Specialist", color: "bg-blue-500" },
            { name: "Marketing Director", color: "bg-orange-500" },
            { name: "Security Engineer", color: "bg-kaptas-green" },
            { name: "Technical Sales", color: "bg-red-500" },
            { name: "Fullstack Engineer", color: "bg-kaptas-green" },
            { name: "CFO", color: "bg-blue-500" },
            { name: "Mobile Developer", color: "bg-kaptas-green" },
            { name: "QA Engineer", color: "bg-kaptas-green" },
            { name: "Blockchain Engineer", color: "bg-kaptas-green" }
          ].map((role, i) => (
            <div key={i} className="px-4 py-2 md:px-5 md:py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#111111] shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-nowrap flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${role.color}`}></div>
              {role.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
