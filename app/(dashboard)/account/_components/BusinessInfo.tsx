"use client";

import InputField from "@/components/custom-ui/InputField";
import SelectInput from "@/components/custom-ui/SelectInput";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { currency } from "@/utils/json";

import { Controller, FormProvider, useForm } from "react-hook-form";
import { UserData } from "./AccountPage";

export default function BusinessInfo({ data }: { data: UserData }) {
    const methods = useForm({
        defaultValues: {
            businessName: data.businessName ?? "",
            url: data.image ?? "",
            currency: data.defaultCurrency ?? "",
        },
    });

    return (
        <FormProvider {...methods}>
            <form className="space-y-4 p-4 bg-card rounded-lg">
                <div className="p-2">
                    <h1 className="font-bold">Business Profile</h1>
                    <p className="text-[14px] text-muted-foreground">
                        Change and update your business profile
                    </p>
                </div>

                <div className="flex gap-4">
                    <Avatar className="rounded-md size-30">
                        <AvatarFallback className="text-foreground-secondary text-4xl font-bold bg-secondary">
                            {data.firstName && data.lastName
                                ? data.firstName[0].toUpperCase() +
                                  data.lastName[0].toUpperCase()
                                : data.email.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <Controller
                        name="url"
                        control={methods.control}
                        render={({ field }) => (
                            <div>
                                <p className="text-[14px] font-semibold">
                                    Upload logo
                                </p>
                                <input
                                    type="file"
                                    name="upfile"
                                    value={field.value}
                                    onChange={field.onChange}
                                    className="bg-input-background border border-input-border rounded-md p-2 text-[14px]"
                                />
                            </div>
                        )}
                    />
                </div>

                <div className="border border-muted-background p-4 rounded-lg">
                    <InputField
                        name="businessName"
                        placeholder="e.g Acme Corp"
                        label="Business Name"
                    />
                </div>
                <div className="border border-muted-background p-4 rounded-lg">
                    <SelectInput
                        name="currency"
                        placeholder="Select default currency"
                        items={currency}
                        label="Default currency"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="p-2 rounded-md bg-primary text-foreground-primary text-[14px]"
                    >
                        Save Profile
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}
