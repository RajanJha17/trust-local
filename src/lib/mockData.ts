export interface Listing {
  id: string;
  title: string;
  price: number;
  category: string;
  location: string;
  image: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
    verified: boolean;
  };
  timeAgo: string;
  isFeatured?: boolean;
  description: string;
  condition?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}

export const categories: Category[] = [
  { id: "buy-sell", name: "Buy & Sell", icon: "ShoppingBag", count: 2340, color: "primary" },
  { id: "jobs", name: "Jobs", icon: "Briefcase", count: 890, color: "warm" },
  { id: "rentals", name: "Rentals", icon: "Home", count: 567, color: "trust" },
  { id: "services", name: "Services", icon: "Wrench", count: 1230, color: "accent" },
  { id: "vehicles", name: "Vehicles", icon: "Car", count: 456, color: "success" },
  { id: "electronics", name: "Electronics", icon: "Smartphone", count: 1890, color: "primary" },
  { id: "furniture", name: "Furniture", icon: "Sofa", count: 723, color: "warm" },
  { id: "community", name: "Community", icon: "Users", count: 345, color: "trust" },
];

export const featuredListings: Listing[] = [
  {
    id: "1",
    title: "Mid-Century Modern Sofa — Excellent Condition",
    price: 450,
    category: "Furniture",
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    seller: { name: "Sarah M.", avatar: "", rating: 4.9, verified: true },
    timeAgo: "2h ago",
    isFeatured: true,
    description: "Beautiful mid-century modern sofa in excellent condition. Pet-free, smoke-free home.",
    condition: "Excellent",
  },
  {
    id: "2",
    title: "MacBook Pro 14\" M3 Pro — Like New",
    price: 1600,
    category: "Electronics",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
    seller: { name: "James K.", avatar: "", rating: 4.8, verified: true },
    timeAgo: "5h ago",
    isFeatured: true,
    description: "Barely used MacBook Pro. Comes with original box and charger.",
    condition: "Like New",
  },
  {
    id: "3",
    title: "Sunny 2BR Apartment — $2,200/mo",
    price: 2200,
    category: "Rentals",
    location: "Williamsburg, NY",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    seller: { name: "Park Realty", avatar: "", rating: 4.7, verified: true },
    timeAgo: "1d ago",
    description: "Bright corner unit with exposed brick. Washer/dryer in unit. Available March 1.",
  },
  {
    id: "4",
    title: "Professional Photography Services",
    price: 150,
    category: "Services",
    location: "Queens, NY",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=400&fit=crop",
    seller: { name: "Alex R.", avatar: "", rating: 5.0, verified: true },
    timeAgo: "3h ago",
    description: "Professional photographer available for events, portraits, and product shoots.",
  },
  {
    id: "5",
    title: "Vintage Road Bike — Restored",
    price: 320,
    category: "Buy & Sell",
    location: "Park Slope, NY",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop",
    seller: { name: "Mike T.", avatar: "", rating: 4.6, verified: false },
    timeAgo: "8h ago",
    description: "Fully restored vintage road bike. New tires, brakes, and chain.",
    condition: "Refurbished",
  },
  {
    id: "6",
    title: "Full-Stack Developer Position",
    price: 0,
    category: "Jobs",
    location: "Remote / NYC",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    seller: { name: "TechCo Inc.", avatar: "", rating: 4.5, verified: true },
    timeAgo: "12h ago",
    description: "Looking for a senior full-stack developer. React + Node.js. $120k-$160k.",
  },
];

export const stats = [
  { label: "Active Listings", value: "12,400+" },
  { label: "Verified Users", value: "8,200+" },
  { label: "Transactions", value: "45,000+" },
  { label: "Avg. Trust Score", value: "4.8/5" },
];
