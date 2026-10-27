"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { currency } from "@/utils/json";
import { Controller, useFormContext } from "react-hook-form";

export default function SelectCurrency() {
    const { control } = useFormContext();

    return (
        <>
            <Controller
                name="currency"
                control={control}
                render={({ field }) => (
                    <Select
                        onValueChange={(val) => field.onChange(val ?? "")}
                        value={field.value}
                    >
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 ring-none rounded-none border-input-border focus:border-foreground w-full p-2">
                            <SelectValue placeholder="USD, EUR" />
                        </SelectTrigger>
                        <SelectContent className="bg-card">
                            <SelectGroup>
                                {currency.map((items, index) => (
                                    <SelectItem
                                        key={index}
                                        value={items.value}
                                        className="data-highlighted:bg-secondary data-highlighted:text-foreground-secondary data-selected:bg-secondary data-selected:text-foreground-secondary text-muted-foreground"
                                    >
                                        {items.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )}
            />
        </>
    );
}
