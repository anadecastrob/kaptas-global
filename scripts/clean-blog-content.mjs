/**
 * One-time cleanup of legacy JSON-LD blocks embedded inside the HTML content
 * of blog posts. The WordPress export shipped each post with its own inline
 * Organization schema that still contained placeholder URLs (YOUR-CLUTCH,
 * YOUR-LINKEDIN, etc.) — duplicating the real Organization schema produced
 * by our SEO component and exposing broken sameAs links.
 *
 * This script strips ALL <script type="application/ld+json">…</script> blocks
 * from the content field of every post in src/data/blog-posts.json.
 * Page-level schemas are now produced exclusively by the React components.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(__dirname, "../src/data/blog-posts.json");

const raw = await fs.readFile(FILE, "utf-8");
const posts = JSON.parse(raw);

const SCRIPT_LD_RE = /<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi;

let totalBlocksRemoved = 0;
let postsTouched = 0;

for (const post of posts) {
  if (typeof post.content !== "string") continue;
  const matches = post.content.match(SCRIPT_LD_RE);
  if (!matches) continue;
  postsTouched += 1;
  totalBlocksRemoved += matches.length;
  post.content = post.content.replace(SCRIPT_LD_RE, "");
}

await fs.writeFile(FILE, JSON.stringify(posts, null, 2), "utf-8");

console.log(`✅ Removed ${totalBlocksRemoved} JSON-LD blocks from ${postsTouched} blog post content fields.`);

// Sanity check
const after = await fs.readFile(FILE, "utf-8");
const leftover = [
  "YOUR-CLUTCH",
  "YOUR-LINKEDIN",
  "YOUR-G2",
  "YOUR-CRUNCHBASE",
  "g2.com/your-profile",
];
for (const needle of leftover) {
  const count = (after.match(new RegExp(needle, "g")) || []).length;
  console.log(`  ${needle}: ${count} occurrences remaining`);
}
