"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OTPPage() {
    const router = useRouter();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(30);
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            const params = new URLSearchParams(window.location.search);
            const isReset = params.get("type") === "reset";

            router.push(isReset ? "/new-password" : "/success");
        }, 1000);
    };

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
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

                {/* Title */}
                <h1
                    className="text-2xl text-center text-black mb-2"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    Verification
                </h1>

                {/* Subtitle */}
                <p
                    className="text-center text-gray-600 mb-6"
                    style={{ fontFamily: "Arial", fontWeight: 200, fontSize: "14px" }}
                >
                    Enter your 4 digits code that you received on your email.
                </p>

                {/* OTP Inputs */}
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between gap-3 mb-6">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => {
                                    inputRefs.current[index] = el;
                                }}

                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-full h-14 text-center text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                                style={{ fontFamily: "Arial", fontWeight: 400 }}
                            />
                        ))}
                    </div>

                    {/* Timer */}
                    <p
                        className="text-center text-sm text-gray-600 mb-6"
                        style={{ fontFamily: "Arial", fontWeight: 400 }}
                    >
                        00:{timer.toString().padStart(2, "0")}
                    </p>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading || otp.some((d) => !d)}
                        className="w-full h-12 bg-[#000000] text-white rounded-xl hover:opacity-90 transition disabled:opacity-60"
                        style={{ fontFamily: "Arial", fontWeight: 400 }}
                    >
                        {loading ? "Verifying..." : "Continue"}
                    </button>
                </form>

                {/* Resend */}
                <p
                    className="mt-6 text-center text-sm text-gray-600"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    If you didn’t receive a code!{" "}
                    <button className="text-black hover:underline">
                        Resend
                    </button>
                </p>

            </div>
        </div>
    );
}
