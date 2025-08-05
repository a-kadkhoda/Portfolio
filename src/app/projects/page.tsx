import ProjectCard from "@/features/latestProject/components/ProjectCard";
import React from "react";

const projects = () => {
  return (
    <div className="size-full flex gap-40 flex-wrap  mt-42 pb-30">
      {Array(10)
        .fill("")
        .map((_item, index) => {
          return (
            <div className="min-w-[400px] min-h-[180px]" key={index}>
              <ProjectCard />
            </div>
          );
        })}
    </div>
  );
};

export default projects;
