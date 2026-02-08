import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, from: "John D.", rating: 5, text: "Great seller! Item was exactly as described.", date: "2 weeks ago", type: "received" },
  { id: 2, from: "Emily R.", rating: 5, text: "Super fast shipping and excellent communication.", date: "1 month ago", type: "received" },
  { id: 3, from: "Mike T.", rating: 4, text: "Good product, minor delay in meetup but overall positive.", date: "1 month ago", type: "received" },
  { id: 4, to: "Alex P.", rating: 5, text: "Smooth transaction, highly recommend this buyer!", date: "3 weeks ago", type: "given" },
  { id: 5, to: "Lisa M.", rating: 5, text: "Quick pickup and great communication.", date: "1 month ago", type: "given" },
];

const Reviews = () => {
  const receivedReviews = reviews.filter(r => r.type === "received");
  const givenReviews = reviews.filter(r => r.type === "given");

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold">
          {(review.from || review.to)?.[0]}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">
            {review.from ? `From ${review.from}` : `To ${review.to}`}
          </p>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className={`h-3 w-3 ${s <= review.rating ? "fill-warm text-warm" : "text-muted-foreground"}`} />
            ))}
          </div>
        </div>
        <span className="ml-auto text-xs text-muted-foreground">{review.date}</span>
      </div>
      <p className="text-sm text-muted-foreground">{review.text}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-8">
        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">My Reviews</h1>
        <p className="mb-8 text-muted-foreground font-body">See what others are saying and reviews you've given.</p>

        <Tabs defaultValue="received" className="w-full">
          <TabsList className="mb-6 w-full">
            <TabsTrigger value="received" className="flex-1">Received ({receivedReviews.length})</TabsTrigger>
            <TabsTrigger value="given" className="flex-1">Given ({givenReviews.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="received" className="space-y-4">
            {receivedReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </TabsContent>

          <TabsContent value="given" className="space-y-4">
            {givenReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
