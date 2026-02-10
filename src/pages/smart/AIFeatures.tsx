import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wand2, Tag, ImageIcon, AlertTriangle, DollarSign, FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";

const aiFeatures = [
  {
    icon: Wand2,
    title: "AI Listing Generator",
    desc: "Auto-generate compelling titles and descriptions from your photos",
    status: "available",
  },
  {
    icon: Tag,
    title: "Smart Auto-Tags",
    desc: "Automatic category, condition, and keyword tagging",
    status: "available",
  },
  {
    icon: DollarSign,
    title: "Price Recommendation",
    desc: "ML-based pricing based on similar listings in your area",
    status: "available",
  },
  {
    icon: ImageIcon,
    title: "Image Quality Score",
    desc: "Get tips to improve your listing photos for better visibility",
    status: "beta",
  },
  {
    icon: AlertTriangle,
    title: "Scam Risk Indicator",
    desc: "AI-powered detection of suspicious listings and users",
    status: "available",
  },
  {
    icon: FileText,
    title: "AI Auto-Reply Drafts",
    desc: "Smart reply suggestions based on conversation context",
    status: "beta",
  },
  {
    icon: Sparkles,
    title: "Personalized Feed",
    desc: "AI-curated listings based on your interests and browsing history",
    status: "available",
  },
  {
    icon: Zap,
    title: "AI Listing Summary",
    desc: "One-click summary of long listing descriptions",
    status: "coming",
  },
];

const AIFeatures = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container max-w-4xl py-12">
      <div className="mb-10 text-center">
        <Sparkles className="mx-auto mb-4 h-12 w-12 text-accent" />
        <h1 className="mb-3 font-heading text-3xl font-bold text-foreground">Smart Features</h1>
        <p className="text-muted-foreground font-body">AI-powered tools to help you buy and sell smarter</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {aiFeatures.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading text-sm font-bold text-foreground">{feature.title}</h3>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${feature.status === "beta" ? "bg-warm/10 text-warm" : feature.status === "coming" ? "bg-muted" : "bg-success/10 text-success"}`}
                    >
                      {feature.status === "coming" ? "Coming Soon" : feature.status === "beta" ? "Beta" : "Live"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-body">{feature.desc}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
          <Sparkles className="h-4 w-4" /> Try AI Features Now
        </Button>
      </div>
    </main>
    <Footer />
  </div>
);

export default AIFeatures;
