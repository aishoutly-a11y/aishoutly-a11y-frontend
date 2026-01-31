"use client";

import React from "react";
import Link from "next/link";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";

export default function ContactSuccessPage() {
    return (
        <div className="bg-white font-arial min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-xl flex flex-col items-center text-center">
                <div className="mb-12">
                    <ShoutlyLogo />
                </div>

                <div className="mb-10">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Nice hearing from you!
                    </h1>
                    <p className="text-gray-500 text-lg font-medium mb-12 max-w-sm mx-auto">
                        Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center w-full max-w-[320px] h-14 bg-black text-white rounded-xl font-bold text-base hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                    >
                        BACK TO HOME
                    </Link>
                </div>
            </div>
        </div>
    );
}
