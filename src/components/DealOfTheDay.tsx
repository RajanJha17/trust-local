import { motion } from "framer-motion";
import { Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { featuredListings } from "@/lib/mockData";

const DealOfTheDay = () => {
  const deal = featuredListings[0];

  return (
    <section className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 via-card to-accent/5"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative overflow-hidden">
              <img src={deal.image} alt={deal.title} className="h-full min-h-[250px] w-full object-cover" />
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                <Zap className="h-3 w-3" /> DEAL OF THE DAY
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> Ends in 12:34:56
              </div>
              <h3 className="mb-2 font-heading text-2xl font-bold text-foreground">{deal.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground font-body">{deal.description}</p>
              <div className="mb-4 flex items-baseline gap-3">
                <span className="font-heading text-3xl font-bold text-accent">${deal.price}</span>
                <span className="text-lg text-muted-foreground line-through">${Math.round(deal.price * 1.4)}</span>
                <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-bold text-success">-30%</span>
              </div>
              <Link to={`/listing/${deal.id}`}>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  View Deal
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
