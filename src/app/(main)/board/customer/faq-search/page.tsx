"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp } from "lucide-react";
import GlobalHeader from "@/components/container/global-header";
import FaqSearchInput from "@/app/(main)/board/customer/_components/faq-search-input";

interface Data {
  id: number;
  title: string;
  contents: string;
}

const data: Data[] = [
  {
    id: 1,
    title: "개인정보 저장 되나요?",
    contents: "개인정보 저장 되나요?",
  },
  {
    id: 2,
    title: "비회원 로그인은 언제 풀리나요?",
    contents:
      "초대받은 친구가 가입을 완료하는 즉시 나와 친구 모두에게 포인트가 지급됩니다. 포인트 지급 내역은 MY메뉴 우측 상단 포인트 내역 페이지에서 확인 가능합니다.",
  },
  {
    id: 3,
    title: "초이스톡은 어떤 서비스인가요?",
    contents: "초이스톡은 어떤 서비스인가요?",
  },
  {
    id: 4,
    title: "DM알림이 오지 않아요.",
    contents: "DM알림이 오지 않아요.",
  },
  {
    id: 5,
    title: "알림이 오지 않아요.",
    contents: "알림이 오지 않아요.",
  },
];

export default function FaqSearchPage() {
  const [type, setType] = React.useState("question");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleTypeChange = (
    selectedIdType: "question" | "account" | "payment" | "etc"
  ) => {
    setType(selectedIdType);
    setSelectedId(null);
  };

  const handleClick = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const triggerClassName =
    "rounded-full w-full data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-[1px] data-[state=active]:border-white data-[state=active]:relative data-[state=active]:top-[1px]";
  return (
    <div>
      <GlobalHeader
        title={""}
        className="!border-none"
        backUrl={"/board/customer?type=faq"}
        buttons={[
          {
            node: <FaqSearchInput />,
          },
        ]}
      />
      <Tabs defaultValue={type || "question"} className="w-full !ml-0">
        <TabsList className="w-full bg-transparent flex justify-start gap-2 !p-0">
          <TabsTrigger
            value="question"
            className={triggerClassName}
            onClick={() => handleTypeChange("question")}
          >
            자주 찾는 질문
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className={triggerClassName}
            onClick={() => handleTypeChange("account")}
          >
            회원/계정
          </TabsTrigger>
          <TabsTrigger
            value="payment"
            className={triggerClassName}
            onClick={() => handleTypeChange("payment")}
          >
            광고/결제
          </TabsTrigger>
          <TabsTrigger
            value="etc"
            className={triggerClassName}
            onClick={() => handleTypeChange("etc")}
          >
            기타
          </TabsTrigger>
        </TabsList>

        <div className="mt-4">
          {data?.map((item, index) => (
            <div
              key={index}
              className="py-6 border-b border-white/10"
              onClick={() => handleClick(item.id)}
            >
              <div className="flex w-full justify-between items-center">
                <p className="text-[15px] text-white truncate">
                  Q. {item.title}
                </p>
                {item.id === selectedId ? <ChevronUp /> : <ChevronDown />}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  item.id === selectedId
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 bg-[#2F2F32] rounded-[8px] mt-3">
                  <p className="text-sm text-[#D8D8D8]">{item.contents}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
