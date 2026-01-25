"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";
import AuthBackground from "@/components/auth/AuthBackground";

export default function SuccessPage() {
    const router = useRouter();
    const [isResetFlow, setIsResetFlow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            setIsResetFlow(params.get("type") === "reset");
        }
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center p-6 sm:p-10 overflow-hidden">
            <AuthBackground />

            <div className="w-full max-w-[480px] z-10 flex flex-col items-center">
                {/* Logo */}
                <div className="mb-12">
                    <Link href="/">
                        <ShoutlyLogo />
                    </Link>
                </div>

                {/* Success Content */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-[40px] font-bold text-gray-900 mb-4">
                        Successfully
                    </h1>
                    <p className="text-gray-500 text-sm mb-10 max-w-[300px]">
                        {isResetFlow
                            ? "Your password has been reset successfully"
                            : "Your account has been created successfully"}
                    </p>

                    <button
                        onClick={() => router.push("/dashboard")}
                        className="w-full max-w-[320px] h-14 bg-black text-white rounded-xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-black/10"
                    >
                        CONTINUE
                    </button>
                </div>
            </div>
        </div>
    );
}

