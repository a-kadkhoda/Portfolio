"use client";
import { navItems } from "@/features/navbar/navItems";
import { useNavStore } from "@/zustand/useNavStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { currentNav, seCurrentNav } = useNavStore();

  return (
    <div className="h-[90px] w-full flex items-center justify-between  flex-row-reverse  ">
      <div className="flex items-center flex-row-reverse ">
        <span>Powerd By</span>
        <div className="flex items-center">
          <span>Fotros</span>
          <Image
            src={"/Fotros.svg"}
            className="size-full"
            width={24}
            height={24}
            alt="Fotros"
          />
        </div>
      </div>
      <ul className="flex gap-4">
        {navItems.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.url}
              className={`${
                currentNav == item.title ? "text-blue-500" : "opacity-85"
              } hover:text-blue-500 hover:opacity-100 transition-all duration-200 text-lg font-semibold`}
              onClick={() => seCurrentNav(item.title)}
            >
              {item.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
