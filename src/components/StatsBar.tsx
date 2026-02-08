import { motion } from "framer-motion";
import { stats } from "@/lib/mockData";

const StatsBar = () => {
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="container py-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
