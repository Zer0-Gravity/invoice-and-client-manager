import PageWrapper from "@/components/custom-ui/PageWrapper";
import { Plus, Search } from "lucide-react";
import InvoiceTable from "./_components/InvoiceTable";
import { columns } from "./_components/columns";

export default async function Invoices() {
    const filter = ["Paid", "Draft", "Sent", "Overdue"];
    const data: any = [];

    return (
        <PageWrapper>
            <div className="p-5 w-full self-center h-full flex flex-col gap-3">
                <section className="flex justify-between">
                    <div className="flex gap-2">
                        {filter.map((item, index) => (
                            <button
                                key={index}
                                className="relative p-2 px-3 rounded-lg z-0"
                            >
                                <p className="text-foreground-secondary z-2">
                                    {item}
                                </p>

                                <div className="absolute inset-0 border-b-2 border-secondary bg-secondary rounded-t-lg -z-1" />
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <div className="relative w-100">
                            <input
                                type="search"
                                placeholder="Search"
                                className="outline-none w-full h-full pl-10 pr-3 border-b border-input-border bg-input-background rounded-lg"
                            />
                            <Search
                                size={16}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                            />
                        </div>
                        <button className="flex gap-2 p-2 justify-center items-center w-40 rounded-lg bg-primary">
                            <Plus
                                size={16}
                                className="text-foreground-primary"
                            />
                            <p className="text-foreground-primary font-medium">
                                New Invoice
                            </p>
                        </button>
                    </div>
                </section>
                <InvoiceTable columns={columns} data={data} />
            </div>
        </PageWrapper>
    );
}
