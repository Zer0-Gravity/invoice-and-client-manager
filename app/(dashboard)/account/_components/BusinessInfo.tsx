"use client";

import InputField from "@/components/custom-ui/InputField";
import SelectInput from "@/components/custom-ui/SelectInput";
import { currency } from "@/utils/json";
import { Controller, useForm } from "react-hook-form";

export default function BusinessInfo() {
    const { control } = useForm();

    return (
        <div>
            <form className="space-y-4">
                <div className="flex gap-4">
                    <div className="size-30 rounded-md bg-input-background border border-input-border" />
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
                                    className="bg-input-background border border-input-border rounded-md p-2 text-[14px]"
                                />
                            </div>
                        )}
                    />
                </div>

                <InputField
                    name="businessName"
                    placeholder="e.g Acme Corp"
                    label="Business Name"
                />
                <SelectInput
                    name="currency"
                    placeholder="Select default currency"
                    items={currency}
                    label="Default currency"
                />
            </form>
        </div>
    );
}
