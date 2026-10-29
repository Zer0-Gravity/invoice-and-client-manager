import InputField from "@/components/custom-ui/InputField";
import { FormProvider, useForm } from "react-hook-form";
import { UserData } from "./AccountPage";

export default function PersonalInfo({ data }: { data: UserData }) {
    const methods = useForm({
        defaultValues: {
            firstName: data.firstName ?? "",
            lastName: data.lastName ?? "",
            email: data.email ?? "",
            phone: data.phone ?? "",
            address: data.address ?? "",
        },
    });

    return (
        <FormProvider {...methods}>
            <form className="space-y-3 bg-card p-4 rounded-lg">
                <div className="p-2">
                    <h1 className="font-bold">Update Profile</h1>
                    <p className="text-[14px] text-muted-foreground">
                        Update your account profile
                    </p>
                </div>

                <div className="flex gap-2 border border-muted-background w-full p-4 rounded-lg">
                    <div className="flex-1">
                        <InputField
                            name="firstName"
                            placeholder="e.g Jane"
                            label="First Name"
                        />
                    </div>
                    <div className="flex-1">
                        <InputField
                            name="lastName"
                            placeholder="e.g Doe"
                            label="Last Name"
                        />
                    </div>
                </div>
                <div className="border border-muted-background p-4 rounded-lg">
                    <InputField
                        name="email"
                        placeholder="e.g janeDoe@mail,com"
                        label="Email"
                    />
                </div>
                <div className="border border-muted-background p-4 rounded-lg">
                    <InputField
                        name="phone"
                        placeholder="1-235-555"
                        label="Phone"
                    />
                </div>
                <div className="border border-muted-background p-4 rounded-lg">
                    <InputField
                        name="address"
                        placeholder="e.g Sixth Street"
                        label="Address"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="p-2 bg-primary rounded-md text-[14px]"
                    >
                        Save Change
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}
