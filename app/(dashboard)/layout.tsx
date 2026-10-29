import Sidebar from "@/components/custom-ui/Sidebar";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default async function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main className="flex h-screen w-screen bg-background-sidebar overflow-hidden">
            <Toaster toastOptions={{ className: "toast-theme" }} />
            <Sidebar />
            <div className="flex-1 flex flex-col p-4 min-h-0 min-w-0">
                {children}
            </div>
        </main>
    );
}
