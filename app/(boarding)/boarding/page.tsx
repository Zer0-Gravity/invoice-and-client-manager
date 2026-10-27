"use client";

import { FormProvider, useForm } from "react-hook-form";
import SelectCurrency from "./_components/SelectButton";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputBoarding } from "./_components/InputBoarding";
import { useState } from "react";
import { updateUser } from "./actions";
import toast from "react-hot-toast";

const validatorSchema = z.object({
    firstName: z.string({
        error: (issue) =>
            issue.input === undefined
                ? "First name is required!"
                : "invalid input",
    }),
    lastName: z.string({
        error: (issue) =>
            issue.input === undefined
                ? "Last name is required!"
                : "Invalid input",
    }),
    businessName: z.string().optional(),
    currency: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
});

export type boardingData = z.infer<typeof validatorSchema>;

export default function BoardingPage() {
    const methods = useForm<boardingData>({
        resolver: zodResolver(validatorSchema),
    });

    const [] = useState<boolean>(false);

    const handleBoarding = async (data: boardingData) => {
        try {
            await updateUser(data);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log(String(error));
            }
        }
    };

    return (
        <main className="h-screen p-5 md:px-20 flex flex-col justify-center">
            <section className="flex-1 flex items-center justify-center border">
                <h1 className="text-[25px] font-bold">MERCURIO</h1>
            </section>

            <section className="flex-2 flex flex-col gap-5">
                <div>
                    <h1 className="font-bold text-[32px]">
                        Let&apos;s get you setup
                    </h1>
                    <p className="text-muted-foreground">
                        Don&apos;t worry you can always change this setting
                        later in your account setting
                    </p>
                </div>

                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(handleBoarding)}
                        className="flex flex-col gap-3"
                    >
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="flex flex-col gap-3 md:w-145">
                                <div className="flex flex-col md:flex-row gap-2 w-full">
                                    <InputBoarding
                                        name="firstName"
                                        label="First Name"
                                        placeholder="e.g John"
                                    />
                                    <InputBoarding
                                        name="lastName"
                                        label="Last Name"
                                        placeholder="e.g Doe"
                                    />
                                </div>
                                <InputBoarding
                                    name="businessName"
                                    label="Business Name"
                                    placeholder="e.g Acme Corp"
                                />

                                <div className="flex flex-col gap-2">
                                    <p className="font-bold">
                                        Default Currency
                                    </p>
                                    <SelectCurrency />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 md:w-145">
                                <InputBoarding
                                    name="phone"
                                    label="Phone"
                                    placeholder="1-345-435"
                                />
                                <InputBoarding
                                    name="address"
                                    label="Address"
                                    placeholder="Mountain street, No.78"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary text-foreground-primary p-2 rounded-md w-full md:w-37.5 h-10 font-medium active:scale-98"
                        >
                            Continue
                        </button>
                    </form>
                </FormProvider>
            </section>
        </main>
    );
}
