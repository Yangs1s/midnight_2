import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Card } from "@/components/ui/card";

interface MembershipSelectionProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MembershipSelection({
  open,
  onOpenChange,
}: MembershipSelectionProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="p-4">
        <DrawerHeader>
          <DrawerTitle className="text-xl text-white text-start mb-4">가입 유형 선택</DrawerTitle>
        </DrawerHeader>
          <div className="flex justify-between items-center gap-4 mb-12">
            <Link href="/adult-verification?type=user&step=1" className="w-1/2">
              <Card
                  className="bg-[#302F36] border-0 hover:bg-[#302F36]/80 transition-colors text-center !rounded-[4px]"
              >
                <div className="flex items-center justify-center h-[96px] p-4">
                  <div>
                    <h3 className="text-primary font-bold mb-2">
                      일반 <span className="text-white">회원가입</span>
                    </h3>
                    <p className="text-[#666666] text-xs">
                      개인 사용자를 위한 서비스 및 혜택이 제공됩니다.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/adult-verification?type=company&step=1" className="w-1/2 h-[96px]">
              <Card
                  className="bg-[#302F36] border-0 hover:bg-[#302F36]/80 transition-colors text-center !rounded-[4px]"
              >
                <div className="flex items-center justify-center h-[96px] p-4">
                  <div>
                    <h3 className="text-primary font-bold mb-2">
                      기업 <span className="text-white">회원가입</span>
                    </h3>
                    <p className="text-[#666666] text-xs">
                      광고 및 사업 관련 맞춤형 서비스가 제공됩니다.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          {/*<button*/}
          {/*    type="button"*/}
          {/*    className="w-[130px] h-[6px] bg-white self-center rounded-full"*/}
          {/*    onClick={() => onOpenChange(false)}*/}
          {/*/>*/}
      </DrawerContent>
    </Drawer>
);
}
