import { cn } from "@/lib/utils";
import { ArrowLeft, ChevronRight, EllipsisVertical, X } from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { useState } from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";

type NoticeButtonProps = {
  className?: string;
  title: string;
  time: string;
  body: string;
  image?: string;
  actionButton?: React.ReactNode;
};

function ActionButton() {
  return (
    <div className="bg-white/20 rounded-full flex items-center justify-center w-4 h-4">
      <ChevronRight strokeWidth={3} className="w-3 h-3 text-white" />
    </div>
  );
}

export default function NoticeButton({
  className,
  title,
  body,
  time,
  image,
  actionButton = <ActionButton />,
}: NoticeButtonProps) {
  const [open, setOpen] = useState(false);
  const [isFullView, setIsFullView] = useState(false);

  return (
    <div className="relative">
      {isFullView ? (
        <NoticeFullView
          body={body}
          time={time}
          image={image}
          onOpenChange={setIsFullView}
        />
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild className="z-40">
            <button
              type="button"
              className={cn(
                "w-full bg-[#26252A] rounded-md flex items-center gap-2 justify-between px-4 py-[13px]",
                className
              )}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/icon/loudspeaker.svg"
                  alt="스피커"
                  width={16}
                  height={16}
                />
                <p className="text-white/60 text-xs">{title}</p>
              </div>
              {actionButton}
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="py-8 px-6">
              <DrawerTitle className="text-white text-lg">
                <div className="flex items-center justify-between">
                  <p className="text-white text-lg">공지사항</p>
                  <button onClick={() => setOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pt-0">
              <p className="text-muted-foreground text-xs font-normal mb-2">
                {time}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-white text-sm font-normal line-clamp-3">
                  {body}
                </p>
                {image && (
                  <Image
                    className="rounded-md w-[40px] h-[40px] object-cover"
                    src={image}
                    alt="공지사항 이미지"
                    width={40}
                    height={40}
                  />
                )}
              </div>
            </div>
            <DrawerFooter>
              <div className="flex items-center gap-2">
                <DrawerClose asChild>
                  <button className="w-full bg-[#26252A] rounded-md flex items-center gap-2 justify-center px-4 py-[13px]">
                    닫기
                  </button>
                </DrawerClose>
                <button
                  onClick={() => setIsFullView(true)}
                  className="w-full bg-primary rounded-md flex items-center gap-2 justify-center px-4 py-[13px]"
                >
                  전체보기
                </button>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}

function NoticeFullView({
  body,
  time,
  image,
  onOpenChange,
}: {
  body: string;
  time: string;
  image?: string;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3 }}
      className="fixed bg-[#26252A] z-40 top-0 left-0 w-full h-full"
    >
      <div className="w-full h-full p-6 pt-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-start gap-6">
            <button onClick={() => onOpenChange(false)}>
              <ArrowLeft size={24} />
            </button>
            <p className="text-white text-lg">공지사항</p>
          </div>
          <EllipsisVertical size={24} />
        </div>
        <div>
          <p className="text-muted-foreground text-xs font-normal mb-2">
            {time}
          </p>
          <p className="text-white text-sm font-normal mb-8">{body}</p>
        </div>
        {image && (
          <div className="relative w-full aspect-video">
            <Image
              className="rounded-md w-full h-full object-cover"
              src={image}
              alt="공지사항 이미지"
              fill
            />
          </div>
        )}
        <div className="fixed bottom-24 left-0 w-full px-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              className="h-4 w-4 rounded-full border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"
            />
            <label
              htmlFor="terms"
              className="text-white/60 text-sm font-normal"
            >
              일주일간 보지 않기
            </label>
          </div>
        </div>
        <button
          className="w-[calc(100%-2rem)] bg-white/20 rounded-md flex items-center gap-2 justify-center px-4 py-[13px] fixed bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2"
          onClick={() => onOpenChange(false)}
        >
          닫기
        </button>
      </div>
    </motion.div>
  );
}
