"use client";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

export default function Withdrawal() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const dialogClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger>
        <span className="px-6 py-2 bg-[#262626] rounded-full text-sm">
          회원탈퇴
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-6">
          <h1 className="text-lg font-medium">회원탈퇴</h1>
          <DrawerFooter className="py-4 !px-0">
            <p className="mb-2">
              정말 탈퇴하시겠어요? 회원 탈퇴 시 계정 정보와 활동 내역은 복구가
              불가합니다.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={dialogClose}
                className="flex-1 px-4 py-3 bg-[#262626] rounded-md text-sm"
              >
                닫기
              </button>
              <button
                onClick={() => {
                  alert("탈퇴하기");
                }}
                type="button"
                className="flex-1 px-4 py-3 bg-primary rounded-md text-sm"
              >
                탈퇴하기
              </button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
