"use client";

import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface PasswordFieldProps {
    placeholder: string;
    name: string;
}

export default function PasswordField({
    placeholder,
    name,
}: PasswordFieldProps) {
    const [show, setShow] = useState<boolean>(false);
    const { control } = useForm();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            placeholder={placeholder}
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                            onFocus={field.ref}
                            className="bg-input-background border border-input-border rounded-[10px] h-12.5 pl-10 text-[16px] w-full"
                        />
                        <Lock
                            size={16}
                            className="absolute top-1/2 -translate-y-1/2 left-4 text-muted-foreground"
                        />
                        <button
                            onClick={() => setShow(!show)}
                            type="button"
                            className="absolute top-1/2 -translate-y-1/2 right-4 text-muted-foreground cursor-pointer"
                            aria-label={
                                show ? "Show Password" : "Hide Password"
                            }
                        >
                            {show ? <Eye size={16} /> : <EyeOff size={16} />}
                        </button>
                    </div>
                )}
            />
        </>
    );
}
