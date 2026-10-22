import { LucideIcon } from "lucide-react";

interface InputFieldProps {
    icons: LucideIcon;
    placeholder: string;
}

export default function InputField({
    icons: Icon,
    placeholder,
}: InputFieldProps) {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className="bg-input-background border border-input-border rounded-[10px] h-12.5 pl-10 text-[16px] w-full"
            />
            <Icon
                size={16}
                className="absolute top-1/2 -translate-y-1/2 left-4 text-muted-foreground"
            />
        </div>
    );
}
