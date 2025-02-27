"use client";

import ChatListHeader from "@/app/(main)/chat-list/_components/chat-list-header";
import ContentTalkChatListHeader from "@/app/(main)/chat-list/_components/content-talk-chat-list-header";
import {usePathname} from "next/navigation";

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const category = pathname.split("/")[2];

    return (
        <div className="min-h-screen w-full">
            {category ? (
                <ContentTalkChatListHeader category={category}/>
            ) : (
                <ChatListHeader/>
            )}
            {children}
        </div>
    );
}
