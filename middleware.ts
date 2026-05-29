/**
 * Vercel Edge Middleware — LLM crawler observability.
 *
 * GA4 is permanently blind to LLM crawler traffic (crawlers do not execute
 * JS, so window.dataLayer never fires). This middleware intercepts every
 * request at the edge, matches the User-Agent against a curated regex of
 * known LLM bots, and persists each hit to two places:
 *
 *   1. Vercel Runtime Logs (short-window debug surface, ~1.5h retention)
 *   2. Upstash Redis / Vercel KV (60-day retention, queryable via
 *      /api/llm-bot-stats for the weekly KPI)
 *
 * The Redis writes are wrapped in try/catch and silently no-op when the
 * KV env vars are absent. The middleware NEVER blocks the request —
 * a slow or failing KV cannot break page delivery.
 *
 * ─── Vercel KV provisioning (one-time, manual, ~3 clicks) ──────────────
 *   1. Vercel dashboard → kaptas-global project → "Storage" tab
 *   2. Create Database → "Upstash for Redis" (or "KV by Upstash")
 *   3. Pick the free hobby tier (10k commands/day is plenty for us)
 *   4. Click "Connect Project" — env vars (KV_REST_API_URL +
 *      KV_REST_API_TOKEN) auto-populate on the next deploy
 *   5. Redeploy main (or wait for the next push) — persistence kicks in
 * Until step 5, the middleware logs only to Vercel Runtime Logs.
 *
 * ─── Bot classification ────────────────────────────────────────────────
 *   "live"     = fires per-user-question (ChatGPT-User, Claude-Web,
 *                Perplexity-User, etc.) — leading indicator of citation
 *                volume in LLM answers
 *   "training" = periodic corpus refresh crawl (GPTBot, ClaudeBot,
 *                CCBot, Bytespider, Google-Extended, ...) — independent
 *                of user queries
 *   "search"   = LLM-powered search products (OAI-SearchBot is the
 *                only entry today; ChatGPT Search and similar)
 *
 * Googlebot is intentionally NOT logged — it predates LLM corpora,
 * fires constantly, and would drown the signal.
 *
 * ─── Read path ─────────────────────────────────────────────────────────
 *   curl https://kaptasglobal.io/api/llm-bot-stats?days=7
 *   → JSON with totals, by_bot, by_category, by_country, top_pages, by_day
 * Or via the Vercel Runtime Logs API:
 *   get_runtime_logs --query "llm_bot" --since 1h
 *
 * ─── PII discipline ────────────────────────────────────────────────────
 *   - No IPs, no cookies, no full headers
 *   - User-Agent capped at 200 chars before storage
 *   - Geo only at country + region granularity (city/lat/lon dropped)
 */

import { Redis } from "@upstash/redis";

export const config = {
  matcher: "/:path*",
};

const LLM_BOT_PATTERN =
  /(GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-Web|anthropic-ai|PerplexityBot|Perplexity-User|Google-Extended|GoogleOther|Bytespider|Applebot-Extended|CCBot|YouBot|cohere-ai|Diffbot|DuckAssistBot|Meta-ExternalAgent|FacebookBot|MistralAI-User|TimpiBot|omgili|omgilibot)/i;

const ASSET_EXTENSION_PATTERN =
  /\.(css|js|mjs|map|png|jpg|jpeg|webp|gif|svg|woff2?|ttf|otf|eot|ico|webmanifest)$/i;

// Stored on the Redis hash as `_cat:<category>` counters so we can query
// the live-vs-training split without re-classifying at read time.
type BotCategory = "training" | "live" | "search";
const BOT_CATEGORY: Record<string, BotCategory> = {
  // OpenAI
  GPTBot: "training",
  "ChatGPT-User": "live",
  "OAI-SearchBot": "search",
  // Anthropic
  ClaudeBot: "training",
  "Claude-Web": "live",
  "anthropic-ai": "training",
  // Perplexity
  PerplexityBot: "training",
  "Perplexity-User": "live",
  // Google
  "Google-Extended": "training",
  GoogleOther: "training",
  // Apple
  "Applebot-Extended": "training",
  // Meta
  "Meta-ExternalAgent": "training",
  FacebookBot: "training",
  // ByteDance
  Bytespider: "training",
  // Foundation / third-party
  CCBot: "training",
  YouBot: "training",
  "cohere-ai": "training",
  Diffbot: "training",
  DuckAssistBot: "live",
  "MistralAI-User": "live",
  TimpiBot: "training",
  omgili: "training",
  omgilibot: "training",
};

// Match-result strings come in with arbitrary case. Normalize the key
// against the canonical map by looking up the bot name case-insensitively.
function classify(matchedBot: string): { canonical: string; category: BotCategory } {
  const lower = matchedBot.toLowerCase();
  for (const key of Object.keys(BOT_CATEGORY)) {
    if (key.toLowerCase() === lower) {
      return { canonical: key, category: BOT_CATEGORY[key] };
    }
  }
  return { canonical: matchedBot, category: "training" };
}

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

const KV_RETENTION_DAYS = 60;

// Build the Redis client lazily once. Reads env vars at module-init time;
// if absent, kv stays null and persistence silently no-ops.
let kv: Redis | null = null;
try {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    kv = new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    });
  }
} catch {
  kv = null;
}

export default async function middleware(request: Request): Promise<void> {
  const url = new URL(request.url);
  if (ASSET_EXTENSION_PATTERN.test(url.pathname)) return;

  const ua = request.headers.get("user-agent") ?? "";
  const match = ua.match(LLM_BOT_PATTERN);
  if (!match) return;

  const { canonical: bot, category } = classify(match[0]);
  const country = request.headers.get("x-vercel-ip-country");
  const region = request.headers.get("x-vercel-ip-country-region");
  const path = url.pathname + url.search;
  const ts = new Date().toISOString();

  // 1. Console log — bot name prefixed BEFORE the JSON so Vercel's
  //    log-table view (which truncates the message at ~30 chars) shows
  //    the canonical bot name without needing a follow-up exact-match
  //    query. Also keeps "llm_bot" as a queryable token.
  const logRecord = {
    bot,
    category,
    path,
    country: country || null,
    region: region || null,
    host: url.hostname,
    ua: ua.slice(0, 200),
    ts,
  };
  console.log(`llm_bot ${bot} ${category} ${JSON.stringify(logRecord)}`);

  // 2. Persist to Upstash Redis. Wrapped end-to-end in try/catch so a KV
  //    outage, mis-provisioned env vars, or rate-limit cannot affect the
  //    request response. Pipeline batches all writes into one network
  //    round-trip to minimize latency added to the request path.
  if (!kv) return;
  try {
    const day = todayUtc();
    const hitsKey = `llm:hits:${day}`;
    const countsKey = `llm:counts:${day}`;
    const pagesKey = `llm:pages:${day}`;
    const countriesKey = `llm:countries:${day}`;
    const ttlSeconds = KV_RETENTION_DAYS * 24 * 3600;

    const hitMember = JSON.stringify({ bot, category, path, country: country || null, ts });

    // One pipelined round-trip:
    //  - ZADD raw hit for time-series replay
    //  - HINCRBY per-bot counter (used by /api/llm-bot-stats by_bot)
    //  - HINCRBY per-category counter (used by by_category)
    //  - HINCRBY per-page counter (used by top_pages)
    //  - HINCRBY per-country counter (used by by_country)
    //  - EXPIRE on all four keys to honour retention window
    const pipe = kv.pipeline();
    pipe.zadd(hitsKey, { score: Date.now(), member: hitMember });
    pipe.hincrby(countsKey, bot, 1);
    pipe.hincrby(countsKey, `_cat:${category}`, 1);
    pipe.hincrby(pagesKey, path, 1);
    if (country) pipe.hincrby(countriesKey, country, 1);
    pipe.expire(hitsKey, ttlSeconds);
    pipe.expire(countsKey, ttlSeconds);
    pipe.expire(pagesKey, ttlSeconds);
    if (country) pipe.expire(countriesKey, ttlSeconds);
    await pipe.exec();
  } catch (err) {
    // Surface failures to runtime logs but never to the user.
    console.warn(`llm_bot kv_error ${(err as Error).message}`);
  }
}
