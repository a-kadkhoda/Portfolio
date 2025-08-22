import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileImage from "./ProfileImage";

const HeroSection = () => {
  return (
    <div className="size-full flex flex-col 2xl:gap-28 xl:gap-52">
      <div className="size-full flex justify-between items-center">
        <div className="w-3/5 flex flex-col gap-8 ">
          <span className="2xl:text-5xl xl:text-4xl font-bold text-foreground">
            سلام! من <span className="text-blue-forground">علی اکبر کدخدا</span>{" "}
            هستم
          </span>
          <span className="font-bold 2xl:text-4xl xl:text-3xl">
            توسعه دهنده فول استک
          </span>
          <div className="flex gap-6">
            <button
              type="button"
              className="cursor-pointer w-max py-2 px-10 rounded-lg font-normal bg-main-blue text-foreground"
            >
              ارتباط با من
            </button>
            <button
              type="button"
              className="cursor-pointer w-max py-2 px-10 rounded-lg font-normal bg-dark-blue text-foreground"
            >
              دانلود رزومه
            </button>
          </div>
        </div>
        <div className="w-2/5">
          <ProfileImage />
        </div>
      </div>
      <div className="size-full flex items-center justify-center overflow-x-auto ">
        <div className="flex gap-x-16 mt-[calc(76px/2)]">
          {Array(5)
            .fill("")
            .map((_item, index) => {
              return (
                <div className="w-[185px] h-[120px]" key={index}>
                  <ProfileCard />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
