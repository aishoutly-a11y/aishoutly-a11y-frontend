import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Billing & Subscription | Shoutly AI",
    description: "Manage your subscription plan and billing details.",
};

export default function Billing() {
    return (
        <div className="p-6 font-outfit">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Billing & Subscription</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Manage your plan, payment methods, and invoices.</p>
            </div>

            <div className="grid gap-8">
                {/* Current Plan */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <span className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-xs font-bold mb-2 dark:bg-brand-900/30 dark:text-brand-400">CURRENT PLAN</span>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Growth Plan</h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">$49/month • Renews on Feb 12, 2026</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-5 py-2.5 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 transition">
                                Cancel Plan
                            </button>
                            <button className="px-5 py-2.5 rounded-xl bg-brand-600 font-semibold text-white shadow-lg hover:bg-brand-700 transition">
                                Upgrade Plan
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-8">
                        <div className="grid sm:grid-cols-3 gap-6">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">AI Credits Remaining</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">850 / 1000</p>
                                <div className="mt-2 h-2 w-full bg-gray-100 rounded-full overflow-hidden dark:bg-gray-700">
                                    <div className="h-full bg-brand-500 w-[85%]"></div>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Posts Scheduled</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">12 / Unlimited</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Team Members</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">3 / 5</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Payment Methods</h3>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl dark:border-gray-700">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-gray-100 rounded-md flex items-center justify-center font-bold text-gray-600 border border-gray-200">VISA</div>
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white">Visa ending in 4242</p>
                                <p className="text-sm text-gray-500">Expiry 12/2028</p>
                            </div>
                        </div>
                        <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white">Edit</button>
                    </div>
                    <button className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1">
                        + Add new payment method
                    </button>
                </div>
            </div>
        </div>
    );
}
