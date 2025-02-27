import { Star } from "lucide-react";
import { useState } from "react";

interface BambooChatItemProps {
  imageUrl?: string;
  title: string;
  description: string;
  subDescription: string;
  defaultBookmarked?: boolean;
  onClick?: () => void;
  onBookmarkClick?: () => void;
}

export default function BambooChatItem({
  imageUrl,
  title,
  description,
  subDescription,
  defaultBookmarked = false,
  onClick,
  onBookmarkClick,
}: BambooChatItemProps) {
  const [isBookmarked, setIsBookmarked] = useState(defaultBookmarked);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    onBookmarkClick?.();
  };

  return (
    <div
      className="relative w-full h-[100px] rounded-lg overflow-hidden my-4"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: imageUrl ? "transparent" : "#7C3AED",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
      <div className="relative p-4 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[15px] font-medium text-white">{title}</p>
          <button onClick={handleBookmarkClick}>
            <Star
              className={`w-4 h-4 transition-colors ${
                isBookmarked ? "text-yellow-400 fill-yellow-400" : "text-white"
              }`}
            />
          </button>
        </div>

        <p className="text-xs text-white/80 mb-2">{description}</p>

        <p className="text-xs text-white">{subDescription}</p>

        <div className="absolute bottom-4 right-4 flex items-center justify-between">
          <button
            onClick={onClick}
            className="bg-black opacity-80 text-white px-[10px] py-[9px] rounded-md text-xs"
          >
            입장하기
          </button>
        </div>
      </div>
    </div>
  );
}
