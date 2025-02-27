"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const regions = [
  { value: "all", label: "전체 지역" },
  { value: "seoul", label: "서울" },
  { value: "seocho", label: "서초구" },
  { value: "gangdong", label: "강동구" },
];

export function RegionSelector() {
  const [value, setValue] = React.useState("all");
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <div className="relative py-2 flex w-full items-center gap-2 border-b border-[#26252A]">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[80px] border-none bg-transparent text-white !p-0">
          <SelectValue placeholder="전체 지역" />
        </SelectTrigger>
        <SelectContent className="border-neutral-800 text-white">
          {regions.map((region) => (
            <SelectItem
              key={region.value}
              value={region.value}
              className="text-white focus:bg-neutral-800 focus:text-white"
            >
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {isSearchOpen ? (
        <div className="flex flex-1 items-center gap-2">
          <Input
            className="flex-1 bg-[#26252A] border-none text-white placeholder:text-neutral-500 focus:outline-none focus:ring-0 h-[35px]"
            placeholder="검색어를 입력하세요"
            autoFocus
          />
          <button
            className="h-8 w-8  text-primary text-xs"
            onClick={() => setIsSearchOpen(false)}
          >
            닫기
          </button>
        </div>
      ) : (
        <div className="ml-auto flex items-center gap-2">
          <button className="h-8 w-8 ">
            <Image
              src="/icon/repeat.svg"
              alt="refresh"
              width={24}
              height={24}
            />
          </button>
          <button className="h-8 w-8 " onClick={() => setIsSearchOpen(true)}>
            <Image src="/icon/search.svg" alt="search" width={24} height={24} />
          </button>
        </div>
      )}
    </div>
  );
}
