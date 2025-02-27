import React from "react";
import GlobalHeader from "@/components/container/global-header";

type Props = {
  params: { type: string; id: string };
};

const data = {
  id: 1,
  title: "이벤 제목이 들어갑니다.",
  nickname: "관리자 닉네임",
  createdAt: "24.09.18 15:33",
  isNew: true,
  contents:
    "주제를 벗어나거나 타인을 비방/음해/조롱, 사회적 정서에 반하는 내용, 분쟁의 소지가 있는 경우 운영 정책에 의거하여 메세지 입력이 제한 될 수 있으니 주의해주세요.주제를 벗어나거나 타인을 비방/음해/조롱, 사회적 정서에 반하는 내용, 분쟁의 소지가 있는 경우 운영 정책에 의거하여 메세지 입력이 제한 될 수 있으니 주의해주세요.주제를 벗어나거나 타인을 비방/음해/조롱, 사회적 정서에 반하는 내용, 분쟁의 소지가 있는 경우 운영 정책에 의거하여 메세지 입력이 제한 될 수 있으니 주의해주세요.주제를 벗어나거나 타인을 비방/음해/조롱, 사회적 정서에 반하는 내용, 분쟁의 소지가 있는 경우 운영 정책에 의거하여 메세지 입력이 제한 될 수 있으니 주의해주세요.주제를 벗어나거나 타인을 비방/음해/조롱, 사회적 정서에 반하는 내용, 분쟁의 소지가 있는 경우 운영 정책에 의거하여 메세지 입력이 제한 될 수 있으니 주의해주세요.",
  image: "/images.jpeg",
  imageCount: 10,
};

function getHeaderName(type: string): string {
  switch (type) {
    case "notice":
      return "공지사항";
    case "faq":
      return "FAQ";
    case "event":
      return "이벤트";
    case "service-policy":
      return "서비스 이용 약관";
    case "electronic-policy":
      return "전자금융거래 이용약관";
    case "privacy-policy":
      return "개인정보 처리 방침";
    case "data-policy":
      return "데이터제공정책";
    case "contents-policy":
      return "콘텐츠 저작권 안내";
    case "add-admin":
      return "어드민 추가 가능";
    case "version":
      return "버전 정보";
    default:
      return "";
  }
}

export default function BoardDetailPage({ params }: Props) {
  console.log("params : ", params);
  return (
    <div>
      <GlobalHeader
        title={getHeaderName(params.type)}
        className="border-none"
      />
      <div className="py-4">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center gap-2 w-full">
            <p className="text-[15px] font-bold text-white">{data?.title}</p>
            {data?.isNew && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
              >
                <path
                  d="M6.46331 7.55859L4.93109 7.55523L2.35997 3.7811L2.31193 3.781L2.30373 7.54946L0.478516 7.54545L0.493718 0.558594L2.05476 0.562021L4.58748 4.32641L4.64512 4.32654L4.6533 0.567727L6.47852 0.571735L6.46331 7.55859Z"
                  fill="#FF5151"
                />
              </svg>
            )}
          </div>
          <p className="text-white/30 text-[12px] text-white truncate">
            {data?.nickname} {data?.createdAt}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-white text-[14px]">{data?.contents}</p>
        </div>
      </div>
    </div>
  );
}
