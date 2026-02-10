import ListingCard from "@/components/ListingCard";
import { featuredListings } from "@/lib/mockData";
import type { Listing } from "@/lib/mockData";

interface SimilarListingsProps {
  currentId: string;
  category: string;
}

const SimilarListings = ({ currentId, category }: SimilarListingsProps) => {
  const similar = featuredListings
    .filter((l) => l.id !== currentId)
    .slice(0, 3);

  if (similar.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 font-heading text-xl font-bold text-foreground">Similar Listings</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {similar.map((listing, i) => (
          <ListingCard key={listing.id} listing={listing} index={i} />
        ))}
      </div>
    </section>
  );
};

export default SimilarListings;
