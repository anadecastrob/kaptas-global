import { motion } from "motion/react";
import { fadeIn } from "./animations";

/**
 * Above-fold credibility strip — no brand names, no logos.
 * Surfaces the anonymous case-study metrics and aggregate company stats that
 * already appear elsewhere on the site (CaseResults + footer + Organization
 * schema), so a first-time visitor sees verifiable proof before scrolling.
 * Update only the items array to refresh the rotation.
 */

interface ProofItem {
  metric: string;
  label: string;
}

const items: ProofItem[] = [
  { metric: "55%", label: "Lower engineering cost" },
  { metric: "33 → 8", label: "Interviews to finalists" },
  { metric: "1 → Team", label: "From first hire to full squad" },
  { metric: "5 days", label: "Pre-vetted shortlist" },
  { metric: "300+", label: "Placements delivered" },
  { metric: "30+", label: "Founder-led clients" },
  { metric: "75%", label: "Repeat-client rate" },
];

// Componente de prova social (Carrossel de marcas)
export function SocialProof() {
  return (
    <motion.section {...fadeIn} className="w-full border-y border-gray-200 bg-[#F9FAFB] py-12 relative z-10">
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-8 text-center">
          Real outcomes from founder-led teams hiring with Kaptas Global
        </p>
        <div className="w-full relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex items-center whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear" as any, duration: 35 }}
          >
            {[items, items].map((group, gi) => (
              <div key={gi} className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
                {group.map((item, i) => (
                  <div
                    key={`${gi}-${i}`}
                    className="flex items-baseline gap-3 text-[#111111] select-none"
                    aria-label={`${item.metric}: ${item.label}`}
                  >
                    <span className="text-2xl md:text-3xl font-extrabold tracking-tight">{item.metric}</span>
                    <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
