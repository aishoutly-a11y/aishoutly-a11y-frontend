"use client";

import Image from "next/image";

export default function VerifyEmailPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">

            {/* Logo */}
            <div className="mb-8">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={180}
                    height={120}
                    priority
                    className="mx-auto"
                />
            </div>

            {/* Card */}
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

                {/* Title */}
                <h1 className="text-2xl font-bold text-center text-black mb-2">
                    Verify your email
                </h1>

                {/* Subtitle */}
                <p className="text-center text-gray-600 mb-6">
                    We sent a code to <span className="font-medium">pradipadkari@gmail.com</span>
                </p>

                {/* Verification Code */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Verification Code
                </label>
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="000000"
                    className="w-full text-center tracking-widest text-lg py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black mb-6"
                />

                {/* Button */}
                <button className="w-full h-12 bg-black text-white rounded-xl font-semibold hover:opacity-90 transition mb-4">
                    Verify & Continue
                </button>

                {/* Resend */}
                <p className="text-center text-sm text-gray-600 cursor-pointer hover:underline">
                    Resend code
                </p>

            </div>
        </div>
    );
}
