import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// -----------------------------------------------------------------------------
// Date formatting
//
// These format ISO-8601 date strings (YYYY-MM-DD) into display strings WITHOUT
// going through `new Date(...)` or `Intl.DateTimeFormat` — both of which depend
// on the runtime's locale and timezone and produce DIFFERENT output between
// Puppeteer (during prerender on the build server) and the user's browser.
// That mismatch was the source of the React #418 hydration warnings on the
// homepage's BlogInsights widget and on every blog page.
// -----------------------------------------------------------------------------

const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

const MONTHS_LONG = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

function parseIsoDate(iso: string): [year: number, month: number, day: number] | null {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

/** Format an ISO date string as "Jan 15, 2026". Deterministic across server
 *  and client — does not depend on locale, timezone, or ICU version. */
export function formatDateShort(iso: string): string {
  const parts = parseIsoDate(iso);
  if (!parts) return iso;
  const [y, m, d] = parts;
  return `${MONTHS_SHORT[m - 1]} ${d}, ${y}`;
}

/** Format an ISO date string as "January 15, 2026". Deterministic across
 *  server and client — does not depend on locale, timezone, or ICU version. */
export function formatDateLong(iso: string): string {
  const parts = parseIsoDate(iso);
  if (!parts) return iso;
  const [y, m, d] = parts;
  return `${MONTHS_LONG[m - 1]} ${d}, ${y}`;
}
