import { auth } from "@/lib/auth";
import { boardingData } from "./page";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function updateUser(data: boardingData) {
    const userSession = await auth.api.getSession({ headers: await headers() });

    if (!userSession) {
        redirect("/login");
    }

    try {
        await prisma.user.update({
            where: { id: userSession.user.id as string },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                businessName: data.lastName ? data.lastName : "",
                defaultCurrency: data.currency ? data.currency : "",
                phone: data.phone ? data.phone : "",
                address: data.address ? data.address : "",
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(String(error));
        }
    }
}
