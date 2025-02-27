"use client";

import { Dot, Star } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface ChoiceChatItemProps {
  type: string;
  time: string;
  timeType: string;
  title: string;
  location: string;
  description: string;
  imageUrl?: string;
  defaultBookmarked?: boolean;
  onBookmarkClick?: () => void;
  onClick?: () => void;
  isNew?: boolean;
}

export default function ChoiceChatItem({
  type,
  time,
  timeType,
  title,
  location,
  description,
  imageUrl,
  defaultBookmarked = false,
  onBookmarkClick,
  onClick,
  isNew = false,
}: ChoiceChatItemProps) {
  const [isBookmarked, setIsBookmarked] = useState(defaultBookmarked);

  function handleBookmarkClick() {
    setIsBookmarked(!isBookmarked);
    onBookmarkClick?.();
  }

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
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <span className="text-primary">{type}</span>
            <Dot className="w-4 h-4" />
            <span className="text-white">{timeType}</span>{" "}
            <span className="text-primary">{time}</span>
            <span className="text-white">기준</span>
          </p>
          <div className="flex items-center gap-1">
            <p className="text-sm font-medium">{title}</p>
            <div className="flex items-center gap-[2px]">
              <p className="text-xs text-muted-foreground">{location}</p>
              {isNew && (
                <Image src="/icon/new.svg" alt="new" width={16} height={16} />
              )}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center h-[36px] w-[36px]">
        <button onClick={handleBookmarkClick}>
          <Star
            className={`w-4 h-4 text-muted-foreground transition-colors ${
              isBookmarked ? "text-yellow-400 fill-yellow-400" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
