import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, Crown, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    features: ["5 active listings", "Basic support", "Standard visibility"],
    current: true,
  },
  {
    id: "pro",
    name: "Pro Seller",
    price: 19,
    features: ["25 active listings", "Priority support", "Boosted visibility", "Analytics dashboard", "Featured badge"],
    popular: true,
  },
  {
    id: "business",
    name: "Business",
    price: 49,
    features: ["Unlimited listings", "24/7 support", "Maximum visibility", "Advanced analytics", "Verified business badge", "API access"],
  },
];

const Subscriptions = () => {
  const [selectedPlan, setSelectedPlan] = useState("free");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl py-8">
        <div className="mb-8 text-center">
          <Crown className="mx-auto mb-4 h-12 w-12 text-warm" />
          <h1 className="font-heading text-3xl font-bold text-foreground">Upgrade Your Selling</h1>
          <p className="mt-2 text-muted-foreground font-body">Choose a plan that fits your needs</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative ${selectedPlan === plan.id ? "border-primary ring-2 ring-primary/20" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most Popular
                </span>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-heading">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold font-heading">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.current
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : "Upgrade"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-secondary/30 p-6 text-center">
          <h2 className="mb-2 font-heading font-semibold text-foreground">Need something custom?</h2>
          <p className="mb-4 text-sm text-muted-foreground font-body">
            Contact us for enterprise plans with custom features and pricing.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscriptions;
