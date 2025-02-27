"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Data {
  id: number;
  title: string;
  nickname: string;
  createdAt: string;
  isNew: boolean;
  image: string | null;
  imageCount: number | null;
}

export default function BoardList({
  type,
  data,
}: {
  type: string;
  data: Data[];
}) {
  const router = useRouter();

  if (!data || data.length === 0) {
    return (
      <div className="w-full p-16 flex justify-center items-center">
        <p className="text-white/60 text-[14px]">존재하지 않습니다.</p>
      </div>
    );
  }

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex w-full justify-between items-center border-b border-white/10 py-4"
          onClick={() => router.push(`/board/${type}/${item.id}`)}
        >
          <div className="w-5/6">
            <div className="flex items-center gap-2 w-full">
              <p className="text-[15px] font-medium text-white truncate">
                {item.title}
              </p>
              {item.isNew && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <path
                    d="M6.46331 7.55859L4.93109 7.55523L2.35997 3.7811L2.31193 3.781L2.30373 7.54946L0.478516 7.54545L0.493718 0.558594L2.05476 0.562021L4.58748 4.32641L4.64512 4.32654L4.6533 0.567727L6.47852 0.571735L6.46331 7.55859Z"
                    fill="#FF5151"
                  />
                </svg>
              )}
            </div>
            <p className="text-white/60 text-sm text-white truncate">
              {item.nickname} {item.createdAt}
            </p>
          </div>
          <div className="h-[40px] w-[40px]">
            {item?.image && (
              <div className="relative w-full h-full rounded-[4px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill={true}
                  priority={true}
                  className="rounded-[4px]"
                />
                {item?.imageCount && item?.imageCount > 1 && (
                  <p className="absolute top-1 right-1 text-[8px] px-1 py-[2px] bg-[#171616CC]/80 rounded-full">
                    {item.imageCount}+
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
