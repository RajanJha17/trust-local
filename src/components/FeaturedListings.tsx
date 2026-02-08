import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import { featuredListings } from "@/lib/mockData";

const FeaturedListings = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="mb-2 font-heading text-3xl font-bold text-foreground">
              Fresh Listings
            </h2>
            <p className="text-muted-foreground font-body">
              Just posted by verified community members
            </p>
          </div>
          <Link to="/browse">
            <Button variant="ghost" className="gap-1.5 text-primary">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredListings.map((listing, i) => (
            <ListingCard key={listing.id} listing={listing} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
