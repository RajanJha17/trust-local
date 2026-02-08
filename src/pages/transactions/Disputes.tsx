import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AlertTriangle, MessageCircle, Clock, Plus } from "lucide-react";

const disputes = [
  { id: "1", item: "Desk Chair", amount: 142, status: "open", opened: "Jan 28, 2026", reason: "Item not as described", otherParty: "Lisa M." },
  { id: "2", item: "Headphones", amount: 89, status: "resolved", opened: "Jan 15, 2026", reason: "Item not received", otherParty: "Tom B." },
];

const statusColors: Record<string, string> = {
  open: "bg-warm/10 text-warm",
  resolved: "bg-success/10 text-success",
  escalated: "bg-destructive/10 text-destructive",
};

const Disputes = () => {
  const openDisputes = disputes.filter(d => d.status === "open");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-8">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Disputes</h1>
            <p className="text-sm text-muted-foreground">{openDisputes.length} open dispute(s)</p>
          </div>
          <Button className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4" /> Open Dispute
          </Button>
        </div>

        {/* Info Banner */}
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-border bg-secondary/30 p-4">
          <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">How disputes work</p>
            <p className="text-xs text-muted-foreground">
              Disputes are reviewed within 48 hours. Keep all communication on Trustly to help our team investigate.
            </p>
          </div>
        </div>

        {disputes.length === 0 ? (
          <div className="py-16 text-center">
            <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium text-foreground">No disputes</p>
            <p className="text-sm text-muted-foreground">You haven't filed any disputes.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {disputes.map((dispute) => (
              <div
                key={dispute.id}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground">{dispute.item}</p>
                    <Badge className={`${statusColors[dispute.status]} border-0 text-xs`}>
                      {dispute.status.charAt(0).toUpperCase() + dispute.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {dispute.reason} · With {dispute.otherParty} · Opened {dispute.opened}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-heading font-bold text-foreground">${dispute.amount}</p>
                  <Button variant="ghost" size="sm" className="gap-1 text-primary">
                    <MessageCircle className="h-3 w-3" /> View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Disputes;
