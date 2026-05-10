/**
 * ENH-VS-044 — Twitter / X share preview image.
 *
 * Twitter's `summary_large_image` card requires the same 1200×630 dimensions
 * as Open Graph. Re-uses the OG renderer for visual consistency — sharing the
 * landing on Twitter or LinkedIn produces an identical card.
 *
 * Next.js 15 picks this file up automatically.
 */
export { default, runtime, alt, size, contentType } from './opengraph-image';
