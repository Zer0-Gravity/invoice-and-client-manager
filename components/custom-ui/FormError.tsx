import { AnimatePresence, motion } from "motion/react";
import { FieldError } from "react-hook-form";

interface FormErrorProps {
    error: FieldError | undefined;
}

export default function FormError({ error }: FormErrorProps) {
    return (
        <AnimatePresence>
            {error?.message && (
                <motion.p
                    key={error.message}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-[12px] -bottom-7 text-red-500 font-medium absolute bg-red-100 px-2 py-0.5 rounded-md border z-99"
                >
                    {error?.message}
                </motion.p>
            )}
        </AnimatePresence>
    );
}
