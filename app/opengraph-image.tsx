/**
 * ENH-VS-044 — Open Graph / Facebook / LinkedIn / WhatsApp / Slack / iMessage
 *               share preview image (1200×630 px).
 *
 * Next.js 15 picks this file up automatically — no manifest changes required.
 * Generated at edge runtime via @vercel/og (built into Next 15 as `next/og`).
 *
 * To replace with a Canva-designed PNG later:
 *   1. Export 1200×630 PNG from Canva
 *   2. Save as `apps/landing/app/opengraph-image.png`
 *   3. Delete this .tsx file
 *   Next will auto-pick the static PNG. No code changes needed.
 */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'VidyaSutra — Ancient Intelligence. Modern Application.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
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
          background: 'linear-gradient(135deg, #1A0E05 0%, #2A1810 100%)',
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

        {/* Top corner Sanskrit accent */}
        <div
          style={{
            position: 'absolute',
            top: 64,
            left: 64,
            color: 'rgba(212, 168, 67, 0.35)',
            fontSize: 18,
            letterSpacing: 6,
            display: 'flex',
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
            fontSize: 14,
            letterSpacing: 4,
            fontWeight: 600,
            display: 'flex',
          }}
        >
          NIYAMKAVACH AI LABS
        </div>

        {/* Coin-like circle (no image, pure CSS) */}
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
            border: '2px solid #D4A843',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(212, 168, 67, 0.08)',
            marginBottom: 36,
          }}
        >
          <div
            style={{
              fontSize: 56,
              color: '#D4A843',
              fontWeight: 700,
              fontStyle: 'italic',
              fontFamily: 'Georgia, serif',
              display: 'flex',
            }}
          >
            VS
          </div>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 88,
            color: '#D4A843',
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
            letterSpacing: 3,
            fontWeight: 700,
            marginBottom: 12,
            display: 'flex',
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
            marginBottom: 22,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: 'rgba(255, 255, 255, 0.92)',
            fontWeight: 600,
            letterSpacing: 2,
            display: 'flex',
            marginBottom: 16,
          }}
        >
          Ancient Intelligence. Modern Application.
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            fontSize: 18,
            color: 'rgba(255, 255, 255, 0.65)',
            textAlign: 'center',
            maxWidth: 880,
            lineHeight: 1.45,
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
            fontSize: 14,
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
    },
  );
}
