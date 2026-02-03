"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    return (
        <section id="pricing" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl text-[#000000] mb-4">
                        Simple, Affordable Pricing
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Choose the plan that fits your needs
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-2 max-w-xs mx-auto">
                        {/* Toggle Slider Container */}
                        <div
                            className="relative w-36 h-10 bg-white rounded-full shadow-inner cursor-pointer"
                            onClick={() =>
                                setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
                            }
                        >
                            {/* Slider */}
                            <div
                                className={`absolute top-1 left-1 w-16 h-8 bg-white rounded-full shadow transition-transform flex items-center justify-center text-black font-medium text-sm ${billingCycle === "yearly" ? "translate-x-16" : ""
                                    }`}
                            >
                                {billingCycle === "monthly" ? "Monthly" : "Yearly"}
                            </div>
                        </div>

                        {/* Save Text */}
                        <span className="ml-4 px-2 py-1 text-green-700 text-sm font-semibold bg-green-100 rounded-full">
                            Save 20%
                        </span>
                    </div>


                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Starter Plan */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-10 text-left shadow-sm">

                        <h3 className="text-2xl text-black mb-1">
                            Starter
                        </h3>
                        <p className="text-gray-500 mb-6">
                            For Individual & Freelancer
                        </p>

                        <div className="mb-6">
                            <div className="text-4xl text-black">
                                ₹899<span className="text-base font-medium text-gray-500">/month</span>
                            </div>
                            <div className="text-sm text-gray-500">
                                $11 USD / month
                            </div>
                        </div>

                        {/* Button */}
                        <div className="flex justify-center mb-8">
                            <Link
                                href="/signup"
                                className="w-64 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center"
                                style={{ minWidth: "450px" }} // optional: ensures minimum width if needed
                            >
                                Get Started
                            </Link>
                        </div>


                        {/* Features */}
                        <ul className="space-y-4">
                            {[
                                "365 AI-generated posts",
                                "Images, reels & festivals",
                                "Auto scheduling",
                                "Basic branding",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Growth Plan */}
                    <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-10 text-left shadow-xl">

                        {/* Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <span className="px-4 py-1 rounded-full bg-yellow-400 text-black text-xs">
                                Most Popular
                            </span>
                        </div>

                        <h3 className="text-2xl text-white mb-1">
                            Growth
                        </h3>
                        <p className="text-white/80 mb-6">
                            For Small Business
                        </p>

                        <div className="mb-6">
                            <div className="text-4xl text-white">
                                ₹1,499<span className="text-base font-medium text-white/80">/month</span>
                            </div>
                            <div className="text-sm text-white/80">
                                $18 USD / month
                            </div>
                        </div>

                        {/* Button */}
                        <div className="flex justify-center mb-8">
                            <Link
                                href="/signup"
                                className="px-8 py-3 rounded-full text-center bg-white text-blue-600"
                                style={{ minWidth: "450px" }}
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4">
                            {[
                                "Unlimited content generation",
                                "Advanced branding",
                                "Multi-platform scheduling",
                                "Priority support",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white">
                                    <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs">
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
            {/* Early Access CTA */}
            <div className="mt-24 text-center">
                <p className=" text-black mb-8">
                    🎉Get Your Early Access at Launch Price!
                </p>

                <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-black text-white text-lg hover:bg-gray-900 transition"
                >
                    Start Your Free Trial
                </Link>
            </div>

        </section>
    );
}
