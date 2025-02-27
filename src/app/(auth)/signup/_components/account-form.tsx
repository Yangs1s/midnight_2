"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, EyeOff, Eye } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const accountSchema = z
  .object({
    userId: z
      .string()
      .min(2, "2~12자리만 가능- 영문, 숫자만 가능(한글, 특수문자 불가)")
      .max(12, "2~12자리만 가능- 영문, 숫자만 가능(한글, 특수문자 불가)")
      .regex(
        /^[A-Za-z0-9가-힣]+$/,
        "2~12자리만 가능- 영문, 숫자만 가능(한글, 특수문자 불가)"
      ),
    password: z
      .string()
      .min(8, "영문, 숫자, 특수문자를 포함한 8~20자만 사용 가능")
      .max(20, "영문, 숫자, 특수문자를 포함한 8~20자만 사용 가능"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  });

export type AccountFormType = z.infer<typeof accountSchema>;

export default function AccountForm({ type }: { type: "user" | "company" }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AccountFormType>({
    resolver: zodResolver(accountSchema),
    mode: "onChange",
  });

  const userId = useWatch({
    control,
    name: "userId",
  });

  const password = useWatch({
    control,
    name: "password",
  });

  const confirmPassword = useWatch({
    control,
    name: "confirmPassword",
  });

  const onSubmit = (data: AccountFormType) => {
    localStorage.setItem(
      "accountData",
      JSON.stringify({
        userId: data.userId,
        password: data.password,
      })
    );
    router.push(`/signup?type=${type}&step=2`);
  };

  const isValidUserId = userId && !errors.userId;
  const isValidPassword = password && !errors.password;
  const isValidConfirmPassword = confirmPassword && !errors.confirmPassword;

  return (
    <div className="h-dvh bg-[#1b1b1e] text-white p-4">
      <div className="mb-8">
        <Link href="/login" className="inline-flex items-center text-white">
          <ArrowLeft className="w-6 h-6 mr-4" />
          <span className="text-lg">회원가입</span>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">계정 정보 입력</h1>
        <p className="text-gray-400 mb-12 text-[14px]">
          원활한 서비스 진행을 위해 아래 절차를 수행해주세요.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-[#1b1b1e]"
        >
          <div>
            <Label htmlFor="userId" className="block mb-2">
              아이디
            </Label>
            <Input
              id="userId"
              {...register("userId")}
              className="w-full"
              placeholder="길동2"
            />
            {!errors.userId?.message && !userId && (
              <p className="text-gray-400 text-sm mt-1">
                2~12자리만 가능- 영문, 숫자만 가능(한글, 특수문자 불가)
              </p>
            )}
            {errors.userId && (
              <p className="text-[#ff3f3f] text-sm mt-1">
                {errors.userId.message}
              </p>
            )}
            {isValidUserId && (
              <p className="text-primary text-sm mt-1">
                사용할 수 있는 아이디입니다
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="block mb-2">
              비밀번호
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {!errors.password && !password && (
              <p className="text-gray-400 text-sm mt-1">
                영문, 숫자, 특수문자를 포함한 8~20자만 사용 가능
              </p>
            )}
            {errors.password && (
              <p className="text-[#ff3f3f] text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            {isValidPassword && (
              <p className="text-primary text-sm mt-1">
                사용할 수 있는 비밀번호입니다
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="block mb-2">
              비밀번호 확인
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                className="w-full"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-[#ff3f3f] text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
            {isValidConfirmPassword && (
              <p className="text-primary text-sm mt-1">비밀번호가 일치합니다</p>
            )}
          </div>

          <div className="fixed left-1/2 -translate-x-1/2 w-full min-w-[320px] max-w-[470px] bottom-0 p-4">
            <Button type="submit" className="w-full">
              다음
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
