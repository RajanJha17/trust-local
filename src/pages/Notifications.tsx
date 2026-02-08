import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, MessageCircle, Package, Star, DollarSign, Check } from "lucide-react";

const notifications = [
  { id: 1, type: "message", title: "New message from James K.", desc: "Is the MacBook still available?", time: "2m ago", read: false },
  { id: 2, type: "offer", title: "New offer on your listing", desc: "Mike offered $400 for Mid-Century Sofa", time: "1h ago", read: false },
  { id: 3, type: "review", title: "You received a review", desc: "Sarah left you a 5-star review", time: "3h ago", read: true },
  { id: 4, type: "sale", title: "Item sold!", desc: "Your Vintage Bike sold for $320", time: "1d ago", read: true },
  { id: 5, type: "system", title: "Verify your phone", desc: "Complete verification to boost trust score", time: "2d ago", read: true },
];

const iconMap: Record<string, React.ElementType> = {
  message: MessageCircle,
  offer: DollarSign,
  review: Star,
  sale: Package,
  system: Bell,
};

const Notifications = () => {
  const [notifs, setNotifs] = useState(notifications);

  const markAllRead = () => {
    setNotifs(notifs.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifs.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-2xl py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Notifications</h1>
            <p className="text-sm text-muted-foreground">{unreadCount} unread</p>
          </div>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllRead} className="gap-1.5">
              <Check className="h-4 w-4" /> Mark all read
            </Button>
          )}
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6 w-full">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="unread" className="flex-1">Unread</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-2">
            {notifs.map((notif) => {
              const Icon = iconMap[notif.type] || Bell;
              return (
                <div
                  key={notif.id}
                  className={`flex items-start gap-3 rounded-lg border border-border p-4 transition-colors ${
                    notif.read ? "bg-card" : "bg-primary/5"
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    notif.read ? "bg-secondary" : "bg-primary/10"
                  }`}>
                    <Icon className={`h-5 w-5 ${notif.read ? "text-muted-foreground" : "text-primary"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-foreground">{notif.title}</p>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{notif.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{notif.desc}</p>
                  </div>
                  {!notif.read && (
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  )}
                </div>
              );
            })}
          </TabsContent>

          <TabsContent value="unread" className="space-y-2">
            {notifs.filter(n => !n.read).map((notif) => {
              const Icon = iconMap[notif.type] || Bell;
              return (
                <div
                  key={notif.id}
                  className="flex items-start gap-3 rounded-lg border border-border bg-primary/5 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-foreground">{notif.title}</p>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{notif.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{notif.desc}</p>
                  </div>
                </div>
              );
            })}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Notifications;
