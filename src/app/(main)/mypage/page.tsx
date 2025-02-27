"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Notification from "./_components/notification";
import { BusinessSectionList, UserSectionList } from "./_components/section";

import BambooCarousel from "@/app/(main)/chat-list/_components/bamboo-carousel";
import ProfileSetting from "@/app/(main)/mypage/_components/profile-setting";
import Link from "next/link";
import MailIcon from "@/app/(main)/mypage/_components/mail-icon";
import CartIcon from "@/app/(main)/mypage/_components/cart-icon";
import HomeWidgetIcon from "@/app/(main)/mypage/_components/home-widget-icon";
import FriendIcon from "@/app/(main)/mypage/_components/friend-icon";
import BellIcon from "@/app/(main)/mypage/_components/bell-icon";
import {
  RightArrowIcon,
  RightArrowIcon2,
} from "@/app/(main)/mypage/_components/right-arrow-icon";
import ChoiceTalkIcon from "@/app/(main)/mypage/_components/service-icon/choice-talk-icon";
import DailyTalkIcon from "@/app/(main)/mypage/_components/service-icon/daily-talk-icon";
import ContentsTalkIcon from "@/app/(main)/mypage/_components/service-icon/contents-talk-icon";
import LoungeIcon from "@/app/(main)/mypage/_components/service-icon/lounge-icon";
import FireIcon from "@/app/(main)/mypage/_components/service-icon/fire-icon";
import TimerIcon from "@/app/(main)/mypage/_components/service-icon/timer-icon";
import BookIcon from "@/app/(main)/mypage/_components/service-icon/book-icon";
import CrownIcon from "@/app/(main)/mypage/_components/service-icon/crown-icon";

function ProfileSection() {
  return (
    <>
      <div className="py-4 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
          <Image
            src="/images.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
            width={64}
            height={64}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold  text-nowrap">
              신사동 장원영
            </h2>
            <span className="bg-primary text-white text-sm rounded-[4px] px-2 py-[2px]  text-nowrap">
              일반
            </span>
            {/*<span className="bg-[#438ADC] text-white text-sm rounded-[4px] px-2 py-[2px]">*/}
            {/*  기업*/}
            {/*</span>*/}
          </div>
          {/*<div className="flex items-center gap-2 mt-1">*/}
          {/*  <div className="text-sm">Lv.1</div>*/}
          {/*  <div className="flex-1 h-1 bg-gray-700 rounded-full">*/}
          {/*    <div*/}
          {/*      className="h-full bg-[#5d50e7] rounded-full"*/}
          {/*      style={{ width: `${Math.min(levelPercentage, 100)}%` }}*/}
          {/*    ></div>*/}
          {/*  </div>*/}
          {/*  <HelpCircle className="w-4 h-4 text-gray-500" />*/}
          {/*</div>*/}
        </div>
        <ProfileSetting />
      </div>
      <div className="flex w-full flex-col items-center gap-[14px] px-6 py-5 bg-[#2F2F32] rounded-[10px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[15px] text-white">
            다양한 활동을 위해 로그인/회원가입해 주세요!
          </p>
          <p className="text-[12px] text-[#CFCFCF]">
            회원가입 후에도 익명으로 활동 가능해요!
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-2">
          <Link
            href="/login"
            className="flex justify-center items-center w-full h-[40px] bg-[#3E3E42] text-white text-[15px] rounded-[4px]"
          >
            로그인
          </Link>
          <Link
            href="/login"
            className="flex justify-center items-center w-full h-[40px] bg-primary text-white text-[15px] rounded-[4px]"
          >
            회원가입
          </Link>
        </div>
      </div>
    </>
  );
}

type Props = {
  searchParams: {
    userType: "business" | "user";
  };
};

export default function ProfilePage({ searchParams }: Props) {
  const isBusiness = searchParams.userType === "business";

  return (
    <div className="min-h-screen bg-[#1b1b1e] text-white">
      <header className="flex items-center justify-between py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <ArrowLeft className="w-6 h-6 mr-4" />
          <span className="text-lg">마이페이지</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <CartIcon />
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center p-0">
              29
            </Badge>
          </div>
          <div className="relative">
            <MailIcon />
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center p-0">
              26
            </Badge>
          </div>
        </div>
      </header>

      <ProfileSection />

      <div className="grid grid-cols-3 gap-2 py-4">
        {[
          {
            title: "홈 위젯 설정",
            subtitle: "편리한 이용",
            link: "",
            icon: <HomeWidgetIcon />,
          },
          {
            title: "친구초대",
            subtitle: "간단한 초대",
            link: "/mypage/invite",
            icon: <FriendIcon />,
          },
          {
            title: "알림설정",
            subtitle: "중요알림설정",
            link: "",
            icon: <BellIcon />,
          },
        ].map((item, i) => (
          <Link key={i} href={item.link}>
            <div className="bg-[#2F2F32] px-4 py-3 rounded-[4px] flex flex-col items-center text-center">
              {item.icon}
              <div className="text-[13px] font-medium mt-2 text-nowrap">
                {item.title}
              </div>
              <div className="text-xs text-gray-500 mt-[2px] text-nowrap">
                {item.subtitle}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <BambooCarousel
        images={[{ url: "/images.jpeg" }, { url: "/images.jpeg" }]}
        className="mb-6"
      />

      <div>
        <div className="flex justify-between items-center py-4 text-sm font-[600] text-white/60">
          <p>나의 활동</p>
          <button type="button">
            <p className="text-[13px]">더보기</p>
          </button>
        </div>
        <div className="grid grid-cols-4 items-center py-4 bg-[#26252A] rounded-[4px] overflow-x-auto">
          {[
            { value: "100+", label: "등록 광고" },
            { value: "30", label: "마감 임박" },
            { value: "5", label: "신규 문의" },
            { value: "50+", label: "마감" },
          ].map((stat, i) => (
            <div key={i} className="text-center relative">
              <div className="text-lg font-bold whitespace-nowrap">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 whitespace-nowrap">
                {stat.label}
              </div>
              {i < 3 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>

      <Notification
        message="‘고양이가 갑자기 우다다하더..’글에 댓글[1]이 달렸습니다"
        className="my-4"
      />

      <div className="bg-[#121212] h-[10px] w-full" />

      <div className="w-full py-4">
        <div className="flex justify-between items-center py-2 text-sm font-[600] text-white/60">
          <p>자주 찾는 서비스</p>
          <button
            type="button"
            className="flex items-center justify-center gap-2"
          >
            <p className="text-[13px]">전체보기</p>
            <RightArrowIcon />
          </button>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 items-center overflow-x-auto">
          {[
            { label: "초이스톡", icon: <ChoiceTalkIcon /> },
            { label: "데일리톡", icon: <DailyTalkIcon /> },
            { label: "콘텐츠톡", icon: <ContentsTalkIcon /> },
            { label: "라운지", icon: <LoungeIcon /> },
            { label: "인기글", icon: <FireIcon /> },
            { label: "가계부", icon: <BookIcon /> },
            { label: "타이머", icon: <TimerIcon /> },
            { label: "채용공고", icon: <CrownIcon /> },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between items-center py-4 px-2"
            >
              {item.icon}
              <p className="text-[12px] mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#121212] h-[10px] w-full" />

      {isBusiness ? <BusinessSectionList /> : <UserSectionList />}

      <div className="flex items-center gap-2 mb-2 bg-[#26252A] p-4 rounded-[4px]">
        <Image
          src={"/icon/mypage-mail-icon.png"}
          alt={"mypage-mail-icon"}
          width={40}
          height={40}
        />
        <div className="flex-1">
          <span className="text-sm text-white">피드백 보내기</span>
          <p className="text-xs text-gray-500">
            미드나잇테라스에게 의견을 보내주세요
          </p>
        </div>
        <RightArrowIcon2 />
      </div>

      <footer className="py-4">
        <div className="text-left text-xs text-[#6E6E6E]">
          <p>contact@midtrc.com</p>
          <p className="mt-1">
            외부 컨택 정보 및 고객센터 관련 안내문구가 들어갑니다
          </p>
          <p className="mt-1">고객센터 운영시간: 평일 00:00~00:00</p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            type="button"
            className="w-full h-[48px] bg-white text-black rounded-[4px]"
          >
            1:1 문의
          </button>
          <button
            type="button"
            className="w-full h-[48px] bg-white text-black rounded-[4px]"
          >
            채팅 상담
          </button>
        </div>
        <div className="flex items-center justify-center my-6">
          <button
            onClick={() => alert("로그아웃")}
            className="w-full h-[48px] bg-transparent border border-[#6E6E6E] rounded-[4px]"
          >
            <span className="text-[12px] text-[#f5f5f5]">로그아웃</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
