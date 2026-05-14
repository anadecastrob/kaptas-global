import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { SEO } from "../components/SEO";
import { organizationSchema } from "../data/seoSchemas";
import blogPosts from "../data/blog-posts.json";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const category = post.categories[0] || "Blog";
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const plainExcerpt = post.excerpt.replace(/<[^>]+>/g, "").replace(/\[&hellip;\]/, "").trim();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": plainExcerpt,
    "datePublished": post.date,
    "image": post.featured_image || "https://kaptasglobal.io/logo-branco.png",
    "author": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
    "publisher": { "@type": "Organization", "name": "Kaptas Global", "logo": { "@type": "ImageObject", "url": "https://kaptasglobal.io/logo-branco.png" } },
    "url": `https://kaptasglobal.io/blog/${post.slug}`,
  };

  return (
    <div className="flex flex-col pb-24">
      <SEO
        title={`${post.title} | Kaptas Global Blog`}
        description={plainExcerpt.slice(0, 160)}
        canonical={`https://kaptasglobal.io/blog/${post.slug}`}
        ogImage={post.featured_image || undefined}
        schemas={[articleSchema, organizationSchema]}
      />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-36 px-6 md:px-12 max-w-4xl mx-auto w-full"
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white bg-white/5 px-3 py-1 rounded-full border border-white/10">
            {category}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-gray-500 font-mono">
            <Calendar className="w-3.5 h-3.5" /> {dateFormatted}
          </span>
        </div>

        <h1
          className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-8"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        {post.featured_image && (
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full rounded-2xl object-cover max-h-[480px] mb-12 border border-white/10"
          />
        )}
      </motion.section>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="px-6 md:px-12 max-w-4xl mx-auto w-full"
      >
        <article
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-kaptas-green prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:mb-2
            prose-img:rounded-xl prose-img:border prose-img:border-white/10
            prose-blockquote:border-l-kaptas-green prose-blockquote:text-gray-400
            prose-code:text-kaptas-green prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-[#0A0A0A] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.section>

      {/* Bottom CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 max-w-4xl mx-auto w-full mt-20"
      >
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Ready to hire in Brazil?</h3>
            <p className="text-gray-400 text-sm">Pre-vetted shortlist in 5 days. Zero upfront cost.</p>
          </div>
          <Link
            to="/pricing"
            className="bg-kaptas-green text-kaptas-black px-8 py-3 rounded-full font-semibold text-sm hover:brightness-90 transition-all whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
