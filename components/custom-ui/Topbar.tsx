/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Sidebar, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { Switch } from "../ui/switch";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Topbar() {
    const path = usePathname();
    const sanitizedTopbar = path.charAt(1).toUpperCase() + path.slice(2);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => setMounted(true), []);

    return (
        <section className="flex justify-between">
            <div className="flex gap-2 items-center">
                <button className="text-muted-foreground p-2 hover:bg-accent rounded-lg hover:text-foreground-acc">
                    <Sidebar size={16} />
                </button>
                <div className="h-full w-1 rounded-full bg-muted-foreground" />
                <h1 className="font-semibold text-muted-foreground">
                    {sanitizedTopbar}
                </h1>
            </div>

            <div className="flex gap-2 items-center">
                <Avatar className="bg-secondary size-6">
                    <AvatarFallback className="text-foreground-secondary text-[10px]">
                        US
                    </AvatarFallback>
                </Avatar>
                <Switch
                    checked={mounted && resolvedTheme === "dark"}
                    onCheckedChange={() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                    disabled={!mounted}
                />
            </div>
        </section>
    );
}
