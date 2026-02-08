import { motion } from "framer-motion";
import { Search, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Community marketplace" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container relative z-10 flex min-h-[520px] flex-col items-start justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <Shield className="h-4 w-4" />
            Trust-First Marketplace
          </div>

          <h1 className="mb-4 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Your neighborhood,
            <br />
            <span className="text-accent">connected.</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg text-primary-foreground/80 font-body">
            Buy, sell, hire, and rent from verified people in your community. 
            Every transaction backed by trust scores and secure escrow.
          </p>

          {/* Search Bar */}
          <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="h-12 w-full rounded-lg border-0 bg-card pl-11 pr-4 text-sm font-body shadow-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location"
                className="h-12 w-full rounded-lg border-0 bg-card pl-11 pr-4 text-sm font-body shadow-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary sm:w-40"
              />
            </div>
            <Link to="/browse">
              <Button size="lg" className="h-12 w-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 sm:w-auto">
                Search
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
