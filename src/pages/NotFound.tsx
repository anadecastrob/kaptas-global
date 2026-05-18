import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const popularDestinations = [
  { label: "Direct Hire", to: "/direct-hire" },
  { label: "Contractor & Staffing", to: "/contractor-staffing" },
  { label: "Executive Mapping", to: "/executive-mapping" },
  { label: "Hire in Brazil", to: "/hire-in-brazil" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Kaptas Global</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist or has moved. Head back to Kaptas Global to explore hiring senior Brazilian talent for your team."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as any }}
        className="relative pt-12 lg:pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-[75vh] flex items-center"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_top_right,_#0047FF33,transparent_80%)] blur-[120px] pointer-events-none"></div>

        <div className="max-w-3xl lg:max-w-4xl relative z-10 w-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-kaptas-green backdrop-blur-sm">
              <Compass className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Error 404
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" as any }}
            className="text-[120px] md:text-[180px] lg:text-[220px] font-extrabold tracking-tighter leading-none mb-4 select-none"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
              404
            </span>
          </motion.h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            This page got lost{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple">
              in transit
            </span>
            .
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track to find senior Brazilian talent.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
            <Link
              to="/"
              className="bg-kaptas-green text-kaptas-black px-5 py-2.5 rounded-lg border border-kaptas-green text-sm font-semibold hover:brightness-90 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_var(--color-kaptas-green)] w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <Link
              to="/pricing"
              className="text-white px-5 py-2.5 rounded-lg border border-white/20 text-sm font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center gap-2 w-fit"
            >
              See pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-10 border-t border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-5 font-semibold">
              Popular destinations
            </p>
            <div className="flex flex-wrap gap-3">
              {popularDestinations.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
