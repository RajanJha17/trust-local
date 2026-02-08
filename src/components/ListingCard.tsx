import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Star, BadgeCheck, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Listing } from "@/lib/mockData";

interface ListingCardProps {
  listing: Listing;
  index?: number;
}

const ListingCard = ({ listing, index = 0 }: ListingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/listing/${listing.id}`}
        className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm transition-colors hover:bg-card"
          >
            <Heart className="h-4 w-4 text-foreground" />
          </button>
          {listing.isFeatured && (
            <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground border-0">
              Featured
            </Badge>
          )}
          {listing.condition && (
            <Badge variant="secondary" className="absolute left-3 bottom-3">
              {listing.condition}
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-1 flex items-start justify-between gap-2">
            <p className="font-heading text-lg font-bold text-foreground">
              {listing.price === 0 ? "Free" : `$${listing.price.toLocaleString()}`}
              {listing.category === "Rentals" ? "/mo" : ""}
            </p>
          </div>

          <h3 className="mb-2 line-clamp-2 text-sm font-medium text-foreground/90 font-body">
            {listing.title}
          </h3>

          <div className="mb-3 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {listing.location} · {listing.timeAgo}
          </div>

          {/* Seller */}
          <div className="flex items-center gap-2 border-t border-border pt-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {listing.seller.name[0]}
            </div>
            <span className="text-xs text-muted-foreground font-body">{listing.seller.name}</span>
            {listing.seller.verified && (
              <BadgeCheck className="h-3.5 w-3.5 text-primary" />
            )}
            <div className="ml-auto flex items-center gap-0.5 text-xs text-warm">
              <Star className="h-3 w-3 fill-current" />
              {listing.seller.rating}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ListingCard;
