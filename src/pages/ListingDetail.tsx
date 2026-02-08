import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredListings } from "@/lib/mockData";
import {
  MapPin, Star, BadgeCheck, Heart, Share2, Flag,
  MessageCircle, Shield, ArrowLeft, Clock,
} from "lucide-react";

const ListingDetail = () => {
  const { id } = useParams();
  const listing = featuredListings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p className="text-lg text-muted-foreground">Listing not found.</p>
          <Link to="/browse">
            <Button className="mt-4">Back to Browse</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <Link to="/browse" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary font-body">
          <ArrowLeft className="h-4 w-4" /> Back to listings
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl border border-border">
              <img src={listing.image} alt={listing.title} className="aspect-video w-full object-cover" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Actions */}
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-heading text-3xl font-bold text-foreground">
                {listing.price === 0 ? "Free" : `$${listing.price.toLocaleString()}`}
                {listing.category === "Rentals" && <span className="text-base font-normal text-muted-foreground">/mo</span>}
              </p>
              <h1 className="mt-2 font-body text-lg font-medium text-foreground">{listing.title}</h1>

              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {listing.location}
                <span className="mx-1">·</span>
                <Clock className="h-4 w-4" /> {listing.timeAgo}
              </div>

              {listing.condition && (
                <Badge variant="secondary" className="mt-3">{listing.condition}</Badge>
              )}

              <div className="mt-6 space-y-3">
                <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  <MessageCircle className="h-4 w-4" /> Message Seller
                </Button>
                <Button variant="outline" className="w-full gap-2" size="lg">
                  <Shield className="h-4 w-4" /> Buy with Escrow
                </Button>
              </div>

              <div className="mt-4 flex gap-2">
                <Button variant="ghost" size="sm" className="flex-1 gap-1 text-muted-foreground">
                  <Heart className="h-4 w-4" /> Save
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 gap-1 text-muted-foreground">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 gap-1 text-muted-foreground">
                  <Flag className="h-4 w-4" /> Report
                </Button>
              </div>
            </div>

            {/* Seller */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-heading text-sm font-semibold text-foreground">Seller</h3>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {listing.seller.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-body text-sm font-medium text-foreground">
                    {listing.seller.name}
                    {listing.seller.verified && <BadgeCheck className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-warm">
                    <Star className="h-3 w-3 fill-current" /> {listing.seller.rating} rating
                  </div>
                </div>
              </div>
              {listing.seller.verified && (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/5 p-3 text-xs text-primary">
                  <Shield className="h-4 w-4" />
                  <span className="font-body">Identity verified · Trusted seller</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">Description</h2>
              <p className="text-sm leading-relaxed text-muted-foreground font-body">{listing.description}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListingDetail;
