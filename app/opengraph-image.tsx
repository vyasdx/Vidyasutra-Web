/**
 * ENH-VS-044 — Open Graph / Facebook / LinkedIn / WhatsApp / Slack / iMessage
 *               share preview image (1200×630 px).
 *
 * Uses the REAL VS_Gold trademarked coin and REAL Cormorant Garamond
 * (Bold Italic 700) + Inter SemiBold to match the live landing-page hero exactly.
 *
 * Generated at edge runtime via @vercel/og (built into Next 15 as `next/og`).
 *
 * Fonts are bundled in `app/fonts/` as TTF (NOT woff2 — Satori's font parser
 * inside this Next 15 build doesn't support woff2). Downloaded from Google Fonts
 * with the default User-Agent (which returns TTF format URLs).
 *
 * To replace with a Canva-designed PNG later:
 *   1. Export 1200×630 PNG from Canva
 *   2. Save as `apps/landing/app/opengraph-image.png`
 *   3. Delete this .tsx file (Next will auto-pick the static PNG)
 */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'VidyaSutra — Ancient Intelligence. Modern Application.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Custom domain live since 2026-05-09 (DEC-VS-016). Used to fetch the
// `/coin.png` asset at edge runtime when generating the OG image.
const SITE_URL = 'https://www.vidyasutra.co.in';

export default async function OpengraphImage() {
  // Load TTF fonts bundled in app/fonts/ — Satori-compatible format.
  // import.meta.url resolves at edge runtime so these fetches work.
  const [cormorantBoldItalic, interSemiBold] = await Promise.all([
    fetch(new URL('./fonts/CormorantGaramond-BoldItalic.ttf', import.meta.url)).then(
      (r) => r.arrayBuffer(),
    ),
    fetch(new URL('./fonts/Inter-SemiBold.ttf', import.meta.url)).then((r) =>
      r.arrayBuffer(),
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1A0E05 0%, #2A1810 50%, #1A0E05 100%)',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Decorative golden frame */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: '1.5px solid rgba(212, 168, 67, 0.25)',
            borderRadius: 16,
          }}
        />

        {/* Top-left Sanskrit accent */}
        <div
          style={{
            position: 'absolute',
            top: 64,
            left: 64,
            color: 'rgba(212, 168, 67, 0.4)',
            fontSize: 18,
            letterSpacing: 6,
            display: 'flex',
            fontFamily: 'Inter',
          }}
        >
          अर्थशास्त्रम्
        </div>

        {/* Top-right brand label */}
        <div
          style={{
            position: 'absolute',
            top: 64,
            right: 64,
            color: 'rgba(212, 168, 67, 0.6)',
            fontSize: 13,
            letterSpacing: 4,
            fontWeight: 600,
            fontFamily: 'Inter',
            display: 'flex',
          }}
        >
          NIYAMKAVACH AI LABS
        </div>

        {/* Real VS_Gold trademarked coin (the seated Chanakya figure) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${SITE_URL}/coin.png`}
          width={150}
          height={150}
          alt="VidyaSutra coin"
          style={{
            borderRadius: 75,
            marginBottom: 28,
          }}
        />

        {/* Wordmark — real Cormorant Garamond Bold Italic */}
        <div
          style={{
            fontSize: 92,
            color: '#D4A843',
            fontFamily: 'Cormorant Garamond',
            fontStyle: 'italic',
            fontWeight: 700,
            letterSpacing: 2,
            marginBottom: 8,
            display: 'flex',
            lineHeight: 1.1,
          }}
        >
          VidyaSutra
        </div>

        {/* Swash divider */}
        <div
          style={{
            width: 80,
            height: 2,
            background: 'rgba(212, 168, 67, 0.4)',
            marginTop: 4,
            marginBottom: 18,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: 'rgba(255, 255, 255, 0.92)',
            fontFamily: 'Inter',
            fontWeight: 600,
            letterSpacing: 1.5,
            marginBottom: 14,
            display: 'flex',
          }}
        >
          Ancient Intelligence. Modern Application.
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            fontSize: 17,
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'Inter',
            textAlign: 'center',
            maxWidth: 880,
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          AI strategic advisor rooted in Kautilya&apos;s Arthashastra. 496 verified verses cited in every answer.
        </div>

        {/* Bottom-right URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 64,
            right: 64,
            color: '#D4A843',
            fontSize: 16,
            fontFamily: 'Inter',
            fontWeight: 600,
            letterSpacing: 1.5,
            display: 'flex',
          }}
        >
          vidyasutra.co.in
        </div>

        {/* Bottom-left tag */}
        <div
          style={{
            position: 'absolute',
            bottom: 64,
            left: 64,
            color: 'rgba(212, 168, 67, 0.55)',
            fontSize: 13,
            fontFamily: 'Inter',
            letterSpacing: 3,
            fontWeight: 500,
            display: 'flex',
          }}
        >
          MADE IN BENGALURU
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cormorant Garamond',
          data: cormorantBoldItalic,
          style: 'italic',
          weight: 700,
        },
        {
          name: 'Inter',
          data: interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  );
}
