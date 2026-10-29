import { Controller, useFormContext } from "react-hook-form";

interface InputFieldProps {
    name: string;
    placeholder: string;
    label: string;
}

export default function InputField({
    name,
    placeholder,
    label,
}: InputFieldProps) {
    const { control } = useFormContext();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className="space-y-3">
                        <p className="font-semibold text-[14px]">{label}</p>

                        <input
                            type="text"
                            placeholder={placeholder}
                            onBlur={field.onBlur}
                            value={field.value}
                            onChange={field.onChange}
                            className="h-10 p-2 bg-input-background border border-input-border outline-input-ring rounded-md text-[14px] w-full"
                        />
                    </div>
                )}
            />
        </>
    );
}
