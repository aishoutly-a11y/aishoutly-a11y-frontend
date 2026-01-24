"use client";

import React, { useState } from "react";
import { ShootingStarIcon, CalenderIcon, PlusIcon, PaperPlaneIcon } from "@/icons";

export default function GenerateContent() {
    const [contentType, setContentType] = useState("post");
    const [generated, setGenerated] = useState(false);

    const handleGenerate = () => {
        setGenerated(true);
    };

    return (
        <div className="p-10 font-outfit max-w-[1400px] mx-auto">
            <div className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2 flex items-center gap-3">
                        Content Generator
                        <div className="px-3 py-1 bg-brand-50 rounded-full text-brand-600 text-[10px] font-black uppercase tracking-widest border border-brand-100">AI Beta</div>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">Transform a simple prompt into 365 days of social media magic.</p>
                </div>
                <div className="flex gap-4">
                    <button className="h-14 px-8 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-black rounded-2xl text-sm transition-all hover:bg-gray-100">Saved Drafts</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Input Panel */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="bg-white dark:bg-gray-800 rounded-[40px] p-8 border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-500" />

                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-6 uppercase tracking-widest text-[10px]">1. Select Content Type</label>
                        <div className="grid grid-cols-3 gap-3 mb-10">
                            {["post", "reel", "story"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setContentType(type)}
                                    className={`py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${contentType === type
                                        ? "bg-black text-white shadow-xl shadow-black/10"
                                        : "bg-gray-50 text-gray-400 border border-gray-100 hover:border-brand-200"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-widest text-[10px]">2. Your Vision</label>
                        <textarea
                            className="w-full h-48 bg-gray-50 border border-transparent rounded-[32px] p-8 text-sm text-gray-900 dark:text-white focus:bg-white focus:border-brand-500 transition-all outline-none resize-none mb-8 shadow-inner"
                            placeholder="e.g. Create a luxury real estate post for a new listing in Beverly Hills. Highlight the pool and the modern view..."
                        />

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Platform</label>
                                <select className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-5 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none cursor-pointer">
                                    <option>Instagram</option>
                                    <option>LinkedIn</option>
                                    <option>TikTok</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2.5 ml-1">Tone</label>
                                <select className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-5 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none cursor-pointer">
                                    <option>Professional</option>
                                    <option>Inspirational</option>
                                    <option>Minimalist</option>
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={handleGenerate}
                            className="w-full h-16 bg-black text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-2xl shadow-black/10 active:scale-[0.98]"
                        >
                            Generate Magic ✨
                        </button>
                    </div>
                </div>

                {/* Preview Panel */}
                <div className="lg:col-span-7">
                    <div className="bg-gray-100 dark:bg-gray-900/50 rounded-[50px] p-10 h-full min-h-[600px] flex items-center justify-center border border-dashed border-gray-200 dark:border-gray-800 relative">
                        {!generated ? (
                            <div className="text-center max-w-sm">
                                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-[30px] shadow-xl flex items-center justify-center mx-auto mb-8 animate-bounce">
                                    <ShootingStarIcon className="w-10 h-10 text-brand-500" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Magic is waiting</h3>
                                <p className="text-gray-400 font-medium">Fill in your details and watch AI create your brand assets instantly.</p>
                            </div>
                        ) : (
                            <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in duration-500">
                                {/* Preview Card */}
                                <div className="bg-white dark:bg-gray-800 rounded-[40px] overflow-hidden shadow-2xl shadow-black/10 border border-gray-100 dark:border-gray-700">
                                    <div className="p-6 flex items-center justify-between border-b border-gray-50 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg shadow-brand-500/20">S</div>
                                            <div>
                                                <p className="font-black text-gray-900 dark:text-white text-sm">Shoutly AI</p>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Instagram Post</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="aspect-square bg-gradient-to-br from-brand-400 to-purple-600 flex items-center justify-center p-12">
                                        <div className="text-white text-center">
                                            <p className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-70">New Collection</p>
                                            <h4 className="text-4xl font-black tracking-tight leading-[1] mb-6">Experience <br /> Luxury Living</h4>
                                            <button className="px-6 py-2.5 bg-white text-black font-black text-[10px] rounded-full uppercase tracking-widest shadow-xl">Explore Now</button>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-6">
                                            Step into a world of elegance. Our new Beverly Hills listing redefined modern luxury. 🏡✨
                                            <br /><br />
                                            #LuxuryRealEstate #BeverlyHills #ModernHome #ShoutlyAI
                                        </p>
                                        <div className="flex gap-2">
                                            <button className="flex-1 h-12 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                                Regenerate
                                            </button>
                                            <button className="flex-1 h-12 bg-black text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:bg-gray-800 transition-all">
                                                <CalenderIcon className="w-4 h-4" />
                                                Schedule
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-4">
                                    <button className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 text-gray-400 hover:text-brand-500 transition-all">
                                        <PaperPlaneIcon className="w-6 h-6" />
                                    </button>
                                    <button className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 text-gray-400 hover:text-brand-500 transition-all">
                                        <PlusIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
