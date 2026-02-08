import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Camera, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { featuredListings } from "@/lib/mockData";

const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const listing = featuredListings.find(l => l.id === id) || featuredListings[0];

  const [title, setTitle] = useState(listing.title);
  const [price, setPrice] = useState(listing.price.toString());
  const [category, setCategory] = useState(listing.category.toLowerCase());
  const [condition, setCondition] = useState(listing.condition?.toLowerCase() || "good");
  const [description, setDescription] = useState(listing.description);
  const [location, setLocation] = useState(listing.location);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Listing updated!", description: "Your changes have been saved." });
    navigate("/my-listings");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-2xl py-8">
        <Link to="/my-listings" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary font-body">
          <ArrowLeft className="h-4 w-4" /> Back to My Listings
        </Link>

        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Edit Listing</h1>
        <p className="mb-8 text-muted-foreground font-body">Update your listing details</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current image */}
          <div>
            <Label className="font-heading">Photos</Label>
            <div className="mt-2 flex gap-3">
              <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                <img src={listing.image} alt={listing.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30 hover:border-primary/40">
                <Camera className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="font-heading">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required maxLength={80} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price" className="font-heading">Price ($)</Label>
              <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label className="font-heading">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="vehicles">Vehicles</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="rentals">Rentals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="font-heading">Condition</Label>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="like-new">Like New</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="font-heading">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="pl-10" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="font-heading">Description</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={5} required />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate("/my-listings")}>
              Cancel
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default EditListing;
