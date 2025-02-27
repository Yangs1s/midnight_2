import React from "react";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  { value: "카테고리1", label: "카테고리1" },
  { value: "카테고리2", label: "카테고리2" },
  { value: "카테고리3", label: "카테고리3" },
];

const formSchema = z.object({
  type: z.string().min(6, { message: "유형을 선택해주세요" }),
  contents: z.string().min(1, { message: "내용 입력해주세요" }),
  image: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function FeedbackForm() {
  const router = useRouter();
  const [value, setValue] = React.useState("카테고리1");
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      type: "",
      contents: "",
      image: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", data);
  };

  return (
    <div className="mt-8">
      <div className="mb-4">
        <p className="text-[#DBDBDB]">미드나잇 테라스에게 의견을 보내주세요!</p>
        <p className="text-[12px] font-medium text-white/60 whitespace-pre-wrap mt-2">
          이용하며 느끼신 불편한 점이나 바라는 점을 알려주세요.{"\n"}
          소중한 의견으로 성장하는 미드나잇테라스가 되겠습니다.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select value={value} onValueChange={setValue}>
                      <SelectTrigger className="w-full bg-[#2F2F32] !h-12 !border-none">
                        <SelectValue
                          className="text-xs text-muted-foreground"
                          placeholder="정렬"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-neutral-800 text-muted-foreground">
                        {categories.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="text-white focus:bg-neutral-800 focus:text-white text-xs"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
      <div className="mt-8">
        <p className="text-white/40 text-sm">소중한 의견 감사합니다.</p>
      </div>
      <div className="mt-2 w-full">
        <Button type="button" className="w-full text-[16px] font-[600]">
          의견 제출하기
        </Button>
      </div>
    </div>
  );
}
