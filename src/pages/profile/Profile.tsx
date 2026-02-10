import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BadgeCheck, Star, MapPin, Calendar, Edit, Package, Heart, MessageCircle, Shield, Award, TrendingUp } from "lucide-react";
import { featuredListings } from "@/lib/mockData";
import { motion } from "framer-motion";

const mockUser = {
  name: "Sarah Mitchell",
  email: "sarah@example.com",
  location: "Brooklyn, NY",
  joinDate: "March 2024",
  avatar: "",
  verified: true,
  trustScore: 4.9,
  totalReviews: 47,
  totalListings: 12,
  totalSales: 34,
  bio: "Passionate about sustainable living and finding great homes for preloved items. Quick responses and flexible meetups!",
  reputationLevel: "Gold",
  responseRate: 98,
  responseTime: "< 1 hour",
};

const reputationLevels = [
  { level: "Bronze", min: 0, color: "hsl(30, 40%, 50%)" },
  { level: "Silver", min: 10, color: "hsl(200, 10%, 65%)" },
  { level: "Gold", min: 25, color: "hsl(45, 80%, 50%)" },
  { level: "Platinum", min: 50, color: "hsl(200, 30%, 70%)" },
  { level: "Diamond", min: 100, color: "hsl(280, 60%, 65%)" },
];

const Profile = () => {
  const userListings = featuredListings.slice(0, 3);
  const currentLevel = reputationLevels.find(l => l.level === mockUser.reputationLevel)!;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {mockUser.name[0]}
                </div>
                <Link to="/profile/edit">
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Edit className="h-4 w-4" /> Edit
                  </Button>
                </Link>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <h1 className="font-heading text-xl font-bold text-foreground">{mockUser.name}</h1>
                  {mockUser.verified && <BadgeCheck className="h-5 w-5 text-primary" />}
                </div>
                <div className="mt-1 flex items-center gap-1 text-sm text-warm">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">{mockUser.trustScore}</span>
                  <span className="text-muted-foreground">({mockUser.totalReviews} reviews)</span>
                </div>
              </div>

              {/* Reputation Level */}
              <div className="mb-4 flex items-center gap-2 rounded-lg border border-border p-3">
                <Award className="h-5 w-5" style={{ color: currentLevel.color }} />
                <div>
                  <p className="text-sm font-semibold text-foreground">{currentLevel.level} Seller</p>
                  <p className="text-xs text-muted-foreground">{mockUser.totalSales} completed sales</p>
                </div>
              </div>

              <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {mockUser.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Joined {mockUser.joinDate}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" /> {mockUser.responseRate}% response rate · {mockUser.responseTime}
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground font-body">{mockUser.bio}</p>

              <div className="flex gap-2">
                {mockUser.verified && (
                  <Badge className="bg-primary/10 text-primary border-0">✓ ID Verified</Badge>
                )}
                <Badge className="border-0" style={{ backgroundColor: `${currentLevel.color}20`, color: currentLevel.color }}>
                  <Award className="mr-1 h-3 w-3" /> {currentLevel.level}
                </Badge>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { value: mockUser.totalListings, label: "Listings" },
                { value: mockUser.totalSales, label: "Sales" },
                { value: mockUser.totalReviews, label: "Reviews" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-card p-3 text-center">
                  <p className="font-heading text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-4 space-y-2">
              {[
                { to: "/my-listings", icon: Package, label: "My Listings" },
                { to: "/favorites", icon: Heart, label: "Favorites" },
                { to: "/reviews", icon: Star, label: "My Reviews" },
                { to: "/trust-score", icon: Shield, label: "Trust Score" },
                { to: "/chat", icon: MessageCircle, label: "Messages" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-secondary">
                  <link.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-heading text-xl font-bold text-foreground">My Active Listings</h2>
              <Link to="/my-listings">
                <Button variant="ghost" size="sm" className="text-primary">View all</Button>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {userListings.map((listing, i) => (
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/listing/${listing.id}`}
                    className="flex gap-3 rounded-lg border border-border bg-card p-3 transition-all hover:bg-secondary/50 hover:shadow-sm"
                  >
                    <img src={listing.image} alt={listing.title} className="h-20 w-20 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="font-heading text-lg font-bold text-primary">${listing.price}</p>
                      <p className="line-clamp-1 text-sm font-medium text-foreground">{listing.title}</p>
                      <p className="text-xs text-muted-foreground">{listing.timeAgo}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Activity Timeline */}
            <div className="mt-8">
              <h2 className="mb-4 font-heading text-xl font-bold text-foreground">Recent Activity</h2>
              <div className="space-y-4 relative before:absolute before:left-[15px] before:top-0 before:h-full before:w-px before:bg-border">
                {[
                  { action: "Listed", item: "MacBook Pro 14\"", time: "2 hours ago", icon: Package },
                  { action: "Sold", item: "Vintage Camera", time: "1 day ago", icon: TrendingUp },
                  { action: "Received review", item: "5 stars from John D.", time: "2 days ago", icon: Star },
                  { action: "Message sent", item: "Re: Standing Desk", time: "3 days ago", icon: MessageCircle },
                ].map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 pl-1"
                  >
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.item} · {activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-8">
              <h2 className="mb-4 font-heading text-xl font-bold text-foreground">Recent Reviews</h2>
              <div className="space-y-4">
                {[
                  { name: "John D.", rating: 5, text: "Great seller! Item was exactly as described and Sarah was very responsive.", time: "2 weeks ago" },
                  { name: "Lisa M.", rating: 5, text: "Fast shipping and item was in perfect condition. Highly recommend!", time: "3 weeks ago" },
                ].map((review, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold">{review.name[0]}</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{review.name}</p>
                        <div className="flex items-center gap-1 text-xs text-warm">
                          {Array.from({ length: review.rating }).map((_, s) => (
                            <Star key={s} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="ml-auto text-xs text-muted-foreground">{review.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
