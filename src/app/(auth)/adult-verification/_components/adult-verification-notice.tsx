import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdultVerificationNotice({
  type,
}: {
  type: "user" | "company";
}) {
  const router = useRouter();
  return (
    <div>
      <div className="pb-8">
        <Link href="/login" className="inline-flex items-center">
          <ArrowLeft className="w-6 h-6 mr-4" />
          <span className="text-lg font-[600]">회원가입</span>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="w-16 h-16 rounded-full border-4 border-[#fa0100] flex items-center justify-center mb-8">
          <span className="text-4xl font-bold">19</span>
        </div>

        <h1 className="text-2xl font-bold mb-8">성인 인증이 필요한 서비스</h1>
        <p className="text-[#666666] text-base leading-relaxed mb-20">
          이 정보 내용은 청소년 유해 매체물로서 정보통신망 이용 촉진 정보보호
          등에 관한 법률 및 청소년 보호법 규정에 의하여 19세 미만의 청소년은
          이용할 수 없습니다.
        </p>

        <div className="fixed left-1/2 -translate-x-1/2 w-full min-w-[320px] max-w-[470px] bottom-0 p-4 space-y-3">
          <Link href="/login">
            <Button
              variant="outline"
              className="w-full bg-[#D1D1D1] text-[#444444] border-0 hover:bg-[#26252A]/80 h-14"
            >
              19세 미만 나가기
            </Button>
          </Link>
          <Button
            className="w-full bg-primary hover:bg-[#985CFF]/80 h-14 text-white"
            onClick={() =>
              router.push(`/adult-verification?type=${type}&step=2`)
            }
          >
            성인 인증하기
          </Button>
        </div>
      </div>
    </div>
  );
}
