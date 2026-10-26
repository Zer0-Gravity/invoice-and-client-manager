"use client";

import { Mail } from "lucide-react";
import InputField from "../_components/AuthInput";
import AuthWrapper from "../_components/AuthWrapper";
import PasswordField from "../_components/AuthPassword";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validatorSchema = z
    .object({
        email: z
            .string({
                error: (issue) =>
                    issue.input === undefined
                        ? "Email is required"
                        : "invalid input",
            })
            .email("Invalid email address"),
        password: z
            .string({
                error: (issue) =>
                    issue.input === undefined
                        ? "Password is required"
                        : "Invalid input",
            })
            .min(8, "Password must be 8 character length"),
        repeatPassword: z.string({
            error: (issue) =>
                issue.input === undefined
                    ? "Please repeat your password"
                    : "invalid password",
        }),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: "Password don't match",
        path: ["repeatPassword"],
    });

export default function Register() {
    const methods = useForm({ resolver: zodResolver(validatorSchema) });

    const handleRegister = (data: any) => {
        console.log(data);
    };

    return (
        <AuthWrapper
            link="login"
            header="Register your account"
            notice="Already have and account?"
        >
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(handleRegister)}
                    className="flex-1 flex flex-col gap-5 justify-center w-full"
                >
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
