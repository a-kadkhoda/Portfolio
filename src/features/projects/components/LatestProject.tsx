import React from "react";
import ProjectCard from "./ProjectCard";

const LatestProject = () => {
  return (
    <div className="size-full flex flex-col justify-center items-center gap-6">
      <span className="text-3xl font-bold text-foreground flex justify-center">
        پروژه های اخیر
      </span>
      <div className="size-full flex items-center justify-center overflow-x-auto p-4 ">
        <div className="flex gap-6 mt-[calc(118px-20px)]">
          {Array(4)
            .fill("")
            .map((_item, index) => {
              return (
                <div className="min-w-[260px] min-h-[118px]" key={index}>
                  <ProjectCard />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default LatestProject;
