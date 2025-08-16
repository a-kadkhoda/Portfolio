"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LanguegeSwitcher from "./languageSwitcher/LanguageSwitcher";

enum NavItems {
  Home = "خانه",
  Projects = "پروژه ها",
  Resume = "رزومه",
  Blog = "بلاگ",
  CloudSpace = "فضای ابری",
}

const navItems = [
  {
    title: NavItems.Home,
    url: `/`,
  },
  {
    title: NavItems.Projects,
    url: `/projects`,
  },
  {
    title: NavItems.Resume,
    url: `/resume`,
  },
  {
    title: NavItems.Blog,
    url: `/blogs`,
  },
  {
    title: NavItems.CloudSpace,
    url: `/cloude-space`,
  },
];

const Navbar = () => {
  const [selected, setIsSelected] = useState<NavItems>(NavItems.Home);

  return (
    <div className="w-full h-[110px] flex justify-between items-center">
      <div className="">
        <LanguegeSwitcher />
      </div>
      <div className="flex justify-between w-1/3">
        {navItems.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.url}
              className={`${
                selected == item.title ? "text-blue-500" : "opacity-85"
              } hover:text-blue-500 hover:opacity-100 transition-all duration-200 text-lg font-semibold`}
              onClick={() => setIsSelected(item.title)}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="">
        <Image
          src={"/logos/logo.png"}
          className="size-[36px]"
          width={385}
          height={385}
          alt={"logo"}
        />
      </div>
    </div>
  );
};

export default Navbar;
