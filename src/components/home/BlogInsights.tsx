import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeIn, staggerContainer, staggerItem } from "./animations";

// Componente de insights do blog
export function BlogInsights() {
  return (
    <motion.section {...fadeIn} className="px-6 md:px-12 max-w-7xl mx-auto w-full pt-[100px] mb-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-kaptas-purple"></div>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Insights</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            The Brazil Playbook
          </h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            Strategic insights on building, scaling, and managing tech teams in Brazil.
          </p>
        </div>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-kaptas-purple transition-colors group shrink-0">
          View all articles
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {/* Article 1 */}
        <motion.div variants={staggerItem} className="group cursor-pointer">
          <div className="aspect-[16/10] bg-[#111111] rounded-2xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-kaptas-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-600 font-mono text-sm">Image Placeholder</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-kaptas-green uppercase tracking-wider">Market Data</span>
            <span className="text-gray-600 text-xs">•</span>
            <span className="text-gray-500 text-xs">5 min read</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-kaptas-green transition-colors">
            Why Brazil is the New Hub for US Tech Startups
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            An analysis of the macroeconomic factors driving US companies to build their engineering teams in Brazil.
          </p>
        </motion.div>

        {/* Article 2 */}
        <motion.div variants={staggerItem} className="group cursor-pointer">
          <div className="aspect-[16/10] bg-[#111111] rounded-2xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-kaptas-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-600 font-mono text-sm">Image Placeholder</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-kaptas-purple uppercase tracking-wider">Hiring Strategy</span>
            <span className="text-gray-600 text-xs">•</span>
            <span className="text-gray-500 text-xs">8 min read</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-kaptas-purple transition-colors">
            Direct Hire vs. EOR: Choosing the Right Model
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A comprehensive guide to understanding the legal and operational differences when hiring in Brazil.
          </p>
        </motion.div>

        {/* Article 3 */}
        <motion.div variants={staggerItem} className="group cursor-pointer">
          <div className="aspect-[16/10] bg-[#111111] rounded-2xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-600 font-mono text-sm">Image Placeholder</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-neon-blue uppercase tracking-wider">Culture</span>
            <span className="text-gray-600 text-xs">•</span>
            <span className="text-gray-500 text-xs">4 min read</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors">
            Integrating Brazilian Engineers into US Teams
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Best practices for asynchronous communication, cultural alignment, and building a unified engineering culture.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
