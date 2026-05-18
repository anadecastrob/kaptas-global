import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogImage?: string;
  /** og:type — defaults to "website". Use "article" for blog posts. */
  ogType?: "website" | "article" | "profile" | "book";
  schemas?: object[];
}

// During the WordPress → Vercel migration both kaptasglobal.io (live WP)
// and kaptas-global.vercel.app (this build) serve the same content. To
// avoid duplicate-content penalties and to keep the canonical signal on
// the real domain, every *.vercel.app hostname is served as noindex. The
// X-Robots-Tag header in vercel.json covers crawlers that do not run JS;
// this runtime check covers JS-rendering crawlers as a second layer.
function isStagingHost(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hostname.endsWith(".vercel.app");
}

export function SEO({ title, description, keywords, canonical, ogImage, ogType = "website", schemas = [] }: SEOProps) {
  const image = ogImage || 'https://kaptasglobal.io/logo-branco.png';
  const robots = isStagingHost() ? "noindex, follow" : "index, follow";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Kaptas Global" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@KaptasGlobal" />

      {/* JSON-LD Schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
