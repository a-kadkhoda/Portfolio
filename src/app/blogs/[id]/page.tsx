import { ChevronRight, Tags } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="relative size-full flex flex-col gap-8">
        <div className="absolute top-[35%] left-[95%] -translate-x-1/2 -translate-y-1/2 bg-main-blue blur-[150px] size-[15%] pointer-events-none select-none" />
        <div className="absolute top-[85%] left-[60%]  -translate-x-1/2 -translate-y-1/2 bg-lighter-blue blur-[150px] size-[15%] pointer-events-none select-none" />
        <div className="absolute top-[60%] left-[3%]  -translate-x-1/2 -translate-y-1/2 bg-dim-blue blur-[150px] size-[15%] pointer-events-none select-none" />
        <Link href={"/blogs"} className="flex mt-6">
          <ChevronRight />
          <span>بازگشت</span>
        </Link>
        <div className=" bg-background-gray/50 size-full rounded-4xl shadow-lg p-16 flex flex-col gap-16">
          <div className="relative  flex justify-between">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-[40px] font-bold text-foreground">
                عنوان پروژه
              </h1>
              <span className="text-base text-foreground-gray font-normal">
                آخرین آپدیت : 14 آذر 1400
              </span>
              <div className="flex gap-4">
                {Array(3)
                  .fill("")
                  .map((_item, index) => {
                    return <Tags key={index} />;
                  })}
              </div>
            </div>
            <div className="absolute -top-[114px] left-0 w-[460px] h-[260px] rounded-3xl overflow-hidden shadow-md">
              <Image
                className="size-full"
                src={"/blogTemp.png"}
                width={1593}
                height={812}
                alt="Projects"
              />
            </div>
          </div>
          <div className="size-full min-h-90 text-5xl font-bold flex justify-center items-center">
            MarkDown File
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
