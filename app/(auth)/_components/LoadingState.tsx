import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function LoadingState({
    isLoading,
    text,
}: {
    isLoading: boolean;
    text: string;
}) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loading-register"
                    initial={{ opacity: 0, scale: "98%" }}
                    animate={{ opacity: 1, scale: "100%" }}
                    exit={{ opacity: 0, scale: "98%" }}
                    className="absolute inset-0 backdrop-blur-sm z-6 flex items-center justify-center gap-2 flex-col"
                >
                    <Loader2
                        size={40}
                        className="text-foreground animate-spin"
                    />
                    <p className="text-foreground font-bold text-xl">{text}</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
