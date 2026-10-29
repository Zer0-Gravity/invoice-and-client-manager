"use client";

import InputField from "@/components/custom-ui/InputField";
import SelectInput from "@/components/custom-ui/SelectInput";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { currency } from "@/utils/json";
import { Controller, useForm } from "react-hook-form";

export default function BusinessInfo() {
    const { control } = useForm();

    return (
        <form className="space-y-4 p-4 bg-card rounded-lg">
            <div className="p-2">
                <h1 className="font-bold">Business Profile</h1>
                <p className="text-[14px] text-muted-foreground">
                    Change and update your business profile
                </p>
            </div>

            <div className="flex gap-4">
                <Avatar className="rounded-md size-30">
                    <AvatarFallback className="text-foreground text-4xl font-bold bg-secondary">
                        MI
                    </AvatarFallback>
                </Avatar>
                <Controller
                    name="url"
                    control={control}
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
    );
}
