"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import ChangeIcon from "@/app/(auth)/signup/_components/change-icon";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

const profileSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요")
    .max(20, "20자 이내로 입력해주세요"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function AnonProfileSetting() {
  const router = useRouter();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nickname: "",
    },
  });

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
    <div className="p-4 h-dvh">
      <div className="mb-8">
        <Link href="/login" className="inline-flex items-center text-white">
          <ArrowLeft className="w-6 h-6 mr-4" />
          <span className="text-lg">프로필 닉네임 설정</span>
        </Link>
      </div>

      <div className="space-y-4 mt-8 mb-12">
        <h2 className="text-2xl font-bold leading-[32px]">
          나를 표현할 수 있는 <br /> 닉네임을 넣어주세요!
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-[#985cff]/15 rounded-full mx-auto mt-4"
          >
            <span className="text-sm">랜덤 닉네임</span>
            <ChangeIcon />
          </button>

          <div className="fixed left-1/2 -translate-x-1/2 w-full min-w-[320px] max-w-[470px] bottom-0 p-4">
            <Button type="submit" className="w-full">
              다음
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
