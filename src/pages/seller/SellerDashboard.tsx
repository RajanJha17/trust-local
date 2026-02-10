import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package, DollarSign, Eye, TrendingUp, Plus, Star, MessageCircle, Zap, BarChart3,
} from "lucide-react";
import { featuredListings } from "@/lib/mockData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2400 },
  { month: "Apr", revenue: 2100 },
  { month: "May", revenue: 3200 },
  { month: "Jun", revenue: 4280 },
];

const viewsData = [
  { day: "Mon", views: 120 },
  { day: "Tue", views: 180 },
  { day: "Wed", views: 230 },
  { day: "Thu", views: 190 },
  { day: "Fri", views: 280 },
  { day: "Sat", views: 310 },
  { day: "Sun", views: 220 },
];

const stats = [
  { label: "Active Listings", value: "12", icon: Package, change: "+2" },
  { label: "Total Revenue", value: "$4,280", icon: DollarSign, change: "+18%" },
  { label: "Profile Views", value: "1,247", icon: Eye, change: "+12%" },
  { label: "Avg. Rating", value: "4.9", icon: Star, change: "+0.1" },
];

const conversionFunnel = [
  { step: "Views", count: 1247 },
  { step: "Messages", count: 234 },
  { step: "Offers", count: 89 },
  { step: "Sales", count: 34 },
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
            <Card key={stat.label} className="transition-shadow hover:shadow-md">
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

        {/* Charts Row */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-base">Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(171, 55%, 40%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(171, 55%, 40%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 15%, 88%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(200, 10%, 46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(200, 10%, 46%)" />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(171, 55%, 40%)" fill="url(#revGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-base">Weekly Views</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 15%, 88%)" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(200, 10%, 46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(200, 10%, 46%)" />
                  <Tooltip />
                  <Bar dataKey="views" fill="hsl(12, 80%, 65%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Funnel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-heading text-base flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Conversion Funnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              {conversionFunnel.map((step, i) => (
                <div key={step.step} className="flex-1 text-center">
                  <div
                    className="mx-auto mb-2 rounded-t-lg bg-primary/20 transition-all"
                    style={{ height: `${(step.count / conversionFunnel[0].count) * 120}px`, maxWidth: "80px" }}
                  >
                    <div
                      className="h-full rounded-t-lg bg-primary"
                      style={{ opacity: 1 - i * 0.2 }}
                    />
                  </div>
                  <p className="font-heading text-lg font-bold text-foreground">{step.count}</p>
                  <p className="text-xs text-muted-foreground">{step.step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
                  <div key={listing.id} className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/50">
                    <img src={listing.image} alt={listing.title} className="h-12 w-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-medium text-foreground">{listing.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{listing.timeAgo}</span>
                        <span>·</span>
                        <span className="flex items-center gap-0.5"><Eye className="h-3 w-3" /> 124</span>
                        <span>·</span>
                        <span className="flex items-center gap-0.5"><MessageCircle className="h-3 w-3" /> 8</span>
                      </div>
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

            {/* Customer Retention */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-sm">Repeat Buyers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">67%</p>
                  <p className="text-xs text-muted-foreground">customers returned for another purchase</p>
                </div>
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
