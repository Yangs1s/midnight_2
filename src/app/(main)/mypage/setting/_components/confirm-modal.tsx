import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Info } from "lucide-react";

type Props = {
  triggerText: string;
  title: string;
  description: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ConfirmModal({
  triggerText,
  title,
  description,
  isOpen,
  setIsOpen,
}: Props) {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>
        <span>{triggerText}</span>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-none max-w-[340px] rounded-md">
        <AlertDialogHeader className="!text-left">
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex items-center gap-2 text-xs text-white bg-[#985CFF]/15 px-4 py-4 rounded-md mt-4">
              <Info size={24} fill="white" className="text-[#985CFF]" />
              <p>{description}</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel className="px-4 py-3 bg-[#262626] rounded-md text-sm">
          닫기
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
