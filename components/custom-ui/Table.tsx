"use client";

import {
    FlexRender,
    Table as ReactTableType,
    RowData,
    tableFeatures,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { features } from "@/utils/data-features";
import { Frown } from "lucide-react";
import { table } from "console";

interface TableProps<TData extends RowData> {
    tables: ReactTableType<typeof features, TData>;
}

export default function TableComp<TData extends RowData>({
    tables,
}: TableProps<TData>) {
    return (
        <Table className="border border-muted-foreground overflow-hidden rounded-xl">
            <TableHeader className="bg-card [$_tr]:border-muted-foreground">
                {tables.getHeaderGroups().map((headerGroups) => (
                    <TableRow key={headerGroups.id}>
                        {headerGroups.headers.map((headers) => (
                            <TableHead key={headers.id}>
                                {headers.isPlaceholder ? null : (
                                    <FlexRender header={headers} />
                                )}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>

            <TableBody className="bg-background-sidebar">
                {tables.getRowModel().rows.length !== 0 ? (
                    tables.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getAllCells().map((cell) => (
                                <TableHead key={cell.id}>
                                    <FlexRender cell={cell} />
                                </TableHead>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={tables.getAllColumns().length}>
                            <div className="flex gap-2 items-center justify-center p-2">
                                <Frown size={16} />
                                <p>No data available</p>
                            </div>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
