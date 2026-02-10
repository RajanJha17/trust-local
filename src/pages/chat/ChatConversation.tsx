import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Shield, MoreVertical, BadgeCheck, Image, Mic, DollarSign, Check, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const initialMessages = [
  { id: 1, sender: "them", text: "Hi! Is the MacBook Pro still available?", time: "10:30 AM", read: true },
  { id: 2, sender: "me", text: "Yes, it's still available! Are you interested?", time: "10:32 AM", read: true },
  { id: 3, sender: "them", text: "Yes! Can you tell me more about the condition?", time: "10:33 AM", read: true },
  { id: 4, sender: "me", text: "It's in excellent condition, barely used. I have the original box and charger as well. Battery health is at 96%.", time: "10:35 AM", read: true },
  { id: 5, sender: "them", text: "That sounds great! Would you accept $1,500?", time: "10:38 AM", read: false },
];

const quickReplies = [
  "Yes, it's available!",
  "Can we meet tomorrow?",
  "What's your best offer?",
  "I'll send photos",
];

const ChatConversation = () => {
  const { chatId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [messageList, setMessageList] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [showOfferUI, setShowOfferUI] = useState(false);
  const [offerAmount, setOfferAmount] = useState("");

  const handleSend = (text?: string) => {
    const msgText = text || newMessage;
    if (!msgText.trim()) return;
    
    setMessageList([...messageList, {
      id: messageList.length + 1,
      sender: "me",
      text: msgText,
      time: "Now",
      read: false,
    }]);
    setNewMessage("");

    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 2000 + Math.random() * 2000);
  };

  const handleOffer = () => {
    if (!offerAmount) return;
    handleSend(`💰 I'd like to make an offer: $${offerAmount}`);
    setShowOfferUI(false);
    setOfferAmount("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      {/* Chat Header */}
      <div className="border-b border-border bg-card px-4 py-3">
        <div className="container flex items-center gap-3">
          <Link to="/chat" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
              J
            </div>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-success" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="font-heading font-semibold text-foreground">James K.</span>
              <BadgeCheck className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Re: MacBook Pro 14" M3 Pro · Online</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover">
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>View Listing</DropdownMenuItem>
              <DropdownMenuItem>Block User</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container max-w-3xl space-y-3 py-4">
          {/* Safety Banner */}
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-primary/5 p-3 text-sm">
            <Shield className="h-4 w-4 text-primary shrink-0" />
            <span className="text-muted-foreground font-body">
              For your safety, keep all communication on Trustly. <a href="/safety-guidelines" className="text-primary hover:underline">Learn more</a>
            </span>
          </div>

          {messageList.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={i === messageList.length - 1 ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                msg.sender === "me"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}>
                <p className="text-sm font-body">{msg.text}</p>
                <div className={`mt-1 flex items-center gap-1 text-xs ${msg.sender === "me" ? "text-primary-foreground/60 justify-end" : "text-muted-foreground"}`}>
                  {msg.time}
                  {msg.sender === "me" && (
                    msg.read
                      ? <CheckCheck className="h-3 w-3 text-primary-foreground/80" />
                      : <Check className="h-3 w-3" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="rounded-2xl bg-secondary px-4 py-3">
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Quick Replies */}
      <div className="border-t border-border bg-card/50 px-4 py-2">
        <div className="container max-w-3xl flex gap-2 overflow-x-auto">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              onClick={() => handleSend(reply)}
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Offer UI */}
      {showOfferUI && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="border-t border-border bg-card px-4 py-3"
        >
          <div className="container max-w-3xl flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-muted-foreground" />
            <Input
              type="number"
              placeholder="Enter offer amount"
              value={offerAmount}
              onChange={(e) => setOfferAmount(e.target.value)}
              className="flex-1"
            />
            <Button size="sm" onClick={handleOffer} className="bg-success text-success-foreground hover:bg-success/90">
              Send Offer
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setShowOfferUI(false)}>Cancel</Button>
          </div>
        </motion.div>
      )}

      {/* Input */}
      <div className="border-t border-border bg-card p-4">
        <div className="container max-w-3xl flex items-center gap-2">
          <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground">
            <Image className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground" onClick={() => setShowOfferUI(!showOfferUI)}>
            <DollarSign className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button
            onClick={() => handleSend()}
            size="icon"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={!newMessage.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatConversation;
