"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Eye, EyeOff, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Withdrawal from "@/app/(main)/mypage/_components/withdrawal";
import BusinessInfoSetting from "@/app/(main)/mypage/_components/business-info-setting";
import BusinessInfo from "../_components/business-info";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import ConfirmModal from "@/app/(main)/mypage/setting/_components/confirm-modal";

const formSchema = z
  .object({
    id: z
      .string()
      .min(2, "2자 이상 입력해주세요")
      .max(12, "12자 이하로 입력해주세요")
      .regex(/^[a-z0-9]+$/, "영문 소문자, 숫자만 입력 가능합니다"),
    password: z
      .string()
      .min(8, "8자 이상 입력해주세요")
      .max(20, "20자 이하로 입력해주세요")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "영문, 숫자, 특수문자를 포함해주세요"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

const mockBusinessInfo = {
  businessName: "주식회사 미드나잇테라스",
  businessAddress: "서울시 강남구 신사동 142-12",
  representativeName: "홍길동",
  businessStatus: "등록 완료",
  businessRegistration: {
    name: "IMG_4861",
    size: 4540.9,
    url: "/images.jpeg",
  },
};

type Props = {
  searchParams: {
    userType: "business" | "user";
  };
};

export default function SettingPage({ searchParams }: Props) {
  const isBusiness = searchParams.userType === "business";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "길동2",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-[#1b1b1e] text-white">
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-6 h-6" />
          <span className="text-lg">회원정보 수정</span>
        </div>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-6 space-y-6">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>아이디</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm"
                    placeholder="2~12자리만 가능- 영문, 숫자만 가능(한글, 특수문자 불가)"
                  />
                </FormControl>
                <FormMessage />
                <p className="text-xs text-muted-foreground mt-1">
                  2~12자리만 가능- 영문, 숫자만 가능(한글, 특수문자 불가)
                </p>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 변경</FormLabel>
                <FormControl>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...field}
                      className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm pr-10"
                      placeholder="영문, 숫자, 특수문자를 포함한 8~20자"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
                <p className="text-xs text-muted-foreground mt-1">
                  영문, 숫자, 특수문자를 포함한 8~20자
                </p>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...field}
                      className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm pr-10"
                      placeholder="영문, 숫자, 특수문자를 포함한 8~20자"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="hidden" id="submit-button">
            저장
          </button>
        </form>
      </Form>

      {isBusiness && <BusinessInfo status="활성" info={mockBusinessInfo} />}

      {isBusiness && (
        <div className="flex items-center gap-2 text-xs text-white bg-[#985CFF]/15 px-4 py-4 rounded-md mt-4">
          <Info size={14} fill="white" className="text-[#985CFF]" />
          <p>회원 상태가 승인인 경우는 변경 불가하며 조회만 가능합니다.</p>
        </div>
      )}

      {isBusiness && <BusinessInfoSetting />}

      <div className="flex justify-center mb-20">
        <Withdrawal />
      </div>

      <ConfirmModal
        triggerText="사업자등록증 등록 신청 완료 모달"
        title="사업자등록증 등록 신청 완료"
        description="관리자의 사업자등록증 심사가 진행됩니다. 심사 완료 이후 광고가 가능합니다. "
        isOpen={isConfirmModalOpen}
        setIsOpen={setIsConfirmModalOpen}
      />

      <div
        className={cn(
          "p-4",
          isBusiness ? "mt-auto" : "fixed bottom-20 left-0 right-0 bg-[#1b1b1e]"
        )}
      >
        <Button
          type="button"
          onClick={() => {
            document.getElementById("submit-button")?.click();
          }}
          className="w-full"
        >
          저장
        </Button>
      </div>
    </div>
  );
}
