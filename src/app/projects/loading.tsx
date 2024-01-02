import Skeleton from "react-loading-skeleton";
import { PostCardSkeleton } from "@/components/PostCard";
import cn from "classnames";

export default function Loading() {
  return (
    <>
      <h1>
        <Skeleton />
      </h1>

      <div
        className={cn("grid", "grid-cols-1", "gap-10", "md:gap-20", "mt-10")}
      >
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </>
  );
}
