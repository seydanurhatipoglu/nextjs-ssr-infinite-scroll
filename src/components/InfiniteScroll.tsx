"use client"

import useIntersection from "@/hooks/useIntersection"
import { useEffect, useRef, useState } from "react"

export default function InfiniteScroll<T>({ loadMore, pagination }: InfiniteScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersection(ref)
  const [items, setItems] = useState<T[]>([])
  const [_pagination, set_pagination] = useState(pagination)

  const hasMore = _pagination.skip + _pagination.limit < _pagination.total

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore({ skip: _pagination.skip + _pagination.limit, limit: _pagination.limit }).then((response) => {
        const { items, pagination } = response
        setItems(items)
        set_pagination(pagination)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting])

  return (
    <>
      {items}
      {hasMore && <div ref={ref} className="grow basis-full text-center p-3">
        {isIntersecting && "Loading..."}
      </div>}
    </>
  )
}