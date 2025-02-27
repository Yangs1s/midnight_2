"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CollapsibleChatListProps {
  title: string;
  children: React.ReactNode;
}

export default function CollapsibleChatList({
  title,
  children,
}: CollapsibleChatListProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <p className="text-lg font-medium">{title}</p>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </CollapsibleTrigger>
      <AnimatePresence initial={false}>
        <motion.div
          initial="collapsed"
          animate={isOpen ? "open" : "collapsed"}
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <CollapsibleContent forceMount>
            <div>{children}</div>
          </CollapsibleContent>
        </motion.div>
      </AnimatePresence>
    </Collapsible>
  );
}
