import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg">
      <div className="flex flex-col space-y-3 p-2">
        <Skeleton className="bg-primary h-[230px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="mt-4 bg-primary h-8 w-4/6" />
          <Skeleton className="bg-primary h-6 w-6/6" />
          <Skeleton className="bg-primary h-6 w-6/6" />
        </div>
      </div>
    </div>
  )
}
