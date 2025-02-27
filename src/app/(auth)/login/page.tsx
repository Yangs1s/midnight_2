"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { LoginForm } from "@/app/(auth)/login/_components/login-form";
import Image from "next/image";
import MembershipSelection from "@/app/(auth)/login/_components/membership-selection";
import { useRouter } from "next/navigation";

type LoginFormValues = {
  username: string;
  password: string;
  autoLogin: boolean;
};

export default function LoginPage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<"normal" | "business">(
    "normal"
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleVerificationStart() {
    setIsDrawerOpen(true);
  }

  function onSubmit(data: LoginFormValues) {
    console.log(data);
  }

  return (
    <div className="w-full h-dvh bg-[#1b1b1e] text-white p-4">
      <div className="flex flex-col mb-8">
        <button type="button" className="mb-4" onClick={() => router.push("/")}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-[24px] font-[600] text-white">
          하루의 끝, 하루의 시작
        </h1>
        <p className="text-[15px] text-white/80">
          익명으로 즐기는 우리를 위한 공간
        </p>
      </div>

      <div className="w-full max-w-md mx-auto">
        <div className="flex mb-8 border-b border-gray-800">
          <button
            onClick={() => setSelectedTab("normal")}
            className={`flex-1 pb-2 text-center text-sm ${
              selectedTab === "normal"
                ? "text-white border-b-2 border-primary"
                : "text-[#999999]"
            }`}
          >
            일반 회원
          </button>
          <button
            onClick={() => setSelectedTab("business")}
            className={`flex-1 pb-2 text-center text-sm ${
              selectedTab === "business"
                ? "text-white border-b-2 border-primary"
                : "text-[#999999]"
            }`}
          >
            기업 회원
          </button>
        </div>

        <LoginForm key={selectedTab} onSubmit={onSubmit} type={selectedTab} />

        <div
          className={`flex justify-center space-x-4 text-sm text-[#999999] ${selectedTab === "business" ? "mt-16" : "mt-10"} `}
        >
          <a href="/signup?type=anon" className="hover:text-white">
            비회원 입장
          </a>
          <span>|</span>
          <button
            type="button"
            onClick={handleVerificationStart}
            className="hover:text-white"
          >
            회원가입
          </button>
          <span>|</span>
          <a href="#" className="hover:text-white">
            계정 정보 찾기
          </a>
        </div>

        {selectedTab === "normal" && (
          <div className="flex flex-col gap-6 mt-14">
            <div className="flex justify-center items-center gap-4">
              <div className="w-full h-[1px] bg-[#666]" />
              <p className="text-[#666] text-[13px] text-nowrap">간편 로그인</p>
              <div className="w-full h-[1px] bg-[#666]" />
            </div>
            <div className="flex justify-center space-x-4 gap-4">
              <button className="">
                <Image
                  src="/icon/apple.svg"
                  alt="Apple"
                  className="w-12 h-12"
                  width={24}
                  height={24}
                />
              </button>
              <button className="">
                <Image
                  src="/icon/google.svg"
                  alt="Google"
                  className="w-12 h-12"
                  width={24}
                  height={24}
                />
              </button>
              <button className="">
                <Image
                  src="/icon/kakao.svg"
                  alt="KakaoTalk"
                  className="w-12 h-12"
                  width={24}
                  height={24}
                />
              </button>
              <button className="">
                <Image
                  src="/icon/naver.svg"
                  alt="Naver"
                  className="w-12 h-12"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        )}
      </div>
      <MembershipSelection open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </div>
  );
}
