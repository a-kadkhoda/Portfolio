"use client";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

enum Languages {
  Iran = "/logos/🇮🇷.png",
  English = "/logos/🇬🇧.png",
}

const languageItems = [
  {
    image: Languages.Iran,
    value: "iran",
  },
  {
    image: Languages.English,
    value: "english",
  },
];

const LanguageSwitcher = () => {
  return (
    <Select defaultValue={"iran"}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-max">
        {languageItems.map((item) => {
          return (
            <SelectItem
              key={item.value}
              className="w-max"
              value={item.value}
              disabled={item.value == "english"}
            >
              <Image src={item.image} width={24} height={25} alt={item.value} />
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
