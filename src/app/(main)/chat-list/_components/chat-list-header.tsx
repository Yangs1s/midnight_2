"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ChatListHeader() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between h-[56px]">
      <p>실시간톡</p>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => alert("clicked")}>
          <Image src="/icon/separate.svg" alt="구분" width={24} height={24} />
        </button>
        <button type="button" onClick={() => alert("clicked")}>
          <Image
            src="/icon/notification-bell.svg"
            alt="알림"
            width={24}
            height={24}
          />
        </button>
        <button type="button" onClick={() => router.push('/mypage')}>
          <Image src="/icon/user.svg" alt="유저" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
