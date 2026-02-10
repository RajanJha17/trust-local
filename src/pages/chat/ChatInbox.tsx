import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Pin, Volume2, VolumeX, Archive } from "lucide-react";
import { motion } from "framer-motion";

const conversations = [
  { id: "1", name: "James K.", lastMessage: "Is the MacBook still available?", time: "2m ago", unread: 2, avatar: "J", listing: "MacBook Pro 14\"", pinned: true, online: true },
  { id: "2", name: "Sarah M.", lastMessage: "Great, I can meet tomorrow at 3pm", time: "1h ago", unread: 0, avatar: "S", listing: "Mid-Century Sofa", pinned: false, online: true },
  { id: "3", name: "Park Realty", lastMessage: "The apartment is still available. Would you like to schedule a viewing?", time: "3h ago", unread: 1, avatar: "P", listing: "2BR Apartment", pinned: false, online: false },
  { id: "4", name: "Mike T.", lastMessage: "Thanks for the quick sale!", time: "1d ago", unread: 0, avatar: "M", listing: "Vintage Bike", pinned: false, online: false },
  { id: "5", name: "Alex R.", lastMessage: "I'll send you the portfolio link", time: "2d ago", unread: 0, avatar: "A", listing: "Photography Services", pinned: false, online: true },
];

const ChatInbox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "pinned">("all");

  let filteredConversations = conversations.filter(
    (c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           c.listing.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filter === "unread") filteredConversations = filteredConversations.filter(c => c.unread > 0);
  if (filter === "pinned") filteredConversations = filteredConversations.filter(c => c.pinned);

  // Sort: pinned first
  filteredConversations.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Messages</h1>
            <p className="text-sm text-muted-foreground font-body">{conversations.length} conversations</p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-4 flex gap-2">
          {(["all", "unread", "pinned"] as const).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className="capitalize"
            >
              {f}
            </Button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Conversations */}
        <div className="space-y-2">
          {filteredConversations.length === 0 ? (
            <div className="py-16 text-center">
              <MessageCircle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-lg font-medium text-foreground">No messages</p>
              <p className="text-sm text-muted-foreground">Start a conversation by messaging a seller.</p>
            </div>
          ) : (
            filteredConversations.map((conv, i) => (
              <motion.div
                key={conv.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Link
                  to={`/chat/${conv.id}`}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:bg-secondary/50 hover:shadow-sm"
                >
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                      {conv.avatar}
                    </div>
                    {conv.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-success" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <p className={`font-heading text-sm font-semibold text-foreground ${conv.unread > 0 ? "" : ""}`}>{conv.name}</p>
                        {conv.pinned && <Pin className="h-3 w-3 text-muted-foreground" />}
                      </div>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-0.5">Re: {conv.listing}</p>
                    <p className={`truncate text-sm ${conv.unread > 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <Badge className="bg-accent text-accent-foreground border-0">{conv.unread}</Badge>
                  )}
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatInbox;
