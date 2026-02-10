import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";

const posts = [
  {
    id: "1",
    title: "10 Tips for Safe Online Transactions",
    excerpt: "Protect yourself with our comprehensive guide to secure buying and selling on Trustly.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    date: "Feb 5, 2026",
    category: "Safety",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "How Trust Scores Are Revolutionizing Local Commerce",
    excerpt: "Learn how our proprietary trust scoring system creates a safer marketplace for everyone.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    date: "Jan 28, 2026",
    category: "Trust",
    readTime: "7 min",
  },
  {
    id: "3",
    title: "Seller Success Stories: From Side Hustle to Full-Time",
    excerpt: "Meet three Trustly sellers who turned their passion into a thriving business.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    date: "Jan 20, 2026",
    category: "Stories",
    readTime: "4 min",
  },
  {
    id: "4",
    title: "Guide to Pricing Your Items Right",
    excerpt: "Data-driven tips to help you set competitive prices and sell faster.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
    date: "Jan 15, 2026",
    category: "Tips",
    readTime: "6 min",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-12">
      <div className="mb-10 text-center">
        <h1 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">The Trustly Blog</h1>
        <p className="text-muted-foreground font-body">Tips, stories, and insights from the Trustly community</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="overflow-hidden transition-shadow hover:shadow-xl group">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <h2 className="mb-2 font-heading text-lg font-bold text-foreground">{post.title}</h2>
                <p className="mb-4 text-sm text-muted-foreground font-body">{post.excerpt}</p>
                <Button variant="ghost" size="sm" className="gap-1 text-primary">
                  Read More <ArrowRight className="h-3 w-3" />
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

export default Blog;
