import type {Metadata} from "next";
import "@/styles/globals.css";
import {ThemeProviders} from "@/components/provider/theme-provider";
import {Toaster} from "sonner";

export const metadata: Metadata = {
    title: "Midnight Terrace",
    description: "Midnight Terrace",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <body className="min-h-screen bg-[#1f1f1f]  text-white mx-auto">
        <ThemeProviders>
            <Toaster position="bottom-center" richColors/>
            <main className={'relative  min-w-[320px] max-w-[470px] mx-auto bg-[#1b1b1e]'}> {children}</main>
        </ThemeProviders>
        </body>
        </html>
    );
}
