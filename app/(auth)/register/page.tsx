"use client";

import { Mail } from "lucide-react";
import InputField from "../_components/AuthInput";
import AuthWrapper from "../_components/AuthWrapper";
import PasswordField from "../_components/AuthPassword";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import LoadingState from "../_components/LoadingState";

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

type registerData = z.infer<typeof validatorSchema>;

export default function Register() {
    const methods = useForm<registerData>({
        resolver: zodResolver(validatorSchema),
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleRegister = async (data: registerData) => {
        setIsLoading(true);

        const { error } = await authClient.signUp.email({
            name: data.email.split("@")[0],
            email: data.email,
            password: data.password,
            callbackURL: "/onboarding",
        });

        if (error) {
            setIsLoading(false);
            toast.error(
                error.message || error.statusText || "Internal server error",
            );
            return;
        }

        setIsLoading(false);
    };

    return (
        <AuthWrapper
            link="login"
            header="Register your account"
            notice="Already have and account?"
        >
            <LoadingState
                isLoading={isLoading}
                text="Registering your account"
            />

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
