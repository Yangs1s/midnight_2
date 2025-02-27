"use client";

import { ArrowLeft, Camera, ImageIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const profileSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요")
    .max(20, "20자 이내로 입력해주세요"),
  profileImage: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function CompanyProfileSetting() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    "/base-profile.png"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nickname: "",
      profileImage: "",
    },
  });

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
        form.setValue("profileImage", imageUrl);
        setIsDrawerOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: ProfileFormValues) => {
    // test라는 닉네임이 이미 사용 중이라고 가정
    if (data.nickname === "test") {
      form.setError("nickname", { message: "이미 사용 중인 닉네임입니다." });
      return;
    }
    console.log(data);
    router.push("/signup-complete");
  };

  return (
    <div className="h-dvh p-4">
      <div className="mb-8">
        <Link href="/login" className="inline-flex items-center text-white">
          <ArrowLeft className="w-6 h-6 mr-4" />
          <span className="text-lg">프로필 설정</span>
        </Link>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex-1">
            <div className="space-y-4 mb-12">
              <h2 className="text-2xl font-bold leading-[32px]">
                나를 표현할 수 있는
                <br />
                프로필 이미지와 닉네임을
                <br />
                넣어주세요!
              </h2>
            </div>

            <div className="flex justify-between items-center gap-4 mb-10">
              <div>
                <p className="text-[#999999] text-xs">
                  서비스 활동 시 사용될 프로필입니다.
                </p>
              </div>
              <div className="relative">
                <div
                  className={`w-24 h-24 rounded-full ${
                    selectedImage ? "" : "bg-[#26252a]"
                  } flex items-center justify-center overflow-hidden`}
                >
                  {selectedImage && (
                    <Image
                      src={selectedImage}
                      alt="Selected profile"
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                  <DrawerTrigger asChild>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full p-0 flex items-center justify-center">
                      <Camera className="w-4 h-4" />
                    </button>
                  </DrawerTrigger>
                  <DrawerContent className="p-0 bg-[#26252a] border-none">
                    <div className="px-4 pt-6 pb-16">
                      <h3 className="text-lg font-semibold mb-4">
                        프로필 사진 업로드
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="flex flex-col items-center gap-2 p-4 bg-[#1b1b1e] h-24 rounded-lg"
                        >
                          <ImageIcon className="w-6 h-6" />
                          <span>사진 보관함</span>
                        </button>
                        <button className="flex flex-col items-center gap-2 p-4 bg-[#1b1b1e] h-24 rounded-lg">
                          <Camera className="w-6 h-6" />
                          <span>사진 촬영</span>
                        </button>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="space-y-2">
                      <Label className="text-sm">닉네임</Label>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="조용한 크림파스타"
                          maxLength={20}
                          className=" placeholder:text-[#999999]"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#999999]">
                          {field.value.length}/20
                        </span>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="fixed left-1/2 -translate-x-1/2 w-full min-w-[320px] max-w-[470px] bottom-0 p-4">
            <Button type="submit" className="w-full">
              다음
            </Button>
          </div>
        </form>
      </Form>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageSelect}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
