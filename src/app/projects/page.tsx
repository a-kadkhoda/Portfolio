import ProjectCard from "@/features/projects/components/ProjectCard";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="size-full flex gap-40 flex-wrap  ">
      {Array(10)
        .fill("")
        .map((_item, index) => {
          return (
            <Link
              href={"/projects/1"}
              className="min-w-[400px] min-h-[180px]"
              key={index}
            >
              <ProjectCard />
            </Link>
          );
        })}
    </div>
  );
};

export default Projects;
