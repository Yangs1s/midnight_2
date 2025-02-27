"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Link2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const userInviteCode = "1234567890";

export default function FriendInvite() {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(userInviteCode);
      toast.success("초대 코드가 복사되었습니다.");
    } catch (err) {
      console.error(err);
      toast.error("복사에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1b1e] text-white">
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-6 h-6" />
          <span className="text-lg">친구 초대</span>
        </div>
      </header>

      <main className="py-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">친구 초대 QR 코드</h2>

        <div className="bg-white p-4 rounded-lg mb-8">
          <Image
            src="/images.jpeg"
            alt="QR Code"
            width={200}
            height={200}
            className="w-[200px] h-[200px] object-cover"
          />
        </div>

        <h3 className="text-xl font-bold mb-2">편하게 친구 초대 하세요!</h3>
        <p className="text-[#bbbbbb] text-xs text-center mb-8">
          아래 QR코드를 카메라로 스캔하면
          <br />
          간편하게 초대할 수 있어요.
        </p>

        <p className="text-[#666666] mb-4 text-xs">다른 방법으로 초대하기</p>
        <div className="flex gap-4 mb-8">
          <Button className="w-12 h-12 rounded-full border-none" size="icon">
            <Image
              src="/icon/kakao.svg"
              alt="KakaoTalk"
              className="w-12 h-12"
              width={24}
              height={24}
            />
          </Button>
          <Button className="w-12 h-12 rounded-full border-none" size="icon">
            <Image
              src="/icon/mail.svg"
              alt="mail"
              className="w-12 h-12"
              width={24}
              height={24}
            />
          </Button>
          <Button
            className="w-12 h-12 rounded-full bg-[#333333] hover:bg-[#333333]/90"
            size="icon"
            onClick={handleCopyLink}
          >
            <Link2 className="w-5 h-5" />
          </Button>
        </div>

        <Card className="w-full bg-[#26252a] border-none p-4 mb-6">
          <div className="flex justify-between items-center">
            <span>친구 초대현황</span>
            <p>
              <span className="text-[#985cff] mr-1">0</span>
              <span>명</span>
            </p>
          </div>
        </Card>

        <Card className="w-full bg-[#26252a] border-none p-4">
          <h4 className="font-medium mb-4">꼭 알아두세요!</h4>
          <ul className="space-y-4 text-sm text-[#bbbbbb]">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#bbbbbb] mt-1 rounded-full"></div>
              <p>
                초대할 수 있는 친구 수는 제한이 없습니다. 마음껏 초대해 보세요.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#bbbbbb] mt-1 rounded-full"></div>
              <p>
                친구가 초대 링크를 통해 앱을 설치하고 가입까지 완료해야
                이전됩니다.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#bbbbbb] mt-1 rounded-full"></div>
              <p>
                초대받은 친구가 가입을 완료하는 즉시 나와 친구 모두에게 포인트가
                지급됩니다.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#bbbbbb] mt-1 rounded-full"></div>
              <p>
                포인트 지급 내역은 MY메뉴 우측 상단 포인트 내역 페이지에서 확인
                가능합니다.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#bbbbbb] mt-1 rounded-full"></div>
              <p>
                번개장터 운영 정책에 부합하지 않는 방법을 통해 참여한 것으로
                판단될 시, 번개포인트가 지급되지 않거나 취소 될 수 있습니다.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#bbbbbb] mt-1 rounded-full"></div>
              <p>
                친구 초대 리워드는 사전 공지 없이 내용이 변경되거나 중료될 수
                있습니다.
              </p>
            </div>
          </ul>
        </Card>
      </main>
    </div>
  );
}
