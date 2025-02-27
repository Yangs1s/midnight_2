"use client";

import { Label } from "@/components/ui/label";
import { ArrowLeft, File, Upload, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import AlbumIcon from "@/app/(auth)/signup/_components/album-icon";
import FileIcon from "@/app/(auth)/signup/_components/file-icon";
import CameraIcon from "@/app/(auth)/signup/_components/camera-icon";
import Link from "next/link";

export default function CompanyAccountForm() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleImageSelect() {
    setIsDrawerOpen(false);
  }

  function handleClick() {
    router.push("/signup?type=company&step=3");
  }

  return (
    <div className="h-dvh bg-[#1b1b1e] text-white p-4">
      <div className="mb-8">
        <Link href="/login" className="inline-flex items-center text-white">
          <ArrowLeft className="w-6 h-6 mr-4" />
          <span className="text-lg">사업자 회원가입</span>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">사업자 정보 입력</h1>
        <p className="text-gray-400 mb-12 text-[14px]">
          회원 확인 및 가입을 진행합니다.
        </p>
      </div>

      <Label className="text-sm">
        사업자등록증(필수){"  "}
        <span className="text-[13px] text-white/30">파일 규격 최대 N mb</span>
      </Label>
      <FileItem className="mt-2" name="사업자등록증.jpg" size="1.2MB" />
      <button
        className="mt-2 w-full bg-[#26252A] rounded-md h-[48px] flex items-center justify-center gap-2"
        onClick={() => setIsDrawerOpen(true)}
      >
        사업자등록증 업로드
        <Upload className="w-4 h-4 ml-2" />
      </button>

      <AlertBox
        color="violet"
        text="기업회원 승인은 영업일 기준 0~2일 내로 처리됩니다."
      />

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="p-0 bg-[#26252a] border-none">
          <div className="px-4 pt-6 pb-16">
            <div className="flex items-center justify-between gap-2 mb-6">
              <h3 className="text-lg font-semibold">사업자 등록증 업로드</h3>
              <button type="button" onClick={() => setIsDrawerOpen(false)}>
                <X />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col justify-between items-center gap-2 p-4 bg-[#3E3E42] h-24 rounded-lg"
              >
                <AlbumIcon />
                <span>사진 보관함</span>
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col justify-between items-center gap-2 p-4 bg-[#3E3E42] h-24 rounded-lg"
              >
                <FileIcon />
                <span>파일 첨부</span>
              </button>
              <button className="flex flex-col justify-between items-center gap-2 p-4 bg-[#3E3E42] h-24 rounded-lg">
                <CameraIcon />
                <span>사진 촬영</span>
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageSelect}
        accept="image/*"
        className="hidden"
      />

      <div className="fixed left-1/2 -translate-x-1/2 w-full min-w-[320px] max-w-[470px] bottom-0 p-4">
        <Button type="submit" className="w-full" onClick={handleClick}>
          다음
        </Button>
      </div>
    </div>
  );
}

function AlertBox({ color, text }: { color: "red" | "violet"; text: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 bg-[#985CFF26] py-2 px-4 rounded-sm mt-4",
        color === "red" ? "bg-[#FF5C5C26]" : "bg-[#985CFF26]"
      )}
    >
      {/*<Info className="w-10 h-10" />*/}
      <p className="text-[13px] text-white">{text}</p>
    </div>
  );
}

function FileItem({
  name,
  size,
  className,
}: {
  name: string;
  size: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-[#26252A] h-[48px] rounded-md flex items-center justify-between px-4",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <File className="w-4 h-4" />
        <p className="text-base">{name}</p>
        <p className="text-xs text-gray-500">{size}</p>
      </div>
      <button className="p-1">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
