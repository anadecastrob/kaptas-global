import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, X } from "lucide-react";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
            onClick={onClose}
          >
            <div
              className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 md:p-14 max-w-lg w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-kaptas-green/10 blur-[80px] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-kaptas-green/15 flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-8 h-8 text-kaptas-green" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-kaptas-green mb-3">
                    Message received
                  </p>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
                    Thank you for reaching out.
                  </h2>
                  <p className="text-gray-400 text-base leading-relaxed mb-8">
                    Our team will review your message and get back to you within{" "}
                    <span className="text-white font-medium">1 business day</span>.
                    We look forward to learning about your hiring goals.
                  </p>

                  <div className="flex flex-col gap-3 mb-8 text-left bg-white/5 rounded-2xl p-5 border border-white/5">
                    <div className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-kaptas-green/20 text-kaptas-green flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <span>We'll review your hiring needs and suggest the right service model.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-kaptas-green/20 text-kaptas-green flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <span>A quick intro call to align on requirements, timeline, and budget.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-kaptas-green/20 text-kaptas-green flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <span>Pre-vetted candidates delivered within 5 business days of kickoff.</span>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="w-full bg-kaptas-green text-kaptas-black font-semibold rounded-xl px-6 py-3.5 hover:brightness-90 transition-all"
                  >
                    Got it, thanks!
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
