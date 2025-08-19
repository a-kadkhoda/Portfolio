import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return (
    <div className="relative size-full  ">
      <div className="size-[205px] absolute top-[50%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-[#0067A5] blur-[142px] pointer-events-none select-none -z-10 " />
      <div className="size-[205px] absolute top-[80%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-[#4769B1] blur-[142px] pointer-events-none select-none -z-10 " />
      <Image
        src={"/me.png"}
        className="size-full"
        width={420}
        height={420}
        alt="me"
      />
    </div>
  );
};

export default ProfileImage;
