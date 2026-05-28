/**
 * Vercel Edge Middleware — LLM crawler observability.
 *
 * GA4 cannot see LLM crawler traffic because crawlers do not execute JS,
 * so dataLayer events never fire. This middleware intercepts every request
 * at the edge (before the static cache), checks the User-Agent against a
 * known-LLM-bot regex, and emits a structured JSON log line when one
 * matches. The line lands in Vercel Runtime Logs and is queryable via the
 * Vercel API (filter by `query: "llm_bot"`).
 *
 * Read path:
 *   $ vercel logs --query "llm_bot" --since 7d
 *   OR via the get_runtime_logs MCP tool with { query: "llm_bot" }.
 *
 * Design notes:
 *  - Pass-through only. Never blocks, never rewrites, never redirects.
 *  - No PII captured. We log the bot name, request path, host, country
 *    (from Vercel's x-vercel-ip-country header), and timestamp. The
 *    full User-Agent is truncated to 200 chars to avoid log bloat.
 *  - The asset-extension early-return keeps the log volume sane — we
 *    only care about HTML / text endpoints (pages, /robots.txt,
 *    /sitemap.xml, /llms.txt, /llms-full.txt).
 *  - Edge runtime, not Node. No npm deps. Uses standard Web Fetch types
 *    because this project is framework: null (not Next.js).
 *
 * Bot list reasoning:
 *  - OpenAI:     GPTBot (training crawl), ChatGPT-User (in-chat browse),
 *                OAI-SearchBot (ChatGPT Search).
 *  - Anthropic:  ClaudeBot, Claude-Web, anthropic-ai (older alias).
 *  - Perplexity: PerplexityBot, Perplexity-User.
 *  - Google:     Google-Extended (Gemini training opt-out signal),
 *                GoogleOther (research crawlers; distinct from Googlebot).
 *  - Meta:       Meta-ExternalAgent (LLaMA training), FacebookBot.
 *  - ByteDance:  Bytespider.
 *  - Apple:      Applebot-Extended (Apple Intelligence opt-out signal).
 *  - Foundation: CCBot (Common Crawl — feeds most LLM training corpora).
 *  - Long tail:  YouBot, cohere-ai, Diffbot, DuckAssistBot, MistralAI-User,
 *                TimpiBot, omgili (the legacy webz.io crawler still active
 *                under multiple LLM contracts).
 *
 * Googlebot (the classic search crawler) is intentionally NOT logged —
 * it predates LLM training corpora, fires constantly, and would drown
 * the signal.
 */

export const config = {
  matcher: "/:path*",
};

const LLM_BOT_PATTERN =
  /(GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-Web|anthropic-ai|PerplexityBot|Perplexity-User|Google-Extended|GoogleOther|Bytespider|Applebot-Extended|CCBot|YouBot|cohere-ai|Diffbot|DuckAssistBot|Meta-ExternalAgent|FacebookBot|MistralAI-User|TimpiBot|omgili|omgilibot)/i;

const ASSET_EXTENSION_PATTERN =
  /\.(css|js|mjs|map|png|jpg|jpeg|webp|gif|svg|woff2?|ttf|otf|eot|ico|webmanifest)$/i;

export default function middleware(request: Request): void {
  const url = new URL(request.url);

  // Skip asset requests — only HTML/text endpoints carry signal.
  if (ASSET_EXTENSION_PATTERN.test(url.pathname)) {
    return;
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  const match = userAgent.match(LLM_BOT_PATTERN);

  if (!match) {
    return;
  }

  // Vercel's edge runtime injects geo headers on every request; safer
  // than the legacy req.geo property which is Next.js-specific.
  const country = request.headers.get("x-vercel-ip-country");
  const region = request.headers.get("x-vercel-ip-country-region");

  const logLine = {
    type: "llm_bot",
    bot: match[0],
    ua: userAgent.slice(0, 200),
    path: url.pathname + url.search,
    host: url.hostname,
    country: country || null,
    region: region || null,
    ts: new Date().toISOString(),
  };

  // Single-line JSON for easy `query: "llm_bot"` filtering in Vercel logs
  // and trivial parsing when we tally weekly.
  console.log(JSON.stringify(logLine));
}
