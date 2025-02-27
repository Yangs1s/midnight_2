"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NoticeButton from "@/app/(main)/chat-list/_components/notice-button";

const categoriesDummy = [
  { id: 1, name: "병원정보", category: "hospital" },
  { id: 2, name: "성형/시술", category: "surgery" },
  { id: 3, name: "스포츠", category: "sports" },
  { id: 4, name: "어드민 이미지", category: "admin" },
  { id: 5, name: "러닝크루", category: "running" },
  { id: 6, name: "다이닝", category: "dining" },
  { id: 7, name: "뷰티", category: "beauty" },
  { id: 8, name: "미용", category: "beauty" },
  { id: 9, name: "추가 항목", category: "additional" },
];

export function getCategoryName(category: string) {
  const categoryName = categoriesDummy.find(
    (c) => c.category === category
  )?.name;
  return categoryName;
}

export default function ContentTalk() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <NoticeButton
        className="mt-4"
        title="콘텐츠톡 안내 수칙"
        time="2025-01-23 12:00"
        body="공지사항 본문이 들어갑니다. 공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다."
      />

      <div className="py-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              다양한 즐길거리를 준비했어요!
            </h2>
            <CollapsibleTrigger>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="mb-6 flex flex-wrap gap-2">
              {categoriesDummy.map((category) => (
                <button
                  onClick={() => router.push(`/chat-list/${category.category}`)}
                  className="rounded-full"
                  type="button"
                  key={category.id}
                >
                  <Badge
                    variant="secondary"
                    className={cn(
                      "rounded-full bg-[#26252A] px-4 py-2 text-white hover:bg-[#26252A]/90"
                    )}
                  >
                    {category.name}
                  </Badge>
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-2 h-[100px]">
            <Card
              onClick={() => router.push("/chat-list/hospital")}
              className="relative w-full h-full overflow-hidden rounded-sm"
            >
              <Image
                width={300}
                height={300}
                src="/images.jpeg"
                alt="병원정보"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                {categoriesDummy[0].name}
              </span>
            </Card>
          </div>
          <div className="col-span-4 h-[100px]">
            <Card
              onClick={() => router.push("/chat-list/surgery")}
              className="relative w-full h-full overflow-hidden rounded-sm"
            >
              <Image
                width={300}
                height={300}
                src="/images.jpeg"
                alt="성형/시술"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                {categoriesDummy[1].name}
              </span>
            </Card>
          </div>

          <div className="col-span-2 h-[100px]">
            <Card
              onClick={() => router.push("/chat-list/sports")}
              className="relative w-full h-full overflow-hidden rounded-sm"
            >
              <Image
                width={300}
                height={300}
                src="/images.jpeg"
                alt="스포츠"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                {categoriesDummy[2].name}
              </span>
            </Card>
          </div>
          <div className="col-span-2 h-[100px]">
            <Card
              onClick={() => router.push("/chat-list/admin")}
              className="relative w-full h-full overflow-hidden rounded-sm"
            >
              <Image
                width={300}
                height={300}
                src="/images.jpeg"
                alt="어드민 이미지"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                {categoriesDummy[3].name}
              </span>
            </Card>
          </div>
          <div className="col-span-2 h-[100px]">
            <Card
              onClick={() => router.push("/chat-list/running")}
              className="relative w-full h-full overflow-hidden rounded-sm"
            >
              <Image
                width={300}
                height={300}
                src="/images.jpeg"
                alt="러닝크루"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                {categoriesDummy[4].name}
              </span>
            </Card>
          </div>

          <div className="col-span-3 h-[100px]">
            <Card
              onClick={() => router.push("/chat-list/dining")}
              className="relative w-full h-full overflow-hidden rounded-sm"
            >
              <Image
                width={300}
                height={300}
                src="/images.jpeg"
                alt="다이닝"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                {categoriesDummy[5].name}
              </span>
            </Card>
          </div>
          <div className="col-span-3 h-[100px]">
            <Card
              onClick={() => router.push("/chat-list/beauty")}
              className="relative w-full h-full overflow-hidden rounded-sm"
            >
              <Image
                width={300}
                height={300}
                src="/images.jpeg"
                alt="헤어샵"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                {categoriesDummy[6].name}
              </span>
            </Card>
          </div>

          <div className="col-span-4 h-[100px]">
            <Card
              onClick={() => router.push("/chat-list/beauty")}
              className="relative w-full h-full overflow-hidden rounded-sm"
            >
              <Image
                width={300}
                height={300}
                src="/images.jpeg"
                alt="피부"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                {categoriesDummy[7].name}
              </span>
            </Card>
          </div>
          <div className="col-span-2 h-[100px]">
            <Card
              onClick={() => router.push("/chat-list/additional")}
              className="relative w-full h-full overflow-hidden rounded-sm"
            >
              <Image
                width={300}
                height={300}
                src="/images.jpeg"
                alt="러닝크루"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                {categoriesDummy[8].name}
              </span>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
