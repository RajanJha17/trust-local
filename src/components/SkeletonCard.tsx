import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => (
  <div className="overflow-hidden rounded-xl border border-border bg-card">
    <Skeleton className="aspect-[4/3] w-full" />
    <div className="p-4 space-y-3">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-3 w-32" />
      <div className="flex items-center gap-2 border-t border-border pt-3">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-3 w-20" />
        <Skeleton className="ml-auto h-3 w-8" />
      </div>
    </div>
  </div>
);

export const SkeletonList = ({ count = 6 }: { count?: number }) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export const SkeletonInline = () => (
  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-3 w-48" />
    </div>
    <Skeleton className="h-5 w-12" />
  </div>
);

export default SkeletonCard;
