import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Star, MapPin, Calendar, MessageCircle, Flag } from "lucide-react";
import { featuredListings } from "@/lib/mockData";
import ListingCard from "@/components/ListingCard";

const mockUser = {
  id: "user123",
  name: "James Kim",
  location: "Manhattan, NY",
  joinDate: "January 2023",
  verified: true,
  trustScore: 4.8,
  totalReviews: 89,
  totalListings: 24,
  bio: "Tech enthusiast. Selling quality electronics and gadgets. Fast shipping, great prices!",
};

const PublicProfile = () => {
  const { userId } = useParams();
  const userListings = featuredListings.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                {mockUser.name[0]}
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
                <Badge className="mb-4 bg-primary/10 text-primary border-0">✓ ID Verified</Badge>
              )}

              <div className="space-y-2">
                <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageCircle className="h-4 w-4" /> Message
                </Button>
                <Button variant="outline" className="w-full gap-2 text-muted-foreground">
                  <Flag className="h-4 w-4" /> Report User
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-border bg-card p-3 text-center">
                <p className="font-heading text-xl font-bold text-foreground">{mockUser.totalListings}</p>
                <p className="text-xs text-muted-foreground">Listings</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-3 text-center">
                <p className="font-heading text-xl font-bold text-foreground">{mockUser.totalReviews}</p>
                <p className="text-xs text-muted-foreground">Reviews</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="mb-4 font-heading text-xl font-bold text-foreground">Active Listings</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {userListings.map((listing, i) => (
                  <ListingCard key={listing.id} listing={listing} index={i} />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mb-4 font-heading text-xl font-bold text-foreground">Reviews ({mockUser.totalReviews})</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold">A</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Anonymous Buyer</p>
                        <div className="flex items-center gap-1 text-xs text-warm">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className={`h-3 w-3 ${s <= 4 ? "fill-current" : ""}`} />
                          ))}
                        </div>
                      </div>
                      <span className="ml-auto text-xs text-muted-foreground">{i} month ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Excellent seller! Product was in perfect condition. Very professional.</p>
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

export default PublicProfile;
