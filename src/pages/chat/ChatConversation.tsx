import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Shield, MoreVertical, BadgeCheck } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const messages = [
  { id: 1, sender: "them", text: "Hi! Is the MacBook Pro still available?", time: "10:30 AM" },
  { id: 2, sender: "me", text: "Yes, it's still available! Are you interested?", time: "10:32 AM" },
  { id: 3, sender: "them", text: "Yes! Can you tell me more about the condition?", time: "10:33 AM" },
  { id: 4, sender: "me", text: "It's in excellent condition, barely used. I have the original box and charger as well. Battery health is at 96%.", time: "10:35 AM" },
  { id: 5, sender: "them", text: "That sounds great! Would you accept $1,500?", time: "10:38 AM" },
];

const ChatConversation = () => {
  const { chatId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [messageList, setMessageList] = useState(messages);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    setMessageList([...messageList, {
      id: messageList.length + 1,
      sender: "me",
      text: newMessage,
      time: "Now"
    }]);
    setNewMessage("");
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
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
            J
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="font-heading font-semibold text-foreground">James K.</span>
              <BadgeCheck className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Re: MacBook Pro 14" M3 Pro</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
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
        <div className="container max-w-3xl space-y-4 py-4">
          {/* Safety Banner */}
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-primary/5 p-3 text-sm">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground font-body">
              For your safety, keep all communication on Trustly. <a href="/safety-guidelines" className="text-primary hover:underline">Learn more</a>
            </span>
          </div>

          {messageList.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                msg.sender === "me"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}>
                <p className="text-sm font-body">{msg.text}</p>
                <p className={`mt-1 text-xs ${msg.sender === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border bg-card p-4">
        <form onSubmit={handleSend} className="container max-w-3xl flex gap-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatConversation;
