import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, Heart, Globe } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust First", desc: "Every transaction is backed by verified profiles and secure escrow." },
  { icon: Users, title: "Community Driven", desc: "Built by and for local communities to thrive together." },
  { icon: Heart, title: "Human Connection", desc: "Real people, real interactions, real impact." },
  { icon: Globe, title: "Local Impact", desc: "Strengthening neighborhoods one transaction at a time." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary py-20">
          <div className="container text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
              About Trustly
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 font-body">
              We're reimagining local commerce with trust at its core. Buy, sell, hire, and rent 
              from verified people in your neighborhood.
            </p>
          </div>
        </section>

        <section className="container py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mb-4 text-muted-foreground font-body leading-relaxed">
              Trustly was born from a simple idea: local transactions should be safe, simple, and delightful. 
              We saw too many people hesitant to buy or sell locally due to scams, no-shows, and lack of accountability.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              So we built a marketplace where every user is verified, every transaction is protected by escrow, 
              and community trust scores help you make confident decisions. We're not just a classifieds site — 
              we're a platform that brings neighborhoods closer together.
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/30 py-16">
          <div className="container">
            <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground">Our Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Join Our Community</h2>
            <p className="text-muted-foreground font-body">
              Thousands of people are already using Trustly to connect with their neighbors. 
              Start buying, selling, and building trust today.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
