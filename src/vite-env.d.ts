/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/** Baked-in build year. See `define` in vite.config.ts. Used by Footer.tsx so
 *  the copyright line is identical between prerender and client hydration. */
declare const __BUILD_YEAR__: string;
