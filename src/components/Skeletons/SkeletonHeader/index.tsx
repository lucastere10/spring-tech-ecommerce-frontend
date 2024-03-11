import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonHeader() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="bg-primary h-8 w-8 rounded-full" />
      <Skeleton className="bg-primary h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="bg-primary h-4 w-[200px]" />
        <Skeleton className="bg-primary h-4 w-[150px]" />
      </div>
      <Skeleton className="bg-primary h-8 w-8 rounded-full" />
      <Skeleton className="bg-primary h-8 w-8 rounded-full" />
      <Skeleton className="bg-primary h-8 w-8 rounded-full" />
    </div>
  )
}