import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BadgeCheck, Star, MapPin, Calendar, Edit, Settings, Package, Heart, MessageCircle } from "lucide-react";
import { featuredListings } from "@/lib/mockData";

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
};

const Profile = () => {
  const userListings = featuredListings.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border bg-card p-6">
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

              <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {mockUser.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Joined {mockUser.joinDate}
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground font-body">{mockUser.bio}</p>

              {mockUser.verified && (
                <Badge className="bg-primary/10 text-primary border-0">✓ ID Verified</Badge>
              )}
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-border bg-card p-3 text-center">
                <p className="font-heading text-xl font-bold text-foreground">{mockUser.totalListings}</p>
                <p className="text-xs text-muted-foreground">Listings</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-3 text-center">
                <p className="font-heading text-xl font-bold text-foreground">{mockUser.totalSales}</p>
                <p className="text-xs text-muted-foreground">Sales</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-3 text-center">
                <p className="font-heading text-xl font-bold text-foreground">{mockUser.totalReviews}</p>
                <p className="text-xs text-muted-foreground">Reviews</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-4 space-y-2">
              <Link to="/my-listings" className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-secondary">
                <Package className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">My Listings</span>
              </Link>
              <Link to="/favorites" className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-secondary">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Favorites</span>
              </Link>
              <Link to="/reviews" className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-secondary">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">My Reviews</span>
              </Link>
              <Link to="/chat" className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-secondary">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Messages</span>
              </Link>
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
              {userListings.map((listing) => (
                <Link
                  key={listing.id}
                  to={`/listing/${listing.id}`}
                  className="flex gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-secondary/50"
                >
                  <img src={listing.image} alt={listing.title} className="h-20 w-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <p className="font-heading text-lg font-bold text-primary">${listing.price}</p>
                    <p className="line-clamp-1 text-sm font-medium text-foreground">{listing.title}</p>
                    <p className="text-xs text-muted-foreground">{listing.timeAgo}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="mb-4 font-heading text-xl font-bold text-foreground">Recent Reviews</h2>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold">J</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">John D.</p>
                        <div className="flex items-center gap-1 text-xs text-warm">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="ml-auto text-xs text-muted-foreground">2 weeks ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Great seller! Item was exactly as described and Sarah was very responsive. Would buy from again.</p>
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
