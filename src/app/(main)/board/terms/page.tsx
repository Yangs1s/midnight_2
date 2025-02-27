"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GlobalHeader from "@/components/container/global-header";

interface TermsItem {
  id: number;
  title: string;
  link: string;
}

const TermsList: TermsItem[] = [
  {
    id: 1,
    title: "서비스 이용 약관",
    link: "/board/service-policy",
  },
  {
    id: 2,
    title: "전자금융거래 이용약관",
    link: "/board/electronic-policy",
  },
  {
    id: 3,
    title: "개인정보 처리 방침",
    link: "/board/privacy-policy",
  },
  {
    id: 4,
    title: "데이터제공정책",
    link: "/board/data-policy",
  },
  {
    id: 5,
    title: "콘텐츠 저작권 안내",
    link: "/board/contents-policy",
  },
  {
    id: 6,
    title: "어드민 추가 가능",
    link: "/board/add-admin",
  },
  {
    id: 7,
    title: "버전 정보",
    link: "/board/version",
  },
];

export default function TermsPage() {
  const router = useRouter();
  return (
    <div>
      <GlobalHeader title={"약관 및 정책"} className="border-none" />
      {TermsList.map((item: TermsItem, index) => (
        <div
          key={index}
          className="flex w-full justify-between items-center py-6 border-b border-white/10"
          onClick={() => router.push(item.link + `/${item.id}`)}
        >
          <p>{item.title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
          >
            <path
              d="M0.990234 1.54297L5.99023 6.54297L0.990234 11.543"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
