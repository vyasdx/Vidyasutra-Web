export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#1A0E05', color: '#E8D5B0', fontFamily: "'Inter', sans-serif", minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <a href="/" style={{ color: '#D4A843', textDecoration: 'none', fontSize: 14 }}>&larr; Back to VidyaSutra</a>
        <h1 style={{ fontSize: 36, color: '#FFFFFF', fontFamily: "'Cormorant Garamond', serif", marginTop: 24 }}>Terms of Service</h1>
        <p style={{ color: 'rgba(232,213,176,0.4)', fontSize: 13 }}>Last updated: April 1, 2026</p>

        <Section title="1. Acceptance of Terms">
          By downloading, installing, or using VidyaSutra (&quot;the App&quot;), you agree to these Terms of Service. If you do not agree, do not use the App.
        </Section>

        <Section title="2. Description of Service">
          VidyaSutra is an AI-powered advisory app that maps ancient Indian knowledge systems (primarily Kautilya&apos;s Arthashastra) to modern life situations. It provides strategic frameworks, not prescriptions.
          <br /><br />
          <strong>VidyaSutra is NOT a substitute for professional legal, financial, medical, or psychological advice.</strong>
        </Section>

        <Section title="3. Source Integrity">
          All responses reference verified ancient texts with specific book, chapter, and verse citations. The AI does not fabricate verses. If no relevant verse exists for your query, the system will say so honestly.
          <br /><br />
          Modern interpretations are original analyses inspired by the source texts, not direct translations.
        </Section>

        <Section title="4. User Accounts">
          You must be at least 13 years old to create an account. You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information during registration.
        </Section>

        <Section title="5. Subscription and Payments">
          <strong>Free tier (The Shishya):</strong> 5 queries per day with basic features.<br /><br />
          <strong>Paid tiers (Amatya, Nayaka, Chakravartin):</strong> Unlimited queries and premium features. Subscriptions auto-renew unless cancelled. Refunds are subject to the respective app store&apos;s refund policy.<br /><br />
          <strong>Instant Sutra:</strong> One-time payment for a single query response (&#x20B9;59).<br /><br />
          Prices are in Indian Rupees (INR) for India users. International pricing may vary.
        </Section>

        <Section title="6. Acceptable Use">
          You may NOT use VidyaSutra to:<br />
          - Generate content promoting hatred, violence, or discrimination<br />
          - Attempt to extract or reverse-engineer the knowledge base<br />
          - Circumvent usage limits or subscription requirements<br />
          - Impersonate others or misrepresent your identity<br />
          - Use responses for military operational advice<br />
          - Scrape, copy, or redistribute AI-generated responses at scale
        </Section>

        <Section title="7. Political Neutrality">
          VidyaSutra provides strategic FRAMEWORKS, not political OPINIONS. On sensitive topics, the app analyzes through the Arthashastra lens only and does not take sides on political parties, leaders, ideologies, or religious disputes.
        </Section>

        <Section title="8. Legal Information Disclaimer">
          When the NyayaSutra module becomes available, it will provide legal INFORMATION (what the law says, procedures, section numbers) &mdash; NOT legal ADVICE (specific strategy for your case). This is not a substitute for consulting a qualified advocate enrolled with the Bar Council of India.
        </Section>

        <Section title="9. Intellectual Property">
          The app, its design, code, branding, and AI-generated interpretations are the intellectual property of NiyamKavach AI Labs Private Limited.
          <br /><br />
          The ancient source texts (Arthashastra, Yoga Sutras, etc.) are in the public domain. Our modern interpretations and structured knowledge base are proprietary.
        </Section>

        <Section title="10. Limitation of Liability">
          VidyaSutra provides information for educational and strategic thinking purposes only. We are not liable for any decisions you make based on the app&apos;s responses.
          <br /><br />
          The app is provided &quot;as is&quot; without warranties of any kind. Our total liability shall not exceed the amount you paid for the service in the 12 months preceding the claim.
        </Section>

        <Section title="11. Termination">
          We reserve the right to suspend or terminate accounts that violate these terms. You may delete your account at any time from the Profile screen. Upon deletion, all personal data is removed within 30 days.
        </Section>

        <Section title="12. Governing Law">
          These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.
        </Section>

        <Section title="13. Contact">
          NiyamKavach AI Labs Private Limited<br />
          Bengaluru, Karnataka, India<br />
          Email: vyas4c3@gmail.com<br />
          Founder: Vedavyas Vayalpadu
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 style={{ fontSize: 20, color: '#D4A843', marginTop: 32, marginBottom: 8, fontFamily: "'Cormorant Garamond', serif" }}>{title}</h2>
      <p style={{ fontSize: 15, color: 'rgba(232,213,176,0.7)', lineHeight: '1.8' }}>{children}</p>
    </>
  );
}
