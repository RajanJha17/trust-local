import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
          <p className="mb-8 text-sm text-muted-foreground font-body">Last updated: February 8, 2026</p>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground font-body">
            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">1. Information We Collect</h2>
              <p>We collect information you provide directly, such as name, email, phone number, and location. We also collect usage data, device information, and transaction history to improve our services.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
              <p>We use your information to provide and improve our services, process transactions, verify user identities, prevent fraud, and communicate with you about your account and listings.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">3. Information Sharing</h2>
              <p>We share limited information with other users to facilitate transactions (e.g., seller name, location). We may share data with service providers who help operate our platform. We will disclose information when required by law.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">4. Data Security</h2>
              <p>We implement industry-standard security measures including encryption, secure servers, and regular security audits. However, no system is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">5. Your Rights</h2>
              <p>You can access, update, or delete your personal information through your account settings. You can opt out of marketing communications at any time. You may request a copy of your data.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">6. Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to remember preferences, analyze usage, and personalize content. You can control cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">7. Third-Party Services</h2>
              <p>Our platform may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their policies.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">8. Children's Privacy</h2>
              <p>Our services are not intended for users under 18. We do not knowingly collect information from children.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">9. Contact Us</h2>
              <p>For privacy-related questions, contact us at privacy@trustly.com.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
