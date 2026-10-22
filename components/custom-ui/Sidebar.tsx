import { HandCoins, LayoutDashboard, UsersRound } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <nav className="w-60 p-4">
            <header>
                <h1 className="font-bold text-[25px]">MERCURIUS</h1>
            </header>

            <section className="flex gap-1.5 flex-col mt-20">
                <Link
                    href={"/dashboard"}
                    className="flex gap-3 items-center hover:bg-accent hover:text-foreground-acc p-2 rounded-lg"
                >
                    <LayoutDashboard size={18} />
                    <p className="font-medium">Dashboard</p>
                </Link>
                <Link
                    href={"/invoices"}
                    className="flex gap-3 items-center hover:bg-accent hover:text-foreground-acc p-2 rounded-lg"
                >
                    <HandCoins size={18} />
                    <p className="font-medium">Invoices</p>
                </Link>
                <Link
                    href={"/client"}
                    className="flex gap-3 items-center hover:bg-accent hover:text-foreground-acc p-2 rounded-lg"
                >
                    <UsersRound size={18} />
                    <p className="font-medium ">Clients</p>
                </Link>
            </section>
        </nav>
    );
}
