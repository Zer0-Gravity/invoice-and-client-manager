import { set } from "better-auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarProps {
    isExpand: boolean;
    setExpand: () => void;
}

export const useSidebar = create<SidebarProps>()(
    persist(
        (set) => ({
            isExpand: false,
            setExpand: () => set((state) => ({ isExpand: !state.isExpand })),
        }),
        {
            name: "sidebar-storage",
        },
    ),
);
