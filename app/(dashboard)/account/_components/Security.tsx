import PasswordField from "@/components/custom-ui/PasswordField";
import { Trash } from "lucide-react";

export default function Security() {
    return (
        <div className="space-y-3">
            <form className="bg-card p-5 rounded-lg space-y-3">
                <div className="p-2">
                    <h1 className="font-bold">Change Password</h1>
                    <p className="text-[14px] text-muted-foreground">
                        Change your current password
                    </p>
                </div>
                <div className="space-y-3 p-4 border rounded-md border-muted-background">
                    <PasswordField
                        name="password"
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
                            className="p-2 rounded-md bg-primary text-foreground-primary text-[14px]"
                        >
                            Change Password
                        </button>
                    </div>
                </div>
            </form>
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
