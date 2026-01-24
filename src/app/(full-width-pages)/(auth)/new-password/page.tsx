"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";
import AuthBackground from "@/components/auth/AuthBackground";

export default function NewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        window.location.href = "/signin";
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
                        Set new password
                    </h1>
                    <p className="text-center text-gray-500 mb-10">
                        Create a new password for your account.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeIcon /> : <EyeCloseIcon />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="********"
                                    className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showConfirmPassword ? <EyeIcon /> : <EyeCloseIcon />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !password || !confirmPassword}
                            className="w-full h-14 bg-black text-white rounded-2xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-black/10 disabled:opacity-70 mt-4"
                        >
                            {loading ? "Resetting..." : "Reset Password"}
                        </button>
                    </form>
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
