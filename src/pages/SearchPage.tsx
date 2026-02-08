import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "@/lib/mockData";

const SearchPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/browse?q=${encodeURIComponent(query)}&loc=${encodeURIComponent(location)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Find What You Need
          </h1>
          <p className="mb-8 text-muted-foreground font-body">
            Search through thousands of local listings in your area
          </p>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="What are you looking for?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-12 pl-10"
                />
              </div>
              <div className="relative sm:w-48">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12 pl-10"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                Search
              </Button>
            </div>

            <Button variant="outline" size="sm" className="gap-1.5">
              <SlidersHorizontal className="h-4 w-4" /> Advanced Filters
            </Button>
          </form>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="mb-6 font-heading text-xl font-semibold text-foreground">Popular Categories</h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant="outline"
                className="h-auto justify-start py-4"
                onClick={() => navigate(`/browse?cat=${cat.id}`)}
              >
                <div className="text-left">
                  <p className="font-heading font-semibold">{cat.name}</p>
                  <p className="text-xs text-muted-foreground">{cat.count.toLocaleString()} listings</p>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
