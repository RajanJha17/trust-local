import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield, MessageCircle, Star, AlertTriangle, CheckCircle } from "lucide-react";

const TransactionDetail = () => {
  const { id } = useParams();

  // Mock transaction data
  const transaction = {
    id,
    type: "purchase",
    item: "MacBook Pro 14\" M3 Pro",
    amount: 1600,
    serviceFee: 80,
    total: 1680,
    status: "completed",
    date: "February 5, 2026",
    seller: { name: "James K.", verified: true },
    paymentMethod: "Visa •••• 4242",
    escrowStatus: "released",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
  };

  const timeline = [
    { date: "Feb 5", event: "Payment released to seller", completed: true },
    { date: "Feb 4", event: "Item received & confirmed", completed: true },
    { date: "Feb 3", event: "Seller shipped item", completed: true },
    { date: "Feb 1", event: "Payment held in escrow", completed: true },
    { date: "Feb 1", event: "Order placed", completed: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-8">
        <Link to="/transactions" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary font-body">
          <ArrowLeft className="h-4 w-4" /> Back to transactions
        </Link>

        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Transaction #{id}</h1>
            <p className="text-sm text-muted-foreground">{transaction.date}</p>
          </div>
          <Badge className="bg-success/10 text-success border-0">Completed</Badge>
        </div>

        {/* Item Summary */}
        <div className="mb-6 rounded-xl border border-border bg-card p-6">
          <div className="flex gap-4">
            <img src={transaction.image} alt={transaction.item} className="h-20 w-20 rounded-lg object-cover" />
            <div className="flex-1">
              <h2 className="font-heading text-lg font-semibold text-foreground">{transaction.item}</h2>
              <p className="text-sm text-muted-foreground">Seller: {transaction.seller.name}</p>
              <p className="mt-2 font-heading text-xl font-bold text-primary">${transaction.total}</p>
            </div>
          </div>
        </div>

        {/* Payment Breakdown */}
        <div className="mb-6 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 font-heading font-semibold text-foreground">Payment Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Item price</span>
              <span className="text-foreground">${transaction.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Escrow fee</span>
              <span className="text-foreground">${transaction.serviceFee}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-semibold">
              <span className="text-foreground">Total paid</span>
              <span className="text-foreground">${transaction.total}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Payment method</span>
              <span>{transaction.paymentMethod}</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-6 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 font-heading font-semibold text-foreground">Order Timeline</h3>
          <div className="space-y-4">
            {timeline.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{step.event}</p>
                  <p className="text-xs text-muted-foreground">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link to={`/leave-review/${id}`} className="flex-1">
            <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Star className="h-4 w-4" /> Leave Review
            </Button>
          </Link>
          <Link to="/chat/1">
            <Button variant="outline" className="gap-2">
              <MessageCircle className="h-4 w-4" /> Message Seller
            </Button>
          </Link>
          <Link to="/disputes">
            <Button variant="outline" className="gap-2 text-destructive hover:text-destructive">
              <AlertTriangle className="h-4 w-4" /> Report Issue
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TransactionDetail;
