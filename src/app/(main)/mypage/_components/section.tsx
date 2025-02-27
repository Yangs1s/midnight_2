import Link from "next/link";

export function UserSectionList() {
  return (
    <div className="py-4">
      <Section
        title="개정정보 관리"
        items={[
          { label: "회원정보 수정", href: "/mypage/setting" },
          { label: "알림 설정", href: "/mypage/setting" },
          { label: "차단 목록", href: "/mypage/setting" },
        ]}
      />

      <Section
        title="고객센터"
        items={[
          { label: "1:1 문의", href: "/board/customer?type=inquiry" },
          { label: "내 문의내역", href: "/board/customer?type=inquiry-log" },
          { label: "FAQ", href: "/board/customer?type=faq" },
          { label: "피드백 보내기", href: "/board/customer?type=feedback" },
        ]}
      />

      <Section
        title="ABOUT 미드나잇테라스"
        items={[
          { label: "공지사항", href: "/board/about?type=notice" },
          { label: "이벤트", href: "/board/about?type=event" },
          { label: "약관 및 정책", href: "/board/terms" },
          { label: "미드나잇테라스 소개", href: "/mypage/setting" },
        ]}
        isLast={true}
      />
    </div>
  );
}

export function BusinessSectionList() {
  return (
    <div className="py-4">
      <Section
        title="비즈니스"
        items={[
          { label: "광고 상품 안내", href: "/mypage/setting" },
          { label: "내 활동 내역", href: "/mypage/setting" },
          { label: "내 광고 관리", href: "/mypage/setting" },
          { label: "사업자 정보 관리", href: "/mypage/setting" },
        ]}
      />

      <Section
        title="개정정보 관리"
        items={[
          { label: "회원정보 수정", href: "/mypage/setting" },
          { label: "알림 설정", href: "/mypage/setting" },
          { label: "차단 목록", href: "/mypage/setting" },
        ]}
      />

      <Section
        title="고객센터"
        items={[
          { label: "1:1 문의", href: "/board/customer?type=inquiry" },
          { label: "내 문의내역", href: "/board/customer?type=inquiry-log" },
          { label: "FAQ", href: "/board/customer?type=faq" },
          { label: "피드백 보내기", href: "/board/customer?type=feedback" },
        ]}
      />

      <Section
        title="ABOUT 미드나잇테라스"
        items={[
          { label: "공지사항", href: "/board/about?type=notice" },
          { label: "이벤트", href: "/board/about?type=event" },
          { label: "약관 및 정책", href: "/board/terms" },
          { label: "미드나잇테라스 소개", href: "/mypage/setting" },
        ]}
        isLast={true}
      />
    </div>
  );
}

interface SectionProps {
  title: string;
  items: {
    label: string;
    href?: string;
  }[];
  isLast?: boolean;
}

export function Section({ title, items, isLast }: SectionProps) {
  return (
    <section
      className={`mb-6 pb-6 ${isLast ? "border-none" : "border-b"}  border-white/5`}
    >
      <p className="mb-6 w-full text-sm text-white/60">{title}</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {items.map((item, i) => (
          <Link key={i} href={item.href ?? ""}>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
