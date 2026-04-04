export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#1A0E05', color: '#E8D5B0', fontFamily: "'Inter', sans-serif", minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <a href="/" style={{ color: '#D4A843', textDecoration: 'none', fontSize: 14 }}>&larr; Back to VidyaSutra</a>
        <h1 style={{ fontSize: 36, color: '#FFFFFF', fontFamily: "'Cormorant Garamond', serif", marginTop: 24 }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(232,213,176,0.4)', fontSize: 13 }}>Last updated: April 1, 2026</p>

        <Section title="1. Who We Are">
          VidyaSutra is developed and operated by NiyamKavach AI Labs Private Limited, a company registered in Bengaluru, Karnataka, India (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </Section>

        <Section title="2. Information We Collect">
          <strong>Account Information:</strong> Name, email address, country, and professional context you provide during registration.
          <br /><br />
          <strong>Usage Data:</strong> Queries you submit, conversations, bookmarks, and frameworks explored within the app.
          <br /><br />
          <strong>Device Information:</strong> Device type, operating system version, and app version for crash reporting and improvement.
          <br /><br />
          <strong>Push Notification Tokens:</strong> If you enable notifications, we store your device token to send Daily Niti notifications.
        </Section>

        <Section title="3. How We Use Your Information">
          - To provide personalized strategic advisory based on ancient Indian texts<br />
          - To improve response quality and relevance over time<br />
          - To manage your subscription and account<br />
          - To send Daily Niti notifications (if enabled)<br />
          - To prevent abuse and enforce usage limits
        </Section>

        <Section title="4. AI and Your Data">
          Your queries are processed by AI models (Claude by Anthropic) to generate responses. We send your question and relevant verse context to the AI &mdash; we do NOT send your personal information, email, or account details to the AI model.
          <br /><br />
          Your conversation history is stored to provide evolving, non-repetitive advice. You can delete your conversation history at any time from the app.
          <br /><br />
          <strong>We do NOT use your data to train AI models.</strong> Your queries are processed and discarded by the AI provider.
        </Section>

        <Section title="5. Data Storage and Security">
          Your data is stored securely on Supabase (PostgreSQL) with encryption at rest. Authentication is handled by Clerk with industry-standard security.
          <br /><br />
          We do not sell, rent, or share your personal data with third parties for marketing purposes.
        </Section>

        <Section title="6. India: Digital Personal Data Protection Act (DPDPA) 2023">
          Under India&apos;s DPDPA 2023, you have the right to:<br />
          - Access your personal data<br />
          - Correct inaccurate data<br />
          - Delete your account and all associated data (Right to Erasure)<br />
          - Withdraw consent for data processing<br />
          - Nominate another person to exercise your rights<br />
          - File a complaint with the Data Protection Board of India<br /><br />
          We process your data based on your explicit consent given during account creation. You may withdraw consent at any time by deleting your account.
        </Section>

        <Section title="7. EU/EEA: General Data Protection Regulation (GDPR)">
          If you are located in the European Union or European Economic Area:<br /><br />
          <strong>Legal Basis:</strong> We process your data based on consent (Article 6(1)(a) GDPR) and legitimate interest (Article 6(1)(f)).<br /><br />
          <strong>Your Rights:</strong><br />
          - Right of access (Article 15)<br />
          - Right to rectification (Article 16)<br />
          - Right to erasure (Article 17)<br />
          - Right to data portability (Article 20)<br />
          - Right to object to processing (Article 21)<br />
          - Right to lodge a complaint with your local supervisory authority<br /><br />
          <strong>Data Transfers:</strong> Your data may be transferred to and processed in India. We ensure appropriate safeguards are in place for such transfers.
        </Section>

        <Section title="8. Children">
          VidyaSutra is intended for users aged 13 and above. We do not knowingly collect data from children under 13. If you believe a child under 13 has provided us data, contact us at vyas4c3@gmail.com.
        </Section>

        <Section title="9. Third-Party Services">
          We use: Clerk (authentication), Supabase (database), Anthropic Claude API (AI responses), Voyage AI (text embeddings), Firebase (push notifications). Each has its own privacy policy.
        </Section>

        <Section title="10. Data Retention">
          We retain your data for as long as your account is active. Upon account deletion, all personal data is permanently removed within 30 days. Anonymized, aggregated data may be retained for analytics.
        </Section>

        <Section title="11. Contact">
          NiyamKavach AI Labs Private Limited<br />
          Bengaluru, Karnataka, India<br />
          Email: vyas4c3@gmail.com<br />
          Data Protection Officer: Vedavyas Vayalpadu
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
