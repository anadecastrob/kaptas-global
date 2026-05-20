import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

/**
 * Dynamic Open Graph image generator for kaptasglobal.io.
 *
 * Usage from <meta property="og:image"> in SEO.tsx:
 *   https://kaptasglobal.io/api/og?title=Page+Title&subtitle=Optional+subtitle
 *
 * Query params:
 *   title    — main heading on the card (required, falls back to "Kaptas Global")
 *   subtitle — secondary line below the title (optional)
 *   eyebrow  — small label above the title, e.g. "Direct Hire" or "Blog" (optional)
 *
 * Design language matches the site:
 *   - Background: #111111 (--color-kaptas-black)
 *   - Accent:     #00B356 (--color-kaptas-green)
 *   - Logo:       /logo-branco.png (white logo, sits cleanly on dark bg)
 *   - Font:       Inter (the site's --font-sans), weights 400 and 700
 *
 * Vercel caches edge-function responses, so the same query-string combo
 * is regenerated only on cache misses. Fonts and the logo are fetched
 * once at cold start and reused across warm invocations.
 */

const FONT_REGULAR_URL =
  "https://cdn.jsdelivr.net/gh/rsms/inter@v4.0/docs/font-files/Inter-Regular.otf";
const FONT_BOLD_URL =
  "https://cdn.jsdelivr.net/gh/rsms/inter@v4.0/docs/font-files/Inter-Bold.otf";
const LOGO_URL = "https://kaptasglobal.io/logo-branco.png";

// Module-scope: fetched once at cold start, reused across warm invocations.
const fontRegularPromise = fetch(FONT_REGULAR_URL).then((r) => r.arrayBuffer());
const fontBoldPromise = fetch(FONT_BOLD_URL).then((r) => r.arrayBuffer());
const logoPromise = fetch(LOGO_URL)
  .then((r) => r.arrayBuffer())
  .then((buf) => {
    // Convert to data URL so Satori can render <img> without a re-fetch per request.
    const base64 = Buffer.from(buf).toString("base64");
    return `data:image/png;base64,${base64}`;
  });

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export default async function handler(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const title = truncate(
      url.searchParams.get("title") ?? "Hire Senior Brazilian Talent",
      100,
    );
    const subtitle = url.searchParams.get("subtitle")
      ? truncate(url.searchParams.get("subtitle")!, 140)
      : null;
    const eyebrow = url.searchParams.get("eyebrow")
      ? truncate(url.searchParams.get("eyebrow")!, 32).toUpperCase()
      : null;

    const [fontRegular, fontBold, logoDataUrl] = await Promise.all([
      fontRegularPromise,
      fontBoldPromise,
      logoPromise,
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            background: "#111111",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px",
            position: "relative",
            fontFamily: "Inter",
            color: "#FFFFFF",
          }}
        >
          {/* Decorative radial accent in top-right */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "700px",
              height: "700px",
              background:
                "radial-gradient(circle at 80% 20%, rgba(0, 179, 86, 0.18), transparent 55%)",
              display: "flex",
            }}
          />

          {/* Top row: logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <img
              src={logoDataUrl}
              width={180}
              height={60}
              alt=""
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Bottom block: eyebrow + title + subtitle + URL strip */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
            }}
          >
            {eyebrow && (
              <div
                style={{
                  color: "#00B356",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  marginBottom: 18,
                }}
              >
                {eyebrow}
              </div>
            )}

            <div
              style={{
                fontSize: title.length > 60 ? 56 : 68,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                display: "flex",
              }}
            >
              {title}
            </div>

            {subtitle && (
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 400,
                  color: "#A0A0A0",
                  marginTop: 24,
                  lineHeight: 1.35,
                  display: "flex",
                }}
              >
                {subtitle}
              </div>
            )}

            {/* Bottom URL strip with accent rule */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 4,
                  background: "#00B356",
                  marginRight: 20,
                }}
              />
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}
              >
                kaptasglobal.io
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "Inter", data: fontRegular, style: "normal", weight: 400 },
          { name: "Inter", data: fontBold, style: "normal", weight: 700 },
        ],
        // Cache aggressively at the edge — same query string returns same image.
        headers: {
          "Cache-Control":
            "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
        },
      },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(`OG image generation failed: ${message}`, {
      status: 500,
    });
  }
}
