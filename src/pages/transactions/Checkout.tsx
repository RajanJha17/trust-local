import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, CreditCard, ArrowLeft, BadgeCheck } from "lucide-react";
import { featuredListings } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const { listingId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const listing = featuredListings.find(l => l.id === listingId) || featuredListings[0];
  const serviceFee = Math.round(listing.price * 0.05);
  const total = listing.price + serviceFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Payment successful!", description: "Your purchase is protected by escrow." });
    navigate("/transactions");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl py-8">
        <Link to={`/listing/${listingId}`} className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary font-body">
          <ArrowLeft className="h-4 w-4" /> Back to listing
        </Link>

        <h1 className="mb-8 font-heading text-2xl font-bold text-foreground">Secure Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Escrow Notice */}
              <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <Shield className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Protected by Trustly Escrow</p>
                  <p className="text-xs text-muted-foreground">Your payment is held securely until you confirm receipt of the item.</p>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <Label className="mb-3 block font-heading">Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <RadioGroupItem value="card" id="card" />
                    <label htmlFor="card" className="flex flex-1 items-center gap-2 cursor-pointer">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">Credit or Debit Card</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <RadioGroupItem value="bank" id="bank" />
                    <label htmlFor="bank" className="flex flex-1 items-center gap-2 cursor-pointer">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">Bank Transfer</span>
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {/* Card Details */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName" className="font-heading">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="font-heading">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="font-heading">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc" className="font-heading">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Lock className="mr-2 h-4 w-4" /> Pay ${total.toLocaleString()}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">Order Summary</h2>

              <div className="mb-4 flex gap-3">
                <img src={listing.image} alt={listing.title} className="h-16 w-16 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-medium text-foreground">{listing.title}</p>
                  <p className="text-xs text-muted-foreground">{listing.location}</p>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {listing.seller.name[0]}
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Seller: </span>
                  <span className="font-medium text-foreground">{listing.seller.name}</span>
                </div>
                {listing.seller.verified && <BadgeCheck className="h-4 w-4 text-primary" />}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Item price</span>
                  <span className="text-foreground">${listing.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Escrow fee (5%)</span>
                  <span className="text-foreground">${serviceFee}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-heading">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-lg font-bold text-primary">${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
