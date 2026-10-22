import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { currency } from "@/utils/json";

export default function BoardingPage() {
    return (
        <main className="h-screen p-5 md:px-20 flex flex-col justify-center">
            <section className="flex-1 flex items-center justify-center border">
                <h1 className="text-[25px] font-bold">MERCURIO</h1>
            </section>

            <section className="flex-2 flex flex-col gap-5">
                <div>
                    <h1 className="font-bold text-[32px]">
                        Let&apos;s get you setup
                    </h1>
                    <p className="text-muted-foreground">
                        Don&apos;t worry you can always change this setting
                        later in your account setting
                    </p>
                </div>
                <form className="flex flex-col gap-3">
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex flex-col gap-3 md:w-145">
                            <div className="flex flex-col md:flex-row gap-2 w-full">
                                <InputBoarding
                                    label="First Name"
                                    placeholder="e.g John"
                                />
                                <InputBoarding
                                    label="Last Name"
                                    placeholder="e.g Doe"
                                />
                            </div>
                            <InputBoarding
                                label="Business Name"
                                placeholder="e.g Acme Corp"
                            />

                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Default Currency</p>
                                <Select>
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
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 md:w-145">
                            <InputBoarding
                                label="Phone"
                                placeholder="1-345-435"
                            />
                            <InputBoarding
                                label="Address"
                                placeholder="Mountain street, No.78"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-foreground-primary p-2 rounded-md w-full md:w-37.5 h-10 font-medium"
                    >
                        Continue
                    </button>
                </form>
            </section>
        </main>
    );
}

interface InputBoardingProps {
    label: string;
    placeholder: string;
}

function InputBoarding({ label, placeholder }: InputBoardingProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <p className="font-bold">{label}</p>
            <input
                type="text"
                placeholder={placeholder}
                className="outline-none border-b border-input-border p-2 focus:border-foreground w-full"
            />
        </div>
    );
}
