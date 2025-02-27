import React from "react";
import { useRouter } from "next/navigation";

const data = ["계정 찾기", "계정 복구", "계정 탈퇴", "계정"];

export default function FaqSearchLogs() {
  const router = useRouter();

  return (
    <div className="px-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3.5 mb-6 cursor-pointer"
          onClick={() =>
            router.push(`/board/customer/faq-search?query=${item}`)
          }
        >
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
              d="M15.1393 8.98958C15.1393 10.2393 14.7463 11.3972 14.0772 12.3466L17.5131 15.7825C17.9036 16.173 17.9036 16.8062 17.5131 17.1967C17.1226 17.5872 16.4894 17.5872 16.0989 17.1967L12.663 13.7608C11.7137 14.4299 10.5557 14.8229 9.30599 14.8229C6.08433 14.8229 3.47266 12.2112 3.47266 8.98958C3.47266 5.76792 6.08433 3.15625 9.30599 3.15625C12.5277 3.15625 15.1393 5.76792 15.1393 8.98958ZM9.30599 13.1562C11.6072 13.1562 13.4727 11.2908 13.4727 8.98958C13.4727 6.6884 11.6072 4.82292 9.30599 4.82292C7.0048 4.82292 5.13932 6.6884 5.13932 8.98958C5.13932 11.2908 7.0048 13.1562 9.30599 13.1562Z"
              fill="#8F8F8F"
            />
          </svg>
          <p className="text-sm text-white">{item}</p>
        </div>
      ))}
    </div>
  );
}
