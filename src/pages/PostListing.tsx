import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PostListing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Listing posted!", description: "Your listing is now live." });
    navigate("/browse");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-2xl py-10">
        <h1 className="mb-2 font-heading text-3xl font-bold text-foreground">Create a Listing</h1>
        <p className="mb-8 text-muted-foreground font-body">Fill in the details to post your item, job, or service.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo upload placeholder */}
          <div className="flex h-40 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/30 transition-colors hover:border-primary/40">
            <div className="text-center">
              <Camera className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground font-body">Add photos (coming soon)</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="font-heading">Title</Label>
            <Input id="title" placeholder="What are you selling?" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price" className="font-heading">Price ($)</Label>
              <Input id="price" type="number" placeholder="0" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label className="font-heading">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy-sell">Buy & Sell</SelectItem>
                  <SelectItem value="jobs">Jobs</SelectItem>
                  <SelectItem value="rentals">Rentals</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="vehicles">Vehicles</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="font-heading">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your item, condition, and any details..."
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Post Listing
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default PostListing;
