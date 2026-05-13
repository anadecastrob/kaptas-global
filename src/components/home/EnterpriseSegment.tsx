import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeIn } from "./animations";

// Componente de segmento Enterprise / On-site
export function EnterpriseSegment() {
  return (
    <div className="w-full bg-[#F9FAFB] pt-[70px] h-[320px] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-kaptas-green/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none opacity-50"></div>
      
      <motion.section {...fadeIn} className="px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-kaptas-purple"></div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Market Entry</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#111111] mb-6">
              Starting your <span className="font-semibold text-[#111111]">on-site operations</span> in Brazil?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We de-risk your market entry by navigating local compliance, sourcing qualified talent, and mapping the leadership landscape, so you can build your team and start operating in Brazil with confidence.
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto mt-6 md:mt-0">
            <Link 
              to="/start-operation" 
              className="group/btn inline-flex items-center justify-center gap-3 bg-[#111111] text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-colors w-full md:w-auto shadow-lg"
            >
              Find out more
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
