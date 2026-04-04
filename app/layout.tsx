import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VidyaSutra — Ancient Intelligence. Modern Application.',
  description: 'AI-powered strategic advisory mapping Kautilya\'s Arthashastra to modern life decisions. Ask Chanakya anything — negotiation, leadership, career, conflict. Every answer cites the exact verse.',
  keywords: 'Arthashastra, Chanakya, Kautilya, AI advisor, ancient wisdom, strategy, UPSC ethics, Indian knowledge, VidyaSutra',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'VidyaSutra — Arthashastra. Ancient Intelligence. Modern Application.',
    description: 'The playbook kings used. Now in your pocket. 496 verified Arthashastra verses powering AI strategic advice.',
    type: 'website',
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
