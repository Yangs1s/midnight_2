"use client";

import { Pencil, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  businessName: z.string().min(1, "업종을 입력해주세요"),
  businessRegistration: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function BusinessInfoSetting() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      businessRegistration: "",
    },
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(file);
        form.setValue("businessRegistration", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileDelete = () => {
    setSelectedFile(null);
    form.setValue("businessRegistration", "");
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log({
      ...data,
      businessRegistration: selectedFile,
    });
    setIsDrawerOpen(false);
  };

  const dialogClose = () => {
    form.reset();
    setSelectedFile(null);
    setIsDrawerOpen(false);
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger className="w-full text-center flex items-center justify-center gap-2 text-sm text-white bg-[#151515] px-6 py-4 rounded-sm mt-4 mb-8">
        <Pencil size={14} />
        <div>사업자 정보 변경</div>
      </DrawerTrigger>
      <DrawerContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-lg font-medium">사업자 등록 정보 변경</h1>
                <button type="button" onClick={dialogClose}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>업종</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm"
                          placeholder="업종을 입력해주세요"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessRegistration"
                  render={() => (
                    <FormItem>
                      <FormLabel>사업자 등록증</FormLabel>
                      <div className="space-y-2">
                        {selectedFile && (
                          <div className="flex items-center justify-between bg-[#262626] rounded-md px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">
                                {selectedFile.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {(selectedFile.size / 1024).toFixed(1)}KB
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={handleFileDelete}
                              className="text-muted-foreground hover:text-white"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            className="hidden"
                            ref={fileRef}
                            onChange={handleFileSelect}
                          />
                          <button
                            type="button"
                            onClick={() => fileRef.current?.click()}
                            className="w-full bg-[#262626] rounded-md px-4 py-3 text-sm"
                          >
                            파일 업로드
                          </button>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <DrawerFooter className="px-6 py-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={dialogClose}
                  className="flex-1 px-4 py-3 bg-[#262626] rounded-md text-sm"
                >
                  닫기
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-primary rounded-md text-sm"
                >
                  저장
                </button>
              </div>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
