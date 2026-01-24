"use client";

import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React, { useEffect } from "react";

export default function SuccessPage() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "/dashboard";
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 font-outfit dark:bg-gray-950">
            <div className="w-full max-w-md text-center">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-brand-600/20">S</div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">Shoutly</span>
                        </div>
                    </Link>
                </div>

                <div className="rounded-2xl bg-white p-10 shadow-xl dark:bg-gray-900/50 dark:border dark:border-gray-800">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-green-900/30 dark:text-green-400">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Account Created!
                    </h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Welcome to Shoutly. Your profile has been set up successfully.
                    </p>

                    <div className="mt-8">
                        <Link href="/dashboard">
                            <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-3 font-semibold shadow-lg shadow-brand-600/20 transition-all">
                                Go to Dashboard
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-sm text-gray-500">
                        Redirecting to dashboard in a few seconds...
                    </p>
                </div>
            </div>
        </div>
    );
}
