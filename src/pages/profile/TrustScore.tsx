import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Star, CheckCircle, TrendingUp, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const trustFactors = [
  { name: "Identity Verification", score: 100, max: 100, icon: Shield },
  { name: "Transaction History", score: 85, max: 100, icon: TrendingUp },
  { name: "Response Rate", score: 92, max: 100, icon: CheckCircle },
  { name: "Review Rating", score: 98, max: 100, icon: Star },
];

const TrustScore = () => {
  const overallScore = 4.9;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-8">
        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Your Trust Score</h1>
        <p className="mb-8 text-muted-foreground font-body">
          Your trust score helps other users feel confident transacting with you.
        </p>

        {/* Main Score */}
        <div className="mb-8 rounded-xl border border-border bg-card p-8 text-center">
          <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
            <span className="font-heading text-5xl font-bold text-primary">{overallScore}</span>
          </div>
          <p className="text-lg font-medium text-foreground">Excellent Trust Score</p>
          <p className="text-sm text-muted-foreground">Top 5% of users on Trustly</p>
        </div>

        {/* Score Breakdown */}
        <div className="mb-8 space-y-4">
          <h2 className="font-heading text-lg font-semibold text-foreground">Score Breakdown</h2>
          {trustFactors.map((factor) => (
            <div key={factor.name} className="rounded-lg border border-border bg-card p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <factor.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{factor.name}</span>
                </div>
                <span className="text-sm font-bold text-primary">{factor.score}%</span>
              </div>
              <Progress value={factor.score} className="h-2" />
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="rounded-xl border border-border bg-secondary/30 p-6">
          <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">Improve Your Score</h2>
          <ul className="space-y-3 text-sm text-muted-foreground font-body">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-success shrink-0" />
              <span>Complete more successful transactions to boost your history score</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-success shrink-0" />
              <span>Respond to messages within 2 hours for better response rates</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-success shrink-0" />
              <span>Encourage buyers to leave reviews after successful transactions</span>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrustScore;
