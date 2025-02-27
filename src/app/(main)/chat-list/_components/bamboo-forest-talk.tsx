import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import CollapsibleChatList from "@/app/(main)/chat-list/_components/callapsible-chat-list";
import BambooChatItem from "@/app/(main)/chat-list/_components/bamboo-chat-item";
import BambooCarousel from "@/app/(main)/chat-list/_components/bamboo-carousel";
import NoticeButton from "@/app/(main)/chat-list/_components/notice-button";
import { useRouter } from "next/navigation";

const CAROUSEL_IMAGES = [
  {
    url: "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13262118&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMC8yMS9DTFMxMDAwNi82MmZhMWExMy03ZjRmLTQ1NWMtYTZlNy02ZTk2YjhjMjBkYTk=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006",
    onClick: () => alert("button clicked 1"),
  },
  {
    url: "https://media.istockphoto.com/id/520700958/ko/사진/아름다운-꽃-배경기술.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=",
    onClick: () => alert("button clicked 2"),
  },
];

const CHAT_ROOMS = [
  {
    id: "bamboo-1",
    title: "흑백요리사방",
    description: "흑백요리사 보는 사람 모여라",
    subDescription: "1.5만명 방문",
    defaultBookmarked: true,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s",
  },
  {
    id: "bamboo-2",
    title: "연애상담소",
    description: "연애 고민 있으신 분들 오세요",
    subDescription: "3.2천명 방문",
    defaultBookmarked: false,
  },
  {
    id: "bamboo-3",
    title: "취업준비방",
    description: "취준생들의 이야기 공유방",
    subDescription: "2.8천명 방문",
    defaultBookmarked: false,
  },
];

export default function BambooForestTalk() {
  const triggerClassName =
    "px-[12px] py-[9px] rounded-full bg-[#26252A] data-[state=active]:bg-white data-[state=active]:text-black transition-colors text-xs";
  const router = useRouter();

  return (
    <div>
      <BambooCarousel className="mt-4 mb-2" images={CAROUSEL_IMAGES} />

      <NoticeButton
        className="mt-4 mb-4"
        title="대나무숲 안내 수칙"
        time="2025.01.23"
        body="공지사항 본문이 들어갑니다. 공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다."
      />

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="flex justify-start gap-2 bg-transparent mb-8">
          <TabsTrigger value="active" className={triggerClassName}>
            활성 채팅
          </TabsTrigger>
          <TabsTrigger value="completed" className={triggerClassName}>
            종료된 채팅
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <CollapsibleChatList title="즐겨찾는 채팅방">
            {CHAT_ROOMS.map((room) => (
              <BambooChatItem
                key={room.id}
                title={room.title}
                description={room.description}
                subDescription={room.subDescription}
                defaultBookmarked={room.defaultBookmarked}
                imageUrl={room.imageUrl}
                onClick={() => router.push(`/chat/${room.id}`)}
                onBookmarkClick={() => alert("bookmark clicked")}
              />
            ))}
          </CollapsibleChatList>

          <Separator className="my-4 !bg-[#26252A] py-1" />

          {CHAT_ROOMS.map((room, index) => (
            <div key={index} className="mb-4">
              <BambooChatItem
                title={room.title}
                description={room.description}
                subDescription={room.subDescription}
                defaultBookmarked={room.defaultBookmarked}
                imageUrl={room.imageUrl}
                onClick={() => router.push(`/chat/${room.id}`)}
                onBookmarkClick={() => alert("bookmark clicked")}
              />
            </div>
          ))}
        </TabsContent>

        <TabsContent value="completed">
          <div className="">종료된 채팅이 없습니다</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
