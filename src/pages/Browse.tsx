import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { SkeletonList } from "@/components/SkeletonCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { featuredListings, categories } from "@/lib/mockData";
import { SlidersHorizontal, Grid3X3, List, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Browse = () => {
  const [searchParams] = useSearchParams();
  const activeCat = searchParams.get("cat") || "all";
  const queryParam = searchParams.get("q") || "";
  const [view, setView] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [conditionFilter, setConditionFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState(queryParam);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [activeCat, queryParam]);

  let filtered = activeCat === "all"
    ? featuredListings
    : featuredListings.filter(
        (l) => l.category.toLowerCase().replace(/\s+/g, "-") === activeCat || l.category.toLowerCase().includes(activeCat)
      );

  // Price filter
  filtered = filtered.filter((l) => l.price >= priceRange[0] && l.price <= priceRange[1]);

  // Condition filter
  if (conditionFilter !== "all") {
    filtered = filtered.filter((l) => l.condition?.toLowerCase().replace(/\s+/g, "-") === conditionFilter);
  }

  // Search query filter
  if (searchQuery) {
    filtered = filtered.filter((l) =>
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort
  if (sortBy === "price-low") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "price-high") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "newest") filtered = [...filtered]; // already sorted
  if (sortBy === "rating") filtered = [...filtered].sort((a, b) => b.seller.rating - a.seller.rating);

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
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low → High</SelectItem>
                <SelectItem value="price-high">Price: High → Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setFiltersOpen(!filtersOpen)}>
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </Button>
            <div className="flex rounded-md border border-border">
              <button onClick={() => setView("grid")} className={`p-2 ${view === "grid" ? "bg-secondary text-foreground" : "text-muted-foreground"}`}>
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button onClick={() => setView("list")} className={`p-2 ${view === "list" ? "bg-secondary text-foreground" : "text-muted-foreground"}`}>
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-6 overflow-hidden"
            >
              <div className="rounded-xl border border-border bg-card p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-sm font-semibold text-foreground">Advanced Filters</h3>
                  <Button variant="ghost" size="sm" onClick={() => setFiltersOpen(false)}><X className="h-4 w-4" /></Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {/* Search */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Condition */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Condition</label>
                    <Select value={conditionFilter} onValueChange={setConditionFilter}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="all">All Conditions</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="refurbished">Refurbished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">
                      Price: ${priceRange[0]} – ${priceRange[1]}
                    </label>
                    <Slider
                      min={0}
                      max={5000}
                      step={50}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mt-3"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => {
                    setPriceRange([0, 5000]);
                    setConditionFilter("all");
                    setSearchQuery("");
                  }}>
                    Clear Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

        {loading ? (
          <SkeletonList count={6} />
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground font-body">No listings found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className={view === "grid" ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
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
