"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { PersonalProps } from "./_components/PersonalInfo";

export async function updatePersonal(data: PersonalProps) {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
        return;
    }

    try {
        await prisma.user.update({
            where: { id: session?.user.id as string },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
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
