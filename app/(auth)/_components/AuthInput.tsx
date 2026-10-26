import { LucideIcon } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import FormError from "@/components/custom-ui/FormError";

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
    const { control } = useFormContext();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                            onFocus={field.ref}
                            className={`bg-input-background border rounded-[10px] h-12.5 pl-10 text-[16px] w-full ${error ? "border-red-500 text-red-500 outline-red-500 bg-red-100" : "border-input-border"}`}
                        />
                        <Icon
                            size={16}
                            className={`absolute top-1/2 -translate-y-1/2 left-4 ${error?.message ? "text-red-500" : "text-muted-foreground"}`}
                        />
                        <FormError error={error} />
                    </div>
                )}
            />
        </>
    );
}
