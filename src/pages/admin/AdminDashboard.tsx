import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  LayoutDashboard, Users, Package, AlertTriangle, DollarSign, BarChart3,
  Settings, Search, TrendingUp, Activity, Shield, Globe,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const stats = [
  { label: "Total Users", value: "8,247", change: "+12%", icon: Users, up: true },
  { label: "Active Listings", value: "12,430", change: "+8%", icon: Package, up: true },
  { label: "Revenue", value: "$45,280", change: "+23%", icon: DollarSign, up: true },
  { label: "Open Reports", value: "24", change: "-5%", icon: AlertTriangle, up: false },
];

const revenueData = [
  { month: "Jul", revenue: 28000 },
  { month: "Aug", revenue: 31000 },
  { month: "Sep", revenue: 35000 },
  { month: "Oct", revenue: 33000 },
  { month: "Nov", revenue: 40000 },
  { month: "Dec", revenue: 45280 },
];

const categoryDistribution = [
  { name: "Electronics", value: 35, color: "hsl(171, 55%, 40%)" },
  { name: "Furniture", value: 20, color: "hsl(12, 80%, 65%)" },
  { name: "Vehicles", value: 15, color: "hsl(30, 60%, 52%)" },
  { name: "Jobs", value: 18, color: "hsl(152, 60%, 40%)" },
  { name: "Other", value: 12, color: "hsl(200, 15%, 60%)" },
];

const riskScores = [
  { level: "Low", count: 7200 },
  { level: "Medium", count: 820 },
  { level: "High", count: 180 },
  { level: "Critical", count: 47 },
];

const recentReports = [
  { id: "1", type: "spam", user: "spamuser123", listing: "Free iPhone", date: "10m ago", severity: "high" },
  { id: "2", type: "fraud", user: "suspicious_seller", listing: "MacBook Pro", date: "1h ago", severity: "critical" },
  { id: "3", type: "scam", user: "fake_account", listing: "Bitcoin Investment", date: "2h ago", severity: "critical" },
  { id: "4", type: "inappropriate", user: "user_456", listing: "Misc Item", date: "5h ago", severity: "medium" },
];

const moderationQueue = [
  { id: "m1", title: "Suspicious pricing pattern", type: "auto-flagged", time: "5m ago" },
  { id: "m2", title: "New account bulk listings", type: "auto-flagged", time: "12m ago" },
  { id: "m3", title: "User reported listing", type: "user-report", time: "30m ago" },
];

const AdminDashboard = () => {
  const location = useLocation();
  const currentTab = location.pathname.split("/admin/")[1] || "dashboard";

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">T</span>
            </div>
            Trustly Admin
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Activity className="h-3 w-3 text-success" /> Live
            </div>
            <Badge variant="secondary">Admin</Badge>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Navigation */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {[
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
            { id: "users", label: "Users", icon: Users },
            { id: "listings", label: "Listings", icon: Package },
            { id: "reports", label: "Reports", icon: AlertTriangle },
            { id: "transactions", label: "Transactions", icon: DollarSign },
            { id: "analytics", label: "Analytics", icon: BarChart3 },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((item) => (
            <Link key={item.id} to={`/admin${item.id === "dashboard" ? "" : `/${item.id}`}`}>
              <Button
                variant={currentTab === item.id || (currentTab === "dashboard" && item.id === "dashboard") ? "default" : "ghost"}
                size="sm"
                className="gap-1.5"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold font-heading">{stat.value}</div>
                <p className={`text-xs flex items-center gap-1 ${stat.up ? "text-success" : "text-destructive"}`}>
                  <TrendingUp className={`h-3 w-3 ${stat.up ? "" : "rotate-180"}`} /> {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-base flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Revenue & Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="adminRevGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(171, 55%, 40%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(171, 55%, 40%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 15%, 88%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(200, 10%, 46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(200, 10%, 46%)" />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(171, 55%, 40%)" fill="url(#adminRevGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-base">Category Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                    strokeWidth={2}
                    stroke="hsl(0, 0%, 100%)"
                  >
                    {categoryDistribution.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-2 flex flex-wrap gap-2">
                {categoryDistribution.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: cat.color }} />
                    {cat.name}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Risk & Moderation */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          {/* User Risk Scoring */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-base flex items-center gap-2">
                <Shield className="h-4 w-4" /> User Risk Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={riskScores} layout="vertical">
                  <XAxis type="number" tick={{ fontSize: 12 }} stroke="hsl(200, 10%, 46%)" />
                  <YAxis dataKey="level" type="category" tick={{ fontSize: 12 }} stroke="hsl(200, 10%, 46%)" width={60} />
                  <Tooltip />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    <Cell fill="hsl(152, 60%, 40%)" />
                    <Cell fill="hsl(30, 60%, 52%)" />
                    <Cell fill="hsl(12, 80%, 65%)" />
                    <Cell fill="hsl(0, 84%, 60%)" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Moderation Queue */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-heading text-base">Moderation Queue</CardTitle>
              <Badge variant="secondary">{moderationQueue.length} pending</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              {moderationQueue.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warm/10">
                    <AlertTriangle className="h-4 w-4 text-warm" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.type} · {item.time}</p>
                  </div>
                  <Button size="sm" variant="outline">Review</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Reports & Quick Actions */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-heading">Recent Reports</CardTitle>
              <Link to="/admin/reports">
                <Button variant="ghost" size="sm" className="text-primary">View all</Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{report.listing}</p>
                    <p className="text-xs text-muted-foreground">By {report.user} · {report.type}</p>
                  </div>
                  <Badge variant={report.severity === "critical" ? "destructive" : "secondary"} className="text-xs">
                    {report.severity}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{report.date}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search users, listings, or transactions..." className="pl-10" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">Ban User</Button>
                <Button variant="outline" size="sm">Remove Listing</Button>
                <Button variant="outline" size="sm">Issue Refund</Button>
                <Button variant="outline" size="sm">Send Alert</Button>
              </div>
              <div className="rounded-lg bg-secondary/50 p-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="h-3 w-3" /> Live Platform Stats
                </div>
                <p>247 active users · 12 transactions in progress · 3 flagged items</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
