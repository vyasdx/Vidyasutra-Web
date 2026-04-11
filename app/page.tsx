/**
 * Created by: Vedavyas Vayalpadu, NiyamKavach AI Labs Private Limited, Bengaluru
 * Co-developed by: Vedavyas and Claude Opus 4.6
 */
'use client';

import { useState } from 'react';

const PLAY_STORE_URL = '#';
const API_URL = 'https://vidyasutra-api.onrender.com';

function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!open) return null;

  const handleSubmit = async () => {
    if (!phone.trim() || phone.trim().length < 10) {
      setError('Please enter a valid phone number');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone.trim(), name: name.trim() || null }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok || data?.success) {
        setSubmitted(true);
      } else if (data?.code === 'already_registered') {
        setSubmitted(true);
      } else {
        console.error('Waitlist error:', res.status, data);
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        {submitted ? (
          <>
            <div style={modalStyles.checkmark}>&#x2705;</div>
            <h3 style={modalStyles.title}>You{"'"}re on the list!</h3>
            <p style={modalStyles.subtitle}>
              We{"'"}ll notify you as soon as VidyaSutra is available on the Play Store.
            </p>
            <button style={modalStyles.closeBtn} onClick={onClose}>Close</button>
          </>
        ) : (
          <>
            <img src="/coin.png" alt="VidyaSutra" style={modalStyles.coin} />
            <h3 style={modalStyles.title}>Coming Soon on Play Store</h3>
            <p style={modalStyles.subtitle}>
              VidyaSutra Android app is launching soon. Share your WhatsApp number and
              we{"'"}ll notify you the moment it{"'"}s live.
            </p>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={modalStyles.input}
            />
            <input
              type="tel"
              placeholder="WhatsApp number (e.g., +91 98765 43210)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={modalStyles.input}
            />
            {error && <p style={modalStyles.error}>{error}</p>}
            <button
              style={modalStyles.submitBtn}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Notify Me'}
            </button>
            <p style={modalStyles.privacy}>
              We{"'"}ll only use this to notify you about the app launch. No spam.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

const modalStyles: Record<string, React.CSSProperties> = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: 20 },
  modal: { backgroundColor: '#1A0E05', border: '2px solid #D4A843', borderRadius: 16, padding: 32, maxWidth: 420, width: '100%', textAlign: 'center' },
  coin: { width: 80, height: 80, borderRadius: 40, objectFit: 'cover' as const, marginBottom: 16 },
  checkmark: { fontSize: 48, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: 700, color: '#FFFFFF', fontFamily: "'Cormorant Garamond', serif", margin: '0 0 8px', letterSpacing: 1 },
  subtitle: { fontSize: 14, color: 'rgba(232,213,176,0.6)', lineHeight: 1.6, marginBottom: 20 },
  input: { width: '100%', padding: '12px 16px', backgroundColor: '#2C1608', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 8, color: '#E8D5B0', fontSize: 15, marginBottom: 12, outline: 'none', boxSizing: 'border-box' as const },
  error: { fontSize: 13, color: '#EF5350', margin: '0 0 12px' },
  submitBtn: { width: '100%', padding: '14px', backgroundColor: '#D4A843', color: '#1A0E05', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: 'pointer' },
  closeBtn: { padding: '12px 32px', backgroundColor: 'transparent', color: '#D4A843', border: '1px solid rgba(212,168,67,0.3)', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer', marginTop: 16 },
  privacy: { fontSize: 11, color: 'rgba(232,213,176,0.3)', marginTop: 12 },
};

export default function LandingPage() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWaitlist(true);
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        {/* Top Bar */}
        <div style={styles.topBar}>
          <span style={styles.topBarCompany}>NiyamKavach AI Labs Pvt Ltd</span>
          <div style={styles.topBarRight}>
            <a href="https://www.instagram.com/vidyasutra2k26/" target="_blank" rel="noopener noreferrer" style={styles.topBarInsta}>
              <span style={styles.instaIcon}>&#x1F4F7;</span> Follow us on Instagram
            </a>
            <span style={styles.topBarSpacer} />
            <span style={styles.topBarBadge}><span className="pulse-emoji">&#x2764;&#xFE0F;</span> Made in Namma Bengaluru</span>
            <span style={styles.topBarSpacer} />
            <span style={styles.topBarBadge}><span className="pulse-emoji">&#x1F4AA;</span> Made for Vikasit Bharat</span>
          </div>
        </div>
        <nav style={styles.nav}>
          <span style={styles.navLogo}>VidyaSutra</span>
          <a href="#" onClick={handleDownloadClick} style={styles.navCta}>Download App</a>
        </nav>

        <div style={styles.heroContent}>
          <div style={styles.heroTextSection}>
            <img src="/coin.png" alt="VidyaSutra" style={styles.heroCoin} />
            <p style={styles.heroSanskrit}>&#x0905;&#x0930;&#x094D;&#x0925;&#x0936;&#x093E;&#x0938;&#x094D;&#x0924;&#x094D;&#x0930;&#x092E;&#x094D;</p>
            <h1 style={styles.heroTitle}>VidyaSutra</h1>
            <div style={styles.heroSwash} />
            <p style={styles.heroTagline}>Ancient Intelligence. Modern Application.</p>
            <p style={styles.heroSubtitle}>
              The world{"'"}s first AI advisor rooted in Kautilya{"'"}s Arthashastra.
              Ask about negotiation, leadership, career, conflict &mdash; get strategic
              frameworks with exact verse citations. Not quotes. Not opinions. Frameworks.
            </p>

            <h2 style={styles.heroTakshashila}>Before Harvard, there was Takshashila.</h2>
            <p style={styles.heroTakshashilaSub}>2,300 years of strategic wisdom. Now in your pocket.</p>

            <div style={styles.heroCtas}>
              <a href="#" onClick={handleDownloadClick} style={styles.primaryCta}>Get VidyaSutra Free</a>
              <a href="#how-it-works" style={styles.secondaryCta}>See how it works</a>
            </div>

            <p style={styles.heroNote}>496 verified shlokas &middot; 15 Books of the Arthashastra &middot; Zero hallucination &middot; Free to start</p>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section style={{ ...styles.section, backgroundColor: '#0D0704' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Who is VidyaSutra For?</h2>
          <div style={styles.audienceGrid}>
            {[
              { icon: '\uD83D\uDCBC', title: 'Corporate Professionals', desc: 'Office politics, career decisions, leadership \u2014 from the world\'s oldest management treatise.' },
              { icon: '\uD83C\uDF93', title: 'Students & Researchers', desc: 'Verified citations for academic papers. Vedic Math for exam prep. Yoga Sutras for focus.' },
              { icon: '\uD83C\uDFAF', title: 'UPSC / IAS Aspirants', desc: 'Ethics paper preparation with real Arthashastra case studies. Stop memorizing. Start applying.' },
              { icon: '\uD83D\uDE80', title: 'Startup Founders', desc: 'Negotiation (Sama-Dana-Bheda-Danda), competitor analysis (Mandala Theory), team building (Saptanga).' },
              { icon: '\uD83E\uDD1D', title: 'HR & People Leaders', desc: 'Conflict resolution, team dynamics, hiring frameworks \u2014 Kautilya wrote the playbook 2,300 years ago.' },
              { icon: '\uD83D\uDCC8', title: 'Sales Teams & Traders', desc: 'Emotional discipline through Danda-Niti. Risk frameworks from Shadgunya. Know when to hold, when to exit.' },
            ].map((item) => (
              <div key={item.title} style={styles.audienceCard}>
                <span style={styles.audienceIcon}>{item.icon}</span>
                <h3 style={styles.audienceTitle}>{item.title}</h3>
                <p style={styles.audienceDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Knowledge Modules */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>8 Knowledge Modules</h2>
          <p style={styles.sectionSubtitle}>One platform. Every ancient Indian knowledge system.</p>
          <div style={styles.modulesGrid}>
            {[
              { name: 'Chanakya', source: 'Arthashastra', status: 'LIVE', desc: 'Strategy, governance, negotiation, diplomacy' },
              { name: 'Yoga Sutras', source: 'Patanjali', status: 'SOON', desc: 'Mental discipline, focus, peak performance' },
              { name: 'Vedic Math', source: 'Tirthaji', status: 'SOON', desc: 'Mental calculation, exam prep, cognitive training' },
              { name: 'Ayurveda', source: 'Charaka & Sushruta', status: 'SOON', desc: 'Personalized wellness, daily routines, body intelligence' },
              { name: 'Vastu', source: 'Sthapatya Veda', status: 'SOON', desc: 'Workspace design, spatial optimization' },
              { name: 'Natya Shastra', source: 'Bharata Muni', status: 'SOON', desc: 'Communication, storytelling, persuasion' },
            ].map((mod) => (
              <div key={mod.name} style={styles.moduleCard}>
                <div style={styles.moduleHeader}>
                  <h3 style={styles.moduleName}>{mod.name}</h3>
                  <span style={{ ...styles.moduleStatus, ...(mod.status === 'LIVE' ? styles.statusLive : {}) }}>{mod.status}</span>
                </div>
                <p style={styles.moduleSource}>{mod.source}</p>
                <p style={styles.moduleDesc}>{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How it Works */}
      <section id="how-it-works" style={{ ...styles.section, backgroundColor: '#0D0704' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>How VidyaSutra Works</h2>
          <p style={styles.sectionSubtitle}>Ask in modern language. Get ancient strategic frameworks.</p>
          <div style={styles.stepsGrid}>
            {[
              { step: '01', title: 'Ask Your Question', desc: '"How do I negotiate a better salary?" or "My co-founder and I keep disagreeing on strategy"' },
              { step: '02', title: 'AI Retrieves Relevant Verses', desc: 'Our RAG pipeline searches 496 verified Arthashastra shlokas to find the most relevant strategic frameworks.' },
              { step: '03', title: 'Get Framework + Citation', desc: 'Receive the ancient framework name, modern interpretation, and exact verse reference (Book, Chapter, Verse).' },
              { step: '04', title: 'Your Move', desc: 'Every response ends with a concrete action step \u2014 what to do next, based on 2,300 years of strategic thinking.' },
            ].map((item) => (
              <div key={item.step} style={styles.stepCard}>
                <span style={styles.stepNumber}>{item.step}</span>
                <h3 style={styles.stepTitle}>{item.title}</h3>
                <p style={styles.stepDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Choose Your Path (Pricing) */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Choose Your Path</h2>
          <p style={styles.sectionSubtitle}>Named after roles in the ancient Indian court</p>
          <div style={styles.pricingGrid}>
            {[
              { name: 'The Shishya', label: 'Student', price: 'Free', period: '', coin: null, features: ['10 queries/day', 'Daily Chanakya Niti', 'Basic frameworks', 'Multi-language support'], highlight: false },
              { name: 'The Amatya', label: 'Minister', price: '\u20B9149', period: '/month', coin: '/coin-copper.png', features: ['30 queries/day', 'All frameworks', 'Sanskrit source view', 'Bookmark & export'], highlight: true },
              { name: 'The Nayaka', label: 'Leader', price: '\u20B9499', period: '/6 months', coin: '/coin-silver.png', features: ['50 queries/day', 'Everything in Amatya', 'Save 44%', 'Priority support'], highlight: false },
              { name: 'The Chakravartin', label: 'Emperor', price: '\u20B9899', period: '/year', coin: '/coin-gold.png', features: ['75 queries/day', 'Everything in Nayaka', 'All future modules', 'Best value'], highlight: false },
            ].map((tier) => (
              <div key={tier.name} style={{ ...styles.pricingCard, ...(tier.highlight ? styles.pricingHighlight : {}) }}>
                {tier.highlight && <span style={styles.popularBadge}>MOST POPULAR</span>}
                {tier.coin && <img src={tier.coin} alt={tier.name} style={styles.pricingCoin} />}
                <h3 style={styles.pricingName}>{tier.name}</h3>
                <p style={styles.pricingLabel}>{tier.label}</p>
                <div style={styles.pricingPrice}>
                  <span style={styles.priceAmount}>{tier.price}</span>
                  <span style={styles.pricePeriod}>{tier.period}</span>
                </div>
                <ul style={styles.featureList}>
                  {tier.features.map((f) => (
                    <li key={f} style={styles.featureItem}>{f}</li>
                  ))}
                </ul>
                <a href="#" onClick={handleDownloadClick} style={tier.highlight ? styles.pricingCtaGold : styles.pricingCta}>
                  {tier.price === 'Free' ? 'Start Free' : 'Coming Soon'}
                </a>
              </div>
            ))}
          </div>
          {/* Instant Power Sutra */}
          <div style={styles.instantSutraCard}>
            <div style={styles.instantSutraInner}>
              <div>
                <h3 style={styles.instantSutraTitle}>&#x26A1; Instant Power Sutra</h3>
                <p style={styles.instantSutraDesc}>
                  Need a deeper, premium analysis? Powered by our most advanced AI model.
                  One strategic answer with maximum depth &mdash; right now.
                </p>
              </div>
              <div style={styles.instantSutraRight}>
                <span style={styles.instantSutraPrice}>&#x20B9;59</span>
                <span style={styles.instantSutraPeriod}>/query</span>
                <a href="#" onClick={handleDownloadClick} style={styles.instantSutraCta}>Try Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA before footer */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <a href="#" onClick={handleDownloadClick} style={styles.ctaButton}>Download VidyaSutra Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            <div>
              <h3 style={styles.footerLogo}>VidyaSutra</h3>
              <p style={styles.footerTagline}>Ancient intelligence. Modern application.</p>
              <p style={styles.footerCompany}>NiyamKavach AI Labs Private Limited</p>
              <p style={styles.footerCompany}>Bengaluru, Karnataka, India</p>
            </div>
            <div>
              <h4 style={styles.footerHeading}>Product</h4>
              <a href="#how-it-works" style={styles.footerLink}>How it works</a>
              <a href="#" onClick={handleDownloadClick} style={styles.footerLink}>Download</a>
              <a href="/privacy" style={styles.footerLink}>Privacy Policy</a>
              <a href="/terms" style={styles.footerLink}>Terms of Service</a>
            </div>
            <div>
              <h4 style={styles.footerHeading}>Contact</h4>
              <a href="mailto:vyas4c3@gmail.com" style={styles.footerLink}>vyas4c3@gmail.com</a>
              <a href="https://www.instagram.com/vidyasutra2k26/" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>Instagram @vidyasutra2k26</a>
              <p style={styles.footerCompany}>Founded by Vedavyas Vayalpadu</p>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerCopyright}>&copy; 2026 NiyamKavach AI Labs Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal open={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { backgroundColor: '#1A0E05', color: '#E8D5B0', fontFamily: "'Inter', sans-serif", margin: 0, padding: 0 },

  topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 40px', borderBottom: '1px solid rgba(212,168,67,0.08)' },
  topBarCompany: { fontSize: 11, color: 'rgba(212,168,67,0.4)', letterSpacing: 1 },
  topBarRight: { display: 'flex', gap: 24, alignItems: 'center' },
  topBarSpacer: { width: 1, height: 12, backgroundColor: 'rgba(212,168,67,0.2)' },
  topBarBadge: { fontSize: 11, color: 'rgba(232,213,176,0.5)', letterSpacing: 0.5 },
  topBarInsta: { fontSize: 11, color: '#D4A843', textDecoration: 'none', letterSpacing: 0.5, fontWeight: 600 },
  instaIcon: { fontSize: 13 },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', maxWidth: 1200, margin: '0 auto' },
  navLogo: { fontSize: 24, fontWeight: 700, color: '#D4A843', fontFamily: "'Cormorant Garamond', serif", letterSpacing: 2 },
  navCta: { padding: '10px 24px', backgroundColor: '#D4A843', color: '#1A0E05', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 14 },

  hero: { minHeight: '90vh', display: 'flex', flexDirection: 'column', backgroundImage: 'linear-gradient(to bottom, rgba(26,14,5,0.7) 0%, rgba(26,14,5,0.85) 50%, #1A0E05 100%), url(/kautilya-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center top' },
  heroContent: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 20px 60px', maxWidth: 1200, margin: '0 auto', width: '100%' },
  heroTextSection: { maxWidth: 750, textAlign: 'center' },
  heroCoin: { width: 180, height: 180, borderRadius: 90, objectFit: 'cover', marginBottom: 24 },
  heroSanskrit: { fontSize: 18, color: 'rgba(212,168,67,0.3)', letterSpacing: 8, fontFamily: "'Cormorant Garamond', serif", marginBottom: 8 },
  heroTitle: { fontSize: 68, fontWeight: 700, lineHeight: 1.05, color: '#D4A843', fontFamily: "'Cormorant Garamond', serif", margin: '0 0 8px', letterSpacing: 3, textShadow: '0 0 40px rgba(212,168,67,0.15)' },
  heroSwash: { width: 80, height: 2, background: 'linear-gradient(90deg, transparent, #D4A843, transparent)', margin: '16px auto 20px' },
  heroTagline: { fontSize: 20, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: 2, marginBottom: 16 },
  heroSubtitle: { fontSize: 17, lineHeight: 1.8, color: 'rgba(232,213,176,0.6)', marginBottom: 36 },
  heroTakshashila: { fontSize: 32, fontWeight: 700, color: '#FFFFFF', fontFamily: "'Cormorant Garamond', serif", marginTop: 32, marginBottom: 4, letterSpacing: 1 },
  heroTakshashilaSub: { fontSize: 16, color: 'rgba(232,213,176,0.5)', marginBottom: 28 },
  heroCtas: { display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' },
  primaryCta: { padding: '16px 40px', backgroundColor: '#D4A843', color: '#1A0E05', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' },
  secondaryCta: { padding: '16px 40px', border: '1px solid rgba(212,168,67,0.4)', color: '#D4A843', borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: 'none' },
  heroNote: { fontSize: 13, color: 'rgba(212,168,67,0.4)', marginTop: 24, letterSpacing: 1 },

  socialProof: { backgroundColor: '#150C03', padding: '40px 0', borderTop: '1px solid rgba(212,168,67,0.08)', borderBottom: '1px solid rgba(212,168,67,0.08)' },
  container: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' },
  proofGrid: { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 20 },
  proofItem: { textAlign: 'center' },
  proofNumber: { display: 'block', fontSize: 36, fontWeight: 700, color: '#D4A843', fontFamily: "'Cormorant Garamond', serif" },
  proofLabel: { fontSize: 13, color: 'rgba(232,213,176,0.5)' },

  section: { padding: '80px 0' },
  sectionTitle: { fontSize: 36, fontWeight: 700, color: '#FFFFFF', textAlign: 'center', fontFamily: "'Cormorant Garamond', serif", marginBottom: 8, letterSpacing: 1 },
  sectionSubtitle: { fontSize: 16, color: 'rgba(232,213,176,0.5)', textAlign: 'center', marginBottom: 48 },

  stepsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 },
  stepCard: { padding: 28, backgroundColor: 'rgba(44,22,8,0.6)', border: '1px solid rgba(212,168,67,0.1)', borderRadius: 16 },
  stepNumber: { fontSize: 36, fontWeight: 700, color: 'rgba(212,168,67,0.2)', fontFamily: "'Cormorant Garamond', serif" },
  stepTitle: { fontSize: 18, fontWeight: 700, color: '#FFFFFF', margin: '12px 0 8px' },
  stepDesc: { fontSize: 14, lineHeight: 1.6, color: 'rgba(232,213,176,0.6)' },

  audienceGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 },
  audienceCard: { padding: 24, backgroundColor: 'rgba(44,22,8,0.5)', border: '1px solid rgba(212,168,67,0.1)', borderRadius: 12 },
  audienceIcon: { fontSize: 28 },
  audienceTitle: { fontSize: 16, fontWeight: 700, color: '#D4A843', margin: '8px 0 4px' },
  audienceDesc: { fontSize: 14, lineHeight: 1.6, color: 'rgba(232,213,176,0.6)' },

  pricingGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 },
  pricingCard: { padding: 28, backgroundColor: 'rgba(44,22,8,0.6)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 16, textAlign: 'center', position: 'relative' },
  pricingHighlight: { border: '2px solid #D4A843', transform: 'scale(1.03)' },
  popularBadge: { position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#D4A843', color: '#1A0E05', padding: '4px 16px', borderRadius: 20, fontSize: 10, fontWeight: 800, letterSpacing: 1 },
  pricingCoin: { width: 56, height: 56, borderRadius: 28, objectFit: 'cover', margin: '0 auto 12px', display: 'block' },
  pricingName: { fontSize: 20, fontWeight: 700, color: '#FFFFFF', fontFamily: "'Cormorant Garamond', serif", marginTop: 8, marginBottom: 0 },
  pricingLabel: { fontSize: 13, color: 'rgba(232,213,176,0.4)', marginBottom: 12 },
  pricingPrice: { marginBottom: 16 },
  priceAmount: { fontSize: 36, fontWeight: 900, color: '#D4A843' },
  pricePeriod: { fontSize: 14, color: 'rgba(232,213,176,0.5)' },
  featureList: { listStyle: 'none', padding: 0, marginBottom: 20, textAlign: 'left' },
  featureItem: { fontSize: 14, color: 'rgba(232,213,176,0.7)', padding: '6px 0', borderBottom: '1px solid rgba(212,168,67,0.08)' },
  pricingCtaGold: { display: 'inline-block', padding: '12px 32px', backgroundColor: '#D4A843', color: '#1A0E05', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 14 },
  pricingCta: { display: 'inline-block', padding: '12px 32px', border: '1px solid rgba(212,168,67,0.3)', color: '#D4A843', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 14 },
  instantSutra: { textAlign: 'center', fontSize: 15, color: 'rgba(232,213,176,0.5)', marginTop: 32 },
  instantSutraCard: { marginTop: 32, padding: 2, borderRadius: 16, background: 'linear-gradient(135deg, #D4A843, #8A5020, #D4A843)' },
  instantSutraInner: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '24px 28px', backgroundColor: '#1A0E05', borderRadius: 14, flexWrap: 'wrap' as const },
  instantSutraTitle: { fontSize: 22, fontWeight: 700, color: '#D4A843', fontFamily: "'Cormorant Garamond', serif", margin: '0 0 8px', letterSpacing: 1 },
  instantSutraDesc: { fontSize: 14, color: 'rgba(232,213,176,0.6)', lineHeight: 1.6, maxWidth: 550, margin: 0 },
  instantSutraRight: { textAlign: 'center' as const, minWidth: 120 },
  instantSutraPrice: { fontSize: 42, fontWeight: 900, color: '#D4A843' },
  instantSutraPeriod: { fontSize: 14, color: 'rgba(232,213,176,0.5)' },
  instantSutraCta: { display: 'inline-block', marginTop: 12, padding: '10px 28px', backgroundColor: '#D4A843', color: '#1A0E05', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 14 },

  modulesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 },
  moduleCard: { padding: 20, backgroundColor: 'rgba(44,22,8,0.5)', border: '1px solid rgba(212,168,67,0.1)', borderRadius: 12 },
  moduleHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  moduleName: { fontSize: 16, fontWeight: 700, color: '#FFFFFF', margin: 0 },
  moduleStatus: { fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)', letterSpacing: 1 },
  statusLive: { backgroundColor: 'rgba(76,175,80,0.2)', color: '#4CAF50' },
  moduleSource: { fontSize: 12, color: 'rgba(232,213,176,0.4)', margin: '4px 0' },
  moduleDesc: { fontSize: 13, color: 'rgba(232,213,176,0.6)', lineHeight: 1.5 },

  ctaSection: { padding: '100px 0', textAlign: 'center', background: 'linear-gradient(180deg, #1A0E05 0%, #2C1608 100%)' },
  ctaTitle: { fontSize: 42, fontWeight: 700, color: '#FFFFFF', fontFamily: "'Cormorant Garamond', serif", marginBottom: 16, letterSpacing: 1 },
  ctaSubtitle: { fontSize: 18, color: 'rgba(232,213,176,0.6)', marginBottom: 32 },
  ctaButton: { display: 'inline-block', padding: '18px 48px', backgroundColor: '#D4A843', color: '#1A0E05', borderRadius: 12, fontWeight: 700, fontSize: 18, textDecoration: 'none' },

  footer: { padding: '60px 0 30px', borderTop: '1px solid rgba(212,168,67,0.1)' },
  footerGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 },
  footerLogo: { fontSize: 24, fontWeight: 700, color: '#D4A843', fontFamily: "'Cormorant Garamond', serif", margin: '0 0 8px', letterSpacing: 2 },
  footerTagline: { fontSize: 13, color: 'rgba(232,213,176,0.4)' },
  footerCompany: { fontSize: 12, color: 'rgba(232,213,176,0.3)', marginTop: 4 },
  footerHeading: { fontSize: 14, fontWeight: 700, color: 'rgba(232,213,176,0.7)', marginBottom: 12 },
  footerLink: { display: 'block', fontSize: 13, color: 'rgba(232,213,176,0.4)', textDecoration: 'none', marginBottom: 8 },
  footerBottom: { borderTop: '1px solid rgba(212,168,67,0.08)', paddingTop: 20, textAlign: 'center' },
  footerCopyright: { fontSize: 12, color: 'rgba(232,213,176,0.25)' },
};
