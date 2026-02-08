import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard, Users, Package, AlertTriangle, DollarSign, BarChart3,
  Settings, Search, ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const stats = [
  { label: "Total Users", value: "8,247", change: "+12%", icon: Users },
  { label: "Active Listings", value: "12,430", change: "+8%", icon: Package },
  { label: "Revenue", value: "$45,280", change: "+23%", icon: DollarSign },
  { label: "Open Reports", value: "24", change: "-5%", icon: AlertTriangle },
];

const recentReports = [
  { id: "1", type: "spam", user: "spamuser123", listing: "Free iPhone", date: "10m ago" },
  { id: "2", type: "fraud", user: "suspicious_seller", listing: "MacBook Pro", date: "1h ago" },
  { id: "3", type: "scam", user: "fake_account", listing: "Bitcoin Investment", date: "2h ago" },
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
            <Badge variant="secondary">Admin</Badge>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Navigation */}
        <div className="mb-8 flex gap-2 overflow-x-auto">
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
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold font-heading">{stat.value}</div>
                <p className={`text-xs ${stat.change.startsWith("+") ? "text-success" : "text-destructive"}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Reports */}
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
                  <span className="text-xs text-muted-foreground">{report.date}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Search */}
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
