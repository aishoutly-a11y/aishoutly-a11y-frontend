"use client";

import React from "react";
import Link from "next/link";

export default function LandingHero() {
    return (
        <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden">
            {/* Cloud-like background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white"></div>

            {/* Decorative floating elements mockup */}
            <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-blue-400/5 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-purple-400/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-100 px-4 py-2 rounded-full shadow-sm mb-10 transition-all hover:border-gray-200">
                        <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping"></span>
                        <span className="text-xs font-bold text-gray-900 tracking-tight">AI-POWERED CONTENT GENERATION</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-[-0.04em] leading-[1] mb-8">
                        Generate 365 Days of Content in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Minutes.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        Upload your logo → Enter one prompt → Get a full year of AI‑built marketing assets and reels for your brand.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link
                            href="/signup"
                            className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-800 transition-all shadow-2xl shadow-black/10 hover:-translate-y-0.5"
                        >
                            Start for Free
                        </Link>
                        <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-100 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                <svg className="w-3 h-3 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                            Watch Demo
                        </button>
                    </div>

                    {/* Stats/Proof floating - absolute positioned on desktop */}
                    <div className="hidden xl:block absolute -left-20 top-1/2 -translate-y-1/2">
                        <div className="bg-white/80 backdrop-blur-xl border border-gray-100 p-6 rounded-3xl shadow-2xl rotate-[-6deg]">
                            <div className="flex items-center justify-between mb-3 gap-12">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Plan Details</span>
                                <span className="bg-brand-500 text-[10px] font-bold text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Pro</span>
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-black text-gray-900 mb-1">Growth Plan</p>
                                <div className="w-32 bg-gray-100 h-1.5 rounded-full overflow-hidden mt-3">
                                    <div className="bg-brand-500 h-full w-[85%]"></div>
                                </div>
                                <p className="text-[10px] text-gray-400 mt-2 font-bold">850 / 1000 Credits</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden xl:block absolute -right-20 top-[40%]">
                        <div className="bg-white/80 backdrop-blur-xl border border-gray-100 p-5 rounded-3xl shadow-2xl rotate-[8deg]">
                            <div className="flex -space-x-3 mb-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100"></div>
                                ))}
                            </div>
                            <p className="text-[10px] font-black text-gray-900">Joined by 10k+ creators</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
