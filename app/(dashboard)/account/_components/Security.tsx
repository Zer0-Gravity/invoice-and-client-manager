import PasswordField from "@/components/custom-ui/PasswordField";
import { authClient } from "@/lib/auth-client";
import { Loader2, Trash } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Security() {
    const methods = useForm({
        defaultValues: { currentPassword: "", newPassword: "" },
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleUpdatePassword = async (data: any) => {
        setIsLoading(true);

        const { error } = await authClient.changePassword({
            newPassword: data.newPassword,
            currentPassword: data.currentPassword,
            revokeOtherSessions: true,
        });

        if (error) {
            setIsLoading(false);
            toast.error(
                error.message || error.statusText || "Interval server error",
            );
            return;
        }

        toast.success("Password change success");
        setIsLoading(false);
    };

    return (
        <div className="space-y-3">
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(handleUpdatePassword)}
                    className="bg-card p-5 rounded-lg space-y-3"
                >
                    <div className="p-2">
                        <h1 className="font-bold">Change Password</h1>
                        <p className="text-[14px] text-muted-foreground">
                            Change your current password
                        </p>
                    </div>
                    <div className="space-y-3 p-4 border rounded-md border-muted-background">
                        <PasswordField
                            name="currentPassword"
                            label="Current Password"
                            placeholder="Current password"
                        />
                        <PasswordField
                            name="newPassword"
                            label="New Password"
                            placeholder="New password"
                        />

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="p-2 rounded-md bg-primary text-[14px]"
                            >
                                {isLoading ? (
                                    <div className="flex gap-2 items-center">
                                        <Loader2 size={16} />
                                        <p className="text-foreground-primary">
                                            Loading
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-foreground-primary">
                                        Change Password
                                    </p>
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </FormProvider>
            <div className="bg-card space-y-3 p-5 rounded-lg">
                <p>Danger zone</p>
                <div className="w-full h-0.5 bg-muted-foreground rounded-full" />

                <div className="space-y-3 p-2">
                    <div>
                        <h1 className="text-[20px] font-semibold">
                            Delete your account
                        </h1>
                        <p className="text-[14px] text-muted-foreground">
                            Delete your account permanently, this action
                            can&apos;t be undone
                        </p>
                    </div>

                    <button className="flex gap-2 items-center p-3 bg-red-500/20 w-50 border border-red-500 rounded-md active:scale-99 transition-all">
                        <Trash size={16} className="text-red-500" />
                        <p className="text-red-500">Delete Account</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
