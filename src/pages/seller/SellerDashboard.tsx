import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package, DollarSign, Eye, TrendingUp, Plus, Star, MessageCircle, Zap,
} from "lucide-react";
import { featuredListings } from "@/lib/mockData";

const stats = [
  { label: "Active Listings", value: "12", icon: Package, change: "+2" },
  { label: "Total Sales", value: "$4,280", icon: DollarSign, change: "+18%" },
  { label: "Profile Views", value: "1,247", icon: Eye, change: "+12%" },
  { label: "Avg. Rating", value: "4.9", icon: Star, change: "+0.1" },
];

const SellerDashboard = () => {
  const recentListings = featuredListings.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Seller Dashboard</h1>
            <p className="text-sm text-muted-foreground">Track your performance and manage listings</p>
          </div>
          <Link to="/create-listing">
            <Button className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="h-4 w-4" /> New Listing
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold font-heading">{stat.value}</div>
                <p className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Listings */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-heading">Recent Listings</CardTitle>
                <Link to="/my-listings">
                  <Button variant="ghost" size="sm" className="text-primary">View all</Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentListings.map((listing) => (
                  <div key={listing.id} className="flex items-center gap-3">
                    <img src={listing.image} alt={listing.title} className="h-12 w-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-medium text-foreground">{listing.title}</p>
                      <p className="text-xs text-muted-foreground">{listing.timeAgo}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading font-bold text-foreground">${listing.price}</p>
                      <Badge variant="secondary" className="text-xs">Active</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/create-listing" className="block">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Plus className="h-4 w-4" /> Create Listing
                  </Button>
                </Link>
                <Link to="/chat" className="block">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <MessageCircle className="h-4 w-4" /> Messages
                    <Badge className="ml-auto bg-accent text-accent-foreground border-0">3</Badge>
                  </Button>
                </Link>
                <Link to="/boost-listing/1" className="block">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Zap className="h-4 w-4" /> Boost Listing
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Seller Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use high-quality photos to attract buyers</li>
                  <li>• Respond to messages within 2 hours</li>
                  <li>• Price competitively based on market</li>
                  <li>• Be honest about item condition</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellerDashboard;
