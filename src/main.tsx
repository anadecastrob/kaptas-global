import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// react-snap pre-renders the app into static HTML. When the user lands on a
// pre-rendered page, the React tree is hydrated (attaches event handlers to
// the existing DOM). On routes that weren't pre-rendered, we render fresh.
const tree = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, tree);
} else {
  createRoot(rootElement).render(tree);
}
