"use client";

import React from "react";
import Link from "next/link";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";
import AuthBackground from "@/components/auth/AuthBackground";

export default function VerifyEmail() {
    const [otp, setOtp] = React.useState(["", "", "", ""]);
    const [loading, setLoading] = React.useState(false);
    const [isResetFlow, setIsResetFlow] = React.useState(false);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            setIsResetFlow(params.get("type") === "reset");
        }
    }, []);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (isResetFlow) {
            window.location.href = "/new-password";
        } else {
            window.location.href = "/profile-setup";
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-6 sm:p-10 overflow-hidden">
            <AuthBackground />

            <div className="w-full max-w-[480px] z-10">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <Link href="/">
                        <ShoutlyLogo />
                    </Link>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Verify your email
                    </h1>
                    <p className="text-gray-500 mb-10">
                        We&apos;ve sent a 4-digit code to <br /> <strong>you@company.com</strong>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex gap-4 justify-center">
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    id={`otp-${i}`}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(i, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(i, e)}
                                    className="w-16 h-16 text-center text-2xl font-bold bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-brand-500 transition-all outline-none"
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            disabled={loading || otp.some(d => !d)}
                            className="w-full h-14 bg-black text-white rounded-2xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-black/10 disabled:opacity-70"
                        >
                            {loading ? "Verifying..." : "Verify Account"}
                        </button>
                    </form>

                    <p className="mt-10 text-sm font-medium text-gray-500">
                        Didn&apos;t receive code?{" "}
                        <button className="text-gray-900 font-bold hover:text-brand-600 transition-colors">
                            Resend
                        </button>
                    </p>
                </div>

                <div className="mt-10 text-center">
                    <Link href="/signin" className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">
                        Back to login
                    </Link>
                </div>
            </div>
        </div>
    );
}
