"use client";

import { motion } from "motion/react";
import { useState } from "react";
import BusinessInfo from "./BusinessInfo";
import PersonalInfo from "./PersonalInfo";
import Security from "./Security";

const tabs = [
    { address: "business-info", label: "Business Info" },
    { address: "personal-info", label: "Personal Info" },
    { address: "security", label: "Security" },
];

export default function AccountPage() {
    const [activeTab, SetActiveTab] = useState<string>("business-info");

    return (
        <div className="md:w-[70%] self-center space-y-5">
            <header className="flex gap-2 items-center">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => SetActiveTab(tab.address)}
                        className={`${activeTab === tab.address ? "text-foreground" : "text-muted-foreground"} transition-all p-2 font-medium relative`}
                    >
                        {tab.label}
                        {activeTab === tab.address && (
                            <motion.div
                                layoutId="tab-account"
                                transition={{
                                    type: "spring",
                                    damping: 30,
                                    stiffness: 360,
                                }}
                                className="absolute inset-0 border-b-2"
                            />
                        )}
                    </button>
                ))}
            </header>

            <section>
                {activeTab === "business-info" && <BusinessInfo />}
                {activeTab === "personal-info" && <PersonalInfo />}
                {activeTab === "security" && <Security />}
            </section>
        </div>
    );
}
