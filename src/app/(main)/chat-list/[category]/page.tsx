"use client";

import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React, {useState} from "react";
import {FileText, Info} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Carousel from "@/app/(main)/chat-list/_components/carousel";
import {ContentTalkChatItem} from "@/app/(main)/chat-list/_components/content-talk-chat-item";
import {RegionSelector} from "@/app/(main)/chat-list/_components/rejion-selector";
import CollapsibleChatList from "@/app/(main)/chat-list/_components/callapsible-chat-list";
import {useRouter} from "next/navigation";

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

// 카테고리별 탭 리스트 정의
const categoryTabs = {
    hospital: {
        name: "병원정보",
        tabs: [
            {value: "all", label: "전체"},
            {value: "popular", label: "인기"},
            {value: "dermatology", label: "피부과"},
            {value: "plastic", label: "성형외과"},
            {value: "dental", label: "치과"},
            {value: "eye", label: "안과"},
            {value: "ear", label: "이비인후과"},
            {value: "mental", label: "정신건강"},
            {value: "general", label: "일반의"},
        ],
    },
    surgery: {
        name: "성형/시술",
        tabs: [
            {value: "all", label: "전체"},
            {value: "popular", label: "인기"},
            {value: "eye", label: "눈매교정"},
            {value: "face", label: "안면윤곽"},
            {value: "nose", label: "코성형"},
            {value: "lip", label: "입술"},
            {value: "hair", label: "모발"},
            {value: "body", label: "몸매"},
            {value: "skin", label: "피부"},
            {value: "etc", label: "기타"},
        ],
    },
    sports: {
        name: "스포츠",
        tabs: [
            {value: "all", label: "전체"},
            {value: "popular", label: "인기"},
            {value: "gym", label: "헬스장"},
            {value: "yoga", label: "요가"},
            {value: "pilates", label: "필라테스"},
            {value: "running", label: "러닝크루"},
            {value: "cycling", label: "자전거"},
            {value: "etc", label: "기타"},
        ],
    },
};

const sortOptions = [
    {value: "newest", label: "최신순"},
    {value: "oldest", label: "오래된순"},
    {value: "popular", label: "인기순"},
];

type ChatCategoryPageProps = {
    params: {
        category: string;
    };
};

export default function Page({params}: ChatCategoryPageProps) {
    const [value, setValue] = React.useState("newest");
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const router = useRouter();

    const triggerClassName =
        "px-[12px] py-[9px] rounded-full bg-[#26252A] data-[state=active]:bg-white data-[state=active]:text-black transition-colors text-xs";

    const currentCategory =
        categoryTabs[params.category as keyof typeof categoryTabs];

    if (!currentCategory) {
        return <div>존재하지 않는 카테고리입니다.</div>;
    }

    return (
        <div className={''}>
            <Tabs defaultValue="all" className="w-full">
                <TabsList className="flex justify-start gap-2 bg-transparent mb-4 overflow-x-auto h-fit no-scrollbar">
                    {currentCategory.tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className={triggerClassName}
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <Carousel images={CAROUSEL_IMAGES}/>

                {currentCategory.tabs.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value}>
                        <div className="!text-muted-foreground">
                            <Select value={value} onValueChange={setValue}>
                                <SelectTrigger className="w-[70px] border-none bg-transparent !p-0 ml-auto !h-8">
                                    <SelectValue
                                        className="text-xs text-muted-foreground"
                                        placeholder="정렬"
                                    />
                                </SelectTrigger>
                                <SelectContent className="border-neutral-800 text-muted-foreground">
                                    {sortOptions.map((option) => (
                                        <SelectItem
                                            key={option.value}
                                            value={option.value}
                                            className="text-white focus:bg-neutral-800 focus:text-white text-xs"
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="mb-4">
                            <p>즐겨찾는 톡</p>
                            {Array.from({length: 2}).map((_, index) => (
                                <ContentTalkChatItem
                                    key={index}
                                    onClick={() => router.push(`/chat/${index}`)}
                                    onBookmarkClick={() => alert("bookmark clicked")}
                                    image="/images.jpeg"
                                    title="타이틀 들어갑니다. 타이틀이 길어지면 짤립니다."
                                    description="디스크립션 들어갑니다. 디스크립션이 길어지면 짤립니다."
                                    location="서울"
                                    businessName="헤어샵"
                                    hashtags={["헤어샵", "미용실"]}
                                />
                            ))}
                        </div>

                        <div>
                            <div className="flex items-center gap-1">
                                <p>어드민 고정톡</p>
                                <TooltipProvider>
                                    <Tooltip open={isTooltipOpen}>
                                        <TooltipTrigger asChild>
                                            <button
                                                className="pl-1inline-flex items-center"
                                                onClick={() => setIsTooltipOpen(true)}
                                            >
                                                <Info className="h-3 w-4 text-muted-foreground"/>
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent
                                            className="bg-neutral-800 text-[10px] border-none"
                                            sideOffset={5}
                                            onPointerDownOutside={() => setIsTooltipOpen(false)}
                                        >
                                            <p>어드민이 고정한 톡방입니다</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            {Array.from({length: 2}).map((_, index) => (
                                <ContentTalkChatItem
                                    key={index}
                                    onClick={() => router.push(`/chat/${index}`)}
                                    onBookmarkClick={() => alert("bookmark clicked")}
                                    image="/images.jpeg"
                                    title="타이틀 들어갑니다. 타이틀이 길어지면 짤립니다."
                                    description="디스크립션 들어갑니다. 디스크립션이 길어지면 짤립니다."
                                    location="서울"
                                    businessName="헤어샵"
                                    hashtags={["헤어샵", "미용실"]}
                                />
                            ))}
                        </div>

                        <RegionSelector/>

                        <div className="my-4">
                            <CollapsibleChatList title="서울">
                                {Array.from({length: 2}).map((_, index) => (
                                    <ContentTalkChatItem
                                        key={index}
                                        onClick={() => router.push(`/chat/${index}`)}
                                        onBookmarkClick={() => alert("bookmark clicked")}
                                        image="/images.jpeg"
                                        title="타이틀 들어갑니다. 타이틀이 길어지면 짤립니다."
                                        description="디스크립션 들어갑니다. 디스크립션이 길어지면 짤립니다."
                                        location="서울"
                                        businessName="헤어샵"
                                        hashtags={["헤어샵", "미용실"]}
                                    />
                                ))}
                            </CollapsibleChatList>
                            <div className="flex flex-col items-center gap-2 py-8">
                                <FileText size={16} className="text-muted-foreground"/>
                                <p className="text-muted-foreground text-xs">
                                    검색 결과가 없습니다.
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
