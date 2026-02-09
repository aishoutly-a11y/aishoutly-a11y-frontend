"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    Upload,
    ImageIcon,
    Globe,
    Phone,
    Palette,
    Instagram,
    Facebook,
    Linkedin,
    Twitter,
    Youtube
} from "lucide-react";

export default function BrandSetupPage() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
    const router = useRouter();

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

            {/* Title */}
            <h1 className="text-2xl text-black mb-1 text-center font-arial">
                Let's Set Up Your Account
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-center mb-6 font-arial">
                This will only take a few minutes.
            </p>

            {/* Progress Bar */}
            <div className="w-full max-w-md mb-8">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2 font-arial">
                    <span className={step === 1 ? "text-black font-medium font-arial" : ""}>
                        Brand Info
                    </span>
                    {/* <span className={step === 2 ? "text-black font-medium font-arial" : ""}>
                        Brand Colors
                    </span>*/}
                    <span className="font-arial">Connect Accounts</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className={`h-2 bg-black rounded-full transition-all duration-300 ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"
                            }`}
                    />
                </div>

            </div>

            {/* Card */}
            <div className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

                {/* ================= STEP 1 ================= */}
                {step === 1 && (
                    <>
                        <h2 className="text-lg font-medium text-black mb-1 font-arial">
                            Upload Your Logo
                        </h2>

                        <p className="text-sm text-gray-600 mb-4 font-arial">
                            This will be overlaid on your social posts
                        </p>

                        <div className="border-2 border-gray-300 rounded-xl p-6 text-center mb-6 cursor-pointer hover:border-black transition">
                            <Upload className="mx-auto mb-2 text-gray-500" size={28} />
                            <p className="text-sm text-gray-700 font-arial">
                                Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1 font-arial">
                                PNG, JPG or SVG (max. 5MB)
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-arial">
                                <ImageIcon size={16} />
                                Brand Name
                            </label>
                            <input
                                type="text"
                                placeholder="Brand name add..."
                                className="w-full py-3 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black font-arial"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-arial">
                                <Globe size={16} />
                                Website URL
                            </label>
                            <input
                                type="url"
                                placeholder="https://yourcompany.com"
                                className="w-full py-3 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black font-arial"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-arial">
                                <Phone size={16} />
                                Phone Number (Optional)
                            </label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                className="w-full py-3 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black font-arial"
                            />
                        </div>

                        <button
                            onClick={() => setStep(3)}
                            className="w-full h-12 bg-[#000000] text-white rounded-xl hover:opacity-90 transition font-arial"
                        >
                            Continue
                        </button>
                    </>
                )}

                {/* ================= STEP 2 ================= */}
                {/*    {step === 2 && (
                    <>
                        <h2 className="text-lg font-medium text-black mb-1 font-arial">
                            Choose Your Brand Colors
                        </h2>

                        <p className="text-sm text-gray-600 mb-6 font-arial">
                            These will be used for post overlays and backgrounds
                        </p>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 mb-6">

                            <div className="w-full">
                                <label className="flex items-center gap-2 text-sm text-gray-700 mb-2 font-arial">
                                    <Palette size={16} />
                                    Primary Color
                                </label>

                                <div className="flex items-center gap-3">
                                    
                                    <div className="w-12 h-10 rounded-md bg-blue-500 border" />

                                    
                                    <input
                                        type="text"
                                        placeholder="#8B5CF6"
                                        className="flex-1 min-w-0 py-3 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black font-arial"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="flex items-center gap-2 text-sm text-gray-700 mb-2 font-arial">
                                    <Palette size={16} />
                                    Secondary Color
                                </label>

                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-10 rounded-md bg-purple-500 border" />
                                    <input
                                        type="text"
                                        placeholder="#EC4899"
                                        className="flex-1 min-w-0 py-3 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black font-arial"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 rounded-xl h-36 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
                            <span className="text-xs opacity-80 font-arial">Preview</span>
                            <span className="text-lg font-medium font-arial">
                                Your Brand Color
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep(1)}
                                className="flex-1 h-12 bg-white border border-gray-300 text-black rounded-xl hover:bg-gray-50 transition font-arial"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                className="flex-1 h-12 bg-[#000000] text-white rounded-xl hover:opacity-90 transition font-arial"
                            >
                                Continue
                            </button>

                        </div>
                    </>
                )} */}
                {/* ================= STEP 3 ================= */}
                {step === 3 && (
                    <>
                        <h2 className="text-lg font-medium text-black mb-1 font-arial">
                            Connect Your Social Accounts
                        </h2>

                        <p className="text-sm text-gray-600 mb-6 font-arial">
                            Select platforms where you want to auto-schedule posts.
                        </p>

                        {/* Social Accounts */}
                        <div className="space-y-3 mb-4">
                            {[
                                { name: "Instagram", icon: Instagram },
                                { name: "Facebook", icon: Facebook },
                                { name: "LinkedIn", icon: Linkedin },
                                { name: "X (Twitter)", icon: Twitter },
                                { name: "YouTube", icon: Youtube },
                            ].map(({ name, icon: Icon }) => {
                                const active = selectedAccounts.includes(name);

                                return (
                                    <div
                                        key={name}
                                        onClick={() =>
                                            setSelectedAccounts((prev) =>
                                                prev.includes(name)
                                                    ? prev.filter((item) => item !== name)
                                                    : [...prev, name]
                                            )
                                        }
                                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition
              ${active
                                                ? "border-green-500 text-green-600"
                                                : "border-gray-300 text-black"
                                            }`}
                                    >
                                        <Icon
                                            size={20}
                                            className={active ? "text-green-600" : "text-black"}
                                        />
                                        <span className="font-arial">{name}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mb-6 rounded-xl border border-blue-300 bg-blue-50 px-4 py-3">
                            <p className="text-sm text-blue-700 font-arial">
                                You can connect more accounts later from settings
                            </p>
                        </div>


                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep(2)}
                                className="flex-1 h-12 bg-white border border-gray-300 text-black rounded-xl hover:bg-gray-50 transition font-arial"
                            >
                                Back
                            </button>

                            <button
                                onClick={() => router.push("/dashboards")}
                                className="flex-1 h-12 bg-[#000000] text-white rounded-xl hover:opacity-90 transition font-arial"
                            >
                                Complete Setup
                            </button>
                        </div>
                    </>
                )}


            </div>
        </div>
    );
}
