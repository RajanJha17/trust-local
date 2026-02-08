import { motion } from "framer-motion";
import { Shield, Lock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Shield, title: "Verified Profiles", desc: "ID-verified sellers and buyers you can trust" },
  { icon: Lock, title: "Secure Escrow", desc: "Payments held safely until you confirm receipt" },
  { icon: Star, title: "Trust Scores", desc: "Community-driven ratings on every transaction" },
  { icon: Users, title: "Local Community", desc: "Connect with real people in your neighborhood" },
];

const TrustBanner = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold text-primary-foreground">
            Built on Trust
          </h2>
          <p className="mx-auto max-w-md text-primary-foreground/70 font-body">
            Every feature designed to make local transactions safe, transparent, and delightful.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-primary-foreground">
                {f.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" variant="secondary" className="font-heading">
            Learn How Trust Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
