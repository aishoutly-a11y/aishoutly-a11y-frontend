"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function SignInAccountPage() {
    const router = useRouter();
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
                    Welcome Back
                </h1>
                <p className="flex items-center justify-center gap-2 text-center text-gray-600 mb-6 cursor-pointer hover:underline">
                    Sign in to continue to your dashboard
                </p>
                {/* Google text */}
                <p className="flex items-center justify-center gap-2 text-center text-gray-600 mb-6 cursor-pointer hover:underline">
                    <Image
                        src="/images/google.png"
                        alt="Google"
                        width={18}
                        height={18}
                    />
                    Sign in with Google
                </p>

                {/* Email */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                </label>
                <div className="relative mb-6">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                <button
                    onClick={() => router.push("/verification")}
                    className="w-full h-12 bg-black text-white rounded-xl font-semibold hover:opacity-90 transition mb-4"
                >
                    Sign in
                </button>

                {/* Sign in */}
                <p className="text-center text-sm text-gray-600 mb-4">
                    Don't have an account?{" "}
                    <Link href="/sign-in" className="font-semibold text-black hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
