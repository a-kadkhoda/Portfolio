import BlogsCard from "@/features/blogs/components/BlogsCard";
import HeroBlogCard from "@/features/blogs/components/HeroBlogCard";
import SearchBlogsBar from "@/features/blogs/components/SearchBlogsBar";
import React from "react";

const Blog = () => {
  return (
    <div className="size-full mt-20 pb-30 flex flex-col gap-18">
      <div className="flex flex-wrap gap-8 gap-y-16 justify-center">
        {Array(4)
          .fill("")
          .map((_item, index) => {
            return index === 0 ? (
              <div className={` w-[80%] h-[320px]`} key={index}>
                <HeroBlogCard />
              </div>
            ) : (
              <div className={` w-[420px] h-[160px]`} key={index}>
                <BlogsCard />
              </div>
            );
          })}
      </div>
      <div>
        <SearchBlogsBar />
      </div>
      <div className="flex flex-wrap gap-16 justify-center ">
        {Array(20)
          .fill("")
          .map((_item, index) => {
            return (
              <div className="w-[420px] h-[160px] " key={index}>
                <BlogsCard />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
