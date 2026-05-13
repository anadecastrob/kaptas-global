import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as any as any as any }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
};

export default function Blog() {
  return (
    <div className="flex flex-col gap-32 pb-24">
      {/* 1. Header */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as any }}
        className="pt-32 lg:pt-48 px-6 md:px-12 max-w-7xl mx-auto w-full text-center relative"
      >
        <h1 className="-mt-[100px] text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto text-white">
          Insights on hiring <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-yellow-400">
            in Brazil
          </span>
        </h1>
        <div className="relative max-w-2xl mx-auto mb-12">
          <p className="relative text-lg md:text-xl leading-relaxed font-light text-transparent bg-clip-text bg-[linear-gradient(110deg,#9ca3af_35%,#e2e8f0_45%,#ffffff_50%,#e2e8f0_55%,#9ca3af_65%)] animate-shimmer">
            Actionable advice for startup founders and engineering leaders.
            <span 
              className="absolute inset-0 text-transparent bg-clip-text bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.5)_45%,#ffffff_50%,rgba(255,255,255,0.5)_55%,transparent_65%)] animate-shimmer blur-[6px] pointer-events-none"
              aria-hidden="true"
            >
              Actionable advice for startup founders and engineering leaders.
            </span>
          </p>
        </div>
      </motion.section>

      {/* 2. Blog Grid */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="-mt-[70px] px-6 md:px-12 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Why Brazil is the top choice for US startups",
              category: "Market Insights",
              date: "Mar 12, 2024",
              excerpt: "Timezone alignment, cultural affinity, and a massive talent pool make Brazil the premier destination for nearshoring.",
              color: "kaptas-green"
            },
            {
              title: "Cost comparison: US vs Brazil engineering salaries",
              category: "Hiring Strategy",
              date: "Feb 28, 2024",
              excerpt: "A detailed breakdown of how you can save 40-60% on engineering costs without sacrificing quality.",
              color: "kaptas-purple"
            },
            {
              title: "How to integrate remote Brazilian engineers into your team",
              category: "Team Building",
              date: "Feb 15, 2024",
              excerpt: "Best practices for onboarding, communication, and building a cohesive culture across borders.",
              color: "blue-500"
            },
            {
              title: "Direct Hire vs Contractor: Which model is right for you?",
              category: "Hiring Strategy",
              date: "Jan 30, 2024",
              excerpt: "Understanding the pros and cons of different engagement models when building your team in LATAM.",
              color: "orange-500"
            },
            {
              title: "The state of the Brazilian tech talent pool in 2024",
              category: "Market Insights",
              date: "Jan 10, 2024",
              excerpt: "An overview of the most popular technologies, seniority levels, and English proficiency in Brazil.",
              color: "kaptas-green"
            },
            {
              title: "Avoiding common pitfalls when hiring internationally",
              category: "Compliance",
              date: "Dec 15, 2023",
              excerpt: "Legal and operational considerations to keep in mind when expanding your team to South America.",
              color: "red-500"
            }
          ].map((post, i) => (
            <motion.article 
              key={i} 
              variants={staggerItem}
              className="group relative bg-[#0A0A0A] border border-white/10 hover:border-white/30 rounded-[2rem] p-8 transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 font-mono">{post.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-medium mb-4 text-white group-hover:text-kaptas-green transition-colors duration-300 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-white group-hover:text-kaptas-green transition-colors mt-auto">
                  Read article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* 3. Newsletter CTA */}
      <motion.section {...fadeIn} className="px-6 md:px-12 max-w-7xl mx-auto w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-kaptas-green/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative bg-[#0A0A0A] rounded-[2rem] p-10 md:p-16 border border-white/10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Get hiring insights delivered to your inbox</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Join 2,000+ founders and engineering leaders receiving our monthly updates on the LATAM talent market.</p>
          </div>
          <div className="relative z-10 w-full md:w-auto flex-1 max-w-md">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-kaptas-green focus:bg-white/10 transition-all flex-1"
                required
              />
              <button type="submit" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 font-mono">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
