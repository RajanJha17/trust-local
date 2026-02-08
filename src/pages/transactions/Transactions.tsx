import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, ArrowUpRight, ArrowDownRight } from "lucide-react";

const transactions = [
  { id: "1", type: "purchase", item: "MacBook Pro 14\"", amount: 1680, status: "completed", date: "Feb 5, 2026", seller: "James K." },
  { id: "2", type: "sale", item: "Vintage Bike", amount: 304, status: "completed", date: "Feb 3, 2026", buyer: "Mike T." },
  { id: "3", type: "purchase", item: "Photography Services", amount: 157, status: "in_escrow", date: "Feb 1, 2026", seller: "Alex R." },
  { id: "4", type: "sale", item: "Desk Chair", amount: 142, status: "disputed", date: "Jan 28, 2026", buyer: "Lisa M." },
];

const statusColors: Record<string, string> = {
  completed: "bg-success/10 text-success",
  in_escrow: "bg-warm/10 text-warm",
  disputed: "bg-destructive/10 text-destructive",
  refunded: "bg-muted text-muted-foreground",
};

const Transactions = () => {
  const purchases = transactions.filter(t => t.type === "purchase");
  const sales = transactions.filter(t => t.type === "sale");

  const TransactionRow = ({ tx }: { tx: typeof transactions[0] }) => (
    <Link
      to={`/transaction/${tx.id}`}
      className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary/50"
    >
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
        tx.type === "sale" ? "bg-success/10" : "bg-primary/10"
      }`}>
        {tx.type === "sale" ? (
          <ArrowDownRight className="h-5 w-5 text-success" />
        ) : (
          <ArrowUpRight className="h-5 w-5 text-primary" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{tx.item}</p>
        <p className="text-xs text-muted-foreground">
          {tx.type === "sale" ? `To: ${tx.buyer}` : `From: ${tx.seller}`} · {tx.date}
        </p>
      </div>
      <div className="text-right">
        <p className={`font-heading text-lg font-bold ${tx.type === "sale" ? "text-success" : "text-foreground"}`}>
          {tx.type === "sale" ? "+" : "-"}${tx.amount}
        </p>
        <Badge className={`${statusColors[tx.status]} border-0 text-xs`}>
          {tx.status === "in_escrow" ? "In Escrow" : tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
        </Badge>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-8">
        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Transaction History</h1>
        <p className="mb-8 text-muted-foreground font-body">View all your purchases and sales</p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All ({transactions.length})</TabsTrigger>
            <TabsTrigger value="purchases">Purchases ({purchases.length})</TabsTrigger>
            <TabsTrigger value="sales">Sales ({sales.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {transactions.map((tx) => <TransactionRow key={tx.id} tx={tx} />)}
          </TabsContent>

          <TabsContent value="purchases" className="space-y-3">
            {purchases.map((tx) => <TransactionRow key={tx.id} tx={tx} />)}
          </TabsContent>

          <TabsContent value="sales" className="space-y-3">
            {sales.map((tx) => <TransactionRow key={tx.id} tx={tx} />)}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;
