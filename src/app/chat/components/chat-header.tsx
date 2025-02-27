"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import NoticeButton from "@/app/(main)/chat-list/_components/notice-button";
import { motion } from "framer-motion";

interface ChatHeaderProps {
  title?: string;
  description: string;
  imageUrl?: string;
  content: {
    top: React.ReactNode;
    detail: React.ReactNode;
  };
}

export default function ChatHeader({
                                     title,
                                     description,
                                     imageUrl,
                                     content,
                                   }: ChatHeaderProps) {
  const router = useRouter();
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={""}>
      <div className="w-full min-w-[320px] max-w-[470px] fixed top-0 z-10">
        <div
          className={cn("h-[72px]", isSearchMode ? "bg-black" : "bg-[#1b1b1e]")}
        >
          {isSearchMode ? (
            <div className="flex items-center gap-3 p-4 h-full">
              <div className="flex-1 relative">
                <input
                  type="text"
                  className="w-full bg-[#26252A] rounded-md pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none"
                  placeholder="검색어를 입력하세요"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Image
                  src="/icon/search.svg"
                  alt="search"
                  width={16}
                  height={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2"
                />
              </div>
              <button
                className="text-sm text-muted-foreground"
                onClick={() => setIsSearchMode(false)}
              >
                취소
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between p-4 gap-3 h-full">
              <div className="flex items-center gap-3 min-w-0">
                <button onClick={() => router.back()} className="flex-shrink-0">
                  <ArrowLeft className="w-6 h-6" />
                </button>

                <div className="min-w-0 flex-1">
                  {title ? (
                    <>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                          <Image
                            src={imageUrl || "/images.jpeg"}
                            alt="채팅방 이미지"
                            className="aspect-square h-full w-full object-cover"
                            width={30}
                            height={30}
                          />
                        </span>
                        <span className="font-medium text-sm truncate">
                          {title}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground truncate block">
                        {description}
                      </span>
                    </>
                  ) : (
                    <div className="min-w-0 w-full">
                      <span className="text-sm truncate block">
                        {description}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <button onClick={() => setIsSearchMode(true)}>
                  <Image
                    src="/icon/search.svg"
                    alt="search"
                    width={20}
                    height={20}
                  />
                </button>
                <button onClick={() => alert("menu clicked")}>
                  <Image
                    src="/icon/burger.svg"
                    alt="menu"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          )}
        </div>

        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="relative"
        >
          <CollapsibleTrigger asChild>
            <div className="p-4 bg-[#26252A] flex items-center justify-between">
              <p className="text-xs">
                {content.top}
              </p>
              <div
                className={cn(
                  " flex items-center justify-center w-4 h-4 transition-transform",
                  isOpen && "rotate-180",
                )}
              >
                <Image src={"/icon/downArrow.svg"} alt={"화살표"} width={32} height={32} />
                {/*<ChevronDown strokeWidth={3} className="w-3 h-3 text-white"/>*/}
              </div>
            </div>
          </CollapsibleTrigger>
          <motion.div
            initial="collapsed"
            animate={isOpen ? "open" : "collapsed"}
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <CollapsibleContent>
              <div className="bg-[#26252A] px-4 pb-4">
                <p className="text-xs">{content.detail}</p>
              </div>
            </CollapsibleContent>
          </motion.div>
        </Collapsible>
        <div className="mx-4 mt-4">
          <NoticeButton
            title="공지 내용이 들어갑니다!"
            time="12:00"
            body="알림 내용"
            actionButton={<ActionButton />}
          />
        </div>
      </div>
    </div>
  );
}

function ActionButton() {
  return <div className="underline text-muted-foreground text-xs">자세히</div>;
}
