import React, { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FaqSearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearch = () => {
    router.push(`/board/customer/faq-search?query=${query}`);
  };

  const onReset = () => setQuery("");

  return (
    <div className="w-full min-w-[260px] flex items-center gap-2  bg-[#2F2F32] py-2 px-4 rounded-[5px]">
      <button type="button" onClick={onSearch} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6764 9.20443C14.6764 10.4542 14.2834 11.6121 13.6143 12.5614L17.0502 15.9973C17.4407 16.3878 17.4407 17.021 17.0502 17.4115C16.6597 17.8021 16.0265 17.8021 15.636 17.4115L12.2001 13.9756C11.2508 14.6448 10.0928 15.0378 8.8431 15.0378C5.62144 15.0378 3.00977 12.4261 3.00977 9.20443C3.00977 5.98277 5.62144 3.37109 8.8431 3.37109C12.0648 3.37109 14.6764 5.98277 14.6764 9.20443ZM8.8431 13.3711C11.1443 13.3711 13.0098 11.5056 13.0098 9.20443C13.0098 6.90324 11.1443 5.03776 8.8431 5.03776C6.54191 5.03776 4.67643 6.90324 4.67643 9.20443C4.67643 11.5056 6.54191 13.3711 8.8431 13.3711Z"
            fill="white"
          />
        </svg>
      </button>
      <input
        type="text"
        className="w-full bg-transparent text-sm outline-none"
        placeholder="찾으시는 질문을 검색해보세요."
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      {query.length > 0 && (
        <button type="button" onClick={onReset}>
          <X width={18} />
        </button>
      )}
    </div>
  );
}
