import { Loader2, LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function AccountProfile() {
    const { data: user, isPending, error } = authClient.useSession();

    if (isPending)
        return (
            <div className="flex justify-center items-center gap-2">
                <p className="animate-pulse text-[12px]">Loading</p>
                <Loader2 size={12} className="animate-spin" />
            </div>
        );
    if (error)
        return (
            <div>
                <p>No account found</p>
            </div>
        );

    return (
        <Popover>
            <PopoverTrigger>
                <Avatar className="bg-secondary size-6">
                    <AvatarFallback className="text-foreground-secondary text-[10px] ring-0!">
                        {user?.user.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent>
                <div className="space-y-3">
                    <div>
                        <h1 className="font-bold text-[18px]">
                            {user?.user.name}
                        </h1>
                        <p className="text-muted-foreground text-[12px]">
                            {user?.user.email}
                        </p>
                    </div>
                    <Link
                        href={"/account"}
                        className="flex gap-2 items-center p-2 hover:bg-muted-background rounded-md"
                    >
                        <Settings size={16} />
                        <p>Account Setting</p>
                    </Link>
                    <button
                        onClick={() => authClient.signOut()}
                        className="group p-2 bg-red-500/30 border border-red-500 w-full rounded-md flex items-center gap-2 justify-center hover:bg-red-500 transition-colors"
                    >
                        <LogOut
                            size={16}
                            className="text-red-500 group-hover:text-white transition-colors"
                        />
                        <p className="text-red-500 font-bold group-hover:text-white transition-colors">
                            Log Out
                        </p>
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
