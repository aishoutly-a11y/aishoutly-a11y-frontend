"use client";

import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React from "react";

export default function VerifyEmail() {
    const [otp, setOtp] = React.useState(["", "", "", ""]);
    const [loading, setLoading] = React.useState(false);
    const [isResetFlow, setIsResetFlow] = React.useState(false);

    React.useEffect(() => {
        // Simple check for query param in client component
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

        // Auto-focus next input
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
        // Simulate verification
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (isResetFlow) {
            window.location.href = "/new-password";
        } else {
            window.location.href = "/profile-setup";
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 font-outfit dark:bg-gray-950">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-brand-600/20">S</div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">Shoutly</span>
                        </div>
                    </Link>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900/50 dark:border dark:border-gray-800 text-center">
                    <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-brand-900/30 dark:text-brand-400">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Verify your email
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        We&apos;ve sent a 4-digit code to <strong>you@company.com</strong>
                    </p>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                                    className="w-14 h-14 text-center text-2xl font-bold border border-gray-200 rounded-xl focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all"
                                />
                            ))}
                        </div>

                        <Button
                            disabled={loading || otp.some(d => !d)}
                            className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-3 font-semibold shadow-lg shadow-brand-600/20 transition-all disabled:opacity-70"
                        >
                            {loading ? "Verifying..." : "Verify Account"}
                        </Button>
                    </form>

                    <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
                        Didn&apos;t receive code?{" "}
                        <button className="font-semibold text-brand-600 hover:underline dark:text-brand-400">
                            Resend
                        </button>
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/signin" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
                        ← Back to login
                    </Link>
                </div>
            </div>
        </div>
    );
}
