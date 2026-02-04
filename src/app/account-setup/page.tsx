"use client";
import React from "react";
import Image from "next/image";
import { Upload, ImageIcon, Globe, Phone } from "lucide-react";

export default function BrandSetupPage() {
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
            <h1 className="text-2xl text-black mb-1 text-center">
                Let's Set Up Your Account
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-center mb-6">
                This will only take a few minutes.
            </p>

            {/* Progress Bar */}
            <div className="w-full max-w-md mb-8">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="text-black font-medium">Brand Info</span>
                    <span>Brand Colors</span>
                    <span>Connect Accounts</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 w-1/3 bg-black rounded-full"></div>
                </div>
            </div>

            {/* Card */}
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

                {/* Card Title */}
                <h2 className="text-lg font-medium text-black mb-1">
                    Upload Your Logo
                </h2>

                {/* Card Subtitle */}
                <p className="text-sm text-gray-600 mb-4">
                    This will be overlaid on your social posts
                </p>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mb-6 cursor-pointer hover:border-black transition">
                    <Upload className="mx-auto mb-2 text-gray-500" size={28} />
                    <p className="text-sm text-gray-700">
                        Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG or SVG (max. 5MB)
                    </p>
                </div>

                {/* Brand Name */}
                <div className="mb-4">
                    <label className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                        <ImageIcon size={16} />
                        Brand Name
                    </label>
                    <input
                        type="text"
                        placeholder="Brand name add..."
                        className="w-full py-3 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Website URL */}
                <div className="mb-4">
                    <label className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                        <Globe size={16} />
                        Website URL
                    </label>
                    <input
                        type="url"
                        placeholder="https://yourcompany.com"
                        className="w-full py-3 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-6">
                    <label className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                        <Phone size={16} />
                        Phone Number (Optional)
                    </label>
                    <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full py-3 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Continue Button */}
                <button className="w-full h-12 bg-[#000000] text-white rounded-xl hover:opacity-90 transition">
                    Continue
                </button>
            </div>
        </div>
    );
}
