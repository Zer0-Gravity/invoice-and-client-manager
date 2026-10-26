"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { features } from "@/utils/data-features";
import { createColumnHelper } from "@tanstack/react-table";

interface InvoiceColumnHelper {
    businessName: string;
    contactPerson: string;
    email: string;
    phone: string;
    address: string;
    invoices: number;
}

const columnHelper = createColumnHelper<typeof features, InvoiceColumnHelper>();

export const columns = [
    columnHelper.display({
        id: "checkBox",
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
    columnHelper.accessor("businessName", {
        header: () => <p>Name</p>,
    }),
    columnHelper.accessor("contactPerson", {
        header: () => <p>Contact Person</p>,
    }),
    columnHelper.accessor("email", {
        header: () => <p>Email</p>,
    }),
    columnHelper.accessor("address", {
        header: () => <p>Address</p>,
    }),
    columnHelper.accessor("phone", {
        header: () => <p>Phone</p>,
    }),
    columnHelper.accessor("invoices", {
        header: () => <p>Invoices</p>,
    }),
];
