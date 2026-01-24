"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const plans = [
        {
            name: "Starter",
            price: billingCycle === "monthly" ? "29" : "24",
            description: "Perfect for solopreneurs",
            features: ["50 AI Credits", "Standard Support", "basic Branding", "Multi-platform"],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Growth",
            price: billingCycle === "monthly" ? "79" : "69",
            description: "Best for growing teams",
            features: ["250 AI Credits", "Priority Support", "Advanced Branding", "Custom Prompts", "Team Collaboration"],
            cta: "Try Growth",
            popular: true
        },
        {
            name: "Pro",
            price: billingCycle === "monthly" ? "149" : "129",
            description: "All you need for scale",
            features: ["Unlimited AI Credits", "Dedicated Manager", "VIP Branding", "API Access", "White-label options"],
            cta: "Go Pro",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Simple, Affordable Pricing</h2>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            className="w-14 h-8 bg-gray-200 rounded-full relative p-1 transition-all"
                        >
                            <div className={`w-6 h-6 bg-black rounded-full transition-all ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                        <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>Yearly (Save 20%)</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative bg-white p-10 rounded-[40px] border transition-all hover:scale-[1.02] ${plan.popular
                                    ? "border-brand-500 shadow-2xl shadow-brand-500/10 scale-105 z-10"
                                    : "border-gray-100 hover:shadow-xl"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-black text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-gray-400 text-sm mb-8 font-medium">{plan.description}</p>

                            <div className="mb-8">
                                <span className="text-5xl font-black text-gray-900">${plan.price}</span>
                                <span className="text-gray-400 font-bold ml-2">/mo</span>
                            </div>

                            <div className="space-y-4 mb-10">
                                {plan.features.map(f => (
                                    <div key={f} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-brand-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                        </div>
                                        <span className="text-sm font-bold text-gray-700">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/signup"
                                className={`block w-full py-4 rounded-[18px] text-center font-bold transition-all ${plan.popular
                                        ? "bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/10"
                                        : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
