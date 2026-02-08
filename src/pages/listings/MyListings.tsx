import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { featuredListings } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";

const MyListings = () => {
  const { toast } = useToast();
  const listings = featuredListings.slice(0, 4);

  const handleDelete = (id: string) => {
    toast({ title: "Listing deleted", description: "Your listing has been removed." });
  };

  const ListingRow = ({ listing, status }: { listing: typeof listings[0]; status: string }) => (
    <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
      <img src={listing.image} alt={listing.title} className="h-24 w-24 rounded-lg object-cover" />
      <div className="flex-1">
        <div className="mb-1 flex items-start justify-between">
          <div>
            <p className="font-heading text-lg font-bold text-primary">${listing.price}</p>
            <h3 className="text-sm font-medium text-foreground">{listing.title}</h3>
          </div>
          <Badge variant={status === "active" ? "default" : "secondary"}>
            {status === "active" ? "Active" : status === "sold" ? "Sold" : "Draft"}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">{listing.location} · {listing.timeAgo}</p>
        <div className="mt-3 flex items-center gap-2">
          <Link to={`/listing/${listing.id}`}>
            <Button variant="outline" size="sm" className="gap-1">
              <Eye className="h-3 w-3" /> View
            </Button>
          </Link>
          <Link to={`/edit-listing/${listing.id}`}>
            <Button variant="outline" size="sm" className="gap-1">
              <Edit className="h-3 w-3" /> Edit
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mark as Sold</DropdownMenuItem>
              <DropdownMenuItem>Boost Listing</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(listing.id)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">My Listings</h1>
            <p className="text-sm text-muted-foreground">{listings.length} total listings</p>
          </div>
          <Link to="/create-listing">
            <Button className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="h-4 w-4" /> New Listing
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Active (3)</TabsTrigger>
            <TabsTrigger value="sold">Sold (5)</TabsTrigger>
            <TabsTrigger value="drafts">Drafts (1)</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {listings.slice(0, 3).map((listing) => (
              <ListingRow key={listing.id} listing={listing} status="active" />
            ))}
          </TabsContent>

          <TabsContent value="sold" className="space-y-4">
            {listings.slice(0, 2).map((listing) => (
              <ListingRow key={listing.id} listing={listing} status="sold" />
            ))}
          </TabsContent>

          <TabsContent value="drafts" className="space-y-4">
            <ListingRow listing={listings[0]} status="draft" />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default MyListings;
