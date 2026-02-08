import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, AlertTriangle, UserCheck, Lock, Phone, MapPin } from "lucide-react";

const tips = [
  { icon: UserCheck, title: "Verify Identities", desc: "Only transact with verified users. Check trust scores and reviews before meeting." },
  { icon: MapPin, title: "Meet in Public", desc: "Always meet in well-lit, public places. Many police stations offer safe exchange zones." },
  { icon: Phone, title: "Keep Communication On-Platform", desc: "Use Trustly chat for all communications. This helps us protect you and resolve disputes." },
  { icon: Lock, title: "Use Escrow", desc: "For high-value items, use our escrow service. Payment is held until you confirm receipt." },
  { icon: AlertTriangle, title: "Trust Your Instincts", desc: "If something feels off, walk away. Report suspicious behavior immediately." },
  { icon: Shield, title: "Protect Personal Info", desc: "Never share banking details, SSN, or passwords. We will never ask for these." },
];

const SafetyGuidelines = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary py-16">
          <div className="container text-center">
            <Shield className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
            <h1 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              Safety Guidelines
            </h1>
            <p className="mx-auto max-w-2xl text-primary-foreground/80 font-body">
              Your safety is our top priority. Follow these guidelines to have safe and successful transactions.
            </p>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <tip.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{tip.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Reporting Suspicious Activity</h2>
              <div className="space-y-4 text-muted-foreground font-body">
                <p>If you encounter suspicious behavior, scams, or feel unsafe, please report it immediately:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Use the "Report" button on any listing or user profile</li>
                  <li>Email our Trust & Safety team at safety@trustly.com</li>
                  <li>Call our safety hotline: +1 (555) 911-SAFE</li>
                  <li>In emergencies, always contact local law enforcement first</li>
                </ul>
                <p className="mt-4">We review all reports within 24 hours and take appropriate action to protect our community.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SafetyGuidelines;
