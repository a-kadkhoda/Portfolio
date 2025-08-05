import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogsCard = () => {
  return (
    <div className="flex w-[400px] h-[140px] bg-background-gray rounded-xl overflow-hidden shadow-lg hover:bg-dark-blue transition-all duration-300 cursor-pointer">
      <div className="w-1/2 h-full">
        <Image
          src={"/blogTemp.png"}
          className="size-full"
          height={1600}
          width={2560}
          alt={"blogs"}
        />
      </div>
      <div className="w-1/2 p-3 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl text-foreground font-bold">عنوان پست</h1>
          <p className="text-[10px] text-foreground-gray line-clamp-4 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطر لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ، و با استفاده از طراحان گرافیک است.چاپگرها و متون بلکه روزنامه و
            مجله در ستون و سطر
          </p>
        </div>
        <div className="flex justify-between text-foreground-gray">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span className="text-[10px]">Time</span>
          </div>
          <div className="flex gap-1">
            {Array(3)
              .fill("")
              .map((_item, index) => {
                return (
                  <Image
                    className="size-[12px]"
                    key={index}
                    src={"/logos/🇮🇷.png"}
                    height={800}
                    width={800}
                    alt={"tags"}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
