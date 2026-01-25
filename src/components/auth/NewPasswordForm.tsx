"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";
import AuthBackground from "@/components/auth/AuthBackground";

export default function NewPasswordForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            router.push("/success?type=reset");
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
                        New Password
                    </h1>
                    <p className="text-center text-gray-500 mb-10 text-sm">
                        Create a new password that you can use to login to your account.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-2.5 ml-1">
                                Enter new password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="8 symbls at least"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-5 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? <EyeIcon /> : <EyeCloseIcon />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-2.5 ml-1">
                                Confirm password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="8 symbls at least"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-5 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showConfirmPassword ? <EyeIcon /> : <EyeCloseIcon />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !formData.password || formData.password !== formData.confirmPassword}
                            className="w-full h-14 bg-black text-white rounded-xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-black/10 disabled:opacity-70 mt-4"
                        >
                            {loading ? "Updating..." : "UPDATE PASSWORD"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
