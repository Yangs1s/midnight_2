"use client";
import React, { useState } from "react";
import GlobalHeader from "@/components/container/global-header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  contents: z.string().min(1, { message: "내용 입력해주세요" }),
  image: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  params: { type: string; id: string };
};

const data = {
  id: 1,
  badges: ["답변대기"],
  title: "이벤 제목이 들어갑니다.",
  nickname: "관리자 닉네임",
  createdAt: "24.09.18 15:33",
  isNew: true,
  contents:
    "문의한 세부 내용이 노출됩니다. 문의한 세부 내용이 노출됩니다.문의한 세부 내용이 노출됩니다.문의한 세부 내용이 노출됩니다.문의한 세부 내용이 노출됩니다.문의한 세부 내용이 노출됩니다. 문의한 세부 내용이 노출됩니다. 문의한 세부 내용이 노출됩니다. 문의한 세부 내용이 노출됩니다.",
  image: "/images.jpeg",
  imageCount: 10,
  answer:
    "예시) 안녕하세요. 땡땡님.\n" +
    "미드나잇테라스 고객센터 1:1 문의 담당자 김땡땡입니다.\n" +
    "저희 미드나잇테라스를 이용해주셔서 감사합니다.\n" +
    "문의하신 내용의 답변을 위해 ㅇㅇ사 확인 중에 있습니다.\n" +
    "조금만 기다려 주시면 내용 확인 후 답변드리도록 하겠습니다.\n" +
    "\n" +
    "기다리시는 고객님의 마음을 헤아려 신속한 답변을 위해 노력하겠습니다.\n" +
    "추가적인 문의가 있으신 경우 1:1게시판 또는 챗봇으로 재문의 부탁드립니다.\n" +
    "감사합니다.",
};

export default function BoardInquiryDetailPage({ params }: Props) {
  console.log("params : ", params);
  const [isAddMode, setIsAddMode] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contents: "",
      image: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <GlobalHeader title={"내 문의내역"} className="border-none" />
      <div>
        <div className="flex flex-col justify-center gap-1 border-b border-white/10 py-4">
          {data.badges.map((badge, idx) => (
            <div
              key={idx}
              className={`flex items-center bg-black px-[6px] py-[2px] rounded-[4px] w-fit`}
            >
              <p className="text-white text-[12px]">{badge}</p>
            </div>
          ))}
          <div className="flex items-center gap-2 w-full">
            <p className="text-[15px] font-bold text-white">{data?.title}</p>
          </div>
          <p className="text-white/30 text-[12px] text-white truncate">
            {data?.nickname} {data?.createdAt}
          </p>
        </div>
        <div className="mt-2 border-b border-white/10 py-4">
          <p className="font-semibold mb-4">문의 내용</p>
          <p className="text-white/90 text-sm">{data?.contents}</p>
        </div>
        {data.image && (
          <div className="mt-2 border-b border-white/10 py-4">
            <p className="font-semibold mb-4">첨부된 이미지</p>
            <Image
              src={data.image}
              alt={"image"}
              width={140}
              height={110}
              className="rounded-[5px]"
            />
          </div>
        )}
        <div className="mt-2 border-b border-white/10 py-4">
          <p className="font-semibold mb-4">답변</p>
          <p className="text-white/90 text-sm whitespace-pre-wrap">
            {data?.answer}
          </p>
        </div>
        {!isAddMode && (
          <div className="mt-2 py-8 pt-10">
            <p>관리자 답변이 완료되었습니다.</p>
            <div className="flex items-center gap-2 w-full mt-4">
              <button
                type="button"
                className="flex justify-center items-center bg-[#3E3E42]/80 rounded-[5px] px-4 py-[9px] gap-2"
                onClick={() => setIsAddMode(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.67539 10.6629L5.78164 13.3254M2.23164 10.6629L10.9819 1.60701C11.9241 0.664853 13.4516 0.664851 14.3938 1.60701C15.3359 2.54916 15.3359 4.0767 14.3938 5.01885L5.33789 13.7691L0.900391 15.1004L2.23164 10.6629Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>답변에 추가 문의</p>
              </button>
              <button
                type="button"
                className="flex justify-center items-center bg-[#3E3E42]/80 rounded-[5px] px-4 py-[9px] gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.99983 9C2.99983 4.58172 6.58125 1 10.9992 1C15.4171 1 18.9985 4.58172 18.9985 9C18.9985 10.15 18.7558 11.2434 18.319 12.2316L19 16.9992L14.9146 15.9778C13.7572 16.6287 12.4215 17 10.9992 17M1.00095 14C1.00095 14.7188 1.15258 15.4021 1.4256 16.0198L1 18.9995L3.55315 18.3611C4.27643 18.768 5.11115 19 6.00005 19C8.76098 19 10.9992 16.7614 10.9992 14C10.9992 11.2386 8.76098 9 6.00005 9C3.23912 9 1.00095 11.2386 1.00095 14Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>채팅 상담</p>
              </button>
            </div>
          </div>
        )}
        {isAddMode && (
          <div className="mt-2 py-4">
            <p className="font-semibold mb-4">추가 문의</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="contents"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative h-[200px]">
                            <Textarea
                              {...field}
                              placeholder="문의 내용을 입력해주세요"
                              className="h-full bg-[#2F2F32] outline-0 border-none placeholder:text-white/60"
                              maxLength={2000}
                            />
                            <p className="absolute bottom-2 right-2 text-[12px] text-white/40">
                              {field.value.length}/2000
                            </p>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
            <div className="mt-4">
              <div className="flex items-center gap-1">
                <p>사진</p>
                <span className="text-sm">(선택)</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex flex-col justify-center items-center bg-[#2F2F32] rounded-[5px] w-14 h-14 gap-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.35579 14.6073L10.0305 8.32521L13.1716 11.4663M3.35579 14.6073H11.2084C12.5095 14.6073 13.5642 13.5526 13.5642 12.2515V8.32521M3.35579 14.6073C2.05472 14.6073 1 13.5526 1 12.2515V4.3989C1 3.09783 2.05472 2.04311 3.35579 2.04311H8.46M12.7789 5.83469L12.7789 3.61364M12.7789 3.61364L12.7789 1.39258M12.7789 3.61364L10.5579 3.61364M12.7789 3.61364L15 3.61364M5.71158 5.57679C5.71158 6.22733 5.18422 6.75469 4.53368 6.75469C3.88315 6.75469 3.35579 6.22733 3.35579 5.57679C3.35579 4.92626 3.88315 4.3989 4.53368 4.3989C5.18422 4.3989 5.71158 4.92626 5.71158 5.57679Z"
                      stroke="white"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[10px] text-white/50">0 / 5</p>
                </div>
                <Image
                  src={"/images.jpeg"}
                  alt={"profile"}
                  width={56}
                  height={56}
                  className="rounded-[5px] w-14 h-14"
                />
              </div>
            </div>
            <div className="mt-4 flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M10 10.5V6M10 13.8354V13.875M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z"
                  stroke="#767676"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <p className="text-[#767676] text-[12px]">
                  이미지는 10MB 이내, 5개까지 첨부 가능합니다.
                </p>
                <p className="text-[#767676] text-[12px]">
                  문의내용과 관련있는 사진을 등록해주세요.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="my-10 w-full">
          <p className="text-[12px] text-white/60 mb-2">
            추가 문의가 없을 시 3일 후 자동으로 문의가 종료됩니다.
          </p>
          <Button type="button" className="w-full text-[16px] font-[600]">
            {isAddMode ? "추가 문의하기" : "문의 종료"}
          </Button>
        </div>
      </div>
    </div>
  );
}
