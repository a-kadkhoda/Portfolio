import React from "react";
import ProjectCard from "./ProjectCard";

const LatestProject = () => {
  return (
    <div className="size-full flex flex-col justify-center items-center">
      <span className="text-3xl font-bold text-foreground flex justify-center">
        آخرین پروژه ها
      </span>
      <div className="size-full flex items-center justify-center overflow-x-auto p-4 ">
        <div className="flex gap-24 mt-42 ">
          {Array(4)
            .fill("")
            .map((_item, index) => {
              return (
                <div className="min-w-[300px] min-h-[130px]" key={index}>
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
