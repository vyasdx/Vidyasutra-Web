import type { Metadata } from 'next';
import './globals.css';

// ENH-VS-044 — comprehensive OG + Twitter card metadata so shares on
// WhatsApp / LinkedIn / X / Slack / iMessage / Facebook render rich previews.
//
// The landing currently lives at landing-pi-nine-71.vercel.app. When the
// custom domain (vidyasutra.co.in) is mapped to Vercel (ENH-VS-002), update
// SITE_URL below and re-deploy — every preview card will pick up the new domain.
const SITE_URL = 'https://landing-pi-nine-71.vercel.app';

const TITLE = 'VidyaSutra — Ancient Intelligence. Modern Application.';
const DESCRIPTION =
  "AI strategic advisor rooted in Kautilya's Arthashastra. 496 verified Sanskrit shlokas applied to modern career, leadership, and life decisions. Every answer cites the exact verse. Available in English, Hindi, Telugu, Kannada.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Arthashastra',
    'Chanakya',
    'Kautilya',
    'AI advisor',
    'ancient Indian wisdom',
    'strategic AI',
    'UPSC',
    'leadership AI',
    'negotiation coach',
    'Indian knowledge',
    'VidyaSutra',
    'NiyamKavach AI Labs',
    'Sanskrit verses',
    'decision making AI',
  ],
  authors: [{ name: 'Vedavyas Vayalpadu' }],
  creator: 'Vedavyas Vayalpadu',
  publisher: 'NiyamKavach AI Labs Private Limited',
  applicationName: 'VidyaSutra',
  category: 'Education',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'VidyaSutra',
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: 'en_IN',
    // images is auto-populated by app/opengraph-image.tsx (Next.js 15 convention)
    // Explicit images here are unnecessary; Next will inject the generated card.
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@vidyasutra2k26',
    site: '@vidyasutra2k26',
    // images auto-populated by app/twitter-image.tsx
  },
  other: {
    // WhatsApp preview hint — uses OG image but some clients ignore size hints
    'og:image:width': '1200',
    'og:image:height': '630',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            h1 { font-size: 42px !important; }
            nav { padding: 12px 16px !important; }
            nav span { font-size: 20px !important; }
            nav a { padding: 8px 16px !important; font-size: 12px !important; }
            section > div { padding: 0 16px !important; }
            .hero-content { padding: 20px 16px 40px !important; }
          }
        ` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#1A0E05' }}>
        <canvas id="particles" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }} />
        <div>{children}</div>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var c = document.getElementById('particles');
            if (!c) return;
            var ctx = c.getContext('2d');
            var particles = [];
            var count = 60;

            function resize() {
              c.width = window.innerWidth;
              c.height = window.innerHeight;
            }
            resize();
            window.addEventListener('resize', resize);

            for (var i = 0; i < count; i++) {
              particles.push({
                x: Math.random() * c.width,
                y: Math.random() * c.height,
                r: Math.random() * 2 + 0.5,
                dx: (Math.random() - 0.5) * 0.3,
                dy: -Math.random() * 0.4 - 0.1,
                o: Math.random() * 0.5 + 0.1,
                do: (Math.random() - 0.5) * 0.005
              });
            }

            function draw() {
              ctx.clearRect(0, 0, c.width, c.height);
              for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                p.x += p.dx;
                p.y += p.dy;
                p.o += p.do;
                if (p.o <= 0.05 || p.o >= 0.6) p.do = -p.do;
                if (p.y < -10) { p.y = c.height + 10; p.x = Math.random() * c.width; }
                if (p.x < -10) p.x = c.width + 10;
                if (p.x > c.width + 10) p.x = -10;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(212,168,67,' + p.o + ')';
                ctx.fill();
              }
              requestAnimationFrame(draw);
            }
            draw();
          })();
        ` }} />
      </body>
    </html>
  );
}
