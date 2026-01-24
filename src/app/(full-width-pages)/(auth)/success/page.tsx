"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";
import AuthBackground from "@/components/auth/AuthBackground";

export default function SuccessPage() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "/dashboard";
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center p-6 sm:p-10 overflow-hidden">
            <AuthBackground />

            <div className="w-full max-w-[520px] z-10 text-center">
                {/* Logo */}
                <div className="flex justify-center mb-12 transform hover:scale-105 transition-transform duration-500">
                    <Link href="/">
                        <ShoutlyLogo />
                    </Link>
                </div>

                {/* Success Card */}
                <div className="bg-white rounded-[48px] p-12 sm:p-16 shadow-[0_32px_80px_rgba(0,0,0,0.06)] border border-gray-100 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-green-500" />

                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-lg shadow-green-500/10 group-hover:rotate-12 transition-transform duration-700">
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">
                            Successfully Created!
                        </h1>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10">
                            Welcome to the future of brand storytelling. Your account is ready for takeoff.
                        </p>

                        <Link href="/dashboard" className="block">
                            <button className="w-full h-16 bg-black text-white rounded-2xl font-black text-lg hover:bg-gray-800 transition-all shadow-2xl shadow-black/10 hover:-translate-y-1 active:scale-95">
                                Go to Dashboard
                            </button>
                        </Link>

                        <div className="mt-10 flex items-center justify-center gap-2">
                            <div className="flex gap-1">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Auto-Redirecting</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
