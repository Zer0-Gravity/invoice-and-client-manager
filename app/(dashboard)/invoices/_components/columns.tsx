"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { features } from "@/utils/data-features";
import { createColumnHelper } from "@tanstack/react-table";

interface ClientColumnProps {
    invoiceId: string;
    name: string;
    dueDate: string;
    dateIssued: string;
    value: string;
    status: string;
}

const columnHelper = createColumnHelper<typeof features, ClientColumnProps>();

export const columns = columnHelper.columns([
    columnHelper.display({
        id: "checkbox",
        header: ({ table }) => (
            <>
                <Checkbox
                    checked={table.getIsAllRowsSelected()}
                    onCheckedChange={(val) =>
                        table.toggleAllPageRowsSelected(!!val)
                    }
                />
            </>
        ),
        cell: ({ row }) => (
            <>
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(val) => row.toggleSelected(!!val)}
                />
            </>
        ),
    }),
    columnHelper.accessor("invoiceId", {
        header: () => <p>Invoice ID</p>,
    }),
    columnHelper.accessor("name", {
        header: () => <p>Name</p>,
    }),
    columnHelper.accessor("dueDate", {
        header: () => <p>Due Date</p>,
    }),
    columnHelper.accessor("dateIssued", {
        header: () => <p>Date Issued</p>,
    }),
    columnHelper.accessor("value", {
        header: () => <p>Total</p>,
    }),
    columnHelper.accessor("status", {
        header: () => <p>Status</p>,
    }),
    columnHelper.display({
        id: "actions-button",
        header: () => <p>Actions</p>,
    }),
]);
