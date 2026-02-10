import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

const openings = [
  { id: "1", title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote / NYC", type: "Full-time" },
  { id: "2", title: "Product Designer", dept: "Design", location: "NYC", type: "Full-time" },
  { id: "3", title: "Trust & Safety Analyst", dept: "Operations", location: "Remote", type: "Full-time" },
  { id: "4", title: "Growth Marketing Manager", dept: "Marketing", location: "Remote / NYC", type: "Full-time" },
  { id: "5", title: "Mobile Engineer (React Native)", dept: "Engineering", location: "Remote", type: "Full-time" },
  { id: "6", title: "Community Manager", dept: "Community", location: "NYC", type: "Full-time" },
];

const values = [
  { title: "Trust First", desc: "We build products and relationships rooted in transparency and integrity." },
  { title: "Community Driven", desc: "Every decision starts with how it impacts the people we serve." },
  { title: "Move Fast, Stay Safe", desc: "We ship quickly without compromising on security or quality." },
  { title: "Radical Ownership", desc: "Every team member has the freedom and responsibility to drive outcomes." },
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">Join the Trustly Team</h1>
        <p className="mx-auto max-w-lg text-muted-foreground font-body">
          We're building the future of local commerce. Come help us connect communities worldwide.
        </p>
      </div>

      {/* Values */}
      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="mb-2 font-heading text-sm font-bold text-primary">{v.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Open Positions */}
      <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Open Positions</h2>
      <div className="space-y-3">
        {openings.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-sm font-bold text-foreground">{job.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{job.dept}</span>
                    <span className="flex items-center gap-0.5"><MapPin className="h-3 w-3" /> {job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1 text-primary">
                  Apply <ArrowRight className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Careers;
