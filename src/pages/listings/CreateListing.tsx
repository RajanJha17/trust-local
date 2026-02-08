import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, X, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CreateListing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Listing created!", description: "Your listing is now live." });
    navigate("/my-listings");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-2xl py-8">
        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Create a Listing</h1>
        <p className="mb-8 text-muted-foreground font-body">Fill in the details to post your item.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo upload */}
          <div>
            <Label className="font-heading">Photos</Label>
            <p className="mb-2 text-xs text-muted-foreground">Add up to 10 photos. First photo is the cover.</p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              <div className="flex aspect-square cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30 transition-colors hover:border-primary/40">
                <Camera className="h-6 w-6 text-muted-foreground" />
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex aspect-square items-center justify-center rounded-lg border border-border bg-secondary/20">
                  <span className="text-xs text-muted-foreground">+</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="font-heading">Title</Label>
            <Input
              id="title"
              placeholder="What are you selling?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={80}
            />
            <p className="text-xs text-muted-foreground">{title.length}/80 characters</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price" className="font-heading">Price ($)</Label>
              <Input
                id="price"
                type="number"
                placeholder="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="font-heading">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="vehicles">Vehicles</SelectItem>
                  <SelectItem value="clothing">Clothing & Accessories</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                  <SelectItem value="sports">Sports & Outdoors</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="font-heading">Condition</Label>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger><SelectValue placeholder="Select condition" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="like-new">Like New</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="for-parts">For Parts</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="font-heading">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="Your neighborhood"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="font-heading">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your item, condition, and any relevant details..."
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Publish Listing
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CreateListing;
