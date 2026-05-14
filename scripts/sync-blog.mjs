/**
 * Sync blog posts from WordPress REST API → src/data/blog-posts.json
 * Usage: npm run sync-blog
 */

import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_FILE = path.join(__dirname, "../src/data/blog-posts.json");
const WP_BASE = "https://kaptasglobal.io/wp-json/wp/v2";

// Skip SSL verification (same as migration)
const agent = new https.Agent({ rejectUnauthorized: false });

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { agent }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse error: ${e.message}`)); }
      });
    }).on("error", reject);
  });
}

async function main() {
  console.log("🔄 Syncing blog posts from WordPress...\n");

  // 1. Fetch all posts
  const posts = await get(`${WP_BASE}/posts?per_page=100&_fields=id,title,slug,excerpt,date,content,featured_media,categories`);
  console.log(`   Found ${posts.length} posts`);

  // 2. Fetch categories
  const cats = await get(`${WP_BASE}/categories?per_page=100&_fields=id,name`);
  const catMap = Object.fromEntries(cats.map((c) => [c.id, c.name]));

  // 3. Fetch featured images
  const mediaIds = [...new Set(posts.map((p) => p.featured_media).filter(Boolean))];
  console.log(`   Fetching ${mediaIds.length} featured images...`);
  const mediaMap = {};
  for (const mid of mediaIds) {
    try {
      const data = await get(`${WP_BASE}/media/${mid}?_fields=id,source_url,media_details`);
      const sizes = data?.media_details?.sizes ?? {};
      mediaMap[mid] =
        sizes.medium_large?.source_url ||
        sizes.large?.source_url ||
        data.source_url ||
        "";
    } catch {
      mediaMap[mid] = "";
    }
  }

  // 4. Build clean posts
  const clean = posts.map((p) => ({
    id: p.id,
    slug: p.slug,
    date: p.date.slice(0, 10),
    title: p.title.rendered,
    excerpt: p.excerpt.rendered,
    content: p.content.rendered,
    featured_image: mediaMap[p.featured_media] ?? "",
    categories: p.categories.map((id) => catMap[id]).filter(Boolean),
  }));

  // 5. Compare with existing file
  let existing = [];
  if (fs.existsSync(OUT_FILE)) {
    existing = JSON.parse(fs.readFileSync(OUT_FILE, "utf-8"));
  }
  const existingSlugs = new Set(existing.map((p) => p.slug));
  const newPosts = clean.filter((p) => !existingSlugs.has(p.slug));

  if (newPosts.length === 0) {
    console.log("\n✅ Already up to date — no new posts found.");
    return;
  }

  // 6. Save (newest first)
  const merged = [...clean].sort((a, b) => new Date(b.date) - new Date(a.date));
  fs.writeFileSync(OUT_FILE, JSON.stringify(merged, null, 2), "utf-8");

  console.log(`\n✅ Done! ${newPosts.length} new post(s) added:`);
  newPosts.forEach((p) => console.log(`   + [${p.date}] ${p.slug}`));
  console.log("\n👉 Next steps:");
  console.log("   git add src/data/blog-posts.json");
  console.log('   git commit -m "sync: add new blog posts"');
  console.log("   git push origin main");
  console.log("   → Vercel deploys automatically\n");
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
