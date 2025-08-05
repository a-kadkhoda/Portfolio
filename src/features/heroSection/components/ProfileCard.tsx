import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="relative w-[200px] h-[130px] rounded-3xl bg-background-gray flex flex-col justify-center items-center shadow-lg hover:bg-dark-blue transition-all duration-300 cursor-pointer">
      <div
        style={{
          background: "linear-gradient(180deg, #212121 0%, #000 100%)",
        }}
        className="absolute size-[84px] rounded-2xl top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg flex justify-center items-center"
      >
        <Image
          src={"/logos/github.png"}
          height={48}
          width={50}
          alt={"github"}
        />
      </div>
      <div className="flex flex-col mt-4 justify-center items-center ">
        <span className="text-sm font-normal text-foreground-gray">
          Github.com/
        </span>
        <span className="text-xl font-normal">akadkhoda</span>
      </div>
    </div>
  );
};

export default ProfileCard;
