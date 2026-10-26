"use client";

import { Mail } from "lucide-react";
import InputField from "../_components/AuthInput";
import AuthWrapper from "../_components/AuthWrapper";
import PasswordField from "../_components/AuthPassword";
import { FormProvider, useForm } from "react-hook-form";

export default function Register() {
    const methods = useForm();

    return (
        <AuthWrapper
            link="login"
            header="Register your account"
            notice="Already have and account?"
        >
            <FormProvider {...methods}>
                <form className="flex-1 flex flex-col gap-5 justify-center w-full">
                    <InputField
                        name="email"
                        icons={Mail}
                        placeholder="Email Address"
                    />
                    <PasswordField name="password" placeholder="Password" />
                    <PasswordField
                        name="repeatPassword"
                        placeholder="Repeat Password"
                    />

                    <button
                        type="submit"
                        className="bg-secondary text-foreground-secondary font-semibold p-2 w-full rounded-[10px] text-14 h-12.5 active:scale-98"
                    >
                        Register
                    </button>
                </form>
            </FormProvider>
        </AuthWrapper>
    );
}
