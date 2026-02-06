"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function SignInAccountPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">

            {/* Logo */}
            <div className="mb-5">
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
                <h1
                    className="text-2xl text-center text-black mb-2"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Welcome Back
                </h1>

                <p
                    className="text-center text-gray-600 mb-6"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Sign in to continue to your dashboard
                </p>

                {/* Google Sign-in */}
                <button
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 mb-6 hover:bg-gray-50 transition"
                >
                    <Image
                        src="/images/google.png"
                        alt="Google"
                        width={18}
                        height={18}
                    />
                    <span
                        className="text-gray-600"
                        style={{ fontFamily: "Arial", fontWeight: 600 }}
                    >
                        Sign in with Google
                    </span>
                </button>

                {/* Email */}
                <label
                    className="block text-sm text-gray-700 mb-1"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Email Address
                </label>

                <div className="relative mb-5">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                        style={{ fontFamily: "Arial", fontWeight: 400 }}
                    />
                </div>

                {/* Password */}
                <label
                    className="block text-sm text-gray-700 mb-1"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Password
                </label>

                <div className="relative mb-3">
                    <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                        style={{ fontFamily: "Arial", fontWeight: 400 }}
                    />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center gap-2 text-sm text-gray-600 font-arial">
                        Remember me
                    </label>

                    <Link
                        href="/forgot-password"
                        className="text-sm text-[#000000] hover:underline font-arial"
                    >
                        Forgot password?
                    </Link>
                </div>

                {/* Sign In Button */}
                <button
                    onClick={() => router.push("/account-setup")}
                    className="w-full h-12 bg-[#000000] text-white rounded-xl hover:opacity-90 transition mb-4"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Sign in
                </button>

                <p className="text-center text-sm text-gray-600 font-arial">
                    Don't have an account?{" "}
                    <Link href="/sign-in" className="font-semibold text-[#000000] hover:underline font-arial">
                        Sign up
                    </Link>
                </p>

            </div>
        </div>
    );
}
