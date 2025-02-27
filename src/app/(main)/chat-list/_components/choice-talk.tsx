"use client";

import CollapsibleChatList from "@/app/(main)/chat-list/_components/callapsible-chat-list";
import Carousel from "@/app/(main)/chat-list/_components/carousel";
import ChoiceChatADItem from "@/app/(main)/chat-list/_components/choice-chat-ad-item";
import ChoiceChatItem from "@/app/(main)/chat-list/_components/choice-chat-item";
import NoticeButton from "@/app/(main)/chat-list/_components/notice-button";
import { RegionSelector } from "@/app/(main)/chat-list/_components/rejion-selector";
import { Separator } from "@/components/ui/separator";
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

const CHAT_ITEMS = [
  {
    id: "choice-1",
    isNew: true,
    timeType: "오전",
    type: "초중 20이상",
    time: "02:58",
    title: "채팅방 이름이 들어갑니다",
    location: "강남 논현",
    description: "오늘만 강남 특가 이벤트 진행!",
    defaultBookmarked: true,
    imageUrl: "/images.jpeg",
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
  {
    id: "choice-2",
    timeType: "오후",
    type: "초중 10이상",
    time: "01:30",
    title: "취업준비생 모여라",
    location: "잠실 송파",
    description: "취준생들의 고민 상담소",
    defaultBookmarked: false,
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
  {
    id: "choice-3",
    timeType: "오후",
    type: "초중 15이상",
    time: "12:45",
    title: "주식투자 정보공유방",
    location: "여의도",
    description: "실시간 주식 정보 공유",
    defaultBookmarked: false,
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
  {
    id: "choice-4",
    timeType: "오전",
    type: "초중 30이상",
    time: "11:20",
    title: "독서모임",
    location: "강남 선릉",
    description: "이번 주 선정도서: 아몬드",
    defaultBookmarked: true,
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
  {
    id: "choice-5",
    type: "초중 25이상",
    time: "10:15",
    timeType: "오전",
    title: "맛집 탐방",
    location: "홍대 신촌",
    description: "주말 맛집 투어 멤버 모집중",
    defaultBookmarked: false,
    onClick: () => alert("clicked"),
    onBookmarkClick: () => alert("bookmark clicked"),
  },
];

export default function ChoiceTalk() {
  const router = useRouter();

  return (
    <div>
      <Carousel className="mt-4 mb-4" images={CAROUSEL_IMAGES} />
      <NoticeButton
        image="/images.jpeg"
        className="mt-4 mb-4"
        title="초이스톡 안내 수칙"
        time="2025-01-23 12:00"
        body="공지사항 본문이 들어갑니다. 공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다.공지사항 본문이 들어갑니다."
      />
      <CollapsibleChatList title="즐겨찾는 톡">
        {CHAT_ITEMS.map((item) => (
          <ChoiceChatItem
            key={item.title}
            {...item}
            onClick={() => router.push(`/chat/${item.id}`)}
          />
        ))}
      </CollapsibleChatList>
      <Separator className="my-4 !bg-[#26252A] py-1" />
      <RegionSelector />
      {CHAT_ITEMS.map((item) => (
        <ChoiceChatItem
          key={item.title}
          {...item}
          onClick={() => router.push(`/chat/${item.id}`)}
        />
      ))}
      <ChoiceChatADItem {...CHAT_ITEMS[0]} advertiser="메디힐" />
      <Carousel className="my-4" images={CAROUSEL_IMAGES} />
    </div>
  );
}
