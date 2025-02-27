import { cn } from "@/lib/utils";
import NewBadgeIcon from "@/app/(main)/mypage/_components/new-badge-icon";
import { RightArrowIcon } from "@/app/(main)/mypage/_components/right-arrow-icon";

interface NotificationProps {
  message: string;
  link?: string;
  className?: string;
}

export default function Notification({
  message,
  link = "#",
  className,
}: NotificationProps) {
  return (
    <a
      href={link}
      className={cn(
        "flex items-center gap-2 p-4 bg-[#985CFF]/15 rounded-[4px] text-xs text-white/80 relative",
        className
      )}
    >
      <div className="absolute -top-2 left-4">
        <NewBadgeIcon />
      </div>
      <span className="flex-1">{message}</span>
      <RightArrowIcon />
    </a>
  );
}
