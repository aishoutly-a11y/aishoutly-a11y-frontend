"use client";

import React from "react";

export default function Billing() {
    return (
        <div className="p-10 font-outfit max-w-[1000px]">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Billing & Subscription</h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Manage your subscription plan, payments, and credit usage.</p>
            </div>

            <div className="space-y-10">
                {/* Active Plan Card */}
                <div className="bg-white dark:bg-gray-800 rounded-[40px] p-10 border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-brand-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Current Plan</span>
                            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight transition-all">Growth Plan</h2>
                            <p className="text-gray-400 font-bold">$79.00 billed monthly • Renews on March 12, 2026</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="h-14 px-8 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-black rounded-2xl text-sm transition-all hover:bg-gray-100">Cancel</button>
                            <button className="h-14 px-10 bg-black text-white font-black rounded-2xl text-sm shadow-xl shadow-black/10 transition-all hover:bg-gray-800 hover:-translate-y-0.5">Upgrade Plan</button>
                        </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-gray-50 dark:border-gray-700">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">AI Credits Used</p>
                                <div className="mb-4">
                                    <span className="text-3xl font-black text-gray-900 dark:text-white">850</span>
                                    <span className="text-gray-400 font-bold ml-2">/ 1000</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-brand-500 h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(251,107,31,0.3)]"></div>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Posts Generated</p>
                                <div className="mb-4">
                                    <span className="text-3xl font-black text-gray-900 dark:text-white">124</span>
                                    <span className="text-gray-400 font-bold ml-2">Total</span>
                                </div>
                                <p className="text-xs text-gray-400 font-bold">+12 since last week</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Linked Accounts</p>
                                <div className="mb-4">
                                    <span className="text-3xl font-black text-gray-900 dark:text-white">04</span>
                                    <span className="text-gray-400 font-bold ml-2">/ 10 Slots</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden text-gray-400">
                                    <div className="bg-blue-500 h-full w-[40%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white dark:bg-gray-800 rounded-[40px] p-10 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Payment Methods</h2>
                        <button className="text-brand-500 font-black text-sm hover:underline tracking-tight">+ Add New</button>
                    </div>

                    <div className="p-8 border border-brand-500 bg-brand-50/10 rounded-[32px] flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center font-black text-gray-400 italic text-xs tracking-tighter border border-gray-200 dark:border-gray-600">VISA</div>
                            <div>
                                <p className="text-gray-900 dark:text-white font-black text-lg">Ending in 4242</p>
                                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Expires 12/28</p>
                            </div>
                        </div>
                        <span className="px-4 py-1 bg-brand-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest">Default</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
