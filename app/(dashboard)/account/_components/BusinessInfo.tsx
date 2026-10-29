"use client";

import InputField from "@/components/custom-ui/InputField";
import SelectInput from "@/components/custom-ui/SelectInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { currency } from "@/utils/json";
import { Loader2 } from "lucide-react";
import { Controller, FormProvider, useForm } from "react-hook-form";

export default function BusinessInfo() {
    const methods = useForm();
    const { data: userData, isPending, error } = authClient.useSession();

    if (error) {
        return <p>Login required</p>;
    }

    if (isPending) {
        return (
            <div className="p-2 w-full flex gap-2 items-center justify-center bg-card">
                <Loader2 className="animate-spin" size={16} />
                <p>Loading...</p>
            </div>
        );
    }

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
                        <AvatarImage src={userData?.user.image ?? ""} />
                        <AvatarFallback className="text-foreground text-4xl font-bold bg-secondary">
                            {userData?.user.name.slice(0, 2).toUpperCase()}
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
            </form>
        </FormProvider>
    );
}
