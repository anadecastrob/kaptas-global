import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeIn } from "./animations";

// Componente de navegação para os serviços
export function ServiceNavigation() {
  return (
    <motion.section {...fadeIn} className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-0 pb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Intro / Context (Spans 4 cols, 2 rows on desktop) */}
        <div className="md:col-span-12 lg:col-span-4 lg:row-span-2 flex flex-col justify-start pt-4 lg:pr-12 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-white">
            Choose how <br className="hidden lg:block" /><span className="font-semibold">to hire</span>
          </h2>
          <div className="space-y-8">
            <p className="text-gray-400 text-sm leading-relaxed">
              Whether you need one contractor tomorrow or a full team next quarter, the process adapts
            </p>
            
            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-3">
                Don't see your exact setup?
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-kaptas-green transition-colors group">
                Build a tailored solution
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Outsourcing & Staffing (Spans 4 cols) */}
        <Link to="/contractor-staffing" className="group md:col-span-6 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-neon-blue/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
          
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-kaptas-purple uppercase tracking-widest">01 // Plug & Play</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Outsourcing & Staffing</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              They report to you. We handle everything else: sourcing, contracts, payroll, and compliance. One engineer or a full team.
            </p>
          </div>
          
          <div className="flex items-center justify-between relative z-10 mt-auto pt-6 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                PAY MONTHLY
              </div>
              <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                NO LONG-TERM CONTRACT
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue group-hover:bg-neon-blue/10 transition-all duration-300 shrink-0">
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-neon-blue group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </Link>

        {/* Direct Hire (Spans 4 cols) */}
        <Link to="/direct-hire" className="group md:col-span-6 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-kaptas-green/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-kaptas-green/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
          
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-kaptas-green uppercase tracking-widest">02 // Core</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Direct Hire</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We find and vet the talent. You hire them directly, as a contractor or full-time employee. Payroll and employment are on your side.
            </p>
          </div>
          
          <div className="flex items-center justify-between relative z-10 mt-auto pt-6 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                PAY ON HIRE
              </div>
              <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                ZERO COST TO INTERVIEW
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-kaptas-green group-hover:bg-kaptas-green/10 transition-all duration-300 shrink-0">
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-kaptas-green group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </Link>

        {/* Executive Mapping (Spans 4 cols) */}
        <Link to="/executive-mapping" className="group md:col-span-6 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
          
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-blue-500 uppercase tracking-widest">03 // Intel</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Executive Mapping</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We find and vet the talent. You hire them directly, as a contractor or full-time employee. Payroll and employment are on your side.
            </p>
          </div>
          
          <div className="flex items-center justify-between relative z-10 mt-auto pt-6 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                DEDICATED SEARCH
              </div>
              <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                RETAINED ENGAGEMENT
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300 shrink-0">
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </Link>

        {/* Hire in Brazil (Spans 4 cols) */}
        <Link to="/hire-in-brazil" className="group md:col-span-6 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
          
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-white uppercase tracking-widest">04 // Build</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Hire in Brazil</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Opening a physical presence in Brazil. We handle EOR, compliance, and local hiring. Turnkey.
            </p>
          </div>
          
          <div className="flex items-center justify-between relative z-10 mt-auto pt-6 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                FULL COMPLIANCE
              </div>
              <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                END-TO-END SETUP
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300 shrink-0">
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </Link>

      </div>
    </motion.section>
  );
}
