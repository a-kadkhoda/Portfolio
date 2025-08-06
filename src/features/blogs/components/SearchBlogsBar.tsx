import { ChevronDown, SearchIcon } from "lucide-react";
import React from "react";

const SearchBlogsBar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center bg-background-gray rounded-[64px] px-4">
      <div className="w-1/3 h-12 bg-background rounded-[64px] flex justify-between items-center ">
        <div className="size-10 flex justify-center pr-3 items-center rounded-r-[64px]">
          <SearchIcon className="text-foreground-gray rotate-y-180" />
        </div>
        <input
          type="text"
          className="size-full outline-0  p-3"
          placeholder="جستجو ..."
        />
      </div>

      <button
        type="button"
        className="flex px-6 items-center text-foreground-gray cursor-pointer hover:text-foreground transition-colors duration-300"
      >
        <span className="text-xl font-medium ">فیلتر</span>
        <ChevronDown />
      </button>
    </div>
  );
};

export default SearchBlogsBar;
