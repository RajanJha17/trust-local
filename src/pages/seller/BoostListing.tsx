import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Zap, Eye, TrendingUp, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const boostPlans = [
  { id: "basic", name: "Basic Boost", price: 5, duration: "3 days", views: "2x more views" },
  { id: "premium", name: "Premium Boost", price: 15, duration: "7 days", views: "5x more views", popular: true },
  { id: "ultra", name: "Ultra Boost", price: 30, duration: "14 days", views: "10x more views" },
];

const BoostListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const handleBoost = () => {
    toast({ title: "Listing boosted!", description: "Your listing is now getting more visibility." });
    navigate("/my-listings");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-2xl py-8">
        <Link to="/my-listings" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary font-body">
          <ArrowLeft className="h-4 w-4" /> Back to My Listings
        </Link>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <Zap className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Boost Your Listing</h1>
          <p className="mt-2 text-muted-foreground font-body">Get more visibility and sell faster</p>
        </div>

        {/* Benefits */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="text-center">
            <Eye className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-sm font-medium text-foreground">More Views</p>
          </div>
          <div className="text-center">
            <TrendingUp className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-sm font-medium text-foreground">Top Placement</p>
          </div>
          <div className="text-center">
            <CheckCircle className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-sm font-medium text-foreground">Faster Sales</p>
          </div>
        </div>

        {/* Plans */}
        <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-3">
          {boostPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl border p-4 transition-colors ${
                selectedPlan === plan.id ? "border-primary bg-primary/5" : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2 right-4 rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-3">
                <RadioGroupItem value={plan.id} id={plan.id} />
                <label htmlFor={plan.id} className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading font-semibold text-foreground">{plan.name}</p>
                      <p className="text-sm text-muted-foreground">{plan.duration} · {plan.views}</p>
                    </div>
                    <p className="font-heading text-xl font-bold text-primary">${plan.price}</p>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </RadioGroup>

        <Button
          onClick={handleBoost}
          className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90"
          size="lg"
        >
          <Zap className="mr-2 h-4 w-4" /> Boost Now for ${boostPlans.find(p => p.id === selectedPlan)?.price}
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default BoostListing;
