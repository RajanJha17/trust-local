import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">Terms of Service</h1>
          <p className="mb-8 text-sm text-muted-foreground font-body">Last updated: February 8, 2026</p>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground font-body">
            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>By accessing and using Trustly, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">2. Description of Service</h2>
              <p>Trustly provides a hyperlocal marketplace platform where users can buy, sell, rent, and offer services within their communities. We facilitate connections between buyers and sellers but are not a party to any transactions.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">3. User Accounts</h2>
              <p>You must register for an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate and complete information during registration.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">4. User Conduct</h2>
              <p>You agree not to post fraudulent, misleading, or illegal content. You will not harass, abuse, or harm other users. You will not attempt to circumvent our escrow or verification systems.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">5. Listings and Transactions</h2>
              <p>All listings must accurately describe the item or service offered. Prices must be clearly stated. Users are responsible for fulfilling their transaction obligations.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">6. Escrow Services</h2>
              <p>Our escrow service holds funds until both parties confirm transaction completion. Disputes must be filed within 14 days of transaction. Escrow fees may apply to certain transactions.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">7. Limitation of Liability</h2>
              <p>Trustly is not liable for any damages arising from user interactions, transaction disputes, or third-party services. Our liability is limited to the fees paid to us for our services.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">8. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of new terms.</p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">9. Contact</h2>
              <p>For questions about these Terms, contact us at legal@trustly.com.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
