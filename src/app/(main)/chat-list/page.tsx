"use client";

import BambooForestTalk from "@/app/(main)/chat-list/_components/bamboo-forest-talk";
import ChoiceTalk from "@/app/(main)/chat-list/_components/choice-talk";
import ContentTalk from "@/app/(main)/chat-list/_components/content-talk";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ChatPage() {
  const triggerClassName =
    "rounded-none w-20 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-[1px] data-[state=active]:border-white data-[state=active]:relative data-[state=active]:top-[1px]";

  return (
    <div className="">
      <Tabs defaultValue="choiceTalk" className="w-full !ml-0">
        <TabsList className="w-full bg-transparent border-b border-[#26252a] flex justify-start gap-4 !p-0">
          <TabsTrigger value="choiceTalk" className={triggerClassName}>
            초이스톡
          </TabsTrigger>
          <TabsTrigger value="contentTalk" className={triggerClassName}>
            콘텐츠톡
          </TabsTrigger>
          <TabsTrigger value="bambooForestTalk" className={triggerClassName}>
            대나무숲
          </TabsTrigger>
        </TabsList>

        <TabsContent value="choiceTalk">
          <ChoiceTalk />
        </TabsContent>
        <TabsContent value="contentTalk">
          <ContentTalk />
        </TabsContent>
        <TabsContent value="bambooForestTalk">
          <BambooForestTalk />
        </TabsContent>
      </Tabs>
    </div>
  );
}
