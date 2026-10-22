import Sidebar from "@/components/custom-ui/Sidebar";
import { ReactNode } from "react";

export default async function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main className="flex h-screen w-screen bg-background-sidebar">
            <Sidebar />
            <div className="flex-1 p-4 h-full">{children}</div>
        </main>
    );
}
