import { LucideIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

interface InputFieldProps {
    icons: LucideIcon;
    placeholder: string;
    name: string;
}

export default function InputField({
    icons: Icon,
    placeholder,
    name,
}: InputFieldProps) {
    const { control } = useForm();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                            onFocus={field.ref}
                            className="bg-input-background border border-input-border rounded-[10px] h-12.5 pl-10 text-[16px] w-full"
                        />
                        <Icon
                            size={16}
                            className="absolute top-1/2 -translate-y-1/2 left-4 text-muted-foreground"
                        />
                    </div>
                )}
            />
        </>
    );
}
