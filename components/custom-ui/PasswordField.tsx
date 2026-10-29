import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface PasswordFieldProps {
    name: string;
    label: string;
    placeholder: string;
}

export default function PasswordField({
    name,
    label,
    placeholder,
}: PasswordFieldProps) {
    const { control } = useFormContext();
    const [isShow, setIsShow] = useState<boolean>(false);

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className="space-y-3 ">
                        <p className="text-[14px]">{label}</p>
                        <div className="relative">
                            <input
                                type={isShow ? "text" : "password"}
                                placeholder={placeholder}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                className="h-10 p-2 bg-input-background border border-input-border outline-input-ring rounded-md text-[14px] w-full"
                            />
                            <button
                                onClick={() => setIsShow(!isShow)}
                                type="button"
                                className="absolute top-1/2 -translate-y-1/2 right-4"
                            >
                                {isShow ? (
                                    <Eye size={14} />
                                ) : (
                                    <EyeOff size={14} />
                                )}
                            </button>
                        </div>
                    </div>
                )}
            />
        </>
    );
}
