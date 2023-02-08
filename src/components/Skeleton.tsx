import { ComponentProps } from "react"
import { SkeletonContainer, SkeletonItem } from "../styles/pages/skeleton"

type SkeletonProps = ComponentProps<typeof SkeletonContainer>

export function Skeleton({ ...props }: SkeletonProps) {
  return (
    <SkeletonContainer>
      <SkeletonItem />
      <div>
        <SkeletonItem />
      </div>
    </SkeletonContainer>
  )
}
