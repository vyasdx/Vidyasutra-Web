/**
 * ENH-VS-044 — Twitter / X share preview image (1200×630).
 *
 * Twitter `summary_large_image` cards use the same dimensions as Open Graph,
 * so we render the same content. Metadata exports are declared inline (NOT
 * re-exported from opengraph-image) because Next.js's static analyzer can't
 * follow re-exports for these special config exports.
 */
import OpengraphImage from './opengraph-image';

export const runtime = 'edge';
export const alt = 'VidyaSutra — Ancient Intelligence. Modern Application.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function TwitterImage() {
  return OpengraphImage();
}
