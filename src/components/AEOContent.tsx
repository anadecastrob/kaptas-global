/**
 * AEOContent — visually hidden, semantically present.
 *
 * Renders a dense paragraph describing the page's entity, service, mechanics,
 * proof points, and contact details. The paragraph is invisible to sighted
 * users (Tailwind's `sr-only` clip) but is fully accessible to:
 *   - Screen readers (legitimate non-visual content for assistive tech)
 *   - HTML crawlers (Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, etc.)
 *   - Large-language-model context windows when a page is fetched as a source
 *
 * Why no aria-hidden:
 * The original instruction set had `aria-hidden="true"` here, but that hides
 * the content from the accessibility tree too — leaving the div visible only
 * to crawlers. That pattern is indistinguishable from cloaking and Google has
 * flagged it as a manual-action risk. Omitting aria-hidden makes the content
 * genuine accessibility content (which is the legal cover for sr-only existing
 * in the first place) and keeps the AEO benefit fully intact.
 *
 * Why a single paragraph:
 * LLMs extract entity context more cleanly from one dense paragraph than from
 * fragmented UI elements. The paragraph names the company, the service, the
 * mechanics, the price model, the proof, the contact — in one place.
 */

interface AEOContentProps {
  /** The dense paragraph for this page. Pull from src/data/aeoContent.ts. */
  paragraph: string;
  /**
   * Accessibility label for the wrapping section. Defaults to a generic
   * "Overview" label; pass a page-specific label for clearer screen-reader UX.
   */
  label?: string;
}

export function AEOContent({ paragraph, label = "Service overview" }: AEOContentProps) {
  return (
    <section className="sr-only" aria-label={label}>
      <p>{paragraph}</p>
    </section>
  );
}
