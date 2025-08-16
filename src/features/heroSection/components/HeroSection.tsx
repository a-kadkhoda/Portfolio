import Image from "next/image";
import React from "react";
import ProfileCard from "./ProfileCard";

const HeroSection = () => {
  return (
    <div className="size-full ">
      <div className="size-full flex justify-between items-center">
        <div className="w-3/5 flex flex-col gap-8 ">
          <span className="text-5xl font-bold text-foreground">
            سلام! من <span className="text-blue-forground">علی اکبر کدخدا</span>{" "}
            هستم
          </span>
          <span className="font-bold text-4xl">توسعه دهنده فول استک</span>
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
          <Image
            src={"/me.png"}
            className="size-full"
            width={420}
            height={420}
            alt="me"
          />
        </div>
      </div>
      <div className="size-full flex items-center justify-center overflow-x-auto p-4 ">
        <div className="flex gap-30 mt-42">
          {Array(5)
            .fill("")
            .map((_item, index) => {
              return <ProfileCard key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
