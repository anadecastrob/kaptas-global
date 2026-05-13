import React from "react";
import { Clock, ShieldCheck, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { fadeIn, staggerContainer, staggerItem } from "./animations";

export interface CaseItem {
  tag: string;
  metricPrefix?: string;
  metric: string;
  metricSuffix?: string;
  title: string;
  description: string;
  colorClass: string;
  glowClass: string;
}

interface CaseResultsProps {
  title?: string;
  subtitle?: string;
  cases?: CaseItem[];
  badges?: string[];
}

export const defaultCases: CaseItem[] = [
  {
    tag: "Case 01 // Cost Efficiency",
    metric: "55",
    metricSuffix: "%",
    title: "Lower engineering cost",
    description: "A 24-person startup replaced 8 US-based engineers post-layoff with 8 Brazil-based engineers through Kaptas Global. Same shipping pace. 55% lower engineering cost.",
    colorClass: "bg-kaptas-green",
    glowClass: "bg-kaptas-green/5"
  },
  {
    tag: "Case 02 // Signal to Noise",
    metricPrefix: "33→",
    metric: "8",
    title: "Interviews to finalists",
    description: "A Series G startup needed a Backend Engineer. Their internal process typically requires 30 candidate interviews to make one hire. We presented 8 finalists and placed the engineer.",
    colorClass: "bg-kaptas-purple",
    glowClass: "bg-neon-blue/10"
  },
  {
    tag: "Case 03 // Validation",
    metricPrefix: "1→",
    metric: "Team",
    title: "Strategic expansion",
    description: "A CTO hired a single QA engineer to test the model. Within 6 months, the team grew to 4 QA engineers and 1 full-stack engineer. All still active.",
    colorClass: "bg-blue-500",
    glowClass: "bg-blue-500/5"
  }
];

const defaultBadges = [
  "Highly qualified candidates",
  "No cost to interview",
  "Senior talent ready to ship"
];

// Componente de estudos de caso e resultados
export function CaseResults({ 
  title = "Results from startups who hire with us",
  subtitle = "Results from global companies building teams in Brazil through Kaptas Global.",
  cases = defaultCases,
  badges = defaultBadges
}: CaseResultsProps) {
  const icons = [Clock, ShieldCheck, Briefcase];

  return (
    <motion.section {...fadeIn} className="px-6 md:px-12 max-w-7xl mx-auto w-full pt-[110px]">
      <div className="flex flex-col items-start justify-start mb-16 gap-6 text-left">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
      >
        {cases.map((item, index) => (
          <motion.div key={index} variants={staggerItem} className="group relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center h-full overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5">
            <div className={`absolute top-0 right-0 w-64 h-64 ${item.glowClass} rounded-full blur-3xl -mr-20 -mt-20 transition-opacity duration-500 opacity-0 group-hover:opacity-100`}></div>

            <div className="flex items-center justify-center gap-3 mb-8 relative z-10 w-full">
              <div className={`w-1.5 h-1.5 rounded-full ${item.colorClass}`}></div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">{item.tag}</span>
            </div>

            <div className="mb-6 relative z-10">
              <div className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-2">
                {item.metricPrefix && <span className="text-2xl text-gray-600 mx-1">{item.metricPrefix}</span>}
                {item.metric}
                {item.metricSuffix && <span className="text-2xl text-gray-600 mx-1">{item.metricSuffix}</span>}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 relative z-10"></div>

            <p className="text-gray-400 text-sm leading-relaxed flex-1 relative z-10">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Microproofs Row */}
      <motion.div 
        variants={fadeIn}
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8 border-t border-white/10 text-center"
      >
        {badges.map((badge, index) => {
          const Icon = icons[index % icons.length];
          return (
            <React.Fragment key={index}>
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-kaptas-green shrink-0" />
                <span className="text-sm font-medium text-kaptas-green uppercase tracking-widest">{badge}</span>
              </div>
              {index < badges.length - 1 && (
                <div className="hidden md:block w-1 h-1 rounded-full bg-white/20 shrink-0"></div>
              )}
            </React.Fragment>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
