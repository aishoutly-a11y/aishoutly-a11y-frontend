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
                    <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
                        Simple, Affordable Pricing
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Choose the plan that fits your needs
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-3">
                        <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-black" : "text-gray-400"}`}>
                            Monthly
                        </span>

                        <button
                            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                            className="w-14 h-8 bg-gray-200 rounded-full relative p-1"
                        >
                            <div
                                className={`w-6 h-6 bg-black rounded-full transition-transform ${billingCycle === "yearly" ? "translate-x-6" : ""
                                    }`}
                            />
                        </button>

                        <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-black" : "text-gray-400"}`}>
                            Yearly
                        </span>

                        <span className="text-sm font-semibold text-green-600 ml-2">
                            Save 20%
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Starter Plan */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-10 text-left shadow-sm">

                        <h3 className="text-2xl font-semibold text-black mb-1">
                            Starter
                        </h3>
                        <p className="text-gray-500 mb-6">
                            For Individual & Freelancer
                        </p>

                        <div className="mb-6">
                            <div className="text-4xl font-bold text-black">
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
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
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
                            <span className="px-4 py-1 rounded-full bg-yellow-400 text-black text-xs font-semibold">
                                Most Popular
                            </span>
                        </div>

                        <h3 className="text-2xl font-semibold text-white mb-1">
                            Growth
                        </h3>
                        <p className="text-white/80 mb-6">
                            For Small Business
                        </p>

                        <div className="mb-6">
                            <div className="text-4xl font-bold text-white">
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
                                className="px-8 py-3 rounded-full bg-white text-black font-semibold"
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
                <p className="text-2xl md:text-3xl font-semibold text-black mb-8">
                    Get Your Early Access at Launch Price!
                </p>

                <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-black text-white font-semibold text-lg hover:bg-gray-900 transition"
                >
                    Start Your Free Trial
                </Link>
            </div>

        </section>
    );
}
