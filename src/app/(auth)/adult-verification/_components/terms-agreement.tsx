import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

interface TermsAgreementProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface TermItem {
  id: string;
  label: string;
  required: boolean;
}

const terms: TermItem[] = [
  {
    id: "all",
    label: "전체 동의",
    required: false,
  },
  {
    id: "term1",
    label: "서비스 이용약관 동의",
    required: true,
  },
  {
    id: "term2",
    label: "개인정보 수집 및 이용 동의",
    required: true,
  },
  {
    id: "term3",
    label: "마케팅 정보 수신 동의",
    required: false,
  },
  {
    id: "term4",
    label: "위치기반 서비스 이용약관 동의",
    required: true,
  },
];

export default function TermsAgreement({
  open,
  onOpenChange,
}: TermsAgreementProps) {
  const router = useRouter();
  const [checkedTerms, setCheckedTerms] = useState<string[]>([]);

  function handleTermCheck(termId: string, checked: boolean) {
    setCheckedTerms((prev) =>
      checked ? [...prev, termId] : prev.filter((id) => id !== termId)
    );
  }

  function handleAllCheck(checked: boolean) {
    setCheckedTerms(checked ? terms.map((term) => term.id) : []);
  }

  function areRequiredTermsChecked() {
    const requiredTerms = terms
      .filter((term) => term.required)
      .map((term) => term.id);
    return requiredTerms.every((termId) => checkedTerms.includes(termId));
  }

  function handleNext() {
    const termsData = terms
      .filter((term) => term.id !== "all")
      .reduce(
        (acc, term) => ({
          ...acc,
          [term.id]: checkedTerms.includes(term.id),
        }),
        {}
      );

    localStorage.setItem("termsAgreement", JSON.stringify(termsData));
    router.push("/adult-verification?step=2");
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle className="text-white">서비스 약관 동의</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="all"
                checked={checkedTerms.length === terms.length}
                onCheckedChange={(checked) =>
                  handleAllCheck(checked as boolean)
                }
              />
              <label htmlFor="all" className="text-white font-medium">
                전체 동의하기
              </label>
            </div>
            <div className="h-px bg-[#302f36]" />
            {terms.map((term) => (
              <div key={term.id} className="flex items-center space-x-2">
                <Checkbox
                  id={term.id}
                  checked={checkedTerms.includes(term.id)}
                  onCheckedChange={(checked) =>
                    handleTermCheck(term.id, checked as boolean)
                  }
                />
                <label htmlFor={term.id} className="text-white">
                  {term.label}
                </label>
              </div>
            ))}
          </div>
          <div className="fixed left-1/2 -translate-x-1/2 w-full min-w-[320px] max-w-[470px] bottom-0 p-4 bg-[#26252A]">
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-[#181a20] text-white border-0 hover:bg-[#181a20]/80 h-14"
                onClick={() => onOpenChange(false)}
              >
                닫기
              </Button>
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 disabled:bg-[#3f3f46] disabled:cursor-not-allowed h-14"
                onClick={handleNext}
                disabled={!areRequiredTermsChecked()}
              >
                다음
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
