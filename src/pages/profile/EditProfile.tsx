import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Camera, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("Sarah Mitchell");
  const [email, setEmail] = useState("sarah@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [location, setLocation] = useState("Brooklyn, NY");
  const [bio, setBio] = useState("Passionate about sustainable living and finding great homes for preloved items.");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Profile updated!", description: "Your changes have been saved." });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-2xl py-8">
        <Link to="/profile" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary font-body">
          <ArrowLeft className="h-4 w-4" /> Back to profile
        </Link>

        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Edit Profile</h1>
        <p className="mb-8 text-muted-foreground font-body">Update your personal information</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                S
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card shadow-sm"
              >
                <Camera className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Profile photo</p>
              <p className="text-xs text-muted-foreground">JPG, PNG. Max 5MB</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-heading">Full Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-heading">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-heading">Phone</Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="font-heading">Location</Label>
              <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="font-heading">Bio</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              placeholder="Tell others about yourself..."
            />
            <p className="text-xs text-muted-foreground">{bio.length}/300 characters</p>
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate("/profile")}>
              Cancel
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default EditProfile;
