import { Controller, useForm } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

interface Items {
    label: string;
    value: string;
}

interface SelectInputProp {
    name: string;
    placeholder: string;
    label: string;
    items: Items[];
}

export default function SelectInput({
    name,
    placeholder,
    items,
    label,
}: SelectInputProp) {
    const { control } = useForm();
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className="space-y-3">
                        <p className="font-semibold text-[14px]">{label}</p>
                        <Select
                            value={field.value}
                            onValueChange={(val) => field.onChange(val ?? "")}
                        >
                            <SelectTrigger className="p-2 h-10! bg-input-background border border-input-border rounded-md">
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {items.map((item, index) => (
                                        <SelectItem
                                            key={index}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                )}
            />
        </>
    );
}
