"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function BrandInfoPage() {
    const router = useRouter();

    return (
        <div className="w-full bg-white rounded-[40px] p-10 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Logo</h2>
            <p className="text-gray-400 text-sm mb-8">This will be overlaid on your social posts</p>

            <div className="w-full aspect-video bg-gray-50 border-2 border-dashed border-gray-200 rounded-[24px] flex flex-col items-center justify-center gap-4 group hover:bg-white hover:border-brand-500 transition-all cursor-pointer mb-12">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-brand-500">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                </div>
                <div className="text-center">
                    <p className="text-[13px] font-bold text-gray-900">Click to upload or drag and drop</p>
                    <p className="text-[11px] text-gray-400 mt-1 font-medium italic">PNG, JPG or SVG (max. 5MB)</p>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 ml-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        Brand Name
                    </label>
                    <input type="text" placeholder="brand name add...." className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-gray-900 text-sm font-medium focus:bg-white focus:border-brand-500 transition-all outline-none" />
                </div>

                <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 ml-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        Website URL
                    </label>
                    <input type="url" placeholder="https://yourcompany.com" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-gray-900 text-sm font-medium focus:bg-white focus:border-brand-500 transition-all outline-none" />
                </div>

                <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 ml-1">
                        Phone Number (Optional)
                    </label>
                    <input type="tel" placeholder="+1 (555) 123-4567" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-gray-900 text-sm font-medium focus:bg-white focus:border-brand-500 transition-all outline-none" />
                </div>

                <div className="pt-4">
                    <button
                        onClick={() => router.push("/onboarding/brand-tone")}
                        className="w-full h-14 bg-black text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
