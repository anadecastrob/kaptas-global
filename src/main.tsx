import { StrictMode, useEffect, useState } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "motion/react";
import App from "./App.tsx";
import "./index.css";

/**
 * Root wrapper that solves the React #418 hydration warnings caused by
 * framer-motion entrance animations.
 *
 * The problem: scripts/prerender.mjs captures the page ~250ms after
 * mount, by which point above-the-fold motion components have already
 * animated from `initial` (e.g. opacity 0, translateY 30) to `animate`
 * (opacity 1, transform none). The prerendered HTML contains the final
 * state styles. On the user's first client render, motion re-mounts in
 * the `initial` state — React diffs and logs error #418 for every
 * mismatched node (~19 per home-page load on the broken build).
 *
 * The fix: keep motion in "snap-to-animate" mode (reducedMotion="always")
 * for the very first render. During that render the SSR HTML and the
 * client tree both produce the same animate-state styles, so React's
 * reconciler sees an identical pair and stays quiet. Once mounted, the
 * useEffect flips reducedMotion back to "user" — animations resume as
 * normal for subsequent renders, scroll-triggered reveals, and
 * client-side route changes.
 */
function Root() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <StrictMode>
      <HelmetProvider>
        <MotionConfig reducedMotion={hydrated ? "user" : "always"}>
          <App />
        </MotionConfig>
      </HelmetProvider>
    </StrictMode>
  );
}

const rootElement = document.getElementById("root")!;

// scripts/prerender.mjs writes a static HTML snapshot for every route.
// When the user lands on a pre-rendered route we hydrate; otherwise we
// render fresh (e.g. dynamic blog post that wasn't in the build manifest).
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <Root />);
} else {
  createRoot(rootElement).render(<Root />);
}
