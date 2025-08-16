import React from "react";
import Tags from "./Tags";

const Talents = () => {
  return (
    <div className="size-full flex flex-col justify-center items-center gap-16">
      <span className="h-max text-3xl font-bold text-foreground flex justify-center">
        مهارت های من
      </span>
      <div className="h-full flex flex-wrap  gap-4 p-4 ">
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
      </div>
    </div>
  );
};

export default Talents;
