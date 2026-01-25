"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";
import AuthBackground from "@/components/auth/AuthBackground";

export default function ForgotPassword() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            router.push("/verify-email?type=reset");
        } catch (err) {
            setLoading(false);
        }
    };

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

                {/* Main Card */}
                <div className="w-full bg-white rounded-[40px] p-10 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative">
                    {/* Close Button */}
                    <button
                        onClick={() => router.push("/signin")}
                        className="absolute right-8 top-8 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <h1 className="text-center text-[32px] font-bold text-gray-900 mb-2">
                        Forgot password
                    </h1>
                    <p className="text-center text-gray-500 text-sm leading-relaxed mb-10 px-4">
                        Enter your email for the verification processes will send 4 digit code to your email.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-2.5 ml-1">
                                E mail
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none shadow-sm"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 bg-black text-white rounded-xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-black/10 mt-4"
                        >
                            {loading ? "Processing..." : "CONTINUE"}
                        </button>
                    </form>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}

