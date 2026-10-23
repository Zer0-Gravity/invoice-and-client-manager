import { Checkbox } from "@/components/ui/checkbox";
import {
    cellSelectionFeature,
    createColumnHelper,
    rowSelectionFeature,
    tableFeatures,
} from "@tanstack/react-table";

interface ClientColumnProps {
    invoiceId: string;
    name: string;
    dueDate: string;
    dateIssued: string;
    value: string;
    status: string;
}

const _features = tableFeatures({ rowSelectionFeature, cellSelectionFeature });
const columnHelper = createColumnHelper<typeof _features, ClientColumnProps>();

const columns = columnHelper.columns([
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
]);
