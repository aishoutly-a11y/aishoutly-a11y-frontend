"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
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
                <h1
                    className="text-2xl text-center text-black mb-2"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Verify your email
                </h1>

                {/* Subtitle */}
                <p
                    className="text-center text-gray-600 mb-6"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    We sent a code to <span style={{ fontFamily: "Arial", fontWeight: 500 }}>pradipadkari@gmail.com</span>
                </p>

                {/* Verification Code */}
                <label
                    className="block text-sm text-gray-700 mb-1"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Verification Code
                </label>
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="000000"
                    className="w-full text-left tracking-widest text-lg py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black mb-6 placeholder:text-gray-400"
                    style={{ fontFamily: "Arial", fontWeight: 400, paddingLeft: 10 }}
                />


                {/* Button */}
                <button
                    onClick={() => router.push("/create-password")}
                    className="w-full h-12 bg-[#000000] text-white rounded-xl hover:opacity-90 transition mb-4"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Verify & Continue
                </button>


                {/* Resend */}
                <p
                    className="text-center text-sm text-gray-600 cursor-pointer hover:underline"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Resend code
                </p>

            </div>
        </div>
    );
}
