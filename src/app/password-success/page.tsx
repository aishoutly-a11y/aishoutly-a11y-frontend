"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function PasswordSuccessPage() {
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
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-4xl shadow-lg p-8 text-center">

                {/* Success Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                        <CheckIcon className="w-10 h-10 text-[#000000]" />
                    </div>
                </div>

                {/* Title */}
                <h1
                    className="text-2xl text-[#000000] mb-2"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Successfully
                </h1>

                {/* Subtitle */}
                <p
                    className="text-gray-600 mb-6"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Your password has been created successfully
                </p>

                {/* Continue Button */}
                <button
                    onClick={() => router.push("/sign-in")}
                    className="w-full h-12 bg-[#000000] text-white rounded-xl hover:opacity-90 transition"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Continue
                </button>

            </div>
        </div>
    );
}
