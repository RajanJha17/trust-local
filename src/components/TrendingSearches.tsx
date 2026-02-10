import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const trending = [
  "iPhone 15 Pro", "Standing Desk", "Vintage Camera", "Electric Scooter",
  "Gaming PC", "Studio Apartment", "Dog Walker", "Mountain Bike",
];

const TrendingSearches = () => (
  <section className="py-12">
    <div className="container">
      <div className="mb-6 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-accent" />
        <h2 className="font-heading text-xl font-bold text-foreground">Trending Searches</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {trending.map((term, i) => (
          <motion.div
            key={term}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
          >
            <Link
              to={`/browse?q=${encodeURIComponent(term)}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:shadow-md"
            >
              <TrendingUp className="h-3 w-3 text-accent" />
              {term}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrendingSearches;
