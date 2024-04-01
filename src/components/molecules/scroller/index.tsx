import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface ScrollProp {
  total: number;
  fetchData: () => void;
  hasMore: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Scroller({
  total,
  fetchData,
  hasMore = false,
  children,
  className,
}: ScrollProp) {
  return (
    <div
      id="scrollableDiv"
      className={`w-full h-full min-h-[100px] md:m-h-[725px] overflow-auto ${className}`}
    >
      <InfiniteScroll
        dataLength={total}
        next={fetchData}
        hasMore={hasMore}
        loader={<></>}
        // endMessage={
        //   <p className="flex justify-center text-white">
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        scrollableTarget="scrollableDiv"
      >
        {children}
      </InfiniteScroll>
    </div>
  );
}
