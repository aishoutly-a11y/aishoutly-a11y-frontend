"use client";

import React, { useState } from "react";
import { PlusIcon } from "@/icons";

export default function BrandSettings() {
    const [primaryColor, setPrimaryColor] = useState("#fb6b1f");
    const [secondaryColor, setSecondaryColor] = useState("#8b5cf6");

    return (
        <div className="p-10 font-outfit max-w-[1000px]">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Brand Settings</h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Manage your brand identity and preferences for consistent results.</p>
            </div>

            <div className="space-y-10">
                {/* Brand Details */}
                <div className="bg-white dark:bg-gray-800 rounded-[40px] p-10 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">Brand Identity</h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Brand Name</label>
                            <input type="text" placeholder="Shoutly AI" className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Industry</label>
                            <select className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none appearance-none">
                                <option>Technology</option>
                                <option>Real Estate</option>
                                <option>Health & Wellness</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 ml-1">Brand Logo</label>
                        <div className="flex items-center gap-6">
                            <div className="w-32 h-32 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center cursor-pointer hover:border-brand-500 hover:bg-white transition-all group">
                                <PlusIcon className="w-8 h-8 text-gray-400 group-hover:text-brand-500 mb-2" />
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Upload Logo</span>
                            </div>
                            <div className="text-xs text-gray-500 space-y-1">
                                <p className="font-bold">Recommendation:</p>
                                <p>• PNG or SVG format</p>
                                <p>• Transparent background</p>
                                <p>• High resolution (min 512x512)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Color Palette */}
                <div className="bg-white dark:bg-gray-800 rounded-[40px] p-10 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">Visual Style</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Primary Color</label>
                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-2xl shadow-lg border border-white" style={{ backgroundColor: primaryColor }} />
                                <input value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 dark:text-white font-mono text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Secondary Color</label>
                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-2xl shadow-lg border border-white" style={{ backgroundColor: secondaryColor }} />
                                <input value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 dark:text-white font-mono text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Voice */}
                <div className="bg-white dark:bg-gray-800 rounded-[40px] p-10 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">Brand Voice</h2>

                    <div className="space-y-8">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Description / Bio</label>
                            <textarea placeholder="Tell us about your brand's mission and personality..." className="w-full h-32 bg-gray-50 border border-transparent rounded-3xl p-6 text-sm text-gray-900 dark:text-white focus:bg-white focus:border-brand-500 transition-all outline-none resize-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Tone of Voice</label>
                            <div className="flex flex-wrap gap-3">
                                {["Professional", "Playful", "Corporate", "Inspirational", "Minimalist"].map(tone => (
                                    <button key={tone} className="px-6 py-3 bg-gray-50 hover:bg-brand-50 hover:text-brand-600 rounded-2xl text-xs font-bold text-gray-500 border border-transparent hover:border-brand-100 transition-all uppercase tracking-widest">{tone}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <button className="h-14 px-10 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-black rounded-2xl text-sm transition-all hover:bg-gray-100">Cancel</button>
                    <button className="h-14 px-12 bg-black text-white font-black rounded-2xl text-sm shadow-xl shadow-black/10 hover:bg-gray-800 transition-all hover:-translate-y-0.5">Save Changes</button>
                </div>
            </div>
        </div>
    );
}
