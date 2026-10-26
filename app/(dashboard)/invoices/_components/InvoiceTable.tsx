"use client";

import TableComp from "@/components/custom-ui/Table";
import { features } from "@/utils/data-features";
import { ColumnDef, RowData, useTable } from "@tanstack/react-table";

interface InvoiceTableProps<TData extends RowData> {
    columns: ColumnDef<typeof features, TData>[];
    data: TData[];
}

export default function InvoiceTable<TData extends RowData>({
    data,
    columns,
}: InvoiceTableProps<TData>) {
    const tables = useTable({
        data,
        columns,
        features,
    });

    return <TableComp tables={tables} />;
}
