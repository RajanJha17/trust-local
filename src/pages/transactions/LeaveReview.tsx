import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeaveReview = () => {
  const { transactionId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({ title: "Please select a rating", variant: "destructive" });
      return;
    }
    toast({ title: "Review submitted!", description: "Thank you for your feedback." });
    navigate("/reviews");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-xl py-8">
        <Link to={`/transaction/${transactionId}`} className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary font-body">
          <ArrowLeft className="h-4 w-4" /> Back to transaction
        </Link>

        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Leave a Review</h1>
        <p className="mb-8 text-muted-foreground font-body">Share your experience with this transaction</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating */}
          <div>
            <Label className="mb-3 block font-heading">Overall Rating</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-10 w-10 ${
                      star <= (hoverRating || rating)
                        ? "fill-warm text-warm"
                        : "text-border"
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {rating === 1 && "Poor"}
              {rating === 2 && "Fair"}
              {rating === 3 && "Good"}
              {rating === 4 && "Very Good"}
              {rating === 5 && "Excellent"}
            </p>
          </div>

          {/* Review Text */}
          <div className="space-y-2">
            <Label htmlFor="review" className="font-heading">Your Review</Label>
            <Textarea
              id="review"
              placeholder="Tell others about your experience..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={5}
              required
            />
            <p className="text-xs text-muted-foreground">{review.length}/500 characters</p>
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Submit Review
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LeaveReview;
