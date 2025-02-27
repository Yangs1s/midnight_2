import React from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  verificationNumber: z.string().min(6, { message: "인증번호를 입력해주세요" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function AuthVerificationNumber({
  type,
}: {
  type: "user" | "company";
}) {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verificationNumber: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", data);
    router.push(`/signup?type=${type}&step=1`);
  };

  return (
    <div className="text-white">
      <div className="pb-8">
        <Link
          href="/adult-verification?step=2"
          className="inline-flex items-center"
        >
          <ArrowLeft className="w-6 h-6 mr-4" />
          <span className="text-lg">회원가입</span>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">인증번호 확인</h1>
        <p className="text-[#666666] text-sm mb-8">
          휴대폰으로 발송한 인증번호를 입력해주세요.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label>인증번호</Label>
              <FormField
                control={form.control}
                name="verificationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          {...field}
                          placeholder="인증번호 6자리 입력"
                          maxLength={6}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, "");
                            if (value.length <= 6) {
                              field.onChange(value);
                            }
                          }}
                        />
                        <p className="absolute right-4 text-[#985CFF] text-[15px]">
                          1:22
                        </p>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <p className="text-[#666666] text-sm">
              문자가 오지 않았나요?{" "}
              <span className="text-[#985CFF] text-sm underline decoration-[#985CFF]">
                인증문자 재발송
              </span>
            </p>

            <div className="fixed left-1/2 -translate-x-1/2 w-full min-w-[320px] max-w-[470px] bottom-0 p-4">
              <Button type="submit" className="w-full">
                다음
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
