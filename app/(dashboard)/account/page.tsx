import PageWrapper from "@/components/custom-ui/PageWrapper";
import AccountPage from "./_components/AccountPage";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export const instant = false;

export default async function Accounts() {
    const session = await auth.api.getSession({ headers: await headers() });

    const data = await prisma.user.findUnique({
        where: { id: session?.user.id },
    });

    if (data === null) notFound();

    return (
        <PageWrapper>
            <AccountPage data={data} />
        </PageWrapper>
    );
}
