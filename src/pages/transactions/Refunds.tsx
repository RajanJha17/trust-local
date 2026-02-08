import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, CheckCircle } from "lucide-react";

const refunds = [
  { id: "1", item: "Headphones", amount: 89, status: "completed", date: "Jan 20, 2026", reason: "Item not received" },
  { id: "2", item: "Camera Lens", amount: 250, status: "processing", date: "Feb 6, 2026", reason: "Buyer returned item" },
];

const statusColors: Record<string, string> = {
  completed: "bg-success/10 text-success",
  processing: "bg-warm/10 text-warm",
};

const Refunds = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-8">
        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Refunds</h1>
        <p className="mb-8 text-muted-foreground font-body">Track your refund history</p>

        {refunds.length === 0 ? (
          <div className="py-16 text-center">
            <RefreshCw className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium text-foreground">No refunds</p>
            <p className="text-sm text-muted-foreground">You haven't received any refunds.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {refunds.map((refund) => (
              <div
                key={refund.id}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  refund.status === "completed" ? "bg-success/10" : "bg-warm/10"
                }`}>
                  {refund.status === "completed" ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : (
                    <RefreshCw className="h-5 w-5 text-warm" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground">{refund.item}</p>
                    <Badge className={`${statusColors[refund.status]} border-0 text-xs`}>
                      {refund.status.charAt(0).toUpperCase() + refund.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {refund.reason} · {refund.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-heading text-lg font-bold text-success">+${refund.amount}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 rounded-xl border border-border bg-secondary/30 p-6">
          <h2 className="mb-2 font-heading font-semibold text-foreground">Refund Policy</h2>
          <p className="text-sm text-muted-foreground font-body">
            Refunds are processed within 5-7 business days after approval. The amount will be credited back to your original payment method.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refunds;
