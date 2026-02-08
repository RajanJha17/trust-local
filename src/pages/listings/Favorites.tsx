import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { featuredListings } from "@/lib/mockData";
import { Heart } from "lucide-react";

const Favorites = () => {
  const favorites = featuredListings.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Favorites</h1>
        <p className="mb-8 text-muted-foreground font-body">{favorites.length} saved items</p>

        {favorites.length === 0 ? (
          <div className="py-20 text-center">
            <Heart className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium text-foreground">No favorites yet</p>
            <p className="text-sm text-muted-foreground">Save listings you're interested in to see them here.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((listing, i) => (
              <ListingCard key={listing.id} listing={listing} index={i} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
