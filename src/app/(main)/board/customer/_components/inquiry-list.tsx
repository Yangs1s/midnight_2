import React from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import CustomerFooter from "@/app/(main)/board/customer/_components/customer-footer";
import Image from "next/image";

interface Data {
  id: number;
  badges: string[];
  title: string;
  createdAt: string;
  image?: string;
  isRead: boolean;
}

const data: Data[] = [
  {
    id: 1,
    badges: ["답변대기"],
    title: "입력한 문의 제목이 들어갑니다.",
    createdAt: "2024.09.25 오후 05:55",
    isRead: false,
  },
  {
    id: 2,
    badges: ["답변대기"],
    title: "입력한 문의 제목이 들어갑니다.",
    createdAt: "2024.09.25 오후 05:55",
    image: "/images.jpeg",
    isRead: false,
  },
  {
    id: 3,
    badges: ["답변대기"],
    title: "입력한 문의 제목이 들어갑니다.",
    createdAt: "2024.09.25 오후 05:55",
    isRead: true,
  },
  {
    id: 4,
    badges: ["답변대기"],
    title: "입력한 문의 제목이 들어갑니다.",
    createdAt: "2024.09.25 오후 05:55",
    isRead: true,
  },
  {
    id: 5,
    badges: ["답변대기"],
    title: "입력한 문의 제목이 들어갑니다.",
    createdAt: "2024.09.25 오후 05:55",
    isRead: true,
  },
];

export default function InquiryList() {
  const rotuer = useRouter();

  const handleClick = (id: number) => {
    rotuer.push(`/board/customer/inquiry/${id}`);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 p-2 bg-black">
        <p className="text-[15px] font-semibold text-white/90">
          1:1 채팅상담 내역 보기
        </p>
        <ChevronRight width={20} />
      </div>
      <div className="mb-8">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`py-6 border-b border-white/10 ${item.isRead ? "opacity-30" : ""}`}
            onClick={() => handleClick(item.id)}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col w-full gap-2">
                <div className="flex w-full items-center gap-2">
                  {item.badges.map((badge, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center bg-[#503B74] px-[6px] py-[2px] rounded-[4px] w-fit`}
                    >
                      <p className="text-white text-[12px]">{badge}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[15px] text-white truncate">{item.title}</p>
                <p className="text-[12px] text-white/30">{item.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CustomerFooter />
    </div>
  );
}
