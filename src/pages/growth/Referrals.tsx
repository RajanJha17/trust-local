import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Gift, Users, Copy, Share2, TrendingUp, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const referralStats = [
  { label: "Total Referrals", value: "24", icon: Users },
  { label: "Active Users", value: "18", icon: TrendingUp },
  { label: "Credits Earned", value: "$120", icon: DollarSign },
];

const rewards = [
  { tier: "5 Referrals", reward: "$25 credit", achieved: true },
  { tier: "10 Referrals", reward: "$50 credit", achieved: true },
  { tier: "25 Referrals", reward: "Free Boost", achieved: false },
  { tier: "50 Referrals", reward: "Premium 1 month", achieved: false },
];

const Referrals = () => {
  const { toast } = useToast();
  const referralCode = "TRUSTLY-SARAH24";
  const referralLink = `https://trustly.app/join?ref=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    toast({ title: "Link copied!", description: "Share it with friends to earn rewards." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-8">
        <div className="mb-8 text-center">
          <Gift className="mx-auto mb-4 h-12 w-12 text-accent" />
          <h1 className="mb-2 font-heading text-3xl font-bold text-foreground">Invite Friends, Earn Rewards</h1>
          <p className="text-muted-foreground font-body">Share Trustly with friends and earn credits for every signup.</p>
        </div>

        {/* Referral Link */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <label className="mb-2 block text-sm font-medium text-foreground">Your Referral Link</label>
            <div className="flex gap-2">
              <Input value={referralLink} readOnly className="flex-1 text-sm" />
              <Button onClick={handleCopy} variant="outline" className="gap-1.5">
                <Copy className="h-4 w-4" /> Copy
              </Button>
              <Button className="gap-1.5 bg-primary text-primary-foreground">
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Code: {referralCode}</p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {referralStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="flex items-center gap-3 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reward Tiers */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Reward Tiers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {rewards.map((reward, i) => (
              <motion.div
                key={reward.tier}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center justify-between rounded-lg border p-4 ${
                  reward.achieved ? "border-success/30 bg-success/5" : "border-border bg-card"
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{reward.tier}</p>
                  <p className="text-xs text-muted-foreground">{reward.reward}</p>
                </div>
                {reward.achieved ? (
                  <span className="text-xs font-bold text-success">✓ Achieved</span>
                ) : (
                  <span className="text-xs text-muted-foreground">Locked</span>
                )}
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Referrals;
