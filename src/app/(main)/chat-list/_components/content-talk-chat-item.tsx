import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ContentTalkChatItemProps {
  image?: string;
  title: string;
  description: string;
  location: string;
  businessName: string;
  hashtags: string[];
  defaultBookmarked?: boolean;
  onBookmarkClick?: () => void;
  onClick?: () => void;
}

export function ContentTalkChatItem({
  image,
  title,
  description,
  location,
  businessName,
  hashtags,
  defaultBookmarked = false,
  onBookmarkClick,
  onClick,
}: ContentTalkChatItemProps) {
  const [isBookmarked, setIsBookmarked] = useState(defaultBookmarked);

  function handleBookmarkClick() {
    setIsBookmarked(!isBookmarked);
    onBookmarkClick?.();
  }
  return (
    <div className="flex gap-3 border-b border-[#26252A] py-4 w-full">
      <div className="relative h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-sm bg-primary">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
      </div>

      <div className="flex items-center justify-between flex-1 overflow-hidden">
        <div
          onClick={onClick}
          className="flex flex-col min-w-0 flex-1 overflow-hidden"
        >
          <div className="overflow-hidden">
            <h3 className="mb-1 text-sm font-semibold text-white truncate">
              {title}
            </h3>
            <p className="mb-1 text-xs text-muted-foreground truncate">
              {description}
            </p>
          </div>

          <div className="mt-auto overflow-hidden">
            <div className="mb-1 flex items-center gap-1 text-xs overflow-hidden">
              <span className="truncate">{location}</span>
              <span className="flex-shrink-0 text-muted-foreground mb-0.5">
                |
              </span>
              <span className="truncate">{businessName}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {hashtags.map((tag, index) => (
                <span key={index} className="text-xs text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="ml-2 flex-shrink-0">
          <button className="flex-shrink-0" onClick={handleBookmarkClick}>
            <Star
              className={`h-5 w-5 ${
                isBookmarked
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
