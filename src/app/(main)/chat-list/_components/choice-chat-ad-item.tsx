"use client";

import { Dot } from "lucide-react";
import Image from "next/image";

interface ChoiceChatItemProps {
  title: string;
  description: string;
  imageUrl?: string;
  advertiser: string;
  onClick?: () => void;
}

export default function ChoiceChatADItem({
  title,
  description,
  imageUrl,
  advertiser,
  onClick,
}: ChoiceChatItemProps) {
  return (
    <div className="grid grid-cols-[36px_1fr_36px] gap-4 py-4 border-b border-white/5">
      <div>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="chat-item-image"
            width={36}
            height={36}
            className="rounded-lg object-cover w-[36px] h-[36px]"
          />
        ) : (
          <div className="bg-primary rounded-lg w-[36px] h-[36px]" />
        )}
      </div>
      <div onClick={onClick}>
        <div className="flex flex-col gap-[2px]">
          <p className="flex items-center gap-1 text-sm font-medium">{title}</p>
          <p className="text-xs text-muted-foreground mb-1">{description}</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Sponsored <Dot className="w-4 h-4" />
            {advertiser}
          </p>
        </div>
      </div>
    </div>
  );
}
