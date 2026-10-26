"use client";

import { Mail } from "lucide-react";
import InputField from "../_components/AuthInput";
import PasswordField from "../_components/AuthPassword";
import AuthWrapper from "../_components/AuthWrapper";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadingState from "../_components/LoadingState";

const validatorSchema = z.object({
    email: z
        .string({
            error: (issue) =>
                issue.input === undefined
                    ? "Email is required!"
                    : "Invalid text input",
        })
        .email("Invalid email address")
        .min(1, "Email is required"),
    password: z.string({
        error: (issue) =>
            issue.input === undefined
                ? "Password is required"
                : "Invalid input",
    }),
});

type loginData = z.infer<typeof validatorSchema>;

export default function Login() {
    const methods = useForm<loginData>({
        resolver: zodResolver(validatorSchema),
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleRegister = async (data: loginData) => {
        setIsLoading(true);
        const { error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: "/dashboard",
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
            link="register"
            header="Welcome Back"
            notice="Don't have an account?"
        >
            <LoadingState isLoading={isLoading} text="Logging In..." />

            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(handleRegister)}
                    className="w-full flex-1 flex flex-col gap-5"
                >
                    <InputField
                        name="email"
                        icons={Mail}
                        placeholder="Email Address"
                    />
                    <PasswordField name="password" placeholder="Password" />

                    <div className="flex justify-between ">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" id="remember-me" />
                            <label
                                htmlFor="remember-me"
                                className="text-[12px] font-inter"
                            >
                                Remember Me
                            </label>
                        </div>
                        <p className="text-[12px] underline">Forgot Password</p>
                    </div>

                    <div className="flex flex-col items-center gap-5">
                        <button
                            type="submit"
                            className="bg-primary text-foreground-primary font-semibold p-2 w-full rounded-[10px] text-14 h-12.5 active:scale-98"
                        >
                            Login
                        </button>
                        <p className="text-[12px] text-muted-foreground">
                            Or Login With
                        </p>
                        <button
                            type="button"
                            className="bg-secondary text-foreground-secondary font-semibold p-2 w-full rounded-[10px] text-14 h-12.5 active:scale-98"
                        >
                            Google
                        </button>
                    </div>
                </form>
            </FormProvider>
        </AuthWrapper>
    );
}
