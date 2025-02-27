"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { node } from "prop-types";

export default function GlobalHeader({
  title,
  className,
  backUrl,
  buttons,
}: {
  title: string;
  className?: string;
  backUrl?: string;
  buttons?: {
    node: React.ReactNode;
  }[];
}) {
  const router = useRouter();
  const handleBack = () => {
    if (backUrl) {
      router.push(backUrl);
      return;
    }
    router.back();
  };
  return (
    <header
      className={`flex items-center justify-between py-4 border-b border-white/10 ${className}`}
    >
      <div className="flex items-center gap-2" onClick={handleBack}>
        <ArrowLeft className="w-6 h-6 mr-4" />
        <span className="text-lg">{title}</span>
      </div>
      <div>
        {buttons &&
          buttons?.map((item, index) => (
            <React.Fragment key={index}>{item.node}</React.Fragment>
          ))}
      </div>
    </header>
  );
}
