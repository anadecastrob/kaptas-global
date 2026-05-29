/**
 * /api/llm-bot-stats — aggregate LLM crawler hits from Vercel KV.
 *
 * Reads the per-day counters written by middleware.ts and returns a
 * structured summary of LLM bot traffic over the requested window.
 * This is the "weekly KPI" surface kg-site-engineer queries instead of
 * relying on Vercel Runtime Logs (which only retain ~1.5h of data).
 *
 * Query parameters:
 *   days — integer 1..60, defaults to 7
 *
 * Response shape:
 *   {
 *     range: { from, to, days },
 *     totals: { hits, training, live, search },
 *     by_bot:       { [botName]:    hitCount },
 *     by_category:  { [category]:   hitCount },
 *     by_country:   { [countryISO]: hitCount },
 *     top_pages:    [{ path, hits }, ...]  // sorted desc, top 25
 *     by_day:       [{ date, total, live, training, search }, ...]
 *     warnings:     [strings]              // e.g. KV missing
 *   }
 *
 * Caching: edge cache 300s + stale-while-revalidate 600s. The data
 * granularity is per-day so frequent refresh adds no value.
 *
 * Surface posture: noindex header. The endpoint is publicly reachable
 * but not crawler-targeted. Aggregate-only — no per-hit IPs or UAs are
 * exposed. If the page becomes a privacy/competitive concern later,
 * add a shared-secret token check (KV_STATS_TOKEN env var).
 */

import { Redis } from "@upstash/redis";

export const config = { runtime: "edge" };

const KV_MAX_DAYS = 60;
const TOP_PAGES_LIMIT = 25;

function dayKey(offsetDaysBack: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - offsetDaysBack);
  return d.toISOString().slice(0, 10);
}

interface DayBuckets {
  total: number;
  live: number;
  training: number;
  search: number;
}

function emptyBucket(): DayBuckets {
  return { total: 0, live: 0, training: 0, search: 0 };
}

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const rawDays = parseInt(url.searchParams.get("days") || "7", 10);
  const days = Number.isFinite(rawDays)
    ? Math.min(Math.max(rawDays, 1), KV_MAX_DAYS)
    : 7;

  const warnings: string[] = [];

  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  if (!kvUrl || !kvToken) {
    warnings.push(
      "Vercel KV not provisioned. Storage tab → create Upstash for Redis → connect project. Persistence is no-op until configured.",
    );
    return json(
      {
        range: { from: dayKey(days - 1), to: dayKey(0), days },
        totals: { hits: 0, training: 0, live: 0, search: 0 },
        by_bot: {},
        by_category: {},
        by_country: {},
        top_pages: [],
        by_day: [],
        warnings,
      },
      200,
    );
  }

  const kv = new Redis({ url: kvUrl, token: kvToken });

  const dates: string[] = [];
  for (let i = 0; i < days; i++) dates.push(dayKey(i));
  // dates[0] is today, dates[days-1] is the oldest

  const byBot: Record<string, number> = {};
  const byCategory: Record<string, number> = {};
  const byCountry: Record<string, number> = {};
  const byPage: Record<string, number> = {};
  const byDay: Record<string, DayBuckets> = {};

  // Pipeline a single multi-day fetch — 3 HGETALL calls per day in one
  // round-trip, so reading 60 days is one network call.
  try {
    const pipe = kv.pipeline();
    for (const date of dates) {
      pipe.hgetall(`llm:counts:${date}`);
      pipe.hgetall(`llm:pages:${date}`);
      pipe.hgetall(`llm:countries:${date}`);
    }
    const results = (await pipe.exec()) as (Record<string, unknown> | null)[];

    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      const counts = results[i * 3 + 0];
      const pages = results[i * 3 + 1];
      const countries = results[i * 3 + 2];

      const bucket = emptyBucket();

      if (counts && typeof counts === "object") {
        for (const [field, raw] of Object.entries(counts)) {
          const v = Number(raw) || 0;
          if (field.startsWith("_cat:")) {
            const cat = field.slice(5);
            byCategory[cat] = (byCategory[cat] || 0) + v;
            if (cat === "live") bucket.live += v;
            else if (cat === "training") bucket.training += v;
            else if (cat === "search") bucket.search += v;
          } else {
            byBot[field] = (byBot[field] || 0) + v;
            bucket.total += v;
          }
        }
      }

      if (pages && typeof pages === "object") {
        for (const [field, raw] of Object.entries(pages)) {
          byPage[field] = (byPage[field] || 0) + (Number(raw) || 0);
        }
      }

      if (countries && typeof countries === "object") {
        for (const [field, raw] of Object.entries(countries)) {
          byCountry[field] = (byCountry[field] || 0) + (Number(raw) || 0);
        }
      }

      byDay[date] = bucket;
    }
  } catch (err) {
    warnings.push(`KV read error: ${(err as Error).message}`);
  }

  const totalHits = Object.values(byBot).reduce((a, b) => a + b, 0);
  const topPages = Object.entries(byPage)
    .map(([path, hits]) => ({ path, hits }))
    .sort((a, b) => b.hits - a.hits)
    .slice(0, TOP_PAGES_LIMIT);

  // by_day output: oldest first, so a chart reading left-to-right shows
  // time-forward. (dates[] above is newest-first; reverse for output.)
  const byDayArray = [...dates].reverse().map((date) => ({
    date,
    ...(byDay[date] || emptyBucket()),
  }));

  return json(
    {
      range: {
        from: dates[dates.length - 1],
        to: dates[0],
        days,
      },
      totals: {
        hits: totalHits,
        training: byCategory["training"] || 0,
        live: byCategory["live"] || 0,
        search: byCategory["search"] || 0,
      },
      by_bot: byBot,
      by_category: byCategory,
      by_country: byCountry,
      top_pages: topPages,
      by_day: byDayArray,
      warnings,
    },
    200,
  );
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}
