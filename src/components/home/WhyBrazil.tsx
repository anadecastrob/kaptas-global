import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { fadeIn } from "./animations";

// Componente explicando os benefícios do Brasil
export function WhyBrazil() {
  return (
    <motion.section {...fadeIn} className="px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kaptas-green/5 to-transparent pointer-events-none"></div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 relative z-10">
          Why Brazil, not offshore
        </h2>
        <div className="relative z-10 max-w-3xl mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Stop choosing between expensive local talent and heavily async offshore regions. Brazil offers the perfect strategic balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 mb-12">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-kaptas-green shrink-0 mt-1" />
              <div>
                <strong className="block text-lg mb-1 text-white">Lower cost</strong>
                <span className="text-gray-400">$70K vs $180K+ for the same Senior Engineer profile.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-kaptas-green shrink-0 mt-1" />
              <div>
                <strong className="block text-lg mb-1 text-white">Strong talent</strong>
                <span className="text-gray-400">The same talent pool Google and Amazon have tapped since 2005.</span>
              </div>
            </li>
          </ul>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-kaptas-green shrink-0 mt-1" />
              <div>
                <strong className="block text-lg mb-1 text-white">Real-time collaboration</strong>
                <span className="text-gray-400">Work synchronously with your team, avoiding 24-hour feedback delays.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-kaptas-green shrink-0 mt-1" />
              <div>
                <strong className="block text-lg mb-1 text-white">Timezone overlap</strong>
                <span className="text-gray-400">Full EST overlap. 4-6h live overlap with PST. No night shifts.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Complementary Info: Big Tech Hub */}
        <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-kaptas-purple animate-pulse"></div>
              <span className="text-xs font-bold text-kaptas-purple uppercase tracking-widest">Proven Ecosystem</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Big Tech's strategic hub</h3>
            <p className="text-gray-400 text-sm">
              Industry leaders have been quietly scaling their engineering centers in Brazil for over a decade.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 w-fit">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </div>
              <span className="text-gray-300 text-sm font-medium">Google</span>
              <span className="text-xs text-gray-600 font-mono ml-1">2005</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white"><path d="M13.84 14.54c-1.35.69-3.23 1.12-5.1 1.12-3.77 0-5.7-1.6-5.7-4.13 0-2.8 2.3-4.4 6.36-4.4 1.58 0 2.92.3 3.8.68v-.57c0-1.6-.82-2.5-2.6-2.5-1.3 0-2.6.4-3.5 1l-.8-2c1.2-.7 3-1.2 5-1.2 3.3 0 4.8 1.8 4.8 4.8v4.4c0 1.2.2 1.8.7 2.3v1.1c-.6.1-1.2.1-1.8.1-.8 0-1.1-.3-1.14-1.2zm-2.8-5.3c-1-.4-2-.6-3-.6-2 0-3 .8-3 2.1 0 1.3 1 2 2.6 2 1.4 0 2.5-.4 3.4-1v-2.5zM12 21.6c-4.2 0-8.1-1.3-11.2-3.6l1-1.8c2.8 2 6.1 3.1 9.8 3.1 4.1 0 7.8-1.4 10.8-3.9l1.2 1.6c-3.3 2.8-7.4 4.6-11.6 4.6z"/></svg>
              </div>
              <span className="text-gray-300 text-sm font-medium">Amazon</span>
              <span className="text-xs text-gray-600 font-mono ml-1">2012</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white"><path d="M17.53 14.831c-1.573 0-3.08-.609-4.218-1.722l-1.312-1.288-1.312 1.288c-1.138 1.113-2.645 1.722-4.218 1.722S3.39 14.222 2.252 13.109a5.86 5.86 0 0 1 0-8.38A5.94 5.94 0 0 1 6.47 3c1.573 0 3.08.609 4.218 1.722L12 6.01l1.312-1.288C14.45 3.609 15.957 3 17.53 3s3.08.609 4.218 1.722a5.86 5.86 0 0 1 0 8.38 5.94 5.94 0 0 1-4.218 1.729zM6.47 5.168c-1.002 0-1.944.388-2.653 1.092a3.73 3.73 0 0 0 0 5.336c.709.704 1.651 1.092 2.653 1.092s1.944-.388 2.653-1.092l2.079-2.04a1.07 1.07 0 0 0 0-1.536l-2.079-2.04A3.746 3.746 0 0 0 6.47 5.168zm11.06 0c-1.002 0-1.944.388-2.653 1.092l-2.079 2.04a1.07 1.07 0 0 0 0 1.536l2.079 2.04c.709.704 1.651 1.092 2.653 1.092s1.944-.388 2.653-1.092a3.73 3.73 0 0 0 0-5.336 3.746 3.746 0 0 0-2.653-1.092z"/></svg>
              </div>
              <span className="text-gray-300 text-sm font-medium">Meta</span>
              <span className="text-xs text-gray-600 font-mono ml-1">2011</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white"><path d="M10.428 17.545a16.89 16.89 0 0 1-5.118-1.48V3.414h4.414v10.37l5.85-10.37h4.118v17.15a18.23 18.23 0 0 1-4.414 1.155V10.27l-4.85 8.43z"/></svg>
              </div>
              <span className="text-gray-300 text-sm font-medium">Netflix</span>
              <span className="text-xs text-gray-600 font-mono ml-1">2011</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
