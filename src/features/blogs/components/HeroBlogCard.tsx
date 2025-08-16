import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroBlogCard = () => {
  return (
    <div className="relative flex justify-end size-full bg-background-gray rounded-xl  shadow-lg hover:bg-dark-blue transition-all duration-300 cursor-pointer">
      <div className="w-1/2 h-[calc(100%+56px)] absolute -top-[28px] right-[20px] rounded-4xl overflow-hidden">
        <Image
          src={"/blogTemp.png"}
          className="size-full"
          height={1600}
          width={2560}
          alt={"blogs"}
        />
      </div>
      <div className="w-[calc(50%-40px)] p-3 pt-10 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-foreground font-bold">عنوان پست</h1>
          <p className="text-base text-foreground-gray line-clamp-6 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطر لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ، و با استفاده از طراحان گرافیک است.چاپگرها و متون بلکه روزنامه و
            مجله در ستون و سطر لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ، و با استفاده از طراحان گرافیک است.چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطر لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطر
          </p>
        </div>
        <div className="flex justify-between text-foreground-gray">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span className="text-[16px]">Time</span>
          </div>
          <div className="flex gap-1">
            {Array(3)
              .fill("")
              .map((_item, index) => {
                return (
                  <Image
                    className="size-[18px]"
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

export default HeroBlogCard;
