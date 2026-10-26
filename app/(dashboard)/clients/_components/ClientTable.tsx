"use client";

import TableComp from "@/components/custom-ui/Table";
import { features } from "@/utils/data-features";
import { ColumnDef, RowData, useTable } from "@tanstack/react-table";

interface ClientTableProps<TData extends RowData> {
    columns: ColumnDef<typeof features, TData, any>[];
    data: TData[];
}

export default function ClientTable<TData extends RowData>({
    columns,
    data,
}: ClientTableProps<TData>) {
    const tables = useTable({
        data,
        columns,
        features,
    });

    return (
        <section className="p-5">
            <TableComp tables={tables} />
        </section>
    );
}
