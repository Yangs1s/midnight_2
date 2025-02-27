"use client";

import React from "react";
import GlobalHeader from "@/components/container/global-header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BoardList from "@/app/(main)/board/_components/board-list";
import { useRouter } from "next/navigation";

type Props = {
  searchParams: {
    type: "notice" | "event";
  };
};

interface Data {
  id: number;
  title: string;
  nickname: string;
  createdAt: string;
  isNew: boolean;
  image: string | null;
  imageCount: number | null;
}

const data: Data[] = [
  {
    id: 1,
    title: "공지사항 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: true,
    image: "/images.jpeg",
    imageCount: 10,
  },
  {
    id: 2,
    title:
      "공지사항 제목이 들어갑니다. 공지사항 제목이 들어갑니다. 공지사항 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: true,
    image: "/images.jpeg",
    imageCount: 10,
  },
  {
    id: 3,
    title:
      "공지사항 제목이 들어갑니다. 공지사항 제목이 들어갑니다. 공지사항 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: false,
    image: null,
    imageCount: null,
  },
  {
    id: 4,
    title: "공지사항 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: false,
    image: null,
    imageCount: null,
  },
  {
    id: 5,
    title: "공지사항 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: false,
    image: null,
    imageCount: null,
  },
];

const eventData: Data[] = [
  {
    id: 1,
    title: "이벤 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: true,
    image: "/images.jpeg",
    imageCount: 10,
  },
  {
    id: 2,
    title:
      "이벤 제목이 들어갑니다. 이벤 제목이 들어갑니다. 이벤 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: true,
    image: "/images.jpeg",
    imageCount: 10,
  },
  {
    id: 3,
    title:
      "이벤 제목이 들어갑니다. 이벤 제목이 들어갑니다. 이벤 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: false,
    image: null,
    imageCount: null,
  },
  {
    id: 4,
    title: "이벤 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: false,
    image: null,
    imageCount: null,
  },
  {
    id: 5,
    title: "이벤트 제목이 들어갑니다.",
    nickname: "관리자 닉네임",
    createdAt: "24.09.18 15:33",
    isNew: false,
    image: null,
    imageCount: null,
  },
];

export default function AboutPage({ searchParams }: Props) {
  const type = searchParams.type;
  const router = useRouter();
  const triggerClassName =
    "rounded-none w-full data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-[1px] data-[state=active]:border-white data-[state=active]:relative data-[state=active]:top-[1px]";

  const handleTypeChange = (type: "notice" | "event") => {
    router.push(`/board/about?type=${type}`);
  };

  return (
    <div>
      <GlobalHeader
        title={"ABOUT 미드나잇테라스"}
        className="!border-none"
        backUrl={"/mypage"}
      />
      <Tabs defaultValue={type || "notice"} className="w-full !ml-0">
        <TabsList className="w-full bg-transparent border-b border-[#26252a] flex justify-start gap-4 !p-0">
          <TabsTrigger
            value="notice"
            className={triggerClassName}
            onClick={() => handleTypeChange("notice")}
          >
            공지사항
          </TabsTrigger>
          <TabsTrigger
            value="event"
            className={triggerClassName}
            onClick={() => handleTypeChange("event")}
          >
            이벤트
          </TabsTrigger>
        </TabsList>

        <BoardList data={type === "notice" ? data : eventData} type={type} />
      </Tabs>
    </div>
  );
}
