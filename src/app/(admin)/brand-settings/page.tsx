import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brand Settings | Shoutly AI",
    description: "Manage your brand identity and assets.",
};

export default function BrandSettings() {
    return (
        <div className="p-6 font-outfit">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Brand Settings</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Configure your brand voice, logos, and colors.</p>
            </div>

            <div className="grid gap-8">
                {/* Brand Identity */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Visual Identity</h2>

                    <div className="flex gap-8 items-start">
                        <div className="flex-shrink-0">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Logo</label>
                            <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-600 transition">
                                <span className="text-xs text-gray-500">Upload</span>
                            </div>
                        </div>

                        <div className="flex-grow grid gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Primary Color</label>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-brand-600 shadow-sm border border-gray-200"></div>
                                        <input type="text" value="#4F46E5" className="flex-1 rounded-xl border-gray-200 bg-gray-50 p-2.5 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Secondary Color</label>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-purple-600 shadow-sm border border-gray-200"></div>
                                        <input type="text" value="#9333EA" className="flex-1 rounded-xl border-gray-200 bg-gray-50 p-2.5 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Font Family</label>
                                <select className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-2.5 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white">
                                    <option>Outfit (Recommended)</option>
                                    <option>Inter</option>
                                    <option>Roboto</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Voice */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Brand Voice</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                            <textarea
                                className="w-full h-32 rounded-xl border-gray-200 bg-gray-50 p-4 text-sm focus:border-brand-500 focus:ring-brand-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white resize-none"
                                placeholder="Describe your brand's personality, target audience, and key values..."
                            >We are a forward-thinking tech company making AI accessible to everyone. Our tone is helpful, expert, yet approachable.</textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Keywords to Include</label>
                            <input type="text" placeholder="e.g. AI, Automation, Growth" className="w-full rounded-xl border-gray-200 bg-gray-50 p-3 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button className="rounded-xl bg-brand-600 px-8 py-3 font-semibold text-white shadow-lg hover:bg-brand-700 transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
