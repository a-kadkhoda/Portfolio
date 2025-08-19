import React from "react";
import BlogsCard from "./BlogsCard";

const LatestBlogs = () => {
  return (
    <div className="size-full flex flex-col  justify-center items-center gap-12">
      <span className="text-3xl font-bold text-foreground flex justify-center">
        آخرین مطالب بلاگ
      </span>
      <div className="size-full flex items-center justify-center overflow-x-auto p-4 ">
        <div className="flex gap-6 ">
          {Array(3)
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
    </div>
  );
};

export default LatestBlogs;
