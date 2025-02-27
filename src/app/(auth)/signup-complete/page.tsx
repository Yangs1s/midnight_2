"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";

export default function SignupComplete() {
  const router = useRouter();
  const [_, setCountdown] = useState(1.5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="h-dvh bg-[#1b1b1e] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 mb-12">
        <div className="w-20 h-20 rounded-full bg-[#26252a] flex items-center justify-center">
          <Zap className="w-8 h-8 text-[#985cff]" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">회원가입 완료!</h1>
          <p className="text-[#999999]">
            1초후 미드나잇테라스 홈 화면으로 이동합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
