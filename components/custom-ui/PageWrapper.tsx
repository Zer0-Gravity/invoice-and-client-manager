import { ReactNode } from "react";
import Topbar from "./Topbar";

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-1 min-h-0 flex-col gap-3 rounded-lg bg-base">
            <Topbar />

            {children}
        </div>
    );
}
