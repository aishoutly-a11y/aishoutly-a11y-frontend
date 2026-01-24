"use client";

import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React, { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "@/icons";

export default function NewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

                <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900/50 dark:border dark:border-gray-800">
                    <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                        Set new password
                    </h1>
                    <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                        Create a new password for your account.
                    </p>

                    <form className="mt-8 space-y-5">
                        <div>
                            <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">New Password</Label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                >
                                    {showPassword ? <EyeIcon /> : <EyeCloseIcon />}
                                </span>
                            </div>
                        </div>

                        <div>
                            <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                                <span
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                >
                                    {showConfirmPassword ? <EyeIcon /> : <EyeCloseIcon />}
                                </span>
                            </div>
                        </div>

                        <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-3 font-semibold shadow-lg shadow-brand-600/20 transition-all">
                            Reset Password
                        </Button>
                    </form>
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
