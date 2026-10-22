import Link from "next/link";
import { ReactNode } from "react";

interface AuthWrapperProps {
    children: ReactNode;
    header: string;
    link: string;
    notice: string;
}

export default function AuthWrapper({
    children,
    header,
    link,
    notice,
}: AuthWrapperProps) {
    return (
        <main className="p-5 md:p-20 flex sm:items-center h-screen">
            {/* Form Sections */}
            <section className="sm:p-15 rounded-xl md:shadow-[0px_0px_5px_4px_rgba(0,0,0,0.1)] bg-card w-full sm:w-120 h-full sm:h-162.5 flex flex-col items-center gap-4">
                <div className="space-y-5 w-full">
                    <div className="flex gap-2 md:items-center">
                        <div className="h-3 w-3 bg-primary rounded-full" />
                        <p className="text-[12px] font-semibold">MERCURIO</p>
                    </div>
                    <h1 className="text-[32px] font-extrabold">{header}</h1>
                </div>

                {children}

                <div className="flex justify-end">
                    <p className="text-[12px]">
                        {notice}
                        <Link
                            href={`/${link}`}
                            className="text-blue-500 underline"
                        >
                            {link}
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
