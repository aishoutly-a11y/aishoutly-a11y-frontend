import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Settings | Shoutly AI",
    description: "Manage your account settings and preferences.",
};

export default function Settings() {
    return (
        <div className="p-6 font-outfit">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Manage your profile, team, and preferences.</p>
            </div>

            <div className="grid gap-8 max-w-4xl">
                {/* Profile Settings */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Profile Details</h2>
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div>
                            <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition">
                                Change Photo
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                            <input type="text" defaultValue="Alex" className="w-full rounded-xl border-gray-200 bg-gray-50 p-2.5 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                            <input type="text" defaultValue="Morgan" className="w-full rounded-xl border-gray-200 bg-gray-50 p-2.5 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <input type="email" defaultValue="alex.morgan@company.com" className="w-full rounded-xl border-gray-200 bg-gray-50 p-2.5 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Notifications</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                                <p className="text-sm text-gray-500">Receive weekly summaries and alerts.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 dark:peer-focus:ring-brand-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <button className="px-6 py-3 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 transition">
                        Cancel
                    </button>
                    <button className="rounded-xl bg-brand-600 px-8 py-3 font-semibold text-white shadow-lg hover:bg-brand-700 transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
