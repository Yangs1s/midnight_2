"use client";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  nickname: z.string().min(2, "2자 이상 입력해주세요").max(20),
  image: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProfileSetting() {
  const [preview, setPreview] = useState<string>("/random-profile.png");
  const fileRef = useRef<HTMLInputElement>(null);
  const [isActive, setActive] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "신사동 장원영",
      image: "/images.jpeg",
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        form.setValue("image", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setIsDrawerOpen(false);
  };

  const dialogClose = () => {
    form.reset();
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    if (!isActive) return;
    setIsDrawerOpen(!isCameraOpen);
  }, [isCameraOpen]);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileRef}
        onChange={handleImageUpload}
      />
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger>
          <span className="px-4 py-2 bg-[#262626] rounded-full text-sm  text-nowrap">
            편집
          </span>
        </DrawerTrigger>
        <DrawerContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="p-6 pb-4">
              <h1 className="text-lg font-medium mb-8">프로필 편집</h1>

              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div
                    className={cn(
                      "w-24 h-24 rounded-full overflow-hidden",
                      !preview && "bg-gray-700"
                    )}
                  >
                    {preview ? (
                      <Image
                        src={preview}
                        alt="Profile"
                        className="w-full h-full object-cover"
                        width={96}
                        height={96}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/60">
                        No Image
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 w-8 h-8 bg-black rounded-full flex items-center justify-center"
                    onClick={() => {
                      setIsCameraOpen(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.77432 3.61857C7.05663 3.05393 7.63374 2.69727 8.26502 2.69727H12.235C12.8663 2.69727 13.4433 3.05393 13.7257 3.61857L14.0983 4.36393H15.25C16.6307 4.36393 17.75 5.48322 17.75 6.86393V15.1973C17.75 16.578 16.6307 17.6973 15.25 17.6973H5.25C3.86929 17.6973 2.75 16.578 2.75 15.1973V6.86393C2.75 5.48322 3.86929 4.36393 5.25 4.36393H6.40164L6.77432 3.61857ZM11.9167 11.0306C11.9167 11.9511 11.1705 12.6973 10.25 12.6973C9.3295 12.6973 8.58333 11.9511 8.58333 11.0306C8.58333 10.1101 9.3295 9.36393 10.25 9.36393C11.1705 9.36393 11.9167 10.1101 11.9167 11.0306ZM13.5833 11.0306C13.5833 12.8715 12.0909 14.3639 10.25 14.3639C8.40905 14.3639 6.91667 12.8715 6.91667 11.0306C6.91667 9.18968 8.40905 7.69727 10.25 7.69727C12.0909 7.69727 13.5833 9.18968 13.5833 11.0306Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                <div className="w-full">
                  <label className="block text-xs text-muted-foreground mb-2">
                    닉네임
                  </label>
                  <div className="relative flex items-center ">
                    <input
                      {...form.register("nickname")}
                      className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm"
                      placeholder="닉네임을 입력해주세요"
                    />
                    <div className="absolute right-4">
                      <span className="text-xs text-muted-foreground">
                        {form.watch("nickname").length}/20
                      </span>
                    </div>
                    {form.formState.errors.nickname && (
                      <p className="text-xs text-red-500 mt-1">
                        {form.formState.errors.nickname.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <DrawerFooter className="px-6 py-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={dialogClose}
                  className="flex-1 px-4 py-3 bg-[#262626] rounded-[4px] text-sm"
                >
                  닫기
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-primary rounded-[4px] text-sm"
                >
                  저장
                </button>
              </div>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
      <Drawer open={isCameraOpen} onOpenChange={setIsCameraOpen}>
        <DrawerContent className="!bg-transparent">
          <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-col rounded-[13px] bg-[#252525]/80 w-full mb-2">
              {[
                {
                  id: 1,
                  title: "사진 보관함",
                  fn: () => fileRef.current?.click(),
                },
                {
                  id: 2,
                  title: "사진 찍기",
                  fn: () => fileRef.current?.click(),
                },
                {
                  id: 3,
                  title: "랜덤 프로필",
                  fn: () => {},
                },
                {
                  id: 4,
                  title: "프로필 사진 삭제",
                  fn: () => {},
                },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={item.fn}
                  className={`flex justify-center items-center h-[60px] ${item.id === 4 ? "border-none" : "border-b border-[#38383A]"}`}
                >
                  <p
                    className={`${item.id === 4 ? "text-[#E04037]" : "text-[#4080DA]"} text-[16px] font-[400]`}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col rounded-[13px] bg-[#252525]/80 w-full mb-2">
              <div
                onClick={() => {
                  setIsCameraOpen(false);
                }}
                className="flex justify-center items-center h-[60px]"
              >
                <p className={`text-[#4080DA] text-[16px] font-[400]`}>취소</p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
