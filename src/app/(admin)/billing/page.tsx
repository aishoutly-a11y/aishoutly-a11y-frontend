"use client";

import React, { useState } from "react";

export default function Billing() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    return (
        <div className="p-10 font-arial max-w-[1200px] mx-auto pb-20">
            <div className="text-center mb-12">
                <h1 className="text-[32px] font-bold text-gray-900 mb-2">Subscription & Billing</h1>
                <p className="text-gray-400 font-medium">Manage your plan and payment information</p>
            </div>

            {/* Current Plan Banner */}
            <div className="bg-gradient-to-r from-[#A855F7] via-[#D946EF] to-[#EC4899] rounded-[32px] p-10 text-white shadow-xl shadow-pink-500/10 mb-12 relative overflow-hidden group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <h2 className="text-2xl font-bold">Current Plan: Professional</h2>
                        </div>
                        <p className="text-white/80 text-sm font-medium mb-8">Your subscription renews on December 15, 2025</p>

                        <div className="flex gap-12">
                            <div>
                                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Posts this month</p>
                                <p className="text-2xl font-bold">127</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Connected accounts</p>
                                <p className="text-2xl font-bold">3</p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-white text-gray-900 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-lg">
                        Manage Billing
                    </button>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex justify-center mb-16">
                <div className="bg-gray-50 p-1.5 rounded-2xl flex items-center gap-2 border border-gray-100 shadow-sm">
                    <button
                        onClick={() => setBillingCycle("monthly")}
                        className={`px-8 py-2.5 rounded-xl text-xs font-bold transition-all ${billingCycle === "monthly" ? "bg-white text-gray-900 shadow-md" : "text-gray-400 hover:text-gray-600"}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle("yearly")}
                        className={`px-8 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${billingCycle === "yearly" ? "bg-white text-gray-900 shadow-md" : "text-gray-400 hover:text-gray-600"}`}
                    >
                        Yearly
                        <span className="text-[8px] bg-green-500 text-white px-1.5 py-0.5 rounded-md">Save 20%</span>
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-20 px-4">
                <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all hover:scale-[1.02]">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                    <p className="text-gray-400 text-sm font-medium mb-8">For Individuals & Freelancers</p>
                    <div className="mb-10">
                        <span className="text-[32px] font-black text-gray-900">₹899</span>
                        <span className="text-gray-400 font-bold ml-1 text-sm">/month</span>
                        <p className="text-[10px] text-gray-400 mt-1 font-bold tracking-tight">$11 USD / month</p>
                    </div>
                    <button className="w-full py-4 bg-brand-600 text-white rounded-2xl font-bold text-sm mb-10 hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20">Get Started</button>
                    <ul className="space-y-4">
                        {["Images + Reels", "Festival Posts", "Auto Scheduling", "Logo Overlay", "Captions + Hashtags"].map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                                <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-100">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-[40px] p-10 text-white shadow-2xl shadow-purple-500/20 transition-all hover:scale-[1.02] relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Most Popular</div>
                    <h3 className="text-xl font-bold mb-2">Growth</h3>
                    <p className="text-white/60 text-sm font-medium mb-8">For Small Businesses</p>
                    <div className="mb-10">
                        <span className="text-[32px] font-black italic">₹1,499</span>
                        <span className="text-white/60 font-bold ml-1 text-sm">/month</span>
                        <p className="text-[10px] text-white/40 mt-1 font-bold tracking-tight">$18 USD / month</p>
                    </div>
                    <button className="w-full py-4 bg-white text-gray-900 rounded-2xl font-bold text-sm mb-10 hover:bg-gray-100 transition-all shadow-lg">Get Started</button>
                    <ul className="space-y-4">
                        {["365 Posts Yearly", "Images Only", "Captions + Hashtags", "Auto Scheduling", "Priority Support", "Advanced Analytics"].map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm font-medium text-white/90">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/30">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-10 mb-8">
                <div className="flex items-center gap-3 mb-8 text-gray-900">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                    <h2 className="text-xl font-bold tracking-tight">Payment Method</h2>
                </div>

                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-center justify-between mb-6">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        </div>
                        <div>
                            <p className="text-gray-900 font-bold">•••• •••• •••• 4242</p>
                            <p className="text-xs text-gray-400 font-medium">Expires 12/2026</p>
                        </div>
                    </div>
                    <button className="text-brand-600 text-xs font-bold hover:underline">Update</button>
                </div>
                <button className="text-brand-500 text-xs font-bold hover:underline flex items-center gap-2">Add payment method →</button>
            </div>

            {/* Billing History */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-10 overflow-hidden">
                <div className="flex items-center gap-3 mb-8 text-gray-900">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    <h2 className="text-xl font-bold tracking-tight">Billing History</h2>
                </div>

                <div className="space-y-4">
                    {[
                        { date: "Dec 1, 2025", id: "INV-001", amount: "$79.00" },
                        { date: "Nov 1, 2025", id: "INV-002", amount: "$79.00" },
                        { date: "Oct 1, 2025", id: "INV-003", amount: "$79.00" },
                    ].map((inv) => (
                        <div key={inv.id} className="p-6 border border-gray-50 rounded-2xl flex items-center justify-between hover:bg-gray-50/50 transition-all">
                            <div className="flex items-center gap-12">
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{inv.date}</p>
                                    <p className="text-[10px] text-gray-400 font-bold">{inv.id}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{inv.amount}</p>
                                    <span className="text-[9px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">Paid</span>
                                </div>
                            </div>
                            <button className="text-brand-600 text-xs font-bold hover:underline">Download</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-20 flex justify-between items-center text-gray-400 px-2">
                <p className="text-[10px] font-medium">© 2025 ShoutlyAI. All rights reserved.</p>
                <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
                    <button className="hover:text-gray-900">Privacy Policy</button>
                    <button className="hover:text-gray-900">Terms of Service</button>
                    <button className="hover:text-gray-900">Support</button>
                </div>
            </div>
        </div>
    );
}
