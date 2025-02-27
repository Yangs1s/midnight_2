"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Asterisk, ChevronDown, Minus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CarrierSelection from "./carrier-selection";
import VerificationTerms from "@/app/(auth)/adult-verification/_components/verification-terms";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

const carriers = [
  { id: "SKT", label: "SKT" },
  { id: "KT", label: "KT" },
  { id: "LGU", label: "LG U+" },
  { id: "SKT_MVNO", label: "SKT 알뜰폰" },
  { id: "KT_MVNO", label: "KT 알뜰폰" },
  { id: "LGU_MVNO", label: "LG U+ 알뜰폰" },
];

const formSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요" }),
  residentNumber: z.string().min(6, { message: "생년월일을 입력해주세요" }),
  residentNumber2: z
    .string()
    .min(1, { message: "주민등록번호 뒷자리를 입력해주세요" }),
  carrier: z.string().min(1, { message: "통신사를 선택해주세요" }),
  phoneNumber: z
    .string()
    .regex(/^01[0-9]{8,9}$/, { message: "올바른 휴대폰 번호를 입력해주세요" }),
});

type FormValues = z.infer<typeof formSchema>;

interface TermsData {
  [key: string]: boolean;
}

export default function PhoneVerification({
  type,
}: {
  type: "user" | "company";
}) {
  const router = useRouter();
  const [isCarrierOpen, setIsCarrierOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      residentNumber: "",
      residentNumber2: "",
      carrier: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", data);
    setIsVerificationOpen(true);
  };

  const handleVerificationTermsSubmit = (termsData: TermsData) => {
    console.log("Combined data:", { ...form.getValues(), terms: termsData });
    setIsVerificationOpen(false);
    router.push(`/adult-verification?type=${type}&step=3`);
  };

  return (
    <div className="text-white">
      <div className="pb-8">
        <Link
          href="/adult-verification?step=1"
          className="inline-flex items-center"
        >
          <ArrowLeft className="w-6 h-6 mr-4" />
          <span className="text-lg">회원가입</span>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">휴대폰 본인인증</h1>
        <p className="text-[#666666] text-sm mb-8">
          회원 확인 및 가입을 진행합니다.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label>이름</Label>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="이름을 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 생년월일 및 성별 입력 */}
            <div className="space-y-2">
              <Label className="text-sm">생년월일 및 성별</Label>
              <div className="flex justify-between items-center gap-2 bg-[#26252a] border-0 h-12 text-white placeholder:text-[#666666] rounded-md px-3">
                <div className="flex items-center w-full">
                  <FormField
                    control={form.control}
                    name="residentNumber"
                    render={({ field }) => (
                      <FormItem className="m-0">
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="YYMMDD"
                            maxLength={6}
                            value={field.value}
                            onChange={(e) => {
                              const value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              if (value.length <= 6) {
                                field.onChange(value);
                              }
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Minus width={16} />
                <div className="flex items-center w-full">
                  <FormField
                    control={form.control}
                    name="residentNumber2"
                    render={({ field }) => (
                      <FormItem className="m-0">
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="0"
                            maxLength={1}
                            value={field.value}
                            onChange={(e) => {
                              const value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              if (value.length <= 1) {
                                field.onChange(value);
                              }
                            }}
                            className="w-8"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <span className="text-white flex items-center">
                    {[...Array(6)].map((_, i) => (
                      <Asterisk key={i} size={14} />
                    ))}
                  </span>
                </div>
              </div>
              <FormField
                control={form.control}
                name="residentNumber"
                render={({ fieldState: { error } }) =>
                  error ? (
                    <div className="min-h-[1.5rem] mt-1">
                      <FormMessage />
                    </div>
                  ) : (
                    <></>
                  )
                }
              />
              <FormField
                control={form.control}
                name="residentNumber2"
                render={({ fieldState: { error } }) =>
                  error ? (
                    <div className="min-h-[1.5rem] mt-1">
                      <FormMessage />
                    </div>
                  ) : (
                    <></>
                  )
                }
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">통신사</Label>
              <FormField
                control={form.control}
                name="carrier"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsCarrierOpen(true)}
                        className="w-full justify-between bg-[#26252a] border-0 h-14 text-left font-normal text-white"
                      >
                        <span>
                          {carriers.find((c) => c.id === selectedCarrier)
                            ?.label || "통신사"}
                        </span>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">휴대폰 번호</Label>
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="휴대폰 번호 입력" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <p className="text-[#666666] text-sm">
              입력하신 정보는 본인 인증 용도로 활용되며, 서비스 이용약관을
              동의하신 후 본인 인증이 진행됩니다.
            </p>

            <p className="text-white text-[14px] font-[500] underline decoration-gray-400">
              해외에서 휴대폰 인증이 어려우신가요?
            </p>

            <div className="fixed left-1/2 -translate-x-1/2 w-full min-w-[320px] max-w-[470px] bottom-0 p-4">
              <Button type="submit" className="w-full">
                다음
              </Button>
            </div>
          </form>
        </Form>

        <CarrierSelection
          open={isCarrierOpen}
          onOpenChange={setIsCarrierOpen}
          onSelect={(carrier) => {
            setSelectedCarrier(carrier);
            form.setValue("carrier", carrier);
            setIsCarrierOpen(false);
          }}
          selectedCarrier={selectedCarrier}
          carriers={carriers}
        />

        <VerificationTerms
          open={isVerificationOpen}
          onOpenChange={setIsVerificationOpen}
          onSubmit={handleVerificationTermsSubmit}
        />
      </div>
    </div>
  );
}
