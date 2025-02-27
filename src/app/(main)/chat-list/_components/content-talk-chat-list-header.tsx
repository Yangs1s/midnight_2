"use client";

import {getCategoryName} from "@/app/(main)/chat-list/_components/content-talk";
import {Bell} from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";

type ContentTalkChatListHeaderProps = {
    category: string;
};

export default function ContentTalkChatListHeader({
                                                      category,
                                                  }: ContentTalkChatListHeaderProps) {
    const router = useRouter();
    return (
        <div className={''}>
            <div className="flex items-center justify-between h-[56px]">
                <div className="flex items-center gap-2">
                    <button type="button" onClick={() => router.back()}>
                        <Image
                            src="/icon/arrow-left.svg"
                            alt="뒤로가기"
                            width={24}
                            height={24}
                        />
                    </button>
                    <p>{getCategoryName(category)}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button type="button" onClick={() => alert("clicked")}>
                        <Bell className="w-6 h-6"/>
                    </button>
                    <button type="button" onClick={() => alert("clicked")}>
                        <Bell className="w-6 h-6"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
