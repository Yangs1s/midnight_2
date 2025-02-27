import { useEffect, useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";

interface VerificationTermsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: TermsData) => void;
}

interface TermsData {
  [key: string]: boolean;
}

interface TermsProps {
  id: string;
  label: string;
  group?: TermsProps[];
}

const terms: TermsProps[] = [
  {
    id: "all",
    label: "전체 동의하기",
  },
  {
    id: "term1",
    label: "본인확인서비스 이용약관 동의 (필수)",
  },
  {
    id: "term2",
    label: "개인정보 수집 및 이용 동의 (필수)",
    group: [
      {
        id: "sub_term1",
        label: "약관 하위 항목 노출 (필수)",
      },
      {
        id: "sub_term2",
        label: "약관 하위 항목 노출 (필수)",
      },
    ],
  },
  {
    id: "term3",
    label: "고유식별 정보처리 동의 (필수)",
  },
  {
    id: "term4",
    label: "통신사 이용약관 동의 (필수)",
  },
  {
    id: "term5",
    label: "개인정보 제3자 제공 동의 (필수)",
  },
];

function getAllTermIds(term: TermsProps): string[] {
  let ids = [term.id];
  if (term.group) {
    term.group.forEach((child) => {
      ids = ids.concat(getAllTermIds(child));
    });
  }
  return ids;
}

function getAllRequiredIds(termsList: TermsProps[]): string[] {
  let ids: string[] = [];
  for (const term of termsList) {
    if (term.id !== "all") {
      ids.push(term.id);
    }
    if (term.group) {
      ids = ids.concat(getAllRequiredIds(term.group));
    }
  }
  return ids;
}

function findTermById(
  id: string,
  termsList: TermsProps[]
): TermsProps | undefined {
  for (const term of termsList) {
    if (term.id === id) return term;
    if (term.group) {
      const found = findTermById(id, term.group);
      if (found) return found;
    }
  }
  return undefined;
}

export default function VerificationTerms({
  open,
  onOpenChange,
  onSubmit,
}: VerificationTermsProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const requiredIds = getAllRequiredIds(terms);
  const isAllChecked = requiredIds.every((id) => checkedItems.includes(id));

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (id === "all") {
      if (checked) {
        setCheckedItems(requiredIds);
      } else {
        setCheckedItems([]);
      }
    } else {
      const term = findTermById(id, terms);
      if (!term) return;
      const idsToToggle = getAllTermIds(term);
      if (checked) {
        setCheckedItems((prev) =>
          Array.from(new Set([...prev, ...idsToToggle]))
        );
      } else {
        setCheckedItems((prev) =>
          prev.filter((item) => !idsToToggle.includes(item))
        );
      }
    }
  };

  const handleSubmit = () => {
    const termsData = requiredIds.reduce(
      (acc, termId) => ({
        ...acc,
        [termId]: checkedItems.includes(termId),
      }),
      {}
    );
    onSubmit(termsData);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="p-4">
        <div>
          <h2 className="text-xl font-semibold">서비스 이용 약관 동의</h2>
          <div className="space-y-6 mt-8 mb-[80px]">
            {terms.map((term) => (
              <CheckBoxContent
                key={term.id}
                term={term}
                checkedItems={checkedItems}
                isAllChecked={isAllChecked}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>
          <div className="fixed left-1/2 -translate-x-1/2 w-full min-w-[320px] max-w-[470px] bottom-0 p-4 bg-[#1b1b1e] flex gap-2">
            <Button
              variant="outline"
              className="w-full bg-[#302F36] text-white border-0 hover:bg-[#181a20]/80 h-14"
              onClick={() => onOpenChange(false)}
            >
              닫기
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!isAllChecked}
              className="w-full bg-primary hover:bg-primary/90 h-14"
            >
              다음
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CheckBoxContent({
  term,
  checkedItems,
  isAllChecked,
  handleCheckboxChange,
  isChild,
}: {
  term: TermsProps;
  checkedItems: string[];
  isAllChecked: boolean;
  handleCheckboxChange: (value: string, checked: boolean) => void;
  isChild?: boolean;
}) {
  const [isGroupOpen, setGroupOpen] = useState(false);
  const isTermAll = term.id === "all";
  const isChecked = isTermAll ? isAllChecked : checkedItems.includes(term.id);
  return (
    <>
      <div
        key={term.id}
        className={`flex items-center justify-between space-x-2 ${isTermAll ? "border-b border-b-[#333] pb-4" : "border-0"} ${isChild ? "ml-8" : ""}`}
      >
        <div className="flex items-center gap-2">
          <Checkbox
            id={term.id}
            checked={isChecked}
            onCheckedChange={(checked) =>
              handleCheckboxChange(term.id, checked as boolean)
            }
            className={`border-white data-[state=checked]:bg-primary data-[state=checked]:border-primary ${isTermAll ? "rounded-full w-6 h-6" : ""}`}
          />
          <label
            htmlFor={term.id}
            className={`${isTermAll ? "text-[16px] text-white" : "text-sm text-white/60--- font-medium"} leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
          >
            {term.label}
          </label>
        </div>
        {!isTermAll && !term.group && (
          <button
            type="button"
            className="text-[13px] text-[#666] underline decoration-[#666]"
          >
            보기
          </button>
        )}
        {!isTermAll && term.group && (
          <button
            type="button"
            className="text-[13px] text-white/70"
            onClick={() => setGroupOpen(!isGroupOpen)}
          >
            {isGroupOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
        )}
      </div>
      {isGroupOpen &&
        term.group &&
        term.group.map((item, index) => (
          <CheckBoxContent
            key={"group" + index}
            term={item}
            checkedItems={checkedItems}
            isAllChecked={isAllChecked}
            handleCheckboxChange={handleCheckboxChange}
            isChild={true}
          />
        ))}
    </>
  );
}
