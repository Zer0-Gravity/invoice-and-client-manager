import { Mail } from "lucide-react";
import InputField from "../_components/AuthInput";
import AuthWrapper from "../_components/AuthWrapper";
import PasswordField from "../_components/AuthPassword";

export default function Register() {
    return (
        <AuthWrapper
            link="login"
            header="Register your account"
            notice="Already have and account?"
        >
            <form className="flex-1 flex flex-col gap-5 justify-center">
                <InputField icons={Mail} placeholder="Email Address" />
                <PasswordField placeholder="Password" />
                <PasswordField placeholder="Repeat Password" />

                <button
                    type="submit"
                    className="bg-secondary text-foreground-secondary font-semibold p-2 w-full rounded-[10px] text-14 h-12.5"
                >
                    Register
                </button>
            </form>
        </AuthWrapper>
    );
}
