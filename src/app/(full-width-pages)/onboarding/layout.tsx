"use client";

import React from "react";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";
import AuthBackground from "@/components/auth/AuthBackground";
import { usePathname } from "next/navigation";

const steps = [
    { name: "Brand Info", path: "/onboarding/brand-info" },
    { name: "Brand Tone", path: "/onboarding/brand-tone" },
    { name: "Connect Accounts", path: "/onboarding/connect-accounts" },
];

export default function OnboardingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const currentStepIndex = steps.findIndex(step => pathname.includes(step.path));
    const progress = ((currentStepIndex + 1) / steps.length) * 100;

    return (
        <div className="relative min-h-screen flex flex-col items-center py-12 px-6 font-arial overflow-hidden">
            <AuthBackground />

            <div className="mb-12 z-10 flex flex-col items-center">
                <ShoutlyLogo />
                <div className="mt-8 text-center">
                    <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Let&apos;s Set Up Your Account</h1>
                    <p className="text-gray-500 font-medium">This will only take a few minutes</p>
                </div>
            </div>

            {/* Stepper */}
            <div className="w-full max-w-4xl mb-16 z-10">
                <div className="flex justify-between items-center px-4 mb-4">
                    {steps.map((step, i) => (
                        <span key={step.name} className={`text-xs font-bold uppercase tracking-widest ${i <= currentStepIndex ? "text-gray-900" : "text-gray-300"}`}>
                            {step.name}
                        </span>
                    ))}
                </div>
                <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-black rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="w-full max-w-[540px] z-10">
                {children}
            </div>
        </div>
    );
}
