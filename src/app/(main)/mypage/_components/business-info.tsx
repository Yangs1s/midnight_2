"use client";

interface BusinessInfoProps {
  status?: "대기중" | "활성";
  info: {
    businessName: string;
    businessAddress: string;
    representativeName: string;
    businessStatus: string;
    businessRegistration: {
      name: string;
      size: number;
      url: string;
    };
  };
}

export default function BusinessInfo({
  status = "활성",
  info,
}: BusinessInfoProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm">회원 상태</h2>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            status === "활성" ? "bg-primary" : "bg-white/50"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="bg-[#262626] rounded-lg p-4 space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">사업장 이름</span>
          <span className="text-sm">{info.businessName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">사업장 소재지</span>
          <span className="text-sm">{info.businessAddress}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">대표자 이름</span>
          <span className="text-sm">{info.representativeName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">사업자 등록증</span>
          <span className="text-sm">{info.businessStatus}</span>
        </div>
        <div className="bg-[#302F36] rounded-md py-3 px-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">{info.businessRegistration.name}</span>
            <span className="text-xs text-muted-foreground">
              {(info.businessRegistration.size / 1024).toFixed(1)}KB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
