import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Star, CheckCircle, TrendingUp, AlertTriangle, Award, Clock, MessageCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const trustFactors = [
  { name: "Identity Verification", score: 100, max: 100, icon: Shield, desc: "Government ID verified" },
  { name: "Transaction History", score: 85, max: 100, icon: TrendingUp, desc: "34 successful transactions" },
  { name: "Response Rate", score: 92, max: 100, icon: MessageCircle, desc: "Responds within 1 hour" },
  { name: "Review Rating", score: 98, max: 100, icon: Star, desc: "4.9 average from 47 reviews" },
  { name: "Account Age", score: 70, max: 100, icon: Clock, desc: "Member for 10 months" },
];

const reputationLevels = [
  { level: "Bronze", min: 0, max: 25, color: "hsl(30, 40%, 50%)" },
  { level: "Silver", min: 25, max: 50, color: "hsl(200, 10%, 65%)" },
  { level: "Gold", min: 50, max: 75, color: "hsl(45, 80%, 50%)" },
  { level: "Platinum", min: 75, max: 90, color: "hsl(200, 30%, 70%)" },
  { level: "Diamond", min: 90, max: 100, color: "hsl(280, 60%, 65%)" },
];

const TrustScore = () => {
  const overallScore = 4.9;
  const overallPercent = 89;
  const currentLevel = reputationLevels.find(l => overallPercent >= l.min && overallPercent < l.max) || reputationLevels[3];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-8">
        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Your Trust Score</h1>
        <p className="mb-8 text-muted-foreground font-body">
          Your trust score helps other users feel confident transacting with you.
        </p>

        {/* Main Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 rounded-xl border border-border bg-card p-8 text-center"
        >
          <div className="mx-auto mb-4 relative">
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-primary/10">
              <span className="font-heading text-5xl font-bold text-primary">{overallScore}</span>
            </div>
            <div className="absolute -right-2 top-0">
              <Award className="h-10 w-10" style={{ color: currentLevel.color }} />
            </div>
          </div>
          <p className="text-lg font-medium text-foreground">Excellent Trust Score</p>
          <p className="text-sm text-muted-foreground mb-3">Top 5% of users on Trustly</p>
          <Badge style={{ backgroundColor: `${currentLevel.color}20`, color: currentLevel.color }} className="border-0">
            <Award className="mr-1 h-3 w-3" /> {currentLevel.level} Level
          </Badge>
        </motion.div>

        {/* Reputation Levels */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">Reputation Levels</h2>
          <div className="flex items-center gap-1">
            {reputationLevels.map((level) => (
              <div key={level.level} className="flex-1 text-center">
                <div
                  className={`h-2 rounded-full transition-all ${overallPercent >= level.min ? "" : "opacity-30"}`}
                  style={{ backgroundColor: level.color }}
                />
                <p className="mt-1 text-xs text-muted-foreground">{level.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="mb-8 space-y-4">
          <h2 className="font-heading text-lg font-semibold text-foreground">Score Breakdown</h2>
          {trustFactors.map((factor, i) => (
            <motion.div
              key={factor.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <factor.icon className="h-5 w-5 text-primary" />
                  <div>
                    <span className="text-sm font-medium text-foreground">{factor.name}</span>
                    <p className="text-xs text-muted-foreground">{factor.desc}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">{factor.score}%</span>
              </div>
              <Progress value={factor.score} className="h-2" />
            </motion.div>
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
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 text-warm shrink-0" />
              <span>Maintain your account age — longer history builds more trust</span>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrustScore;
