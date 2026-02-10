import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Phone, Mail, FileText, Eye, Lock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const safetyFeatures = [
  { icon: Shield, title: "Escrow Protection", desc: "Payments held safely until both parties confirm" },
  { icon: Eye, title: "Verified Identities", desc: "ID verification for trusted transactions" },
  { icon: Lock, title: "Encrypted Chat", desc: "All messages are end-to-end encrypted" },
  { icon: Users, title: "Community Moderation", desc: "24/7 monitoring by our trust & safety team" },
];

const SafetyCenter = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container max-w-4xl py-12">
      <div className="mb-10 text-center">
        <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h1 className="mb-3 font-heading text-3xl font-bold text-foreground">Safety Center</h1>
        <p className="text-muted-foreground font-body">Your safety is our #1 priority. Learn how we protect you.</p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {safetyFeatures.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warm" /> Report an Issue
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground font-body">If you encounter suspicious activity, scams, or safety concerns, report them immediately.</p>
          <div className="flex flex-wrap gap-2">
            <Link to="/contact"><Button className="gap-1.5"><FileText className="h-4 w-4" /> File a Report</Button></Link>
            <Button variant="outline" className="gap-1.5"><Phone className="h-4 w-4" /> Emergency: 911</Button>
            <Button variant="outline" className="gap-1.5"><Mail className="h-4 w-4" /> safety@trustly.app</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Active Fraud Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { title: "Fake Payment Screenshots", desc: "Scammers sending fake payment confirmation images", severity: "high" },
            { title: "Phishing Links in Chat", desc: "Suspicious links asking for login credentials", severity: "critical" },
            { title: "Overpayment Scam", desc: "Buyers claiming to overpay and requesting refund difference", severity: "medium" },
          ].map((alert) => (
            <div key={alert.title} className="flex items-start gap-3 rounded-lg border border-border p-4">
              <AlertTriangle className={`mt-0.5 h-5 w-5 shrink-0 ${alert.severity === "critical" ? "text-destructive" : alert.severity === "high" ? "text-warm" : "text-muted-foreground"}`} />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">{alert.title}</p>
                  <Badge variant={alert.severity === "critical" ? "destructive" : "secondary"} className="text-xs">{alert.severity}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{alert.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
    <Footer />
  </div>
);

export default SafetyCenter;
