import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { Button } from "@/components/ui/button";
import { featuredListings, categories } from "@/lib/mockData";
import { SlidersHorizontal, Grid3X3, List } from "lucide-react";

const Browse = () => {
  const [searchParams] = useSearchParams();
  const activeCat = searchParams.get("cat") || "all";
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = activeCat === "all"
    ? featuredListings
    : featuredListings.filter(
        (l) => l.category.toLowerCase().replace(/\s+/g, "-") === activeCat || l.category.toLowerCase().includes(activeCat)
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">
              {activeCat === "all" ? "All Listings" : categories.find(c => c.id === activeCat)?.name || "Browse"}
            </h1>
            <p className="text-sm text-muted-foreground font-body">
              {filtered.length} results nearby
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1.5">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </Button>
            <div className="flex rounded-md border border-border">
              <button
                onClick={() => setView("grid")}
                className={`p-2 ${view === "grid" ? "bg-secondary text-foreground" : "text-muted-foreground"}`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 ${view === "list" ? "bg-secondary text-foreground" : "text-muted-foreground"}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Chips */}
        <div className="mb-6 flex flex-wrap gap-2">
          <a href="/browse">
            <Button variant={activeCat === "all" ? "default" : "outline"} size="sm">All</Button>
          </a>
          {categories.map((cat) => (
            <a key={cat.id} href={`/browse?cat=${cat.id}`}>
              <Button variant={activeCat === cat.id ? "default" : "outline"} size="sm">
                {cat.name}
              </Button>
            </a>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground font-body">No listings found in this category yet.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((listing, i) => (
              <ListingCard key={listing.id} listing={listing} index={i} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
