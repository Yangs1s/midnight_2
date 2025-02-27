"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";

export default function FooterNav() {
    const pathname = usePathname();

    const navigation = [
        {
            name: "홈",
            href: "/",
            icon: (isActive: boolean) => (
                <Image
                    src="/icon/home.svg"
                    alt="홈"
                    width={24}
                    height={24}
                    className={isActive ? "opacity-100" : "opacity-50"}
                />
            ),
        },
        {
            name: "실시간톡",
            href: "/chat-list",
            icon: (isActive: boolean) => (
                <Image
                    src="/icon/chat.svg"
                    alt="실시간톡"
                    width={24}
                    height={24}
                    className={isActive ? "opacity-100" : "opacity-50"}
                />
            ),
        },
        {
            name: "라운지",
            href: "/lounge",
            icon: (isActive: boolean) => (
                <Image
                    src="/icon/users.svg"
                    alt="라운지"
                    width={24}
                    height={24}
                    className={isActive ? "opacity-100" : "opacity-50"}
                />
            ),
        },
        {
            name: "근무노트",
            href: "/notes",
            icon: (isActive: boolean) => (
                <Image
                    src="/icon/note.svg"
                    alt="근무노트"
                    width={24}
                    height={24}
                    className={isActive ? "opacity-100" : "opacity-50"}
                />
            ),
        },
        {
            name: "모집공고",
            href: "/jobs",
            icon: (isActive: boolean) => (
                <Image
                    src="/icon/rocket.svg"
                    alt="모집공고"
                    width={24}
                    height={24}
                    className={isActive ? "opacity-100" : "opacity-50"}
                />
            ),
        },
    ];

    return (
        <footer
            className="min-w-[320px] max-w-[470px] fixed bottom-0  w-full bg-[#171717] border-t border-zinc-800">
            <nav className="max-w-md mx-auto">
                <ul className="flex justify-between px-2">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.name} className="flex-1">
                                <Link
                                    href={item.href}
                                    className={`flex flex-col items-center gap-1 py-3 px-2 text-xs ${
                                        isActive ? "text-white" : "text-[#a5a5a5]"
                                    }`}
                                >
                                    {item.icon(isActive)}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </footer>
    );
}
