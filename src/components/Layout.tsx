import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white font-sans selection:bg-kaptas-green selection:text-kaptas-black relative overflow-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/15 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-kaptas-green/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Header />

        <main className="flex-1 pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}
