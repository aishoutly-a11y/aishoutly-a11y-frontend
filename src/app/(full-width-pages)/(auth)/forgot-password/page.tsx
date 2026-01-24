"use client";

import React, { useState } from "react";
import Link from "next/link";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";
import AuthBackground from "@/components/auth/AuthBackground";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            window.location.href = "/verify-email?type=reset";
        } catch (err) {
            setLoading(false);
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
                <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                    <h1 className="text-center text-3xl font-bold text-gray-900 mb-2">
                        Forgot Password?
                    </h1>
                    <p className="text-center text-gray-500 mb-10">
                        Enter your email address to get the reset link.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 bg-black text-white rounded-2xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-black/10 disabled:opacity-70 mt-4"
                        >
                            {loading ? "Sending..." : "Send Reset Link"}
                        </button>
                    </form>

                    <p className="mt-10 text-center text-sm font-medium text-gray-500">
                        Remember your password?{" "}
                        <Link href="/signin" className="text-gray-900 font-bold hover:text-brand-600 transition-colors">
                            Sign in
                        </Link>
                    </p>
                </div>

                <div className="mt-10 text-center">
                    <Link href="/" className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
