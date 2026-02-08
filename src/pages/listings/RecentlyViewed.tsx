import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { featuredListings } from "@/lib/mockData";
import { Clock } from "lucide-react";

const RecentlyViewed = () => {
  const recentItems = featuredListings.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Recently Viewed</h1>
        <p className="mb-8 text-muted-foreground font-body">Items you've browsed recently</p>

        {recentItems.length === 0 ? (
          <div className="py-20 text-center">
            <Clock className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium text-foreground">No recent views</p>
            <p className="text-sm text-muted-foreground">Start browsing to see your recently viewed items here.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recentItems.map((listing, i) => (
              <ListingCard key={listing.id} listing={listing} index={i} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RecentlyViewed;
