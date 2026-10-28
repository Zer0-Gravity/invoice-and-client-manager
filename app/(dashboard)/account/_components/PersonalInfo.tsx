import InputField from "@/components/custom-ui/InputField";

export default function PersonalInfo() {
    return (
        <div>
            <form>
                <div className="flex gap-2">
                    <InputField
                        name="firstName"
                        placeholder="e.g Jane"
                        label="First Name"
                    />
                    <InputField
                        name="lastName"
                        placeholder="e.g Doe"
                        label="Last Name"
                    />
                </div>
                <InputField
                    name="email"
                    placeholder="e.g janeDoe@mail,com"
                    label="Email"
                />
                <InputField
                    name="phone"
                    placeholder="1-235-555"
                    label="Phone"
                />
                <InputField
                    name="address"
                    placeholder="e.g Sixth Street"
                    label="Address"
                />
            </form>
        </div>
    );
}
