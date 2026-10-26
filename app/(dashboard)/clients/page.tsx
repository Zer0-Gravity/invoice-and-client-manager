import PageWrapper from "@/components/custom-ui/PageWrapper";
import ClientTable from "./_components/ClientTable";
import { columns } from "./_components/columns";

export default async function Clients() {
    const data: any = [];

    return (
        <PageWrapper>
            <ClientTable data={data} columns={columns} />
        </PageWrapper>
    );
}
