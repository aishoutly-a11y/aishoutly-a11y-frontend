"use client";

import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React, { useState } from "react";
export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!email) {
            setError("Please enter your email address");
            setLoading(false);
            return;
        }

        // Simulate sending reset link
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSuccess(true);
        } catch (err) {
            setError("Something went wrong. Please try again.");
            setLoading(false);
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

                <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900/50 dark:border dark:border-gray-800">
                    <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                        Forgot Password?
                    </h1>

                    {success ? (
                        <div className="mt-8 text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Check your email</h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                We&apos;ve sent a password reset link to <span className="font-medium text-gray-900 dark:text-white">{email}</span>.
                            </p>
                            <Button
                                onClick={() => setSuccess(false)}
                                className="mt-8 w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-3 font-semibold shadow-lg shadow-brand-600/20 transition-all"
                            >
                                Re-enter email
                            </Button>
                        </div>
                    ) : (
                        <>
                            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                                Enter your email address to get the reset link.
                            </p>

                            {error && (
                                <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-500 dark:bg-red-900/20 dark:text-red-400">
                                    {error}
                                </div>
                            )}

                            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                                <div>
                                    <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</Label>
                                    <Input
                                        type="email"
                                        placeholder="you@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    />
                                </div>

                                <Button
                                    disabled={loading}
                                    className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-3 font-semibold shadow-lg shadow-brand-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Sending..." : "Send Reset Link"}
                                </Button>
                            </form>
                        </>
                    )}

                    <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                        Remember your password?{" "}
                        <Link href="/signin" className="font-semibold text-brand-600 hover:underline dark:text-brand-400">
                            Sign in
                        </Link>
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
