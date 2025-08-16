import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="relative size-full rounded-3xl bg-background-gray flex flex-col justify-center items-center shadow-lg hover:bg-dark-blue transition-all duration-300 cursor-pointer">
      <div className="absolute w-[94%] rounded-2xl overflow-hidden -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md flex justify-center items-center">
        <Image
          src={"/temp.png"}
          className="size-full"
          height={812}
          width={1593}
          alt={"github"}
        />
      </div>
      <div className="size-full flex flex-col  mt-14 justify-center items-center ">
        <span className="text-xl font-normal">Project Title</span>
        <div className="w-full flex justify-between items-center">
          <div className=" flex gap-1 pr-4">
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
          <span className=" pl-4">Time</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
