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
import { Camera, Loader2 } from "lucide-react";

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

                <label className="group block rounded-md size-30 relative">
                    <Avatar className="h-full w-full">
                        <AvatarFallback className="text-foreground-secondary text-4xl font-bold bg-secondary">
                            {data.firstName && data.lastName
                                ? data.firstName[0].toUpperCase() +
                                  data.lastName[0].toUpperCase()
                                : data.email.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>

                    <div className="absolute pointer-events-none inset-0 h-full w-full bg-muted-background/65 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-all flex-col">
                        <Camera size={30} className="text-foreground" />
                        <p>Change</p>
                    </div>

                    <input
                        type="file"
                        name="upfile"
                        className="absolute inset-0 cursor-pointer h-full w-full opacity-0 pointer-events-none z-10 "
                        accept="/image"
                    />
                </label>

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
