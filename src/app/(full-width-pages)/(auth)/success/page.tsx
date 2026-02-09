"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SuccessPage() {
    const router = useRouter();
    const [isResetFlow, setIsResetFlow] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setIsResetFlow(params.get("type") === "reset");
    }, []);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">

            {/* Logo */}
            <div className="mb-6">
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
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-center">

                {/* Success Icon */}
                <div className="mx-auto mb-6 w-20 h-20 rounded-full border-5 border-gray-300 flex items-center justify-center">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                {/* Title */}
                <h1
                    className="text-2xl text-[#000000] mb-2"
                    style={{ fontFamily: "Arial", fontWeight: 500 }}
                >
                    Successfully
                </h1>

                {/* Message */}
                <p
                    className="text-gray-600 mb-6"
                    style={{ fontFamily: "Arial", fontWeight: 100, fontSize: "13px", paddingBottom: "10px" }}
                >
                    {isResetFlow
                        ? "Your password has been reset successfully."
                        : "Your account has been created successfully."}
                </p>

                {/* Continue Button */}
                <button
                    onClick={() => router.push("/sign-in")}
                    className="w-full h-12 bg-[#000000] text-white hover:opacity-90 transition"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Continue
                </button>

            </div>
        </div>
    );
}
