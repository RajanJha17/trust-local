import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Briefcase, Home, Wrench, Car, Smartphone, Sofa, Users } from "lucide-react";
import { categories } from "@/lib/mockData";

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag, Briefcase, Home, Wrench, Car, Smartphone, Sofa, Users,
};

const CategoryGrid = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-2 font-heading text-3xl font-bold text-foreground">
            Explore Categories
          </h2>
          <p className="text-muted-foreground font-body">
            Find what you need, right in your neighborhood
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || ShoppingBag;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/browse?cat=${cat.id}`}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">{cat.name}</p>
                    <p className="text-xs text-muted-foreground">{cat.count.toLocaleString()} listings</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
