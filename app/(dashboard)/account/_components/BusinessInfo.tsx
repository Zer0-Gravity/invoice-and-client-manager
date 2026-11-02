"use client";

import InputField from "@/components/custom-ui/InputField";
import SelectInput from "@/components/custom-ui/SelectInput";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { currency } from "@/utils/json";

import { Controller, FormProvider, useForm } from "react-hook-form";
import { UserData } from "./AccountPage";
import { useState } from "react";
import { updateBusiness } from "../actions";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export interface BusinessInfoProps {
    image: string;
    businessName: string;
    defaultCurrency: string;
}

export default function BusinessInfo({ data }: { data: UserData }) {
    const methods = useForm({
        defaultValues: {
            businessName: data.businessName ?? "",
            image: data.image ?? "",
            defaultCurrency: data.defaultCurrency ?? "",
        },
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleUpdateBusiness = async (data: BusinessInfoProps) => {
        setIsLoading(true);
        try {
            await updateBusiness(data);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error(String(error));
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(handleUpdateBusiness)}
                className="space-y-4 p-4 bg-card rounded-lg"
            >
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
                        name="image"
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
                        name="defaultCurrency"
                        placeholder="Select default currency"
                        items={currency}
                        label="Default currency"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="p-2 bg-primary rounded-md text-[14px]"
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <Loader2
                                    size={14}
                                    className="text-foreground-primary"
                                />
                                <p className="text-foreground-primary text-[14px]">
                                    Saving
                                </p>
                            </div>
                        ) : (
                            <p className="text-foreground-primary">
                                Save Change
                            </p>
                        )}
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}
