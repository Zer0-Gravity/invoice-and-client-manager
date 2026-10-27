import FormError from "@/components/custom-ui/FormError";
import { Controller, useFormContext } from "react-hook-form";

interface InputBoardingProps {
    label: string;
    placeholder: string;
    name: string;
}

export function InputBoarding({
    label,
    placeholder,
    name,
}: InputBoardingProps) {
    const { control } = useFormContext();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <div className="w-full flex flex-col gap-2 relative">
                        <p className="font-bold">{label}</p>
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                            ref={field.ref}
                            className={`outline-none border-b p-2 w-full ${error ? "border-red-500 text-red-500 focus:border-red-500" : "text-muted-foreground border-input-border focus:border-foreground"}`}
                        />

                        <FormError error={error} />
                    </div>
                )}
            />
        </>
    );
}
