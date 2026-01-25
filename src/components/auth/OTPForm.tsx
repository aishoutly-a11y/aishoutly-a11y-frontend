"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";
import AuthBackground from "@/components/auth/AuthBackground";

export default function OTPForm() {
    const router = useRouter();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(30);
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate verification
        setTimeout(() => {
            const params = new URLSearchParams(window.location.search);
            const isReset = params.get("type") === "reset";

            if (isReset) {
                router.push("/new-password");
            } else {
                router.push("/success");
            }
        }, 1000);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-6 sm:p-10 overflow-hidden">
            <AuthBackground />

            <div className="w-full max-w-[480px] z-10 flex flex-col items-center">
                <div className="mb-10">
                    <ShoutlyLogo />
                </div>

                <div className="w-full bg-white rounded-[40px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center">
                    <h1 className="text-center text-[32px] font-bold text-gray-900 mb-2">
                        Verification
                    </h1>
                    <p className="text-center text-gray-500 mb-10 text-sm">
                        Enter your 4 digits code that you received on your email.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="flex justify-between gap-4 mb-8">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => { inputRefs.current[index] = el; }}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-full h-20 text-center text-2xl font-bold bg-white border border-gray-200 rounded-2xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all outline-none"
                                />
                            ))}
                        </div>

                        <div className="text-center mb-10 text-sm font-bold text-gray-900">
                            00:{timer.toString().padStart(2, '0')}
                        </div>

                        <button
                            type="submit"
                            disabled={loading || otp.some(d => !d)}
                            className="w-full h-14 bg-black text-white rounded-xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-black/10 disabled:opacity-70"
                        >
                            {loading ? "Verifying..." : "CONTINUE"}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm font-bold text-gray-500">
                        If you didn&apos;t receive a code!{" "}
                        <button className="text-gray-900 font-bold hover:text-brand-600 transition-colors">
                            Resend
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
