"use client";

import React, { useState } from "react";
import ShoutlyLogo from "@/components/common/ShoutlyLogo";

export default function BrandInfo() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 font-arial">
            <div className="mb-8">
                <ShoutlyLogo className="scale-110" />
            </div>

            <div className="text-center mb-12">
                <h1 className="text-[40px] font-black text-gray-900 mb-2 tracking-tight">Let&apos;s Set Up Your Account</h1>
                <p className="text-gray-500 font-medium">This will only take a few minutes</p>
            </div>

            {/* Stepper */}
            <div className="w-full max-w-4xl mb-16">
                <div className="flex justify-between items-center px-4 mb-4">
                    <span className="text-sm font-bold text-gray-900">Brand Info</span>
                    <span className="text-sm font-bold text-gray-400">Brand Tone</span>
                    <span className="text-sm font-bold text-gray-400">Connect Accounts</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full w-1/3"></div>
                </div>
            </div>

            {/* Main Card */}
            <div className="w-full max-w-6xl bg-white rounded-[40px] p-10 md:p-16 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] grid md:grid-cols-2 gap-16">
                {/* Upload Logo Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Logo</h2>
                    <p className="text-gray-400 text-sm mb-8">This will be overlaid on your social posts</p>

                    <div className="aspect-square w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-[32px] flex flex-col items-center justify-center gap-4 group hover:bg-white hover:border-brand-500 transition-all cursor-pointer">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-brand-500">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-bold text-gray-900">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-400 mt-1 font-medium">PNG, JPG or SVG (max. 5MB)</p>
                        </div>
                    </div>
                </div>

                {/* Form Fields Section */}
                <div className="flex flex-col justify-center space-y-8">
                    <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-3 ml-1">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            Brand Name
                        </label>
                        <input type="text" placeholder="brand name add...." className="w-full h-16 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-3 ml-1">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            Website URL
                        </label>
                        <input type="url" placeholder="https://yourcompany.com" className="w-full h-16 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-3 ml-1">
                            Phone Number (Optional)
                        </label>
                        <input type="tel" placeholder="+1 (555) 123-4567" className="w-full h-16 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                    </div>

                    <div className="pt-4">
                        <button className="w-full h-16 bg-black text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
