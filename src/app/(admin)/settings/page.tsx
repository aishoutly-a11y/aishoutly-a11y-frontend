"use client";

import React from "react";

export default function Settings() {
    return (
        <div className="p-10 font-outfit max-w-[1000px]">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Account Settings</h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Manage your personal information, security, and notification preferences.</p>
            </div>

            <div className="space-y-10">
                {/* Profile Details */}
                <div className="bg-white dark:bg-gray-800 rounded-[40px] p-10 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">Profile Details</h2>

                    <div className="flex items-center gap-8 mb-10 pb-10 border-b border-gray-50 dark:border-gray-700">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-[32px] bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center text-white font-black text-2xl shadow-xl">
                                AM
                            </div>
                            <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-black text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-all">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </button>
                        </div>
                        <div>
                            <h4 className="text-lg font-black text-gray-900 dark:text-white mb-1">Alex Morgan</h4>
                            <p className="text-gray-400 text-sm font-bold">Member since January 2024</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">First Name</label>
                            <input type="text" defaultValue="Alex" className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Last Name</label>
                            <input type="text" defaultValue="Morgan" className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Email Address</label>
                            <input type="email" defaultValue="alex.morgan@company.com" className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                        </div>
                    </div>
                </div>

                {/* Notifications & Security */}
                <div className="bg-white dark:bg-gray-800 rounded-[40px] p-10 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">Preferences</h2>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-900/50 rounded-3xl">
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">Email Notifications</p>
                                <p className="text-xs text-gray-400 font-medium">Weekly summaries and content alerts</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-brand-500 shadow-inner"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-900/50 rounded-3xl">
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">Two-Factor Authentication</p>
                                <p className="text-xs text-gray-400 font-medium">Add an extra layer of security to your account</p>
                            </div>
                            <button className="text-brand-500 text-xs font-black uppercase tracking-widest hover:underline">Enable</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <button className="h-14 px-10 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-black rounded-2xl text-sm transition-all hover:bg-gray-100">Cancel</button>
                    <button className="h-14 px-12 bg-black text-white font-black rounded-2xl text-sm shadow-xl shadow-black/10 hover:bg-gray-800 transition-all hover:-translate-y-0.5">Update Settings</button>
                </div>
            </div>
        </div>
    );
}
